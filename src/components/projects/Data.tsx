import React from "react";
import Image from "next/image";
import { Image as Img, ChevronRight, Link } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// ✅ Local placeholder (put this file in: /public/placeholder-project.png)
const PLACEHOLDER_SRC = "/placeholder-project.png";

/* ---------------------- TYPES ---------------------- */
type ProjectImage = { src: string; alt: string };
type ProjectLink = { name: string; url: string };

type ProjectContentItem = {
  title: string;
  description: string;
  techStack: string[];
  date: string;
  links: ProjectLink[];
  images: ProjectImage[];
};

export type ProjectCard = {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
};

/** ---------------------- PROJECT CONTENT ---------------------- **/
const PROJECT_CONTENT: ProjectContentItem[] = [
  {
    title: "Machine Vision & ABB Robot Cell Troubleshooting",
    description:
      "Troubleshooting machine vision timeouts and robot communication in an ABB robot cell.\nWorked with EA Vision Studio and Cognex VisionPro on camera acquisition, trigger functions, and backup of project files, recipes, and camera settings.\nReviewed RAPID programs, multitasking, EIO configuration, robot status indication, and red lamp logic.\n\nKey focus: understanding the full chain between vision, robot, PLC signals, and operator information to restore stable inspection flow.",
    techStack: [
      "EA Vision Studio",
      "Cognex VisionPro",
      "ABB IRC5",
      "RAPID programming",
      "PLC signals",
      "EIO configuration",
    ],
    date: "2024",
    links: [{ name: "Service Report", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "ABB Robot Troubleshooting & RobotStudio Simulation",
    description:
      "Analyzed ABB robot movements and simulated operations in RobotStudio to assess collision risks.\nReviewed RAPID programs, verified gripper behavior and robot positions.\nMade program adjustments before production testing to ensure safe operation.\n\nKey focus: preventive troubleshooting and simulation-based verification.",
    techStack: [
      "ABB IRC5",
      "RobotStudio",
      "RAPID programming",
      "Collision detection",
      "Gripper control",
    ],
    date: "2024",
    links: [{ name: "Simulation Summary", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "ABB Robot Status, Alarm & Safety Signal Verification",
    description:
      "Verified ABB robot status, motor signals, stop reasons, alarm logic, I/O signals, and safety states.\nSupported operators with troubleshooting guidance and clear documentation of signal checks.\n\nKey focus: safety verification and operator assistance in fault resolution.",
    techStack: [
      "ABB IRC5",
      "Safety signals",
      "I/O verification",
      "Alarm logic",
      "Motor signals",
    ],
    date: "2024",
    links: [{ name: "Verification Report", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "Weber Applicator & Zebra Printer Communication Troubleshooting",
    description:
      "Troubleshot communication issues between Weber applicator, Zebra printer, and the control system.\nChecked signal timing, configuration settings, and ensured production stability.\n\nKey focus: device communication and signal synchronization.",
    techStack: [
      "Weber applicator",
      "Zebra printer",
      "Signal timing",
      "Communication protocols",
      "Configuration",
    ],
    date: "2024",
    links: [{ name: "Communication Fix", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "Robot Program Cleanup & Signal Review",
    description:
      "Cleaned up old robot signals and removed unused program parts to improve maintainability.\nReviewed signals for clarity and easier future troubleshooting.\n\nKey focus: program optimization and documentation.",
    techStack: [
      "ABB robots",
      "RAPID programming",
      "Signal review",
      "Program cleanup",
      "Maintenance",
    ],
    date: "2024",
    links: [{ name: "Cleanup Summary", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "Sorting by Height — Factory I/O & Siemens TIA Portal S7-1200",
    description:
      "Developed a sorting simulation using Factory I/O and Siemens TIA Portal with S7-1200 PLC.\nImplemented sensor-based height detection and basic PLC sorting logic.\nGitHub project for learning and practicing automation concepts.\n\nKey focus: PLC programming and simulation.",
    techStack: [
      "Factory I/O",
      "Siemens TIA Portal",
      "S7-1200 PLC",
      "Sensor integration",
      "Sorting logic",
    ],
    date: "2024",
    links: [{ name: "GitHub Project", url: "https://github.com/ibboabdoli/sorting-height" }],
    images: [],
  },
  {
    title: "Lantmännen — Industrial Electrical Service & Production Support",
    description:
      "Provided urgent troubleshooting for motors, fans, elevators, electrical cabinets, and production equipment at Lantmännen.\nConducted thermography, electrical inspections, preventive maintenance, and worked with PLCs, level sensors, weighing systems, and conveyors.\nPrepared technical documentation and reports to reduce downtime.\n\nKey focus: electrical service and production support.",
    techStack: [
      "Electrical troubleshooting",
      "Thermography",
      "PLC systems",
      "Sensors",
      "Preventive maintenance",
    ],
    date: "2024",
    links: [{ name: "Service Documentation", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "Cummins — Industrial Automation Service & Operational Support",
    description:
      "Handled electrical and automation troubleshooting on machines, sensors, motors, and electrical components at Cummins.\nProvided production support, preventive maintenance, and technical follow-up.\n\nKey focus: operational support and maintenance.",
    techStack: [
      "Electrical components",
      "Sensors",
      "Motors",
      "Preventive maintenance",
      "Automation troubleshooting",
    ],
    date: "2024",
    links: [{ name: "Support Report", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "DeLaval — Testing, Troubleshooting & Quality Verification",
    description:
      "Conducted testing and verification of technical systems, checking for electrical and mechanical deviations.\nVerified sensors and system functions, documented test results for quality improvement.\n\nKey focus: quality verification and testing.",
    techStack: [
      "System testing",
      "Electrical verification",
      "Mechanical checks",
      "Sensor testing",
      "Quality documentation",
    ],
    date: "2024",
    links: [{ name: "Test Results", url: "https://ibboabdoli.com" }],
    images: [],
  },
  {
    title: "Weekly Service & Fault-Finding Cases",
    description:
      "Handled various weekly fault-finding cases including ABB robot sensor cable repair, cooling water pump troubleshooting, fan motor wiring correction, HMI troubleshooting, ABB Eden safety sensor adjustment, and pressure switch checks.\nMaintained a service report mindset for clear documentation.\n\nKey focus: routine maintenance and quick fixes.",
    techStack: [
      "Cable repair",
      "Pump troubleshooting",
      "Wiring",
      "HMI systems",
      "Safety sensors",
      "Pressure switches",
    ],
    date: "2024",
    links: [{ name: "Weekly Reports", url: "https://ibboabdoli.com" }],
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
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground whitespace-pre-line font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

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
                  anonymized (non-sensitive) photos later to show the setup and
                  key steps.
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
    category: "Machine Vision",
    title: "Machine Vision & ABB Robot Cell Troubleshooting",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="Machine Vision & ABB Robot Cell Troubleshooting" />,
  },
  {
    category: "Robotics",
    title: "ABB Robot Troubleshooting & RobotStudio Simulation",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="ABB Robot Troubleshooting & RobotStudio Simulation" />,
  },
  {
    category: "Robotics",
    title: "ABB Robot Status, Alarm & Safety Signal Verification",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="ABB Robot Status, Alarm & Safety Signal Verification" />,
  },
  {
    category: "Communication",
    title: "Weber Applicator & Zebra Printer Communication Troubleshooting",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="Weber Applicator & Zebra Printer Communication Troubleshooting" />,
  },
  {
    category: "Robotics",
    title: "Robot Program Cleanup & Signal Review",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="Robot Program Cleanup & Signal Review" />,
  },
  {
    category: "PLC Simulation",
    title: "Sorting by Height — Factory I/O & Siemens TIA Portal S7-1200",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="Sorting by Height — Factory I/O & Siemens TIA Portal S7-1200" />,
  },
  {
    category: "Electrical Service",
    title: "Lantmännen — Industrial Electrical Service & Production Support",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="Lantmännen — Industrial Electrical Service & Production Support" />,
  },
  {
    category: "Automation Service",
    title: "Cummins — Industrial Automation Service & Operational Support",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="Cummins — Industrial Automation Service & Operational Support" />,
  },
  {
    category: "Quality Verification",
    title: "DeLaval — Testing, Troubleshooting & Quality Verification",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="DeLaval — Testing, Troubleshooting & Quality Verification" />,
  },
  {
    category: "Fault-Finding",
    title: "Weekly Service & Fault-Finding Cases",
    src: PLACEHOLDER_SRC,
    content: <ProjectContent title="Weekly Service & Fault-Finding Cases" />,
  },
];
