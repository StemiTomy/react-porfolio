import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Obtiene el idioma preferido del navegador del usuario
  const browserLanguage = navigator.language || navigator.userLanguage;

  // Verifica si el idioma es español o inglés, de lo contrario usa inglés
  // es-ES, por eso usamos .slice(0,2)
  const defaultLanguage = (browserLanguage.includes('es') || browserLanguage.includes('en')) 
                          ? browserLanguage.slice(0, 2) 
                          : 'en';

  const [language, setLanguage] = useState(defaultLanguage);
  const [translations, setTranslations] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/local/${language}/translation.json`)
      .then(response => response.json())
      .then(data => {
        // Simular un retraso mínimo
        setTimeout(() => {
          setTranslations(data);
          setLoading(false);
        }, 150); // Ajusta este tiempo según sea necesario
      });
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, isLoading }}>
      {!isLoading ? children : null}
    </LanguageContext.Provider>
  );
};
