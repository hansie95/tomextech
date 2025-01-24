import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon, Clock } from 'lucide-react';

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
          relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg
          transition-all duration-300 cursor-pointer
          hover:bg-gray-800/70 group border border-tomex-teal/20
          hover:border-tomex-teal/30
          ${isSelected ? 'ring-2 ring-tomex-teal shadow-lg shadow-tomex-teal/20 border-tomex-teal/40' : ''}
        `}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
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

          {/* Hologram Step Number */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-10 h-10 relative"
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-tomex-teal/20 rounded-lg blur-md animate-pulse" />
              
              {/* Hologram Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-tomex-teal/30 to-transparent backdrop-blur-sm rounded-lg border border-tomex-teal/30 overflow-hidden">
                {/* Scanning Line Effect */}
                <motion.div
                  animate={{
                    y: ['0%', '100%', '0%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-tomex-teal/40 to-transparent opacity-50"
                />

                {/* Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-white mix-blend-overlay">
                    {stepNumber}
                  </span>
                </div>

                {/* Holographic Lines */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute inset-0 border border-tomex-teal/20 rounded-lg"
                    style={{
                      transform: `scale(${1 + i * 0.1})`,
                    }}
                  />
                ))}
              </div>

              {/* Reflection */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-lg opacity-50" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessStep;