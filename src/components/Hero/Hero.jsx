import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import heroImage from '../../assets/images/Hero-image.png';

function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const lineGrow = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 }
  };

  // Floating effect for image
  const float = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        {/* Top decorative line */}
        <motion.div 
          className="hero__line"
          variants={lineGrow}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Main headline */}
        <motion.h1 
          className="hero__headline"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.hero.headline}
        </motion.h1>

        {/* Mockup Image with floating effect */}
        <motion.div
          className="hero__image-wrapper"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img 
            src={heroImage} 
            alt="KeepClient and Quanty projects showcase"
            className="hero__image"
            animate={float}
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            className="hero__cta"
            onClick={() => scrollToSection('projects')}
          >
            {t.hero.cta}
          </button>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="hero__description"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {t.hero.description}
        </motion.p>

        {/* Bottom decorative line */}
        <motion.div 
          className="hero__line"
          variants={lineGrow}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}

export default Hero;