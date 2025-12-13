import Image from "next/image";
import { Image as Img } from "lucide-react";
import { ChevronRight, Link } from "lucide-react";
import { Separator } from "@/components/ui/separator";

/* ---------------------- PROJECT CONTENT ---------------------- */
const PROJECT_CONTENT = [
  {
    title: "Scania CW32 – Laser Protection Turntable",
    description:
      "Flap och väggskydd på en laserstation hos Scania (CW32).\nJag ansvarade för demontering/montering av flappen, flytt av givare, finjustering av chucken och test av säkerhetsfunktionen tillsammans med Scania och Laserax.",
    techStack: [
      "ABB IRC5",
      "Säkerhetsgivare / sensorer",
      "Mekanisk justering",
      "Elinstallation",
      "Felsökning",
    ],
    date: "2025",
    links: [{ name: "Internal Report (EA)", url: "https://ibboabdoli.com" }],
    images: [], // no images for now
  },
  {
    title: "Lantmännen – Vibration Sensor & Packaging Line",
    description:
      "Felsökning på vibrationsgivare och störningar i en förpackningslina hos Lantmännen.\nKontroll av signaler, kablage, PLC-ingångar och mekaniska orsaker till larm och stopp.",
    techStack: [
      "PLC (Siemens / TIA Portal)",
      "Vibrationssensorer",
      "Signal- och I/O-felsökning",
      "Produktionslinor",
    ],
    date: "2025",
    links: [{ name: "Summary", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "Meritor – Electrical Panel & Cabling Repair",
    description:
      "Identifiering av glappkontakt / kabelbrott i ett elskåp hos Meritor.\nLäsa elscheman, mäta, hitta fel kabel, åtgärda kabeldragning och verifiera funktion genom testkörning.",
    techStack: ["Elinstallation", "Felsökning", "Elscheman", "Mätning", "Kablage"],
    date: "2025",
    links: [{ name: "Summary", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "Volvo – ABB Robot Motion Supervision",
    description:
      "Felsökning av SafeMove / motion supervision-larm på ABB-robot.\nVerifiering av axelövervakning, loggar, positioner och justering av gränser/offsets tillsammans med produktion.",
    techStack: ["ABB IRC5", "SafeMove", "RobotStudio", "Felsökning", "Produktion"],
    date: "2025",
    links: [{ name: "Summary", url: "https://ibboabdoli.com" }],
    images: [],
  },
];

// Define interface for project prop (same as original)
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  const hasImages = projectData.images && projectData.images.length > 0;

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground whitespace-pre-line font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          {!!projectData.techStack?.length && (
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

      {/* Images gallery (nice empty state when no images) */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 px-6">
          <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
            Gallery
          </h3>
          <Img className="h-4 w-4 text-muted-foreground" />
        </div>
        <Separator className="my-4" />

        {hasImages ? (
          <div className="grid grid-cols-1 gap-4">
            {projectData.images!.map((image, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        ) : (
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
                  This project is documented internally. If you want, I can add a few
                  anonymized photos later (non-sensitive) to show the setup and key steps.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------------------- MAIN DATA EXPORT ---------------------- */
/**
 * ✅ same shape as original, but:
 * - src is optional (you have no images)
 * - cover gives you the same "nice card" feeling like original (gradient blob)
 */
export const data = [
  {
    category: "Industrial Automation",
    title: "Scania CW32 – Laser Protection Turntable",
    cover:
      "bg-[conic-gradient(from_180deg_at_50%_50%,#ff4fd8,#2f6bff,#2dd4bf,#ffd54a,#ff4fd8)]",
    content: (
      <ProjectContent
        project={{ title: "Scania CW32 – Laser Protection Turntable" }}
      />
    ),
  },
  {
    category: "Packaging Line",
    title: "Lantmännen – Vibration Sensor & Packaging Line",
    cover:
      "bg-[conic-gradient(from_180deg_at_50%_50%,#22c55e,#06b6d4,#3b82f6,#a78bfa,#22c55e)]",
    content: (
      <ProjectContent
        project={{ title: "Lantmännen – Vibration Sensor & Packaging Line" }}
      />
    ),
  },
  {
    category: "Electrical",
    title: "Meritor – Electrical Panel & Cabling Repair",
    cover:
      "bg-[conic-gradient(from_180deg_at_50%_50%,#f59e0b,#fb7185,#ef4444,#f97316,#f59e0b)]",
    content: (
      <ProjectContent
        project={{ title: "Meritor – Electrical Panel & Cabling Repair" }}
      />
    ),
  },
  {
    category: "Robotics",
    title: "Volvo – ABB Robot Motion Supervision",
    cover:
      "bg-[conic-gradient(from_180deg_at_50%_50%,#60a5fa,#34d399,#22c55e,#facc15,#60a5fa)]",
    content: (
      <ProjectContent
        project={{ title: "Volvo – ABB Robot Motion Supervision" }}
      />
    ),
  },
] as const;

