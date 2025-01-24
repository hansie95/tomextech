import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Globe, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    closeMenu();
  };

  const navItems = [
    { id: 'services', label: t('nav.services') },
    { id: 'why-us', label: t('nav.whyUs') },
    { id: 'career', label: t('nav.career'), path: '/career' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : location.pathname === '/' 
            ? 'bg-transparent' 
            : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <motion.img 
              src="/logo.png" 
              alt="TomexTech" 
              className="h-6"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-tomex-teal' 
                        : 'text-gray-600 hover:text-tomex-teal'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-medium text-gray-600 hover:text-tomex-teal transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-tomex-teal text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-tomex-teal/90 transition-colors flex items-center gap-2"
            >
              {t('nav.contact')}
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-600 hover:text-tomex-teal px-2 py-1 rounded-lg group-hover:bg-gray-50 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLanguage.flag}</span>
                <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                      lang.code === i18n.language
                        ? 'text-tomex-teal font-medium bg-tomex-teal/5'
                        : 'text-gray-600'
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                    {lang.code === i18n.language && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-1.5 h-1.5 rounded-full bg-tomex-teal ml-auto"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu-container md:hidden bg-white border-t"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="block py-2 text-gray-600 hover:text-tomex-teal"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left py-2 text-gray-600 hover:text-tomex-teal"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-tomex-teal text-white py-2 rounded-full font-medium hover:bg-tomex-teal/90 transition-colors"
              >
                {t('nav.contact')}
              </button>

              <div className="pt-4 border-t">
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center justify-center gap-1 py-2 rounded-lg border ${
                        i18n.language === lang.code
                          ? 'border-tomex-teal bg-tomex-teal/10 text-tomex-teal'
                          : 'border-gray-200'
                      }`}
                    >
                      <span>{lang.flag}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;