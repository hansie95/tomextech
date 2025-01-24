import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Search, MapPin, Building2, Calendar, ArrowRight, Rocket, Code2, Terminal, Database, Workflow, ChevronDown } from 'lucide-react';
import { jobs, departments, locations } from '../data/jobs';
import type { Job } from '../types/jobs';
import JobCard from '../components/jobs/JobCard';
import Benefits from '../components/sections/jointeam/Benefits';
import Footer from '../components/Footer';

const Jobs = () => {
  const { t } = useTranslation();
  const techStackRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState({
    department: '',
    location: '',
    search: '',
  });

  const scrollToTechStack = () => {
    techStackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesDepartment = !filters.department || job.department === filters.department;
      const matchesLocation = !filters.location || job.location === filters.location;
      const matchesSearch = !filters.search || 
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase());
      
      return matchesDepartment && matchesLocation && matchesSearch;
    });
  }, [filters]);

  const techStacks = [
    {
      title: 'Frontend',
      icon: Code2,
      techs: [
        { name: 'React', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' }
      ]
    },
    {
      title: 'Backend',
      icon: Terminal,
      techs: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'Go', level: 'Intermediate' },
        { name: 'Java', level: 'Advanced' }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      techs: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'Redis', level: 'Intermediate' },
        { name: 'Elasticsearch', level: 'Intermediate' }
      ]
    },
    {
      title: 'DevOps',
      icon: Workflow,
      techs: [
        { name: 'Docker', level: 'Advanced' },
        { name: 'Kubernetes', level: 'Advanced' },
        { name: 'AWS', level: 'Advanced' },
        { name: 'CI/CD', level: 'Advanced' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      <Helmet>
        <title>Career Opportunities | TomexTech</title>
        <meta name="description" content="Explore exciting career opportunities at TomexTech. Join our team and work on cutting-edge technology projects." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 bg-tomex-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Rocket className="w-10 h-10 text-tomex-teal" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Growing Team</h1>
            <p className="text-xl text-gray-300 mb-8">
              Be part of something extraordinary. We're looking for talented individuals who are passionate about technology and innovation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm mb-12">
              <div className="bg-gray-800/50 px-4 py-2 rounded-full">
                🌍 Remote-First Culture
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-full">
                💡 Innovative Projects
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-full">
                🚀 Career Growth
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-full">
                🤝 Collaborative Environment
              </div>
            </div>
            <motion.button
              onClick={scrollToTechStack}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="inline-flex items-center gap-2 bg-tomex-teal text-white px-8 py-3 rounded-full hover:bg-tomex-teal/90 transition-colors"
            >
              View Tech Stack
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your perfect role</p>
          </motion.div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tomex-teal focus:border-transparent"
                />
              </div>

              {/* Department Filter */}
              <select
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tomex-teal focus:border-transparent"
              >
                <option value="">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tomex-teal focus:border-transparent"
              >
                <option value="">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No positions found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={techStackRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600">
              We use cutting-edge technologies to build amazing products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStacks.map((stack, index) => (
              <motion.div
                key={stack.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-tomex-teal/10 rounded-xl flex items-center justify-center">
                    <stack.icon className="w-6 h-6 text-tomex-teal" />
                  </div>
                  <h3 className="text-xl font-bold">{stack.title}</h3>
                </div>
                <div className="space-y-4">
                  {stack.techs.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between">
                      <span className="text-gray-700">{tech.name}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        tech.level === 'Advanced' 
                          ? 'bg-tomex-teal/10 text-tomex-teal' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tech.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
            <p className="text-xl text-gray-600">Discover the benefits of being part of our team</p>
          </motion.div>
          <Benefits />
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Jobs;