import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      <Helmet>
        <title>Privacy Policy | TomexTech</title>
        <meta name="description" content="TomexTech's privacy policy - Learn how we protect and handle your data." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-tomex-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-tomex-teal" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">Last updated: March 25, 2024</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At TomexTech, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Personal Information</h3>
                    <p className="text-gray-600">Name, email address, phone number, and other contact details you provide when using our services or filling out contact forms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Usage Data</h3>
                    <p className="text-gray-600">Information about how you use our website, including IP address, browser type, pages visited, and time spent on each page.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Provide and Maintain Services</h3>
                    <p className="text-gray-600">To deliver the services you request and maintain our website's functionality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Communication</h3>
                    <p className="text-gray-600">To respond to your inquiries and keep you informed about our services.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4">
                <a href="mailto:privacy@tomextech.com" className="text-tomex-teal hover:underline">
                  privacy@tomextech.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default PrivacyPolicy;