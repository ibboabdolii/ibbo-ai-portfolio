const questions = {
  Me: 'Who are you? Tell me about your background as a Service Engineer and Automation Technician.',
  Projects:
    'Tell me about your field projects in industrial automation, ABB robots, PLC/I/O, machine vision, and electrical service.',
  Skills:
    'What are your main technical skills and tools?',
  Troubleshooting:
    'How do you troubleshoot production stops and technical faults step by step?',
  Contact:
    'How can I contact you, and what type of automation or service projects are you interested in?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: UserSearch },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Troubleshooting', color: '#B95F9D', icon: Wrench },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
] as const;

const specialQuestions = [
  'How do you troubleshoot a production stop step by step?',
  'Can I see your resume?',
  'What industrial projects are you most proud of?',
  'What are your strongest technical skills?',
  'How can I reach you?',
];

const questionsByCategory = [
  {
    id: 'about',
    name: 'About Ibbo',
    icon: UserSearch,
    questions: [
      'Who are you?',
      'What is your current role?',
      'What kind of work do you do as a Service Engineer?',
      'What motivates you in industrial automation?',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: BriefcaseIcon,
    questions: [
      'Can I see your resume?',
      'What makes you valuable on site?',
      'Where are you working now?',
      'Why should I hire you?',
      "What's your professional background in automation and service?",
    ],
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: CodeIcon,
    questions: [
      'Tell me about your work with ABB robots.',
      'Tell me about your machine vision experience.',
      'What have you done with PLC and I/O troubleshooting?',
      'Can you explain one technical problem you solved in production?',
    ],
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: GraduationCapIcon,
    questions: [
      'What are your strongest technical skills?',
      'Which tools and systems do you work with?',
      'Do you have experience with ABB IRC5 and RobotStudio?',
      'Do you work with Cognex VisionPro and EA Vision Studio?',
    ],
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    icon: Wrench,
    questions: [
      'How do you troubleshoot a production stop step by step?',
      'How do you find the real root cause of a technical fault?',
      'How do you check PLC signals, I/O, sensors, and actuators?',
      'How do you handle ABB robot, vision system, or communication alarms?',
    ],
  },
  {
    id: 'contact',
    name: 'Contact & Future',
    icon: MailIcon,
    questions: [
      'How can I reach you?',
      "What kind of project would make you say 'yes' immediately?",
      'Where are you located?',
      'Are you open to automation and service engineering opportunities?',
    ],
  },
];