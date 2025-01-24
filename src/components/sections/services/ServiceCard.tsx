import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  delay: number;
  isSelected: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  technologies,
  features,
  delay,
  isSelected,
  onClick
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`
        bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer
        border-2 ${isSelected ? 'border-tomex-teal' : 'border-gray-100'}
      `}
    >
      <div className="w-12 h-12 bg-tomex-teal/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-tomex-teal" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* Technologies Preview */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.slice(0, 2).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
          >
            {tech}
          </span>
        ))}
        {technologies.length > 2 && (
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
            +{technologies.length - 2}
          </span>
        )}
      </div>

      {/* Learn More Button */}
      <button className="flex items-center text-tomex-teal hover:gap-2 transition-all group">
        <span className="text-sm font-medium">{t('services.learnMore')}</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

export default ServiceCard;