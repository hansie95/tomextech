import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import WhyUsFeature from './whyus/WhyUsFeature';

const features = [
  {
    key: 'digital',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    position: 'left',
    stats: [
      { value: '250+', label: 'stats.digitalProjects' },
      { value: '98%', label: 'stats.clientSatisfaction' }
    ]
  },
  {
    key: 'complete',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    position: 'right',
    stats: [
      { value: '24/7', label: 'stats.supportAvailable' },
      { value: '100%', label: 'stats.projectCompletion' }
    ]
  },
  {
    key: 'ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    position: 'left',
    stats: [
      { value: '50+', label: 'stats.aiSolutions' },
      { value: '40%', label: 'stats.efficiencyIncrease' }
    ]
  },
  {
    key: 'maintenance',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80',
    position: 'right',
    stats: [
      { value: '99.9%', label: 'stats.uptime' },
      { value: '1hr', label: 'stats.responseTime' }
    ]
  }
];

const WhyUsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('whyUs.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature) => (
            <WhyUsFeature
              key={feature.key}
              title={t(`whyUs.${feature.key}.title`)}
              description={t(`whyUs.${feature.key}.description`)}
              image={feature.image}
              position={feature.position}
              stats={feature.stats.map(stat => ({
                value: stat.value,
                label: t(`whyUs.${stat.label}`)
              }))}
              learnMoreText={t('whyUs.learnMore')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;