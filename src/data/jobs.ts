import { Job } from '../types/jobs';

export const jobs: Job[] = [
  {
    id: 'junior-fullstack-dev',
    title: 'Junior Fullstack Developer',
    department: 'Engineering',
    location: 'Hybrid',
    shortDescription: 'Join our dynamic team as a Junior Fullstack Developer. We value passion for learning and growth over existing knowledge.',
    description: 'We are looking for an enthusiastic Junior Fullstack Developer to join our engineering team. This is a fantastic opportunity for someone who is passionate about web development and eager to learn modern technologies. We believe in mentoring and supporting our junior developers to help them grow into exceptional engineers.',
    requirements: [
      'Basic understanding of React and TypeScript',
      'Familiarity with Next.js or eagerness to learn it',
      'Basic knowledge of Linux systems',
      'Understanding of PostgreSQL or similar databases',
      'Basic PHP knowledge',
      'Familiarity with version control (Git)',
      'Strong desire to learn and grow',
      'Passion for technology and problem-solving',
      'Good communication skills in English',
      'Ability to work in a team environment'
    ],
    responsibilities: [
      'Work on full-stack web applications using React, Next.js, and PHP',
      'Learn and apply best practices in web development',
      'Collaborate with senior developers on various projects',
      'Participate in code reviews to improve your skills',
      'Help maintain and improve existing applications',
      'Learn about database design and management with PostgreSQL',
      'Use Jira for project management and task tracking',
      'Write clean, maintainable code following team standards'
    ],
    benefits: [
      'Mentorship program with senior developers',
      'Regular learning and development sessions',
      'Modern tech stack and tools',
      'Flexible working hours',
      'Hybrid work environment',
      'Health insurance',
      'Regular team events and activities',
      'Personal development budget'
    ],
    postedDate: '2025-01-15',
    deadline: '2025-02-15',
  },
  {
    id: 'senior-frontend-dev',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Hybrid',
    shortDescription: 'Join our frontend team to build modern, responsive web applications using React and TypeScript.',
    description: 'We are looking for a Senior Frontend Developer to join our engineering team. You will be responsible for building and maintaining our web applications, mentoring junior developers, and contributing to our technical decisions.',
    requirements: [
      '5+ years of experience with modern JavaScript and React',
      'Strong TypeScript skills',
      'Experience with modern frontend tooling',
      'Knowledge of responsive design and web accessibility',
      'Experience with state management solutions',
    ],
    responsibilities: [
      'Develop new features for our web applications',
      'Mentor junior developers and conduct code reviews',
      'Contribute to technical architecture decisions',
      'Optimize application performance',
      'Collaborate with designers and backend developers',
    ],
    benefits: [
      'Competitive salary',
      'Remote work options',
      'Health insurance',
      'Professional development budget',
      'Flexible working hours',
    ],
    postedDate: '2025-01-15',
    deadline: '2025-02-15',
  },
];

export const departments = ['Engineering', 'Design'];
export const locations = ['Remote', 'Hybrid', 'On-site'];