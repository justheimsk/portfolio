import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import langs from '../shared/langs';

export * from './classes/Stars';
export * from './classes/CustomCursor';

i18next.use(initReactI18next).init({
  resources: {
    ...langs
  },
  lng: navigator.language || "en-US"
});

export default i18next;
