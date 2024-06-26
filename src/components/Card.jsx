/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function Card(props) {
  return (
    <motion.div
      className='card'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px 0px 0px 0px' }}
      transition={{
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      }}>
      <p className='card__year body-m'>{props.year}</p>

      <div className='card__content'>
        <p className='card__text'>{props.text}</p>
      </div>
    </motion.div>
  );
}
