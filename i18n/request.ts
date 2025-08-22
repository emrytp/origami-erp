// /i18n/request.ts
import {getRequestConfig} from 'next-intl/server';

const locales = ['tr', 'en', 'ru'] as const;
type Locale = typeof locales[number];

function isLocale(x: unknown): x is Locale {
  // önce gerçekten string mi kontrol et, sonra includes
  return typeof x === 'string' && (locales as readonly string[]).includes(x);
}

export default getRequestConfig(async ({locale}) => {
  // locale undefined olsa bile güvenli değere düş
  const safeLocale: Locale = isLocale(locale) ? locale : 'tr';

  // import path'inde de hep safeLocale kullan
  const messages = (await import(`../messages/${safeLocale}.json`)).default;

  return {
    locale: safeLocale,
    messages
  };
});
