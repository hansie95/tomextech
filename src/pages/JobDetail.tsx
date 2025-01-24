import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { jobs } from '../data/jobs';
import { Helmet } from 'react-helmet-async';

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Position Not Found</h1>
          <p className="text-gray-600 mb-8">The position you're looking for doesn't exist or has been filled.</p>
          <Link
            to="/career"
            className="inline-flex items-center justify-center px-6 py-2 bg-tomex-teal text-white rounded-full hover:bg-tomex-teal/90 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Career
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      <Helmet>
        <title>{`${job.title} | Career Opportunities | TomexTech`}</title>
        <meta name="description" content={job.shortDescription} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/career')}
          className="inline-flex items-center text-gray-600 hover:text-tomex-teal mb-8 group"
        >
          <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Career
        </button>

        {/* Job Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              {job.department}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {job.location}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Posted {formatDate(job.postedDate)}
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-8">{job.description}</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-3 bg-tomex-teal text-white rounded-full text-lg font-semibold hover:bg-tomex-teal/90 transition-colors"
          >
            Apply Now
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Requirements */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Requirements</h2>
            <ul className="space-y-4">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Responsibilities</h2>
            <ul className="space-y-4">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-xl shadow-md p-8 md:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-6">Benefits</h2>
            <ul className="space-y-4">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tomex-teal flex-shrink-0 mt-1" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Application Deadline */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Application Deadline: <span className="font-semibold">{formatDate(job.deadline)}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetail;