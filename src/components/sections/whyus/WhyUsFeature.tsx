import React from 'react';
import { motion } from 'framer-motion';

interface WhyUsFeatureProps {
  title: string;
  description: string;
  image: string;
  position: 'left' | 'right';
  stats: Array<{ value: string; label: string }>;
  learnMoreText: string;
}

const WhyUsFeature: React.FC<WhyUsFeatureProps> = ({
  title,
  description,
  image,
  position,
  stats,
  learnMoreText
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${position === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 perspective-1000"
      >
        <div className="relative group">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-tomex-teal/20 to-transparent rounded-2xl transform -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500" />
          
          {/* Main Image */}
          <motion.div
            whileHover={{ scale: 1.02, rotate: 2 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-[400px] object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            
            {/* Stats */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-around">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: position === 'left' ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 space-y-6"
      >
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center px-6 py-3 bg-tomex-teal text-white rounded-full hover:bg-tomex-teal/90 transition-colors"
        >
          {learnMoreText}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default WhyUsFeature;