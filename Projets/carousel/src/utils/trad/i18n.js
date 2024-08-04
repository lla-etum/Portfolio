import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../../pages/Portfolio/en.json"
import frTranslations from "../../pages/Portfolio/fr.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: enTranslations
      },
      fr: {
        translations: frTranslations
      },
    },
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;