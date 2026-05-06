'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  BriefcaseIcon,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleEllipsis,
  CodeIcon,
  GraduationCapIcon,
  Layers,
  MailIcon,
  Sparkles,
  UserRoundSearch,
  UserSearch,
  Wrench,
} from 'lucide-react';
import { useState, type ElementType } from 'react';
import { Drawer } from 'vaul';

interface HelperBoostProps {
  submitQuery?: (query: string) => void;
  setInput?: (value: string) => void;
  hasReachedLimit?: boolean;
}

const questions = {
  Me: 'Who are you? Tell me about your background as a Service Engineer and Automation Technician.',
  Projects:
    'Tell me about your field projects in industrial automation, ABB robots, PLC/I/O, machine vision, and electrical service.',
  Skills: 'What are your main technical skills and tools?',
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

const AnimatedChevron = () => {
  return (
    <motion.div
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="text-primary mb-1.5"
    >
      <ChevronUp size={16} />
    </motion.div>
  );
};

export default function HelperBoost({
  submitQuery,
  hasReachedLimit = false,
}: HelperBoostProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const handleQuestionClick = (questionKey: keyof typeof questions) => {
    if (submitQuery) {
      submitQuery(questions[questionKey]);
    }
  };

  const handleDrawerQuestionClick = (question: string) => {
    if (submitQuery) {
      submitQuery(question);
    }

    setOpen(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <div className="w-full">
        <div
          className={
            isVisible ? 'mb-2 flex justify-center' : 'mb-0 flex justify-center'
          }
        >
          <button
            onClick={toggleVisibility}
            className="flex items-center gap-1 px-3 py-1 text-xs text-gray-500 transition-colors hover:text-gray-700"
          >
            {isVisible ? (
              <>
                <ChevronDown size={14} />
                Hide quick questions
              </>
            ) : (
              <>
                <ChevronUp size={14} />
                Show quick questions
              </>
            )}
          </button>
        </div>

        {isVisible && (
          <div className="w-full">
            <div
              className="flex w-full flex-wrap gap-1 md:gap-3"
              style={{ justifyContent: 'safe center' }}
            >
              {questionConfig.map(({ key, color, icon: Icon }) => (
                <Button
                  key={key}
                  onClick={() => !hasReachedLimit && handleQuestionClick(key)}
                  variant="outline"
                  className={`h-auto min-w-[100px] flex-shrink-0 rounded-xl border px-4 py-3 shadow-none backdrop-blur-sm transition-none ${
                    hasReachedLimit
                      ? 'cursor-not-allowed border-gray-200 bg-gray-100 opacity-50'
                      : 'border-border hover:bg-border/30 cursor-pointer bg-white/80 active:scale-95'
                  }`}
                  disabled={hasReachedLimit}
                >
                  <div className="flex items-center gap-3 text-gray-700">
                    <Icon size={18} strokeWidth={2} color={color} />
                    <span className="text-sm font-medium">{key}</span>
                  </div>
                </Button>
              ))}

              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Drawer.Trigger
                      className="group relative flex flex-shrink-0 items-center justify-center"
                      disabled={hasReachedLimit}
                    >
                      <motion.div
                        className={`flex h-auto items-center space-x-1 rounded-xl border px-4 py-3 text-sm backdrop-blur-sm transition-all duration-200 ${
                          hasReachedLimit
                            ? 'cursor-not-allowed border-gray-200 bg-gray-100 opacity-50'
                            : 'hover:bg-border/30 cursor-pointer border-neutral-200 bg-white/80 dark:border-neutral-800 dark:bg-neutral-900'
                        }`}
                        whileHover={!hasReachedLimit ? { scale: 1 } : {}}
                        whileTap={!hasReachedLimit ? { scale: 0.98 } : {}}
                      >
                        <div className="flex items-center gap-3 text-gray-700">
                          <CircleEllipsis
                            className="h-[20px] w-[18px]"
                            strokeWidth={2}
                          />
                        </div>
                      </motion.div>
                    </Drawer.Trigger>
                  </TooltipTrigger>

                  <TooltipContent>
                    <AnimatedChevron />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        )}
      </div>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />

        <Drawer.Content className="fixed right-0 bottom-0 left-0 z-[100] mt-24 flex h-[80%] flex-col rounded-t-[10px] bg-gray-100 outline-none lg:h-[60%]">
          <div className="flex-1 overflow-y-auto rounded-t-[10px] bg-white p-4">
            <div className="mx-auto max-w-md space-y-4">
              <div
                aria-hidden
                className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300"
              />

              <div className="mx-auto w-full max-w-md">
                <div className="space-y-8 pb-16">
                  {questionsByCategory.map((category) => (
                    <CategorySection
                      key={category.id}
                      name={category.name}
                      Icon={category.icon}
                      questions={category.questions}
                      onQuestionClick={handleDrawerQuestionClick}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

interface CategorySectionProps {
  name: string;
  Icon: ElementType;
  questions: string[];
  onQuestionClick: (question: string) => void;
}

function CategorySection({
  name,
  Icon,
  questions,
  onQuestionClick,
}: CategorySectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5 px-1">
        <Icon className="h-5 w-5" />
        <Drawer.Title className="text-[22px] font-medium text-gray-900">
          {name}
        </Drawer.Title>
      </div>

      <Separator className="my-4" />

      <div className="space-y-3">
        {questions.map((question, index) => (
          <QuestionItem
            key={index}
            question={question}
            onClick={() => onQuestionClick(question)}
            isSpecial={specialQuestions.includes(question)}
          />
        ))}
      </div>
    </div>
  );
}

interface QuestionItemProps {
  question: string;
  onClick: () => void;
  isSpecial: boolean;
}

function QuestionItem({ question, onClick, isSpecial }: QuestionItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        'flex w-full items-center justify-between rounded-[10px]',
        'text-md px-6 py-4 text-left font-normal',
        'transition-all',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        isSpecial ? 'bg-black' : 'bg-[#F7F8F9]'
      )}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        backgroundColor: isSpecial ? undefined : '#F0F0F2',
      }}
      whileTap={{
        scale: 0.98,
        backgroundColor: isSpecial ? undefined : '#E8E8EA',
      }}
    >
      <div className="flex items-center">
        {isSpecial && <Sparkles className="mr-2 h-4 w-4 text-white" />}
        <span className={isSpecial ? 'font-medium text-white' : ''}>
          {question}
        </span>
      </div>

      <motion.div
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <ChevronRight
          className={cn(
            'h-5 w-5 shrink-0',
            isSpecial ? 'text-white' : 'text-primary'
          )}
        />
      </motion.div>
    </motion.button>
  );
}