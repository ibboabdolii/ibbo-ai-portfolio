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
  PartyPopper,
  Sparkles,
  UserRoundSearch,
  UserSearch,
} from 'lucide-react';
import { useState } from 'react';
import { Drawer } from 'vaul';

/* ---------------- types ---------------- */
interface HelperBoostProps {
  submitQuery?: (query: string) => void;
  setInput?: (value: string) => void;
  hasReachedLimit?: boolean;
}

/* ---------------- quick questions (TOP) ---------------- */
const questions = {
  Me: 'Who are you? Tell me about your background as a Service Engineer.',
  Projects:
    'Tell me about your real projects at Scania, Lantmännen, Meritor, and Volvo.',
  Skills:
    'What are your main skills in PLC, ABB robots, and electrical installations?',
  Fun:
    'What do you do outside of work? How do gym, walking, and swimming help you?',
  Contact:
    'How can I contact you for service or automation projects?',
};

const questionConfig = [
  { key: 'Me', color: '#329696', icon: UserSearch },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Fun', color: '#B95F9D', icon: PartyPopper },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
];

/* ---------------- special drawer questions ---------------- */
const specialQuestions = [
  'Who are you and what do you do today?',
  'Can I see your CV or resume?',
  'What industrial projects are you most proud of?',
  'What are your strongest technical skills?',
  'How do you handle pressure and troubleshooting?',
  'How can I reach you for work or collaboration?',
];

/* ---------------- categorized questions ---------------- */
const questionsByCategory = [
  {
    id: 'me',
    name: 'About Me',
    icon: UserSearch,
    questions: [
      'Who are you?',
      'What motivates you in your work?',
      'How did you become a Service Engineer?',
      'What kind of technical problems do you enjoy solving?',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: BriefcaseIcon,
    questions: [
      'Can I see your CV?',
      'Where are you working now?',
      'What responsibilities do you usually have on site?',
      'Why should a company hire you?',
    ],
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: CodeIcon,
    questions: [
      'Tell me about your work at Scania.',
      'What did you do at Lantmännen?',
      'Describe a difficult production issue you solved.',
    ],
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: GraduationCapIcon,
    questions: [
      'What PLC systems do you work with?',
      'What is your experience with ABB robots?',
      'What electrical work and troubleshooting do you handle?',
    ],
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    icon: PartyPopper,
    questions: [
      'What do you do outside of work?',
      'How does gym training help your focus and discipline?',
      'Do walking or swimming help you stay balanced?',
    ],
  },
  {
    id: 'contact',
    name: 'Contact & Work',
    icon: MailIcon,
    questions: [
      'How can I contact you?',
      'What kind of service projects do you accept?',
      'Are you open for long-term cooperation?',
    ],
  },
];

/* ---------------- animated chevron ---------------- */
const AnimatedChevron = () => (
  <motion.div
    animate={{ y: [0, -4, 0] }}
    transition={{
      duration: 1.5,
      ease: 'easeInOut',
      repeat: Infinity,
    }}
    className="text-primary mb-1.5"
  >
    <ChevronUp size={16} />
  </motion.div>
);

/* ---------------- main component ---------------- */
export default function HelperBoost({
  submitQuery,
  hasReachedLimit = false,
}: HelperBoostProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const handleQuestionClick = (key: string) => {
    if (submitQuery) {
      submitQuery(questions[key as keyof typeof questions]);
    }
  };

  const handleDrawerQuestionClick = (question: string) => {
    submitQuery?.(question);
    setOpen(false);
  };

  return (
    <>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <div className="w-full">
          {/* Toggle */}
          <div className="mb-2 flex justify-center">
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="flex items-center gap-1 px-3 py-1 text-xs text-gray-500 hover:text-gray-700"
            >
              {isVisible ? (
                <>
                  <ChevronDown size={14} /> Hide quick questions
                </>
              ) : (
                <>
                  <ChevronUp size={14} /> Show quick questions
                </>
              )}
            </button>
          </div>

          {/* Quick buttons */}
          {isVisible && (
            <div className="flex flex-wrap justify-center gap-2">
              {questionConfig.map(({ key, color, icon: Icon }) => (
                <Button
                  key={key}
                  onClick={() => !hasReachedLimit && handleQuestionClick(key)}
                  variant="outline"
                  disabled={hasReachedLimit}
                  className="rounded-xl bg-white/80 px-4 py-3 backdrop-blur-sm"
                >
                  <Icon size={18} color={color} />
                  <span className="ml-2 text-sm font-medium">{key}</span>
                </Button>
              ))}

              {/* More */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Drawer.Trigger className="rounded-xl border bg-white/80 px-4 py-3">
                      <CircleEllipsis size={18} />
                    </Drawer.Trigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <AnimatedChevron />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
        </div>

        {/* Drawer */}
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-50 bg-black/60" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 h-[80%] rounded-t-xl bg-white p-4">
            <div className="mx-auto max-w-md space-y-8">
              {questionsByCategory.map((cat) => (
                <div key={cat.id}>
                  <div className="flex items-center gap-2">
                    <cat.icon className="h-5 w-5" />
                    <h3 className="text-xl font-semibold">{cat.name}</h3>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    {cat.questions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleDrawerQuestionClick(q)}
                        className={cn(
                          'flex w-full items-center justify-between rounded-lg px-4 py-3 text-left',
                          specialQuestions.includes(q)
                            ? 'bg-black text-white'
                            : 'bg-gray-100'
                        )}
                      >
                        <span>{q}</span>
                        <ChevronRight />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
