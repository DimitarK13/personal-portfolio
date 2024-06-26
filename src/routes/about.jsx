import portrait from '../assets/dimitar-kalapocev.jpg';
import Card from '../components/Card';
import OtherProject from '../components/OtherProject';
import { motion } from 'framer-motion';

export default function About() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div data-scroll-section>
      <div className='container container__padding-block'>
        <motion.h1
          className='about__heading'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: 'anticipate',
          }}>
          Creative Problem Solver Embracing Innovation
        </motion.h1>

        <motion.section
          className='side-by-side'
          variants={container}
          initial='hidden'
          animate='visible'>
          <motion.div className='side-by-side__content' variants={item}>
            <p className='side-by-side__paragraph'>
              Coming from Strumica in North Macedonia, my journey is all about
              learning and discovering new things. I love solving problems and
              always enjoy facing challenges to learn more. Stepping out of my
              comfort zone is something I do often to improve myself.
            </p>
            <p className='side-by-side__paragraph'>
              Apart from coding, I find joy in psychology books, chess, and
              cheering for Barcelona football club. I also cherish participating
              in Erasmus+ projects, fostering collaboration and cultural
              exchange.
            </p>
          </motion.div>

          <motion.img
            src={portrait}
            alt='Web developer with a microphone, black t-shirt with a white and blue background'
            className='side-by-side__img'
            variants={item}
          />
        </motion.section>

        <section className='career-path'>
          <Card
            text='Began my journey in web development, starting with HTML and CSS. Focused intensely on mastering the fundamental aspects of coding and refining attention to detail.'
            year='2020'
          />
          <Card
            text='Embraced JavaScript, delved into React, and ventured into UX/UI design, recognizing their pivotal roles in shaping captivating user experiences.'
            year='2021'
          />
          <Card
            text='Explored backend development using Node.js and PHP but reverted to frontend work, amplifying expertise in JavaScript and UX/UI design for enhanced frontend experiences.'
            year='2022'
          />
          <Card
            text='Shifted to tutoring at a local academy, mentoring aspiring developers while also working as a web developer, applying accrued expertise in practical scenarios.'
            year='2023'
          />
        </section>

        <section className='more-projects'>
          <motion.div
            className='more-projects__header'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px 0px 0px 0px' }}
            transition={{
              duration: 1,
              ease: 'anticipate',
            }}>
            <h2 className='more-projects__header-heading'>Besides my career</h2>
            <p className='more-projects__header-text'>
              Engaging in a spectrum of activities and projects has been
              instrumental in my growth, nurturing both my development skills
              and personal journey.
            </p>
          </motion.div>

          <div className='more-projects__projects'>
            <motion.h3
              className='more-projects__projects-heading'
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px 0px 0px 0px' }}
              transition={{
                duration: 1,
                ease: 'anticipate',
              }}>
              Erasmus+ Projects:
            </motion.h3>

            <OtherProject
              heading='Walking towards 2030 - Malaga, Spain'
              text="Through diverse activities and discussions, we delved into a wealth of knowledge about our planet's pressing challenges. Exploring the intricacies of the 17 Sustainable Development Goals, we realized the urgency for collective action to achieve them by 2030. Where I also met my gorgeous girlfriend."
            />
            <OtherProject
              heading="Inclusion Methods for Daily Youth Worker's Job - Craiova, Romania"
              text='During this training course, our primary focus was on promoting inclusion in daily life. We explored new methods and practical exercises geared toward improving everyday communication and inclusion.'
            />
          </div>
        </section>
      </div>
    </div>
  );
}
