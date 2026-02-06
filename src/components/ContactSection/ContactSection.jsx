import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

function ContactSection() {
  const { t } = useLanguage();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const handleWhatsApp = () => {
    const phoneNumber = t.contact.whatsappNumber.replace(/\+/g, '');
    const message = encodeURIComponent('Hola Lina, me gustaría hablar sobre un proyecto.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Headline */}
        <motion.div
          className="contact__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="contact__headline">{t.contact.headline}</h2>
          <p className="contact__text">{t.contact.text}</p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          className="contact__links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeInUp}
        >
          <h3 className="contact__title">{t.contact.title}</h3>

          {/* Email */}
          <a 
            href={`mailto:${t.contact.email}`}
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiMail className="contact__icon" />
            <div>
              <span className="contact__label">{t.contact.emailLabel}</span>
              <span className="contact__value">{t.contact.email}</span>
            </div>
          </a>

          {/* LinkedIn */}
          <a 
            href={`https://${t.contact.linkedin}`}
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact__icon" />
            <div>
              <span className="contact__label">{t.contact.linkedinLabel}</span>
              <span className="contact__value">{t.contact.linkedin}</span>
            </div>
          </a>

          {/* GitHub */}
          <a 
            href={`https://${t.contact.github}`}
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact__icon" />
            <div>
              <span className="contact__label">{t.contact.githubLabel}</span>
              <span className="contact__value">{t.contact.github}</span>
            </div>
          </a>

          {/* WhatsApp - Destacado */}
          <button 
            onClick={handleWhatsApp}
            className="contact__link"
          >
            <FaWhatsapp className="contact__icon" />
            <div>
              <span className="contact__label">{t.contact.whatsapp}</span>
              <span className="contact__value">{t.contact.whatsappSubtext}</span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;