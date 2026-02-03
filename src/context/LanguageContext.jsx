import { createContext, useContext, useState, useEffect } from 'react';

// Crear el Context
const LanguageContext = createContext();

// Textos en ambos idiomas
const translations = {
  es: {
    // Header
    header: {
      location: 'Málaga, España',
      subtitle: 'Web Developer • Construcción de soluciones digitales',
      edition: 'EDICIÓN DIGITAL • PORTFOLIO PROFESIONAL'
    },
    // Navigation
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      trajectory: 'Trayectoria',
      contact: 'Contacto'
    },
    //Hero
    hero: {
      headline: 'Construyo soluciones web a partir de necesidades reales.',
      description: 'Diseño y desarrollo productos digitales claros y funcionales, convirtiendo ideas en sistemas que realmente se puedan usar.',
      cta: 'Ver proyectos'
    },
  },
  en: {
    // Header
    header: {
      location: 'Málaga, Spain',
      subtitle: 'Web Developer • Building digital solutions',
      edition: 'DIGITAL EDITION • PROFESSIONAL PORTFOLIO'
    },
    // Navigation
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      trajectory: 'Journey',
      contact: 'Contact'
    },
    //Hero 
    hero: {
      headline: 'I build web solutions from real needs.',
      description: 'I design and develop clear and functional digital products, turning ideas into systems that people can actually use.',
      cta: 'View Projects'
    },
    // Iremos agregando más secciones en pasos siguientes
  }
};

// Provider component
export function LanguageProvider({ children }) {
  // Estado: idioma activo (por defecto español)
  const [language, setLanguage] = useState('es');

  // Al montar, revisar si hay idioma guardado en localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Función para cambiar idioma
  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  // Función helper para obtener textos
  const t = translations[language];

  // El value es lo que estará disponible para todos los componentes
  const value = {
    language,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook personalizado para usar el contexto fácilmente
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}