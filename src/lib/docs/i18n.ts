import { DEFAULT_LOCALE, LOCALES } from '@/i18n/routing';
import type { I18nConfig } from 'fumadocs-core/i18n';

/**
 * Internationalization configuration for FumaDocs
 *
 * https://fumadocs.dev/docs/ui/internationalization
 */
export const docsI18nConfig: I18nConfig = {
  defaultLanguage: 'en', // 改为英文作为默认语言避免构建问题
  languages: LOCALES,
  hideLocale: 'default-locale',
};
