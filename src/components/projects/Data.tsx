import Image from "next/image";
import { Image as Img } from "lucide-react";
import { ChevronRight, Link } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// ✅ One local placeholder (put this file in: /public/projects/placeholder.png)
const PLACEHOLDER_SRC = "/projects/placeholder.png";

/* ---------------------- TYPES (FIX NEVER[]) ---------------------- */
type ProjectImage = { src: string; alt: string };
type ProjectLink = { name: string; url: string };

type ProjectContentItem = {
  title: string;
  description: string;
  techStack: string[];
  date: string;
  links: ProjectLink[];
  images: ProjectImage[]; // ✅ مهم: باعث میشه images never[] نشه
};

type ProjectCard = {
  category: string;
  title: string;
  src: string; // ✅ برای Carousel حتماً string
  content: React.ReactNode;
};

/** ---------------------- PROJECT CONTENT ---------------------- **/
const PROJECT_CONTENT: ProjectContentItem[] = [
  {
    title: "Scania CW32 – Laser Protection Turntable",
    description:
      "Work at Scania (CW32) on a laser protection turntable system.\nI handled flap removal/installation, sensor relocation, chuck fine-alignment, and functional safety verification together with Scania and Laserax.\n\nKey focus: safe mechanical + electrical integration, clean commissioning, and stable production restart.",
    techStack: [
      "ABB IRC5 (cell context)",
      "Safety sensors / interlocks",
      "Mechanical alignment (chuck/fixture)",
      "Electrical installation",
      "On-site troubleshooting",
    ],
    date: "2025",
    links: [{ name: "Report (Internal)", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "Lantmännen – Vibration Sensor & Packaging Line",
    description:
      "Troubleshooting vibration sensor alarms and disturbances on a packaging line at Lantmännen.\nI checked signals, cabling, PLC inputs, and mechanical root causes to reduce stops and stabilize the line.\n\nKey focus: fast diagnosis, clean signal verification, and production-friendly fixes.",
    techStack: [
      "PLC troubleshooting (Siemens / TIA Portal context)",
      "Vibration sensors",
      "I/O & signal tracing",
      "Packaging / production lines",
    ],
    date: "2025",
    links: [{ name: "Summary", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "Meritor – Electrical Panel & Cabling Repair",
    description:
      "Investigation of intermittent faults in an electrical cabinet at Meritor.\nI read schematics, measured signals, located the faulty cable/connection, repaired wiring, and verified the system with test runs.\n\nKey focus: structured fault finding and safe, documented handover.",
    techStack: [
      "Electrical installation",
      "Schematics & documentation",
      "Measurement / multimeter",
      "Cabling & terminations",
      "Functional verification",
    ],
    date: "2025",
    links: [{ name: "Summary", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "Volvo – ABB Robot Motion Supervision",
    description:
      "Troubleshooting ABB robot alarms related to SafeMove / motion supervision.\nI verified axis supervision signals/logs, checked positions/limits, and supported adjustments to reduce recurring stops.\n\nKey focus: safety-aware debugging and stable operation in production.",
    techStack: [
      "ABB IRC5",
      "SafeMove (supervision context)",
      "RobotStudio (analysis/support)",
      "Production troubleshooting",
    ],
    date: "2025",
    links: [{ name: "Summary", url: "https://ibboabdoli.com" }],
    images: [],
  },
];

/* ---------------------- UI ---------------------- */
const ProjectContent = ({ title }: { title: string }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === title);

  if (!projectData) return <div>Project details not available</div>;

  const hasImages = projectData.images.length > 0;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground whitespace-pre-line font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          {projectData.techStack.length > 0 && (
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
          )}
        </div>
      </div>

      {/* Links */}
      {projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="mb-4 flex items-center gap-2 px-6">
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
                className="group flex items-center justify-between rounded-xl bg-[#F5F5F7] p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Gallery */}
      {hasImages ? (
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
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-6">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Gallery
            </h3>
            <Img className="h-4 w-4 text-muted-foreground" />
          </div>

          <Separator className="my-4" />

          <div className="rounded-3xl bg-[#F5F5F7] p-10 dark:bg-neutral-800">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/10 dark:bg-white/10">
                <Img className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
              </div>
              <div>
                <p className="text-secondary-foreground font-sans text-base md:text-lg">
                  No images added yet
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  I keep this documented internally. If needed, I can add a few
                  anonymized (non-sensitive) photos later to show the setup and key steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ---------------------- MAIN DATA EXPORT ---------------------- */
export const data: ProjectCard[] = [
  {
    category: "Industrial Automation",
    title: "Scania CW32 – Laser Protection Turntable",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="Scania CW32 – Laser Protection Turntable" />,
  },
  {
    category: "Packaging Line",
    title: "Lantmännen – Vibration Sensor & Packaging Line",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="Lantmännen – Vibration Sensor & Packaging Line" />,
  },
  {
    category: "Electrical",
    title: "Meritor – Electrical Panel & Cabling Repair",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="Meritor – Electrical Panel & Cabling Repair" />,
  },
  {
    category: "Robotics",
    title: "Volvo – ABB Robot Motion Supervision",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="Volvo – ABB Robot Motion Supervision" />,
  },
];
