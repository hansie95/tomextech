import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      <Helmet>
        <title>Terms of Service | TomexTech</title>
        <meta name="description" content="TomexTech's terms of service - Understanding our service agreement." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-tomex-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-tomex-teal" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">Last updated: March 25, 2024</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
            {/* Agreement */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using TomexTech's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Services</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Description</h3>
                    <p className="text-gray-600">We provide digital transformation, web development, and IT consulting services as described on our website.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Modifications</h3>
                    <p className="text-gray-600">We reserve the right to modify or discontinue our services at any time without notice.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                The content, features, and functionality of our services are owned by TomexTech and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Account Security</h3>
                    <p className="text-gray-600">You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Acceptable Use</h3>
                    <p className="text-gray-600">You agree not to use our services for any unlawful purpose or in violation of these terms.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                TomexTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4">
                <a href="mailto:legal@tomextech.com" className="text-tomex-teal hover:underline">
                  legal@tomextech.com
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

export default TermsOfService;