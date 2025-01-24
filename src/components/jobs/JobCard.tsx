import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Calendar, ArrowRight, Clock, Users, Briefcase } from 'lucide-react';
import type { Job } from '../../types/jobs';

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-tomex-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-tomex-teal" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-4">{job.shortDescription}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {job.department}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Posted {formatDate(job.postedDate)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Apply by {formatDate(job.deadline)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center gap-2 text-gray-500">
              <Users className="w-5 h-5" />
              <span className="text-sm">Multiple Positions</span>
            </div>
            <Link
              to={`/career/${job.id}`}
              className="inline-flex items-center justify-center px-6 py-2 bg-tomex-teal text-white rounded-full hover:bg-tomex-teal/90 transition-colors group whitespace-nowrap"
            >
              View Details
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Quick Requirements Preview */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {job.requirements.slice(0, 3).map((req, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {req.split(' ').slice(0, 3).join(' ')}...
              </span>
            ))}
            {job.requirements.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                +{job.requirements.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;