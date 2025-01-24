import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import ServicesSection from '../components/sections/ServicesSection';
import Footer from '../components/Footer';

const Services = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Helmet>
        <title>Services | TomexTech</title>
        <meta name="description" content="Explore our comprehensive range of digital transformation and IT services." />
      </Helmet>

      <ServicesSection />
      <Footer />
    </motion.div>
  );
};

export default Services;