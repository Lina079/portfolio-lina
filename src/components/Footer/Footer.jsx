import { useLanguage } from '../../context/LanguageContext';

function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__copyright">
            © {currentYear} Lina Castro
          </p>
          <p className="footer__tagline">
            {t.footer.tagline}
          </p>
          <p className="footer__location">
            {t.footer.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;