import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import antonioPhoto from '../../assets/images/Antonio-photo.png';
import krenarPhoto from '../../assets/images/Krenar-photo.png';
import julianaPhoto from '../../assets/images/JulianaDorado-photo.png';

function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      ...t.testimonials.antonio,
      photo: antonioPhoto,
      rotation: -2
    },
    {
      ...t.testimonials.krenar,
      photo: krenarPhoto,
      rotation: 2
    },
    {
      ...t.testimonials.juliana,
      photo: julianaPhoto,
      rotation: -1
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="testimonials">
      <div className="container">
        {/* Section Title */}
        <motion.h2 
          className="testimonials__title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          {t.testimonials.title}
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              className="testimonial-card"
              style={{ '--rotation': `${testimonial.rotation}deg` }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={fadeInUp}
              whileHover={{ 
                rotate: 0,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="testimonial-card__header">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name}
                  className="testimonial-card__photo"
                />
                <div className="testimonial-card__info">
                  <h3 className="testimonial-card__name">{testimonial.name}</h3>
                  <p className="testimonial-card__role">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="testimonial-card__quote">
                "{testimonial.quote}"
              </blockquote>
              <p className="testimonial-card__attribution">— {testimonial.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;