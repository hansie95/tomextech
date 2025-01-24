import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import WhyUsSection from '../components/sections/WhyUsSection';
import Footer from '../components/Footer';

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Helmet>
        <title>Why Choose Us | TomexTech</title>
        <meta name="description" content="Discover why leading companies trust TomexTech with their digital transformation journey." />
      </Helmet>

      <WhyUsSection />
      <Footer />
    </motion.div>
  );
};

export default WhyUs;