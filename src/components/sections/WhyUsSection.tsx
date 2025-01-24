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
      { value: '250+', label: 'Digital Projects' },
      { value: '98%', label: 'Client Satisfaction' }
    ]
  },
  {
    key: 'complete',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    position: 'right',
    stats: [
      { value: '24/7', label: 'Support Available' },
      { value: '100%', label: 'Project Completion' }
    ]
  },
  {
    key: 'ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    position: 'left',
    stats: [
      { value: '50+', label: 'AI Solutions' },
      { value: '40%', label: 'Efficiency Increase' }
    ]
  },
  {
    key: 'maintenance',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80',
    position: 'right',
    stats: [
      { value: '99.9%', label: 'Uptime' },
      { value: '1hr', label: 'Response Time' }
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
              stats={feature.stats}
              learnMoreText={t('whyUs.learnMore')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;