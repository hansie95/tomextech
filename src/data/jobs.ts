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
    postedDate: '2024-03-20',
    deadline: '2024-04-20',
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
    postedDate: '2024-03-15',
    deadline: '2024-04-15',
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    shortDescription: 'Create beautiful and intuitive user interfaces for our web and mobile applications.',
    description: 'We are seeking a talented UI/UX Designer to join our design team. You will be responsible for creating user-centered designs for our products, conducting user research, and collaborating with developers.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma and design tools',
      'Understanding of user-centered design principles',
      'Experience with design systems',
      'Knowledge of web accessibility guidelines',
    ],
    responsibilities: [
      'Create user-centered designs for web and mobile applications',
      'Conduct user research and usability testing',
      'Maintain and evolve our design system',
      'Collaborate with developers and stakeholders',
      'Create interactive prototypes',
    ],
    benefits: [
      'Competitive salary',
      'Full remote work',
      'Health insurance',
      'Design conference budget',
      'Flexible schedule',
    ],
    postedDate: '2024-03-10',
    deadline: '2024-04-10',
  }
];

export const departments = ['Engineering', 'Design', 'Product', 'Marketing', 'Sales'];
export const locations = ['Remote', 'Hybrid', 'On-site'];