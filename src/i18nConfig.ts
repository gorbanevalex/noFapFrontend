import { localizationEn, localizationRu } from "./locales";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  ru: {
    translation: localizationRu,
  },
  en: {
    translation: localizationEn,
  },
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    debug: false,
    lng: "ru",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
