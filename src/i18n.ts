import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    en: {
      translation: {
        banner: "Start To Create Your <ownmd>Own .MD</ownmd> file",
      },
    },
    az: {
      translation: {
        banner: "Öz <ownmd>Own .MD</ownmd> faylınızı yaradın",
      },
    },
  },
  lng: "en",
  interpolation: {
    escapeValue: true,
  },
});
