'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Cpu, Code, PenTool, Users } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Industrial Automation & PLC',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'Troubleshooting production & packaging lines',
        'PLC diagnostics & logic understanding (Siemens / Codesys)',
        'Siemens TIA Portal (basic to intermediate)',
        'Codesys / SoMachine (basic troubleshooting)',
        'HMI / SCADA basics (alarms, signals, commissioning)',
        'Sensors & I/O diagnostics (PNP/NPN, analog/digital)',
        'Drives & frequency inverters (basic parameters & fault finding)',
        'Field service workflows (fault isolation, root cause, reporting)',
      ],
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      category: 'Robotics & Motion Control',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'ABB robots (IRC5) — service & troubleshooting',
        'SafeMove basics (common faults & checks)',
        'TCP / tool data & workobject checks',
        'Collision / motion supervision troubleshooting',
        'Calibration & reference checks',
        'Vision offsets / picking limits (basic understanding)',
        'Mechanical alignment (fixtures, chucks, axes, turntables)',
      ],
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    },
    {
      category: 'Electrical & Installation',
      icon: <PenTool className="h-5 w-5" />,
      skills: [
        'Electrical installation & safety mindset (SS 436 40 00)',
        'Reading and interpreting electrical schematics',
        'Panel work: wiring, terminals, relays, contactors',
        'Fault finding: loose connections, cable breaks, intermittent faults',
        'Measurement & verification (multimeter, basic checks)',
        'Thermography (basic) & risk assessment thinking',
        'Industrial outlets / enclosures / cabling (workshop & site work)',
      ],
      color: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
    },
    {
      category: 'Tools, Documentation & IT',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'Windows troubleshooting & basic Linux',
        'Technical documentation & service reporting',
        'Structured checklists & handover notes',
        'Git (basic) for versioning configs/projects',
        'Basic web/UI (HTML/CSS) for personal projects',
      ],
      color: 'bg-purple-50 text-purple-600 border border-purple-200',
    },
    {
      category: 'Soft Skills (Field Service)',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'Structured troubleshooting under time pressure',
        'Clear customer communication on-site',
        'Ownership & responsibility for tasks',
        'Teamwork with technicians, engineers & suppliers',
        'Learning agility (fast onboarding on new equipment)',
        'Safety-first mindset and disciplined work habits',
        'Working independently in the field',
      ],
      color: 'bg-amber-50 text-amber-600 border border-amber-200',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                    >
                      <Badge className={cn('px-3 py-1.5 font-normal', section.color)}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
