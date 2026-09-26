'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { localized, portfolioSkills } from '@/data/portfolio';
import { motion, type Variants } from 'framer-motion';
import { usePortfolioLanguage } from '@/hooks/use-portfolio-language';
import { Code, Cpu, PenTool, Users } from 'lucide-react';

function SkillIcon({ iconType }: { iconType: string }) {
  if (iconType === 'cpu') return <Cpu className="h-5 w-5" />;
  if (iconType === 'tool') return <PenTool className="h-5 w-5" />;
  if (iconType === 'users') return <Users className="h-5 w-5" />;
  return <Code className="h-5 w-5" />;
}

export default function Skills() {
  const language = usePortfolioLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-auto w-full max-w-5xl"
    >
      <Card className="w-full rounded-3xl border border-black/5 bg-white px-0 pb-8 shadow-sm">
        <CardHeader className="px-5 pt-6 pb-2 sm:px-6">
          <CardTitle className="text-primary text-2xl font-bold sm:text-3xl">
            {language === 'sv' ? 'Färdigheter & teknisk erfarenhet' : 'Skills & Technical Experience'}
          </CardTitle>
          <p className="text-muted-foreground mt-2 max-w-3xl text-sm leading-relaxed">
            {language === 'sv'
              ? 'Uppdaterad översikt över de teknikområden jag faktiskt arbetar med i fältservice, robotik, PLC, vision och egna digitala projekt.'
              : 'Updated overview of the technical areas I actually work with across field service, robotics, PLC, vision, and personal digital projects.'}
          </p>
        </CardHeader>

        <CardContent className="px-5 sm:px-6">
          <motion.div className="space-y-5" variants={containerVariants} initial="hidden" animate="visible">
            {portfolioSkills.map((section) => (
              <motion.section
                key={section.id}
                className="rounded-2xl border border-black/5 bg-muted/20 p-4 sm:p-5"
                variants={itemVariants}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="text-primary rounded-xl bg-white p-2 shadow-sm">
                    <SkillIcon iconType={section.iconType} />
                  </div>
                  <h3 className="text-foreground text-base font-semibold sm:text-lg">
                    {localized(section.category, language)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => {
                    const text = localized(skill, language);
                    return (
                      <Badge key={text} className={cn('rounded-full px-3 py-1.5 text-xs leading-relaxed font-medium sm:text-sm', section.color)}>
                        {text}
                      </Badge>
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
