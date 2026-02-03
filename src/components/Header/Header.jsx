import { useLanguage } from '../../context/LanguageContext';

function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        {/* Top line: Location | Name + Subtitle | Navigation */}
        <div className="header__top">
          <div className="header__location">
            {t.header.location}
          </div>

          <div className="header__identity">
            <h1 className="header__name">LINA CASTRO</h1>
            <p className="header__subtitle">
              {t.header.subtitle}
            </p>
          </div>

          <nav className="header__nav">
            <button 
              onClick={() => scrollToSection('projects')}
              className="header__nav-link"
            >
              {t.nav.projects}
            </button>
            <span className="header__nav-separator">·</span>
            <button 
              onClick={() => scrollToSection('about')}
              className="header__nav-link"
            >
              {t.nav.about}
            </button>
            <span className="header__nav-separator">·</span>
            <button 
              onClick={() => scrollToSection('contact')}
              className="header__nav-link"
            >
              {t.nav.contact}
            </button>
          </nav>
        </div>

        {/* Separator line */}
        <div className="header__separator"></div>

        {/* Bottom line: Edition info | Language toggle */}
        <div className="header__bottom">
          <div className="header__edition">
            {t.header.edition}
          </div>

          <button 
            onClick={toggleLanguage}
            className="header__language"
            aria-label="Toggle language"
          >
            <span className={language === 'en' ? 'active' : ''}>EN</span>
            <span className="header__language-separator">|</span>
            <span className={language === 'es' ? 'active' : ''}>ES</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;