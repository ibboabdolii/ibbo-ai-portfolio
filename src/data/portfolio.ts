export type PortfolioLanguage = 'sv' | 'en';

export type LocalizedText = {
  sv: string;
  en: string;
};

export type PortfolioProject = {
  id: string;
  category: LocalizedText;
  title: LocalizedText;
  period: string;
  track: 'featured' | 'field' | 'personal' | 'lab';
  summary: LocalizedText;
  problem: LocalizedText;
  diagnosis: LocalizedText;
  action: LocalizedText;
  verification: LocalizedText;
  technologies: string[];
  visual: 'serial' | 'robot' | 'vision' | 'service' | 'software' | 'safety';
  links?: Array<{ name: LocalizedText; url: string }>;
};

export type SkillSection = {
  id: string;
  category: LocalizedText;
  iconType: 'cpu' | 'code' | 'tool' | 'users';
  skills: LocalizedText[];
  color: string;
};

export const portfolioProfile = {
  name: 'Ibbo Abdoli',
  role: {
    sv: 'Servicetekniker / Automationstekniker',
    en: 'Service Engineer / Automation Technician',
  } satisfies LocalizedText,
  location: {
    sv: 'Södertälje / Stockholm, Sverige',
    en: 'Södertälje / Stockholm, Sweden',
  } satisfies LocalizedText,
  employer: 'Elektroautomatik i Sverige AB',
  intro: {
    sv: 'Jag arbetar praktiskt med industriell automation, el-felsökning, PLC/I/O, ABB-robotar, maskinvision och produktionssupport. Mitt fokus är att säkra maskinen, isolera den verkliga felorsaken, verifiera åtgärden och dokumentera resultatet tydligt.',
    en: 'I work hands-on with industrial automation, electrical troubleshooting, PLC/I/O, ABB robots, machine vision, and production support. My focus is to secure the machine, isolate the real root cause, verify the action, and document the result clearly.',
  } satisfies LocalizedText,
  tags: {
    sv: ['Servicetekniker', 'Automationstekniker', 'PLC & I/O', 'ABB Robotar', 'Maskinvision', 'Felsökning'],
    en: ['Service Engineer', 'Automation Technician', 'PLC & I/O', 'ABB Robots', 'Machine Vision', 'Troubleshooting'],
  },
};

