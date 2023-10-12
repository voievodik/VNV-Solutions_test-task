import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { IntlProvider } from 'react-intl';

import Ukrainian from '../languages/ua-UA.json';
import English from '../languages/en-US.json';
import { LanguageType } from '../types/LanguageType';
import { LanguageContextType } from '../types/LanguageContextType';
import { uaLang, usLang } from '../utils/variables';

const LANGUAGE_KEY = 'lang';

export const LanguageContext = createContext<LanguageContextType>({
  locale: uaLang,
  selectedLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<string>(() => {
    const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
    return storedLanguage || navigator.language;
  });
  const [messages, setMessages] = useState<LanguageType>(locale === usLang ? English : Ukrainian);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, locale);
  }, [locale]);

  function selectedLang(newLocale: string) {
    setLocale(newLocale);

    if (newLocale === uaLang) {
      setMessages(Ukrainian);
    } else {
      setMessages(English);
    }
  }

  const value = {
    locale,
    selectedLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
