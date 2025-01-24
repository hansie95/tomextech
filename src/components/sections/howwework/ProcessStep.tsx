import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon, Clock } from 'lucide-react';

// Props for ProcessStep component
interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
  isLast: boolean;
  isSelected: boolean;
  onClick: () => void;
  delay: number;
  position: 'left' | 'right';
  stepNumber: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  icon: Icon,
  title,
  description,
  duration,
  isSelected,
  onClick,
  delay,
  position,
  stepNumber,
}) => {
  return (
    <div className={`relative ${position === 'right' ? 'lg:ml-auto' : ''} w-full lg:w-[calc(50%-2rem)]`}>
      <motion.div
        initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        onClick={onClick}
        className={`
          relative bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg
          transition-all duration-300 cursor-pointer
          hover:bg-gray-800/70 group
          ${isSelected ? 'ring-2 ring-tomex-teal shadow-lg shadow-tomex-teal/20' : ''}
        `}
      >
        {/* Step Number */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-tomex-teal rounded-full flex items-center justify-center text-white font-bold text-md">
          {stepNumber}
        </div>

        <div className="flex items-start gap-2">
          {/* Icon */}
          <div className="w-8 h-8 bg-tomex-teal/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-tomex-teal/20 transition-colors">
            <Icon className="w-4 h-4 text-tomex-teal" />
          </div>

          {/* Step Details */}
          <div>
            <h3 className="text-base font-bold mb-0.5 text-white">{title}</h3>
            <p className="text-gray-300 text-xs mb-1">{description}</p>
            <div className="flex items-center gap-1 text-xs text-tomex-teal">
              <Clock className="w-3 h-3" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessStep;