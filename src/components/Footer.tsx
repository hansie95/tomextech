import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-tomex-teal transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-tomex-teal transition-colors">
                  {t('footer.careers')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-tomex-teal transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-tomex-teal transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#services" className="hover:text-tomex-teal transition-colors">
                  {t('services.webDev.title')}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-tomex-teal transition-colors">
                  {t('services.systemMod.title')}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-tomex-teal transition-colors">
                  {t('services.consulting.title')}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-tomex-teal transition-colors">
                  {t('services.ai.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                <span>Budapest, Szava utca 4/b</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-tomex-teal flex-shrink-0" />
                <a href="mailto:contact@tomextech.com" className="hover:text-tomex-teal transition-colors">
                  {t('footer.contact.email')}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-tomex-teal flex-shrink-0" />
                <a href="tel:+36203314299" className="hover:text-tomex-teal transition-colors">
                  {t('footer.contact.phone')}
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Location</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                title="TomexTech Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.0447736575483!2d19.0893899!3d47.4897697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc68f96f0b3b%3A0x4c6b0a0b5b0b0a0!2sBudapest%2C%20Szava%20u.%204b%2C%201107%20Hungary!5e0!3m2!1sen!2sus!4v1647940475000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;