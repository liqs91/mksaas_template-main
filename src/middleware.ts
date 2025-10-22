import { betterFetch } from '@better-fetch/fetch';
import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_COOKIE_NAME,
  routing,
} from './i18n/routing';
import type { Session } from './lib/auth-types';
import { getBaseUrl } from './lib/urls/urls';
import {
  DEFAULT_LOGIN_REDIRECT,
  protectedRoutes,
  routesNotAllowedByLoggedInUsers,
} from './routes';

const intlMiddleware = createMiddleware(routing);

/**
 * 1. Next.js middleware
 * https://nextjs.org/docs/app/building-your-application/routing/middleware
 *
 * 2. Better Auth middleware
 * https://www.better-auth.com/docs/integrations/next#middleware
 *
 * In Next.js middleware, it's recommended to only check for the existence of a session cookie
 * to handle redirection. To avoid blocking requests by making API or database calls.
 */
export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  console.log('>> middleware start, pathname', nextUrl.pathname);

  // 检查是否已经有语言前缀
  const hasLanguagePrefix = LOCALES.some(locale => 
    nextUrl.pathname.startsWith(`/${locale}/`) || nextUrl.pathname === `/${locale}`
  );
  
  // 如果有语言前缀，直接应用国际化中间件
  if (hasLanguagePrefix) {
    console.log('<< middleware end, has language prefix, applying intlMiddleware');
    return intlMiddleware(req);
  }

  // 对于没有语言前缀的路径，重定向到默认语言版本（除了 API 路由和静态资源）
  if (!nextUrl.pathname.startsWith('/api/') && 
      !nextUrl.pathname.startsWith('/_next/') && 
      !nextUrl.pathname.startsWith('/favicon') &&
      !nextUrl.pathname.startsWith('/robots.txt') &&
      !nextUrl.pathname.startsWith('/sitemap.xml') &&
      !nextUrl.pathname.startsWith('/manifest.webmanifest')) {
    
    // 使用默认语言而不是硬编码中文
    const defaultPath = `/${DEFAULT_LOCALE}${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
    console.log('<< middleware end, redirecting to default language:', defaultPath);
    return NextResponse.redirect(new URL(defaultPath, nextUrl));
  }

  // 对于其他路径（API等），直接应用国际化中间件
  console.log('<< middleware end, applying intlMiddleware for API/static');
  return intlMiddleware(req);
}

/**
 * Get the pathname of the request (e.g. /zh/dashboard to /dashboard)
 */
function getPathnameWithoutLocale(pathname: string, locales: string[]): string {
  const localePattern = new RegExp(`^/(${locales.join('|')})/`);
  return pathname.replace(localePattern, '/');
}

/**
 * Next.js internationalized routing
 * specify the routes the middleware applies to
 *
 * https://next-intl.dev/docs/routing#base-path
 */
export const config = {
  // The `matcher` is relative to the `basePath`
  matcher: [
    // Match all pathnames except for
    // - if they start with `/api`, `/_next` or `/_vercel`
    // - if they contain a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
