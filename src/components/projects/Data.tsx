import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Scania CW32 – Laser Protection Turntable',
    description:
      'Flap och väggskydd på en laserstation hos Scania (CW32). Jag ansvarade för demontering/montering av flappen, flytt av givare, finjustering av chucken och test av säkerhetsfunktionen tillsammans med Scania och Laserax.',
    techStack: [
      'ABB IRC5',
      'Säkerhetsgivare / sensorer',
      'Mekanisk justering',
      'Elinstallation',
      'Felsökning'
    ],
    date: '2025',
    links: [
      {
        name: 'Internal Report (EA)',
        url: 'https://ibboabdoli.com', // یا لینک واقعی اگر بعداً داشتی
      },
    ],
    images: [
      {
        src: '/projects/scania-cw32-1.jpg',
        alt: 'Scania CW32 laser protection turntable',
      },
      {
        src: '/projects/scania-cw32-2.jpg',
        alt: 'Sensor relocation and flap installation',
      },
    ],
  },
  {
    title: 'Lantmännen – Vibration Sensor & Packaging Line',
    description:
      'Felsökning på vibrationsgivare och störningar i en förpackningslina hos Lantmännen. Kontroll av signaler, kablage, PLC-ingångar och mekaniska orsaker till larm och stopp.',
    techStack: [
      'PLC (Siemens / TIA Portal)',
      'Vibrationssensorer',
      'Signal- och I/O-felsökning',
      'Produktionslinor',
    ],
    date: '2025',
    links: [
      {
        name: 'Summary',
        url: 'https://ibboabdoli.com', 
      },
    ],
    images: [
      {
        src: '/projects/lantmannen-1.jpg',
        alt: 'Packaging line at Lantmännen',
      },
    ],
  },
  {
    title: 'Meritor – Electrical Panel & Cabling Repair',
    description:
      'Identifiering av glappkontakt / kabelbrott i ett elskåp hos Meritor. Läsa elscheman, mäta, hitta fel kabel, åtgärda

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Industrial Automation',
    title: 'Scania CW32 – Laser Protection Turntable',
    src: '/projects/scania-cw32-preview.jpg',
    content: <ProjectContent project={{ title: 'Scania CW32 – Laser Protection Turntable' }} />,
  },
  {
    category: 'Packaging Line',
    title: 'Lantmännen – Vibration Sensor & Packaging Line',
    src: '/projects/lantmannen-preview.jpg',
    content: <ProjectContent project={{ title: 'Lantmännen – Vibration Sensor & Packaging Line' }} />,
  },
  {
    category: 'Electrical',
    title: 'Meritor – Electrical Panel & Cabling Repair',
    src: '/projects/meritor-preview.jpg',
    content: <ProjectContent project={{ title: 'Meritor – Electrical Panel & Cabling Repair' }} />,
  },
  {
    category: 'Robotics',
    title: 'Volvo – ABB Robot Motion Supervision',
    src: '/projects/volvo-robot-preview.jpg',
    content: <ProjectContent project={{ title: 'Volvo – ABB Robot Motion Supervision' }} />,
  },
];