export const portfolioSkills: SkillSection[] = [
  {
    id: 'automation',
    category: { sv: 'Industriell automation & PLC', en: 'Industrial Automation & PLC' },
    iconType: 'cpu',
    skills: [
      { sv: 'Siemens TIA Portal – diagnostik, sekvenslogik och online-felsökning', en: 'Siemens TIA Portal – diagnostics, sequence logic, and online troubleshooting' },
      { sv: 'S7-1500 / S7-1500F och S7-400 i produktionsmiljö', en: 'S7-1500 / S7-1500F and S7-400 in production environments' },
      { sv: 'PROFINET, I/O, givare, interlocks och kommunikationsfel', en: 'PROFINET, I/O, sensors, interlocks, and communication faults' },
      { sv: 'Codesys, SoMachine och Schneider Machine Expert – felsökning och service', en: 'Codesys, SoMachine, and Schneider Machine Expert – troubleshooting and service' },
      { sv: 'HMI/WinCC, larmkedjor, recept och produktionssekvenser', en: 'HMI/WinCC, alarm chains, recipes, and production sequences' },
      { sv: 'Drivsystem och frekvensomriktare – parametrar, signaler och felanalys', en: 'Drives and frequency converters – parameters, signals, and fault analysis' },
    ],
    color: 'bg-blue-50 text-blue-700 border border-blue-200',
  },
  {
    id: 'robotics',
    category: { sv: 'Robotik & rörelsestyrning', en: 'Robotics & Motion Control' },
    iconType: 'code',
    skills: [
      { sv: 'ABB IRC5 – service, felsökning och produktionssupport', en: 'ABB IRC5 – service, troubleshooting, and production support' },
      { sv: 'RobotStudio – backupjämförelse, simulering, banor och positionskontroll', en: 'RobotStudio – backup comparison, simulation, paths, and position checks' },
      { sv: 'RAPID – programgranskning, signalflöde och kontrollerade ändringar', en: 'RAPID – program review, signal flow, and controlled changes' },
      { sv: 'SafeMove, Motion Supervision, TCP, tooldata och workobject-verifiering', en: 'SafeMove, Motion Supervision, TCP, tooldata, and workobject verification' },
      { sv: 'KUKA KRC4 – service- och felsökningsvana', en: 'KUKA KRC4 – service and troubleshooting experience' },
      { sv: 'Grippers, fixturer, pallclearance, kollisionsrisk och mekanisk linjering', en: 'Grippers, fixtures, pallet clearance, collision risk, and mechanical alignment' },
    ],
    color: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  },
  {
    id: 'vision',
    category: { sv: 'Maskinvision & inspektion', en: 'Machine Vision & Inspection' },
    iconType: 'code',
    skills: [
      { sv: 'EA Vision Studio – kameraflöde, recept, trigger och felsökning', en: 'EA Vision Studio – camera flow, recipes, triggers, and troubleshooting' },
      { sv: 'Cognex VisionPro – bildinsamling, verktyg, timeout och offsetanalys', en: 'Cognex VisionPro – acquisition, tools, timeouts, and offset analysis' },
      { sv: 'Basler GigE/PoE-kameror – anslutning, trigger och bildflöde', en: 'Basler GigE/PoE cameras – connectivity, triggering, and image flow' },
      { sv: 'DataMatrix- och liminspektion i robotceller', en: 'DataMatrix and adhesive inspection in robot cells' },
      { sv: 'Felsökning genom hela kedjan kamera → vision → robot → PLC', en: 'Troubleshooting across the camera → vision → robot → PLC chain' },
    ],
    color: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
  },
  {
    id: 'electrical',
    category: { sv: 'El, installation & fältservice', en: 'Electrical, Installation & Field Service' },
    iconType: 'tool',
    skills: [
      { sv: 'Läsa elscheman och spåra fel i skåp, kablage och fältutrustning', en: 'Reading schematics and tracing faults in cabinets, wiring, and field devices' },
      { sv: 'Mätning, kabelbrott, glapp, reläer, kontaktorer och säkerhetskretsar', en: 'Measurement, cable breaks, loose connections, relays, contactors, and safety circuits' },
      { sv: 'Motorer, pumpar, fläktar, sensorer och produktionsutrustning', en: 'Motors, pumps, fans, sensors, and production equipment' },
      { sv: 'Grundläggande termografi, riskbedömning och dokumentation', en: 'Basic thermography, risk assessment, and documentation' },
      { sv: 'Elinstallation med säkerhetsfokus enligt svensk industripraxis', en: 'Electrical installation with a safety-first approach aligned with Swedish industrial practice' },
    ],
    color: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
  },
  {
    id: 'digital',
    category: { sv: 'Digitala verktyg & teknisk dokumentation', en: 'Digital Tools & Technical Documentation' },
    iconType: 'users',
    skills: [
      { sv: 'Git/GitHub, versionshantering, backupdisciplin och rollback-punkter', en: 'Git/GitHub, version control, backup discipline, and rollback checkpoints' },
      { sv: 'Linux, Docker och Windows-baserad teknisk felsökning', en: 'Linux, Docker, and Windows-based technical troubleshooting' },
      { sv: 'Next.js, Vercel och AI-baserade personliga webbprojekt', en: 'Next.js, Vercel, and AI-assisted personal web projects' },
      { sv: 'Servicerapporter, checklistor och teknisk överlämning', en: 'Service reports, checklists, and technical handover' },
      { sv: 'Strukturerad felsökning under tidspress och tydlig kundkommunikation', en: 'Structured troubleshooting under time pressure and clear customer communication' },
    ],
    color: 'bg-amber-50 text-amber-700 border border-amber-200',
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'v2000-gyro-serial',
    category: { sv: 'PLC / Seriell kommunikation', en: 'PLC / Serial Communication' },
    title: { sv: 'Poolrobot V2000 – gyro & seriell kommunikation', en: 'Pool Robot V2000 – Gyro & Serial Communication' },
    period: '2026',
    track: 'featured',
    summary: {
      sv: 'Stegvis integration av gyrodata i en PLC-baserad poolrobot med seriell kommunikation, parserlogik, målriktningshantering och testpunkter.',
      en: 'Step-by-step integration of gyro data into a PLC-based pool robot using serial communication, parser logic, target heading handling, and staged test checkpoints.',
    },
    problem: {
      sv: 'Den nya maskinversionen behövde en stabil och verifierbar väg från gyrosignal till styrlogik utan att gå direkt till motorutgångar.',
      en: 'The new machine version needed a stable and verifiable path from gyro signal to control logic without jumping directly to motor outputs.',
    },
    diagnosis: {
      sv: 'Kommunikationskedjan, teckenordning, bufferthantering, vinkelvärden och avvikelse mot mål analyserades steg för steg.',
      en: 'The communication chain, character order, buffer handling, angle values, and target deviation were analysed step by step.',
    },
    action: {
      sv: 'Parser, statuskoder, wrap/normalize kring ±180°, deadband, riktning och separat simuleringsläge byggdes upp i testbara delsteg.',
      en: 'Parser logic, status codes, ±180° wrap/normalization, deadband, direction handling, and a separate simulation mode were built in testable stages.',
    },
    verification: {
      sv: 'Mottagning, parser, wrap/normalize, statuslogik och simuleringsfunktion verifierades i separata checkpoints före fortsatt maskin- och pooltest.',
      en: 'Receive/parser, wrap/normalization, status logic, and simulation functions were verified in separate checkpoints before continued machine and pool testing.',
    },
    technologies: ['Schneider PLC', 'Machine Expert / SoMachine', 'RS232', 'RS485', 'MOXA', 'Gyro sensor', 'Serial parsing'],
    visual: 'serial',
  },
  {
    id: 'robot-pallet-clearance',
    category: { sv: 'ABB Robot / SafeMove', en: 'ABB Robot / SafeMove' },
    title: { sv: 'ABB-robot – SafeMove, rörelse & banfelsökning', en: 'ABB Robot – SafeMove, Motion & Path Troubleshooting' },
    period: '2026',
    track: 'featured',
    summary: {
      sv: 'Produktionsnära felsökning av en ABB-robotcell med säkerhetsstopp och rörelselarm där robotens program, rörelsebana och SafeMove-villkor behövde analyseras tillsammans.',
      en: 'Production troubleshooting of an ABB robot cell with safety stops and motion alarms where robot logic, path behaviour, and SafeMove conditions had to be analysed together.',
    },
    problem: {
      sv: 'Robotcellen fick återkommande säkerhetsstopp och rörelselarm som behövde skiljas från PLC-villkor och normala sekvensstopp.',
      en: 'The robot cell had recurring safety stops and motion alarms that needed to be separated from PLC conditions and normal sequence stops.',
    },
    diagnosis: {
      sv: 'Eventloggar, motion pointer, RAPID-program och robotens rörelseförlopp kontrollerades steg för steg för att hitta var stoppet uppstod.',
      en: 'Event logs, motion pointer, RAPID logic, and the robot motion sequence were checked step by step to locate where the stop occurred.',
    },
    action: {
      sv: 'Kontrollerade ändringar gjordes i robotens rörelse och väg med fokus på att påverka endast den berörda delen av sekvensen.',
      en: 'Controlled changes were made to the robot movement and path, focusing only on the affected part of the sequence.',
    },
    verification: {
      sv: 'Vid test på plats kom inte samma SafeMove-larm tillbaka och roboten kunde fortsätta till nästa vänteläge mot PLC.',
      en: 'During the onsite test, the same SafeMove alarm did not return and the robot continued to the next PLC waiting state.',
    },
    technologies: ['ABB IRC5', 'RAPID', 'SafeMove', 'PLC signals', 'Event logs', 'Motion diagnostics'],
    visual: 'robot',
    links: [
      { name: { sv: 'LinkedIn – ABB-case & offentlig projekthistorik', en: 'LinkedIn – ABB case & public project history' }, url: 'https://www.linkedin.com/in/ibbo-abdoli/' },
    ],
  },
  {
    id: 'vision-datamatrix-glue',
    category: { sv: 'Maskinvision', en: 'Machine Vision' },
    title: { sv: 'Robotcell – DataMatrix & liminspektion', en: 'Robot Cell – DataMatrix & Adhesive Inspection' },
    period: '2026',
    track: 'featured',
    summary: {
      sv: 'Produktionsnära felsökning av kameraflöde, recept, läsning och offset i en robotcell med flera GigE/PoE-kameror.',
      en: 'Production troubleshooting of camera flow, recipes, reading, and offsets in a robot cell using multiple GigE/PoE cameras.',
    },
    problem: {
      sv: 'Inspektionen kunde ge läsproblem, timeout eller felaktig offset mellan visionresultat och robotens hantering.',
      en: 'The inspection could produce read failures, timeouts, or incorrect offsets between vision results and robot handling.',
    },
    diagnosis: {
      sv: 'Triggersekvens, bildinsamling, receptval, kameraanslutning och signalflödet mellan vision, robot och PLC granskades.',
      en: 'Trigger sequence, acquisition, recipe selection, camera connectivity, and signal flow between vision, robot, and PLC were reviewed.',
    },
    action: {
      sv: 'Projektbackup, recept och kamerainställningar strukturerades samtidigt som läsning och offset följdes genom hela kedjan.',
      en: 'Project backups, recipes, and camera settings were structured while reading and offset behaviour were traced through the complete chain.',
    },
    verification: {
      sv: 'Felsökningen delades upp i tydliga testpunkter för att skilja kamera-, vision-, robot- och PLC-relaterade fel före onsite-verifiering.',
      en: 'Troubleshooting was divided into clear checkpoints to separate camera, vision, robot, and PLC-related faults before onsite verification.',
    },
    technologies: ['EA Vision Studio', 'Cognex VisionPro', 'Basler GigE/PoE', 'ABB IRC5', 'DataMatrix', 'PLC signals'],
    visual: 'vision',
    links: [
      { name: { sv: 'LinkedIn – maskinvision i produktion', en: 'LinkedIn – machine vision in production' }, url: 'https://www.linkedin.com/posts/ibbo-abdoli_machinevision-eavs-abb-activity-7454920620259143681-x0Zq' },
    ],
  },
  {
    id: 'abb-restart-safety',
    category: { sv: 'ABB Robot / Säkerhet', en: 'ABB Robot / Safety' },
    title: { sv: 'ABB-robotcell – restart, status & säkerhetsdiagnostik', en: 'ABB Robot Cell – Restart, Status & Safety Diagnostics' },
    period: '2026',
    track: 'field',
    summary: {
      sv: 'Felsökning av robotstatus, stoppskäl, säkerhetssignaler och återstartssekvens i produktionsmiljö.',
      en: 'Troubleshooting robot status, stop reasons, safety signals, and restart sequences in a production environment.',
    },
    problem: {
      sv: 'Celler kunde vara svåra att återstarta efter stopp trots att den synliga felbilden inte alltid pekade på samma orsak.',
      en: 'Cells could be difficult to restart after a stop even when the visible fault state did not always point to the same cause.',
    },
    diagnosis: {
      sv: 'Motorstatus, stopporsaker, I/O, säkerhetsvillkor, RAPID-logik och operatörsinformation kontrollerades tillsammans.',
      en: 'Motor status, stop reasons, I/O, safety conditions, RAPID logic, and operator information were checked together.',
    },
    action: {
      sv: 'Signalkedjan dokumenterades och testpunkter skapades för att skilja robot-, safety- och PLC-villkor åt.',
      en: 'The signal chain was documented and checkpoints were created to separate robot, safety, and PLC conditions.',
    },
    verification: {
      sv: 'Resultatet användes för säkrare återstartstester och tydligare fortsatt felsökning; olösta punkter hålls separerade från verifierade fynd.',
      en: 'The result supported safer restart testing and clearer follow-up troubleshooting; unresolved points are kept separate from verified findings.',
    },
    technologies: ['ABB IRC5', 'RAPID', 'SafeMove', 'EIO', 'Safety I/O', 'Production diagnostics'],
    visual: 'safety',
  },
  {
    id: 'field-service-production-line',
    category: { sv: 'Fältservice / El', en: 'Field Service / Electrical' },
    title: { sv: 'Produktionslinje – el, sensorer & driftstopp', en: 'Production Line – Electrical, Sensors & Downtime' },
    period: '2026',
    track: 'field',
    summary: {
      sv: 'Praktisk service på produktionsutrustning med el-felsökning, givare, kablage, pneumatisk/elektrisk funktion och återstart.',
      en: 'Hands-on production support covering electrical troubleshooting, sensors, wiring, pneumatic/electrical functions, and restart verification.',
    },
    problem: {
      sv: 'Återkommande eller akuta stopp behövde lösas utan att tappa säkerhet, dokumentation eller förståelse för grundorsaken.',
      en: 'Recurring or urgent stops needed to be resolved without losing safety, documentation, or understanding of the root cause.',
    },
    diagnosis: {
      sv: 'Elschema, signalstatus, givare, kabeldragning, reläer och maskinsekvens användes för att avgränsa felet.',
      en: 'Electrical drawings, signal status, sensors, wiring, relays, and machine sequence were used to narrow the fault.',
    },
    action: {
      sv: 'Felaktiga anslutningar eller komponenter åtgärdades när de kunde verifieras och återstående riskpunkter dokumenterades för uppföljning.',
      en: 'Faulty connections or components were corrected when verified, with remaining risk points documented for follow-up.',
    },
    verification: {
      sv: 'Funktionstest och produktionsnära återstart användes för att verifiera åtgärden innan överlämning.',
      en: 'Functional testing and production-oriented restart checks were used to verify the action before handover.',
    },
    technologies: ['Electrical schematics', 'Sensors', 'I/O', 'Motors', 'Safety circuits', 'Service reporting'],
    visual: 'service',
    links: [
      { name: { sv: 'LinkedIn – service & felsökningscase', en: 'LinkedIn – service & troubleshooting cases' }, url: 'https://www.linkedin.com/in/ibbo-abdoli/' },
    ],
  },
  {
    id: 'laser-turntable',
    category: { sv: 'Commissioning / Integration', en: 'Commissioning / Integration' },
    title: { sv: 'Laserområde – vridbord, sensorer & mekanisk linjering', en: 'Laser Area – Turntable, Sensors & Mechanical Alignment' },
    period: '2025',
    track: 'field',
    summary: {
      sv: 'Mekanisk och elektrisk integration runt ett skyddat laserområde med sensorflytt, montage, linjering och funktionsverifiering.',
      en: 'Mechanical and electrical integration around a protected laser area including sensor relocation, installation, alignment, and functional verification.',
    },
    problem: {
      sv: 'Skydd, sensorer och mekanik behövde byggas om och linjeras utan att kompromissa med säker funktion eller produktionsstart.',
      en: 'Guards, sensors, and mechanics needed modification and alignment without compromising safe function or production restart.',
    },
    diagnosis: {
      sv: 'Mekaniska toleranser, chuck/fixtur, sensorer och säkerhetsvillkor kontrollerades tillsammans.',
      en: 'Mechanical tolerances, chuck/fixture alignment, sensors, and safety conditions were checked together.',
    },
    action: {
      sv: 'Montage, sensorflytt och finjustering genomfördes tillsammans med relevanta parter på site.',
      en: 'Installation, sensor relocation, and fine alignment were carried out with the relevant onsite teams.',
    },
    verification: {
      sv: 'Funktion och säkerhetsrelaterade villkor kontrollerades före överlämning till fortsatt produktionstest.',
      en: 'Function and safety-related conditions were checked before handover for continued production testing.',
    },
    technologies: ['Electrical installation', 'Safety sensors', 'Mechanical alignment', 'Commissioning', 'On-site troubleshooting'],
    visual: 'service',
  },
  {
    id: 'weber-zebra-communication',
    category: { sv: 'Automation / Kommunikation', en: 'Automation / Communication' },
    title: { sv: 'Weber & Zebra – kommunikationsfelsökning', en: 'Weber & Zebra – Communication Troubleshooting' },
    period: '2026',
    track: 'field',
    summary: {
      sv: 'Felsökning av återkommande kommunikationsproblem mellan etikettapplikator, skrivare och maskinstyrning i produktion.',
      en: 'Troubleshooting recurring communication issues between a label applicator, printer, and machine control in production.',
    },
    problem: {
      sv: 'Etikettering fungerade inte stabilt när signaler, timing eller konfiguration mellan delsystemen hamnade ur sekvens.',
      en: 'Labelling became unstable when signals, timing, or configuration between the subsystems drifted out of sequence.',
    },
    diagnosis: {
      sv: 'Signalväxling, timing, printer/applicator-inställningar och sekvenslogik kontrollerades tillsammans.',
      en: 'Signal transitions, timing, printer/applicator settings, and sequence logic were checked together.',
    },
    action: {
      sv: 'Kommunikationskedjan avgränsades stegvis för att identifiera vilka villkor som gjorde processen instabil.',
      en: 'The communication chain was narrowed down step by step to identify the conditions making the process unstable.',
    },
    verification: {
      sv: 'Funktionen verifierades genom kontrollerade produktionsnära tester efter justering av relevanta signal- och konfigurationspunkter.',
      en: 'Function was verified through controlled production-oriented tests after adjusting the relevant signal and configuration points.',
    },
    technologies: ['Weber applicator', 'Zebra printer', 'PLC signals', 'Timing', 'Sequence logic'],
    visual: 'service',
    links: [
      { name: { sv: 'LinkedIn – offentlig projektöversikt', en: 'LinkedIn – public project overview' }, url: 'https://www.linkedin.com/in/ibbo-abdoli/' },
    ],
  },
  {
    id: 'sorting-height-s7-1200',
    category: { sv: 'Lärprojekt / PLC', en: 'Learning Project / PLC' },
    title: { sv: 'Sorting by Height – Factory I/O & S7-1200', en: 'Sorting by Height – Factory I/O & S7-1200' },
    period: '2026',
    track: 'lab',
    summary: {
      sv: 'Ett tydligt lärprojekt för sensorbaserad sortering med Factory I/O och Siemens TIA Portal S7-1200.',
      en: 'A focused learning project for sensor-based sorting using Factory I/O and Siemens TIA Portal S7-1200.',
    },
    problem: {
      sv: 'Skapa en enkel och begriplig sorteringssekvens baserad på höjddetektering från sensorer.',
      en: 'Build a simple and understandable sorting sequence based on sensor height detection.',
    },
    diagnosis: {
      sv: 'I/O-signaler och sorteringsvillkor verifierades i simuleringen innan logiken kördes som hel sekvens.',
      en: 'I/O signals and sorting conditions were verified in simulation before running the full sequence.',
    },
    action: {
      sv: 'PLC-logik byggdes i TIA Portal och kopplades mot Factory I/O för visuell simulering och test.',
      en: 'PLC logic was built in TIA Portal and connected to Factory I/O for visual simulation and testing.',
    },
    verification: {
      sv: 'Projektet publicerades öppet som ett övnings- och demonstrationscase på GitHub och LinkedIn.',
      en: 'The project was published publicly as a learning and demonstration case on GitHub and LinkedIn.',
    },
    technologies: ['Siemens S7-1200', 'TIA Portal', 'Factory I/O', 'Sensors', 'PLC logic'],
    visual: 'serial',
    links: [
      { name: { sv: 'GitHub – källkod & projekt', en: 'GitHub – source & project' }, url: 'https://github.com/ibboabdolii/sorting-by-height-factoryio-s7-1200' },
      { name: { sv: 'LinkedIn – projektinlägg', en: 'LinkedIn – project post' }, url: 'https://www.linkedin.com/posts/ibbo-abdoli_github-ibboabdoliisorting-by-height-factoryio-s7-activity-7406995237073698816-GAY6' },
    ],
  },
  {
    id: 'proffera-saas',
    category: { sv: 'Personligt projekt / SaaS', en: 'Personal Project / SaaS' },
    title: { sv: 'Proffera – AI-assisterad SaaS & engineering workflow', en: 'Proffera – AI-assisted SaaS & Engineering Workflow' },
    period: '2026',
    track: 'personal',
    summary: {
      sv: 'Ett personligt SaaS-projekt där jag arbetar med produktutveckling, webb, CI/CD, observability och strukturerade AI-assisterade utvecklingsflöden.',
      en: 'A personal SaaS project where I work with product development, web engineering, CI/CD, observability, and structured AI-assisted development workflows.',
    },
    problem: {
      sv: 'Projektet behöver kombinera produktutveckling med säkra releaser, testbarhet och tydliga arbetsflöden utan att tappa kontroll över produktion.',
      en: 'The project needs to combine product development with safe releases, testability, and clear workflows without losing control of production.',
    },
    diagnosis: {
      sv: 'Deployment, GitHub Actions, preview-miljöer, felrapportering och produktflöden granskas som ett sammanhängande system.',
      en: 'Deployments, GitHub Actions, preview environments, error reporting, and product flows are treated as one connected system.',
    },
    action: {
      sv: 'Jag använder branch/PR-flöden, automatiska kontroller, preview-deployments och observability för att minska risken i förändringar.',
      en: 'I use branch/PR workflows, automated checks, preview deployments, and observability to reduce change risk.',
    },
    verification: {
      sv: 'Ändringar verifieras i preview och genom checks före merge; produktion och rollback hålls separerade från experiment.',
      en: 'Changes are verified in preview and through checks before merge; production and rollback are kept separate from experiments.',
    },
    technologies: ['Next.js', 'TypeScript', 'Vercel', 'GitHub Actions', 'Sentry', 'PostgreSQL', 'AI-assisted development'],
    visual: 'software',
    links: [
      { name: { sv: 'Öppna Proffera', en: 'Open Proffera' }, url: 'https://proffera.se' },
      { name: { sv: 'GitHub – Proffera', en: 'GitHub – Proffera' }, url: 'https://github.com/ibboabdoli-ai/Proffera' },
    ],
  },
];

