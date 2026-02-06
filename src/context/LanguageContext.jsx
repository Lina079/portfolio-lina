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
    },
    // About
    about: {
    title: 'Sobre mí',
    subtitle: 'Full-Stack Developer | Productos orientados a usuario',
    headline: 'Construyo soluciones web a partir de necesidades reales.',
    paragraph1: 'Mi carrera empezó lejos del código, estudié Medicina Veterinaria y pasé más de 10 años trabajando con clientes, negocio y objetivos medibles. Aprendí a escuchar, a traducir problemas en acciones y a sostener resultados en el tiempo.',
    paragraph2: 'Hoy soy Full-Stack Developer y uso esa base para crear productos digitales claros y sostenibles, especialmente en proyectos tipo SaaS como KeepClient y finanzas personales como Quanty. Me interesa colaborar con personas y equipos que valoren la autonomía, el criterio y la responsabilidad — y que quieran convertir una idea en un producto usable.',
    location: 'Ubicación: Málaga, España',
    work: 'Trabajo: Full-Stack Developer',
    focus: 'Enfoque: SaaS · Producto · UX',
    languages: 'Idiomas: ES · EN (B2)',
    videoTitle: 'Video destacado',
    videoCta: 'Ver video'
    },
    // Testimonials
    testimonials: {
    title: 'Lo que dicen de trabajar conmigo',
    antonio: {
    name: 'Antonio Cárdenas',
    role: 'CEO — Vivirse',
    quote: 'Lina fue parte del equipo fundacional de atención al cliente durante una etapa clave de crecimiento de la empresa. Profesional, responsable y constante.'
    },
    krenar: {
    name: 'Krenar Hodja',
    role: 'Warranted Social Worker',
    quote: 'Capacidad excepcional para comunicarse con claridad en contextos complejos, adaptando el enfoque según las necesidades del usuario.'
    },
    juliana: {
    name: 'Juliana Dorado',
    role: 'Psicóloga · Experiencia en Atención al Cliente',
    quote: 'Una de las profesionales más adaptables con las que he trabajado. Altamente productiva, constante y siempre actúa con responsabilidad y honestidad.'
  }
},
    // Contact
    contact: {
    headline: 'Hablemos',
    text: 'Trabajo con personas y equipos que valoran la claridad, la responsabilidad y el producto bien hecho. Si crees que puedo aportar a tu proyecto, conversemos.',
    title: 'Contáctame',
    email: 'linacastror079@gmail.com',
    emailLabel: 'Email',
    linkedin: 'linkedin.com/in/lina-castro079',
    linkedinLabel: 'LinkedIn',
    github: 'github.com/Lina079',
    githubLabel: 'GitHub',
    whatsapp: 'WhatsApp comercial',
    whatsappSubtext: '¿Tienes un proyecto en mente?',
    whatsappNumber: '+34607790464'
    },
    // Footer
    footer: {
    copyright: '© 2026 Lina Castro',
    tagline: 'Diseñado y desarrollado con claridad y propósito.',
    location: 'Málaga, España'
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
    }, 
    // About
    about: {
    title: 'About',
    subtitle: 'Full-Stack Developer | Product-minded solutions',
    headline: 'I build web solutions from real needs.',
    paragraph1: 'My career started far from code, I studied Veterinary Medicine and spent over 10 years working with clients, business objectives, and measurable results. I learned to listen, translate problems into actions, and sustain outcomes over time.',
    paragraph2: 'Today I\'m a Full-Stack Developer and I use that foundation to create clear and sustainable digital products, especially in SaaS projects like KeepClient and personal finance solutions like Quanty. I\'m interested in collaborating with people and teams who value autonomy, judgment, and accountability — and who want to turn an idea into a usable product.',
    location: 'Location: Málaga, Spain',
    work: 'Work: Full-Stack Developer',
    focus: 'Focus: SaaS · Product · UX',
    languages: 'Languages: ES · EN (B2)',
    videoTitle: 'Featured video',
    videoCta: 'Watch video'
  },
  // Testimonials
    testimonials: {
    title: 'What people say about working with me',
    antonio: {
    name: 'Antonio Cárdenas',
    role: 'CEO — Vivirse',
    quote: 'Lina was part of the founding customer service team during a key growth stage of the company. Professional, reliable, and consistent.'
    },
    krenar: {
    name: 'Krenar Hodja',
    role: 'Warranted Social Worker',
    quote: 'Exceptional ability to communicate clearly in complex contexts, adapting the approach to meet user needs.'
  },
  juliana: {
    name: 'Juliana Dorado',
    role: 'Psychologist · Customer Experience',
    quote: 'One of the most adaptable professionals I have ever met. Highly productive, consistent, and always acting with responsibility and honesty.'
  }
},
// Contact
contact: {
  headline: 'Let\'s talk',
  text: 'I work with people and teams who value clarity, accountability, and quality execution. If you think I can contribute to your project, let\'s have a conversation.',
  title: 'Contact me',
  email: 'linacastror079@gmail.com',
  emailLabel: 'Email',
  linkedin: 'linkedin.com/in/lina-castro079',
  linkedinLabel: 'LinkedIn',
  github: 'github.com/Lina079',
  githubLabel: 'GitHub',
  whatsapp: 'Commercial WhatsApp',
  whatsappSubtext: 'Have a project in mind?',
  whatsappNumber: '+34607790464',
},
// Footer
footer: {
  copyright: '© 2026 Lina Castro',
  tagline: 'Designed and developed with clarity and purpose.',
  location: 'Málaga, Spain'
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