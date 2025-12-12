import Image from 'next/image';
import { ChevronRight, Link as LinkIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

/* ---------------------- DATA ---------------------- */
const PROJECT_CONTENT = [
  {
    title: 'Scania CW32 – Laser Protection Turntable',
    description:
      'Flap och väggskydd på en laserstation hos Scania (CW32).\nJag ansvarade för demontering/montering av flappen, flytt av givare, finjustering av chucken och test av säkerhetsfunktionen tillsammans med Scania och Laserax.',
    techStack: [
      'ABB IRC5',
      'Säkerhetsgivare / sensorer',
      'Mekanisk justering',
      'Elinstallation',
      'Felsökning',
    ],
    date: '2025',
    links: [{ name: 'Internal Report (EA)', url: 'https://ibboabdoli.com' }],
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
      'Felsökning på vibrationsgivare och störningar i en förpackningslina hos Lantmännen.\nKontroll av signaler, kablage, PLC-ingångar och mekaniska orsaker till larm och stopp.',
    techStack: [
      'PLC (Siemens / TIA Portal)',
      'Vibrationssensorer',
      'Signal- och I/O-felsökning',
      'Produktionslinor',
    ],
    date: '2025',
    links: [{ name: 'Summary', url: 'https://ibboabdoli.com' }],
    images: [
      { src: '/projects/lantmannen-1.jpg', alt: 'Packaging line at Lantmännen' },
    ],
  },
  {
    title: 'Meritor – Electrical Panel & Cabling Repair',
    description:
      'Identifiering av glappkontakt / kabelbrott i ett elskåp hos Meritor.\nLäsa elscheman, mäta, hitta fel kabel, åtgärda kabeldragning och verifiera funktion genom testkörning.',
    techStack: ['Elinstallation', 'Felsökning', 'Elscheman', 'Mätning', 'Kablage'],
    date: '2025',
    links: [{ name: 'Summary', url: 'https://ibboabdoli.com' }],
    images: [
      {
        src: '/projects/meritor-1.jpg',
        alt: 'Electrical panel troubleshooting at Meritor',
      },
    ],
  },
  {
    title: 'Volvo – ABB Robot Motion Supervision',
    description:
      'Felsökning av SafeMove / motion supervision-larm på ABB-robot.\nVerifiering av axelövervakning, loggar, positioner och justering av gränser/offsets tillsammans med produktion.',
    techStack: ['ABB IRC5', 'SafeMove', 'RobotStudio', 'Felsökning', 'Produktion'],
    date: '2025',
    links: [{ name: 'Summary', url: 'https://ibboabdoli.com' }],
    images: [
      {
        src: '/projects/volvo-robot-1.jpg',
        alt: 'ABB robot troubleshooting at Volvo',
      },
    ],
  },
];

/* ---------------------- TYPES ---------------------- */
interface ProjectProps {
  title: string;
}

/* ---------------------- UI ---------------------- */
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);
  if (!projectData) return <div>Project details not available</div>;

  return (
    <div className="space-y-10">
      {/* Description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground whitespace-pre-line font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack?.map((tech, index) => (
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

      {/* Links */}
      {projectData.links?.length ? (
        <div className="mb-24">
          <div className="mb-4 flex items-center gap-2 px-6">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <LinkIcon className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#F5F5F7] p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {/* Images */}
      {projectData.images?.length ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

/* ---------------------- EXPORT ---------------------- */
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