export const portfolioContact = {
  email: 'ibbo.abdoli@gmail.com',
  website: 'https://www.ibboabdoli.com',
  aiPortfolio: 'https://ai.ibboabdoli.com',
  linkedin: 'https://www.linkedin.com/in/ibbo-abdoli',
  github: 'https://github.com/ibboabdolii',
  booking15: 'https://cal.com/ibboabdoli/15min',
  booking30: 'https://cal.com/ibboabdoli/30min',
};

export const portfolioCv = {
  sv: '/Ibbo_Abdoli_CV_2026_SV_Final.pdf',
  en: '/Ibbo_Abdoli_CV_2026_EN_Final.pdf',
  updated: '2026',
};

export function localized(value: LocalizedText, language: PortfolioLanguage) {
  return value[language];
}

export function projectsToPrompt(language: PortfolioLanguage = 'en') {
  return portfolioProjects
    .map((project, index) => {
      const publicLinks = project.links?.length
        ? `\n- Public evidence/links: ${project.links
            .map((link) => `${localized(link.name, language)}: ${link.url}`)
            .join(' | ')}`
        : '';

      return `${index + 1}. ${localized(project.title, language)} (${project.period})\n` +
        `- Portfolio section: ${project.track}\n` +
        `- ${localized(project.summary, language)}\n` +
        `- Problem: ${localized(project.problem, language)}\n` +
        `- Diagnosis: ${localized(project.diagnosis, language)}\n` +
        `- Action: ${localized(project.action, language)}\n` +
        `- Verification: ${localized(project.verification, language)}\n` +
        `- Technologies: ${project.technologies.join(', ')}` +
        publicLinks;
    })
    .join('\n\n');
}

export function skillsToPrompt(language: PortfolioLanguage = 'en') {
  return portfolioSkills
    .map((section) => {
      const items = section.skills.map((skill) => `- ${localized(skill, language)}`).join('\n');
      return `${localized(section.category, language)}\n${items}`;
    })
    .join('\n\n');
}
