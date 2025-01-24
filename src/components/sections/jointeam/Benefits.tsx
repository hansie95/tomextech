import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Users2, BrainCircuit, Laptop, Coffee } from 'lucide-react';

const benefits = [
  { key: 'growth', Icon: GraduationCap },
  { key: 'team', Icon: Users2 },
  { key: 'mentorship', Icon: BrainCircuit },
  { key: 'tools', Icon: Laptop },
  { key: 'balance', Icon: Coffee }
];

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
    >
      <h3 className="text-xl font-bold mb-6">{t('joinTeam.benefits.title')}</h3>
      <div className="grid gap-6">
        {benefits.map(({ key, Icon }) => (
          <motion.div
            key={key}
            whileHover={{ x: 5 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 bg-tomex-teal/10 text-tomex-teal rounded-full flex items-center justify-center flex-shrink-0">
              <Icon size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                {t(`joinTeam.benefits.${key}.title`)}
              </h4>
              <p className="text-gray-600 text-sm">
                {t(`joinTeam.benefits.${key}.description`)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Benefits;