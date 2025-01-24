import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import HowWeWorkSection from '../components/sections/HowWeWorkSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <Helmet>
        <title>TomexTech - Digital Transformation Solutions</title>
        <meta 
          name="description" 
          content="Your trusted partner in digital transformation and IT excellence. We provide cutting-edge web development, system modernization, and AI integration services." 
        />
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <HowWeWorkSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Home;