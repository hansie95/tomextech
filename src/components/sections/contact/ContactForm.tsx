import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <form className="bg-white p-8 rounded-xl shadow-lg">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.name')}
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tomex-teal focus:border-transparent"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tomex-teal focus:border-transparent"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tomex-teal focus:border-transparent"
          required
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-tomex-teal text-white py-3 rounded-full font-semibold hover:bg-tomex-teal/90 transition-colors flex items-center justify-center gap-2"
      >
        {t('contact.form.submit')}
        <MessageSquare className="w-5 h-5" />
      </motion.button>
    </form>
  );
};

export default ContactForm;