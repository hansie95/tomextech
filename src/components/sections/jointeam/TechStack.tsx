import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Terminal, Database, Workflow } from 'lucide-react';

const TechStack = () => {
  const { t } = useTranslation();

  const stacks = [
    {
      title: 'frontend',
      icon: Code2,
      techs: ['React', 'TypeScript', 'Tailwind', 'Vite']
    },
    {
      title: 'backend',
      icon: Terminal,
      techs: ['Node.js', 'PHP', 'Express', 'Laravel']
    },
    {
      title: 'database',
      icon: Database,
      techs: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB']
    },
    {
      title: 'tools',
      icon: Workflow,
      techs: ['Git', 'Docker', 'Jira', 'Linux']
    }
  ];

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
    >
      <h3 className="text-xl font-bold mb-6">{t('joinTeam.techStack.title')}</h3>
      <div className="grid grid-cols-2 gap-6">
        {stacks.map(({ title, icon: Icon, techs }) => (
          <div key={title} className="space-y-4">
            <div className="flex items-center gap-2 text-tomex-teal">
              <Icon size={20} />
              <span className="font-semibold">{t(`joinTeam.techStack.${title}`)}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {techs.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-gray-700"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;