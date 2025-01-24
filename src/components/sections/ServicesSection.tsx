import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, RefreshCcw, Lightbulb, Bot, Wrench, Server, Shield, Database } from 'lucide-react';
import ServiceCard from './services/ServiceCard';
import ServiceShowcase from './services/ServiceShowcase';

const services = [
  {
    key: 'webDev',
    Icon: Code2,
    technologies: ['React', 'Vue.js', 'Angular', 'Node.js'],
    features: [
      'responsiveDesign',
      'progressiveWebApps',
      'performanceOptimization',
      'seoArchitecture'
    ]
  },
  {
    key: 'systemMod',
    Icon: RefreshCcw,
    technologies: ['Cloud Migration', 'Microservices', 'Docker', 'Kubernetes'],
    features: [
      'legacyAnalysis',
      'incrementalMigration',
      'zeroDowntime',
      'performanceMonitoring'
    ]
  },
  {
    key: 'consulting',
    Icon: Lightbulb,
    technologies: ['Agile', 'DevOps', 'ITIL', 'Lean'],
    features: [
      'digitalStrategy',
      'techAssessment',
      'processOptimization',
      'teamTraining'
    ]
  },
  {
    key: 'ai',
    Icon: Bot,
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Azure AI'],
    features: [
      'machineLearning',
      'nlp',
      'computerVision',
      'predictiveAnalytics'
    ]
  },
  {
    key: 'cloud',
    Icon: Server,
    technologies: ['AWS', 'Azure', 'GCP', 'Hybrid Cloud'],
    features: [
      'cloudArchitecture',
      'serverlessSolutions',
      'autoScaling',
      'costOptimization'
    ]
  },
  {
    key: 'security',
    Icon: Shield,
    technologies: ['OAuth 2.0', 'SIEM', 'WAF', 'Zero Trust'],
    features: [
      'securityAudits',
      'penetrationTesting',
      'complianceManagement',
      'securityTraining'
    ]
  },
  {
    key: 'data',
    Icon: Database,
    technologies: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'Redis'],
    features: [
      'dataModeling',
      'etlPipelines',
      'realTimeAnalytics',
      'dataWarehousing'
    ]
  },
  {
    key: 'hardware',
    Icon: Wrench,
    technologies: ['IoT', 'Edge Computing', 'Networking', 'Infrastructure'],
    features: [
      'hardwareIntegration',
      'networkOptimization',
      'infrastructurePlanning',
      'maintenanceServices'
    ]
  }
];

const ServicesSection = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = React.useState(services[0]);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Service Showcase */}
        <ServiceShowcase service={selectedService} />

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.key}
              icon={service.Icon}
              title={t(`services.${service.key}.title`)}
              description={t(`services.${service.key}.description`)}
              technologies={service.technologies}
              features={service.features.map(feature => t(`services.features.${feature}`))}
              delay={index * 0.1}
              isSelected={selectedService.key === service.key}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;