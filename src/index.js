import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      "pt-BR": {
        translation: {
          "Welcome to React": `
Oloko meo
{{dueAt, toDatetime, datetime}}
{{amount, currency(BRL)}}
          `,
        }
      }
    },
    lng: "pt-BR",
    fallbackLng: "pt-BR",
  });

i18n.services.formatter.add('toDatetime', (value) => {
  return new Date(value);
});

function App() {
  const { t } = useTranslation();

  const metadata = {
    dueAt: (new Date()).toISOString(), amount: '2.0', formatParams: {
      dueAt: { month: 'short', day: 'numeric' }
    }
  }

  return <h2>{t('Welcome to React', metadata)}</h2>;
}

// append app to dom
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);