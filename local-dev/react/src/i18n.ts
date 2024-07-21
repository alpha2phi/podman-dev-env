import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";


const location = window.location;
const baseUrl = location.protocol + "//" + location.host; 

console.log(baseUrl);
  

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${baseUrl}/i18n/{{lng}}.json`,
    },
  });

export default i18n;
