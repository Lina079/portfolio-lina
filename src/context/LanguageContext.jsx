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
    // Projects
    projects: {
      title: 'PROYECTOS DESTACADOS',
      subtitle: 'Soluciones web que he diseñado y desarrollado a partir de ideas reales.',
      cta: 'Ver proyecto',
      keepclient: {
        name: 'KeepClient',
        tagline: 'Gestión y retención de clientes para negocios de servicios',
        description: 'Plataforma SaaS diseñada para ayudar a negocios de servicios a centralizar la información de sus clientes y mejorar la retención, transformando datos diarios en información accionable para tomar mejores decisiones.',
        demo: '(en construcción — disponible pronto)',
        tech: ['React', 'Node.js','Express', 'MongoDB', 'JWT']
      },
      quanty: {
        name: 'Quanty',
        tagline: 'Organización financiera personal y control multi-moneda',
        description: 'Aplicación web diseñada para ayudar a los usuarios a comprender y organizar sus finanzas personales, ofreciendo una visualización clara de ingresos, gastos y balances, con soporte para múltiples monedas. Quanty prioriza la simplicidad y la claridad, transformando datos financieros en una experiencia visual intuitiva que facilita una mejor toma de decisiones en el día a día.',
        demo: 'https://www.myquanty.com',
        tech: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Recharts']
      },
      postland: {
        name: 'PostLand',
        tagline: 'Plataforma web interactiva para compartir contenido',
        description: 'Aplicación web que permite a los usuarios crear perfiles, publicar contenido visual e interactuar mediante likes y gestión de publicaciones, conectada a una API para persistencia y manejo de datos. PostLand pone el foco en la interacción del usuario y la arquitectura cliente-servidor, con una estructura modular que facilita el mantenimiento y la escalabilidad.',
        demo: 'https://www.postland.tamarindo.net',
        tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB']
      },
      depatria: {
        name: 'De Patria a Patria',
        tagline: 'Página web cultural y narrativa',
        description: 'Página web responsiva que presenta historias culturales mediante una maquetación clara, accesible y visualmente cuidada, aplicando buenas prácticas de frontend.',
        demo: 'https://lina079.github.io/Cultural_Stories_WebPage_HTML_CSS/',
        tech: ['HTML5', 'CSS3', 'JavaScript','Git']
      }
    }
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
   // Projects
    projects: {
      title: 'FEATURED PROJECTS',
      subtitle: 'Web solutions I have designed and developed from real ideas.',
      cta: 'View project',
      keepclient: {
        name: 'KeepClient',
        tagline: 'Client management and retention for service-based businesses',
        description: 'SaaS platform designed to help service-based businesses centralize client information and improve retention, turning daily data into actionable insights for better decision-making.',
        demo: '(under development — coming soon)',
        tech: ['React', 'Node.js', 'MongoDB', 'Express','JWT']
      },
      quanty: {
        name: 'Quanty',
        tagline: 'Personal finance organization and multi-currency tracking',
        description: 'Web application designed to help users understand and organize their personal finances, providing a clear overview of income, expenses, and balances, including multi-currency support. Quanty focuses on simplicity and clarity, transforming financial data into an intuitive visual experience that supports better financial awareness and everyday decision-making.',
        demo: 'https://www.myquanty.com',
        tech: ['React', 'javaScript', 'Node.js', 'MongoDB', 'Recharts']
      },
      postland: {
        name: 'PostLand',
        tagline: 'Interactive web platform for content sharing',
        description: 'Web application that allows users to create profiles, publish visual content, and interact through likes and post management, connected to an API for data persistence and handling. PostLand focuses on user interaction and client–server architecture, using a modular structure that supports maintainability and scalability.',
        demo: 'https://www.postland.tamarindo.net',
        tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB']
      },
      depatria: {
        name: 'De Patria a Patria',
        tagline: 'Cultural and narrative web page',
        description: 'Responsive web page that presents cultural stories through a clear, accessible, and visually structured layout, applying solid frontend practices.',
        demo: 'https://lina079.github.io/Cultural_Stories_WebPage_HTML_CSS/',
        tech: ['HTML5', 'CSS3', 'JavaScript','Git']
      }
    } 
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