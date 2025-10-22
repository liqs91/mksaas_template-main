import type { Locale } from 'next-intl';
import { create } from 'zustand';

interface LocaleState {
  currentLocale: Locale;
  setCurrentLocale: (locale: Locale) => void;
}

/**
 * Zustand create function
 * create lets you create a React Hook with API utilities attached.
 *
 * https://zustand.docs.pmnd.rs/apis/create
 */
export const useLocaleStore = create<LocaleState>((set) => ({
  currentLocale: 'en' as Locale, // 设置默认语言为英文
  setCurrentLocale: (locale) =>
    set((state) => ({
      currentLocale: locale,
    })),
}));
