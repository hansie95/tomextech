import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRightCircle } from 'lucide-react';

const ApplicationProcess = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
    >
      <h3 className="text-xl font-bold mb-6">{t('joinTeam.apply.steps.title')}</h3>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center gap-4">
            <div className="w-8 h-8 bg-tomex-teal/10 text-tomex-teal rounded-full flex items-center justify-center font-bold">
              {step}
            </div>
            <p className="text-gray-700">{t(`joinTeam.apply.steps.${step}`)}</p>
          </div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-8 bg-tomex-teal text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-tomex-teal/90 transition-colors"
      >
        {t('joinTeam.apply.button')}
        <ArrowRightCircle size={20} />
      </motion.button>
    </motion.div>
  );
};

export default ApplicationProcess;