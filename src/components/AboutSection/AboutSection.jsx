import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import linaPhoto from '../../assets/images/lina-photo.png';
import videoThumbnail from '../../assets/images/video-thumbnail.png';

function AboutSection() {
  const { t } = useLanguage();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="about__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="about__title">{t.about.title}</h2>
          <p className="about__subtitle">{t.about.subtitle}</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="about__content">
          {/* Text Column */}
          <motion.div 
            className="about__text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="about__headline">{t.about.headline}</h3>
            <p className="about__paragraph">{t.about.paragraph1}</p>
            <p className="about__paragraph">{t.about.paragraph2}</p>

            {/* Additional Info */}
            <ul className="about__info">
              <li>{t.about.location}</li>
              <li>{t.about.work}</li>
              <li>{t.about.focus}</li>
              <li>{t.about.languages}</li>
            </ul>
          </motion.div>

          {/* Photo Column */}
          <motion.div 
            className="about__photo-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
          >
            <img 
              src={linaPhoto} 
              alt="Lina Castro - Full-Stack Developer"
              className="about__photo"
            />
            <p className="about__photo-caption">
              Lina Castro — <em>Product-minded Full-Stack Developer</em>
            </p>
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div 
          className="about__video"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={fadeInUp}
        >
          <h4 className="about__video-title">{t.about.videoTitle}</h4>
          <div className="about__video-wrapper">
            <img 
              src={videoThumbnail} 
              alt="Video placeholder"
              className="about__video-thumbnail"
            />
            <button className="about__video-cta">
              {t.about.videoCta}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;