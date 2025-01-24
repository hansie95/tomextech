import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DivideIcon as LucideIcon, Check } from 'lucide-react';

interface ServiceShowcaseProps {
  service: {
    key: string;
    Icon: LucideIcon;
    technologies: string[];
    features: string[];
  };
}

const ServiceShowcase: React.FC<ServiceShowcaseProps> = ({ service }) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Service Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-tomex-teal/10 rounded-xl flex items-center justify-center">
                <service.Icon className="w-8 h-8 text-tomex-teal" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-tomex-teal font-medium">
                  {t('services.enterpriseSolutions')}
                </p>
              </div>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              {t(`services.${service.key}.description`)}
            </p>
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-tomex-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-tomex-teal" />
                  </div>
                  <span className="text-gray-700">{t(`services.features.${feature}`)}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('services.technologiesAndTools')}</h4>
            <div className="grid grid-cols-2 gap-4">
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-tomex-teal/30 hover:shadow-md transition-all"
                >
                  <span className="font-medium text-gray-800">{tech}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-tomex-teal text-white py-3 rounded-full font-semibold hover:bg-tomex-teal/90 transition-colors"
              >
                {t('services.requestConsultation')}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceShowcase;