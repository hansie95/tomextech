import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">{t('contact.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact form will go here */}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;