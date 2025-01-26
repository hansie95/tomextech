import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ClipboardList } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProcessDetailsProps {
  step: {
    key: string;
    Icon: React.ComponentType<{ className?: string }>;
    activities: string[];
    deliverables: string[];
  };
}

const ProcessDetails: React.FC<ProcessDetailsProps> = ({ step }) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Activities */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ClipboardList className="w-5 h-5 text-tomex-teal" />
              <h4 className="text-lg font-semibold text-white">{t('howWeWork.keyActivities')}</h4>
            </div>
            <div className="space-y-2">
              {step.activities.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-tomex-teal flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    {t(`howWeWork.steps.${step.key}.activities.${index}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <step.Icon className="w-5 h-5 text-tomex-teal" />
              <h4 className="text-lg font-semibold text-white">{t('howWeWork.deliverables')}</h4>
            </div>
            <div className="space-y-2">
              {step.deliverables.map((deliverable, index) => (
                <motion.div
                  key={deliverable}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-tomex-teal flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    {t(`howWeWork.steps.${step.key}.deliverables.${index}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProcessDetails;