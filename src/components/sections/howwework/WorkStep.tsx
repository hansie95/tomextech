import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface WorkStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast: boolean;
  delay: number;
}

const WorkStep: React.FC<WorkStepProps> = ({ icon: Icon, title, description, isLast, delay }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative"
    >
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-tomex-teal/20 -translate-y-1/2 z-0" />
      )}
      <div className="bg-white p-6 rounded-xl shadow-lg relative z-10">
        <div className="w-12 h-12 bg-tomex-teal/10 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Icon className="w-6 h-6 text-tomex-teal" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-center text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default WorkStep;