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
      'Responsive Design',
      'Progressive Web Apps',
      'Performance Optimization',
      'SEO-friendly Architecture'
    ]
  },
  {
    key: 'systemMod',
    Icon: RefreshCcw,
    technologies: ['Cloud Migration', 'Microservices', 'Docker', 'Kubernetes'],
    features: [
      'Legacy System Analysis',
      'Incremental Migration',
      'Zero-downtime Deployment',
      'Performance Monitoring'
    ]
  },
  {
    key: 'consulting',
    Icon: Lightbulb,
    technologies: ['Agile', 'DevOps', 'ITIL', 'Lean'],
    features: [
      'Digital Strategy',
      'Technology Assessment',
      'Process Optimization',
      'Team Training'
    ]
  },
  {
    key: 'ai',
    Icon: Bot,
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Azure AI'],
    features: [
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics'
    ]
  },
  {
    key: 'cloud',
    Icon: Server,
    technologies: ['AWS', 'Azure', 'GCP', 'Hybrid Cloud'],
    features: [
      'Cloud Architecture',
      'Serverless Solutions',
      'Auto-scaling',
      'Cost Optimization'
    ]
  },
  {
    key: 'security',
    Icon: Shield,
    technologies: ['OAuth 2.0', 'SIEM', 'WAF', 'Zero Trust'],
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Management',
      'Security Training'
    ]
  },
  {
    key: 'data',
    Icon: Database,
    technologies: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'Redis'],
    features: [
      'Data Modeling',
      'ETL Pipelines',
      'Real-time Analytics',
      'Data Warehousing'
    ]
  },
  {
    key: 'hardware',
    Icon: Wrench,
    technologies: ['IoT', 'Edge Computing', 'Networking', 'Infrastructure'],
    features: [
      'Hardware Integration',
      'Network Optimization',
      'Infrastructure Planning',
      'Maintenance Services'
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
              features={service.features}
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