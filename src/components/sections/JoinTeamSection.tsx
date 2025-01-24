import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Rocket } from 'lucide-react';
import TechStack from './jointeam/TechStack';
import Benefits from './jointeam/Benefits';
import ApplicationProcess from './jointeam/ApplicationProcess';

const JoinTeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('joinTeam.title')}</h2>
          <p className="text-xl text-gray-600">{t('joinTeam.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Position Details & Tech Stack */}
          <div className="space-y-8">
            {/* Position Card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-tomex-teal/10 text-tomex-teal rounded-full flex items-center justify-center">
                  <Rocket size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t('joinTeam.position.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('joinTeam.position.type')} • {t('joinTeam.position.location')}
                  </p>
                </div>
              </div>
            </motion.div>

            <TechStack />
          </div>

          {/* Right Column - Benefits & Apply */}
          <div className="space-y-8">
            <Benefits />
            <ApplicationProcess />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;