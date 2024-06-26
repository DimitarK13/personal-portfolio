import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');
  const [formattedDateTime, setFormattedDateTime] = useState('');

  const capitalizeWords = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getData = async () => {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Strumica&units=metric&appid=dfc884ab11e96f832d54aa9a6136c037'
    );
    const data = await response.json();

    setCity(data.name);
    setCountry(data.sys.country);
    setWeather(data.weather[0].description);
    setTemp(Math.round(data.main.temp));

    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + data.timezone * 1000); // Convert timezone offset from seconds to milliseconds

    // Format date and time using `Intl.DateTimeFormat`
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    const dateFormatter = new Intl.DateTimeFormat('de-DE', options); // Use 'de-DE' for German date format
    const parts = dateFormatter.formatToParts(localTime);

    // Extract date and time parts
    let formattedDate = '';
    let formattedTime = '';
    for (const part of parts) {
      if (
        part.type === 'day' ||
        part.type === 'month' ||
        part.type === 'year'
      ) {
        formattedDate += part.value;
        if (part.type === 'day' || part.type === 'month') {
          formattedDate += '.';
        }
      } else if (part.type === 'hour' || part.type === 'minute') {
        if (formattedTime !== '') {
          formattedTime += ':';
        }
        formattedTime += part.value;
      }
    }

    setFormattedDateTime(`${formattedDate} - ${formattedTime}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div data-scroll-section>
      <div className='container container__padding-block'>
        <div className='contact'>
          <motion.header
            className='contact__header'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: 'anticipate',
            }}>
            <h1 className='contact__header-heading'>Let’s Build</h1>
            <p className='contact__header-text'>
              your website, webapp, portfolio, blogsite....
            </p>
          </motion.header>

          <div className='contact__content'>
            <ContactForm />

            <motion.div
              className='contact__content-info'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: 'anticipate',
              }}>
              <div className='contact__content-info__data'>
                <h3 className='body-s'>Location</h3>

                <div>
                  <p>
                    {city}, {country}
                  </p>
                  <p>{formattedDateTime}</p>
                  <p>
                    {temp}°C - {capitalizeWords(weather)}
                  </p>
                </div>
              </div>

              <div className='contact__content-info__data'>
                <h3 className='body-s'>Get in Touch</h3>

                <div>
                  <a href='https://www.linkedin.com/in/dimitar-kalapocev/'>
                    LinkedIn
                  </a>
                  <a href='https://www.instagram.com/dimitar_kalapocev/'>
                    Instagram
                  </a>
                  <a href='https://github.com/DimitarK13'>GitHub</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
