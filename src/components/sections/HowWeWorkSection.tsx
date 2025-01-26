import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users, FileText, Code, TestTube2, Package, ArrowRight } from 'lucide-react';
import ProcessStep from './howwework/ProcessStep';
import ProcessDetails from './howwework/ProcessDetails';

const steps = [
  {
    key: 'meeting',
    Icon: Users,
    duration: '1-2 days',
    activities: [
      'Initial consultation',
      'Requirements gathering',
      'Project scope definition',
      'Budget discussion'
    ],
    deliverables: [
      'Project brief',
      'Initial timeline',
      'Budget estimate'
    ]
  },
  {
    key: 'proposal',
    Icon: FileText,
    duration: '3-5 days',
    activities: [
      'Technical analysis',
      'Solution architecture',
      'Resource planning',
      'Risk assessment'
    ],
    deliverables: [
      'Detailed proposal',
      'Technical specifications',
      'Project roadmap',
      'Cost breakdown'
    ]
  },
  {
    key: 'implementation',
    Icon: Code,
    duration: 'Project specific',
    activities: [
      'Agile development',
      'Regular updates',
      'Progress tracking',
      'Client feedback'
    ],
    deliverables: [
      'Sprint deliverables',
      'Progress reports',
      'Working prototypes',
      'Code documentation'
    ]
  },
  {
    key: 'testing',
    Icon: TestTube2,
    duration: '1-2 weeks',
    activities: [
      'Quality assurance',
      'Performance testing',
      'Security audits',
      'User acceptance testing'
    ],
    deliverables: [
      'Test reports',
      'Performance metrics',
      'Security assessment',
      'Bug fixes'
    ]
  },
  {
    key: 'delivery',
    Icon: Package,
    duration: '1 week',
    activities: [
      'Deployment preparation',
      'Final testing',
      'Knowledge transfer',
      'Client training'
    ],
    deliverables: [
      'Production deployment',
      'Documentation',
      'Training materials',
      'Support plan'
    ]
  }
];

const HowWeWorkSection = () => {
  const { t } = useTranslation();
  const [selectedStep, setSelectedStep] = React.useState(steps[0]);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleStepClick = (step: typeof steps[0]) => {
    setSelectedStep(step);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold mb-2">{t('howWeWork.title')}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('howWeWork.subtitle')}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tomex-teal/0 via-tomex-teal to-tomex-teal/0 hidden lg:block" />
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.key}
                icon={step.Icon}
                title={t(`howWeWork.steps.${step.key}.title`)}
                description={t(`howWeWork.steps.${step.key}.description`)}
                duration={step.duration}
                isLast={index === steps.length - 1}
                isSelected={selectedStep.key === step.key}
                onClick={() => handleStepClick(step)}
                delay={index * 0.1}
                position={index % 2 === 0 ? 'left' : 'right'}
                stepNumber={index + 1}
              />
            ))}
          </div>
        </div>

        {/* Process Details */}
        <div ref={detailsRef} className="relative">
          <ProcessDetails step={selectedStep} />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-tomex-teal text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-tomex-teal transition-colors text-sm"
          >
            {t('howWeWork.startProject')}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;