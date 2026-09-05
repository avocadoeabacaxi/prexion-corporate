/**
 * Design philosophy: Precision in Motion — factual product data presented as concise technical evidence.
 */

export type Product = {
  slug: string;
  name: string;
  family: "Elite" | "Excelsior" | "Evolve";
  category: "CBCT" | "2D" | "Intraoral";
  modality: string;
  eyebrow: string;
  summary: string;
  image: string;
  heroMetric: string;
  heroMetricLabel: string;
  metrics: Array<{ value: string; label: string }>;
  highlights: Array<{ title: string; copy: string }>;
  applications: string[];
  fovs?: string[];
};

export const products: Product[] = [
  {
    slug: "elite",
    name: "PreXion Elite",
    family: "Elite",
    category: "CBCT",
    modality: "CBCT · PAN · CEPH",
    eyebrow: "The new flagship",
    summary:
      "A premium 3-in-1 imaging platform built around Dual Focal Spot technology, Ultra HD sensing and continuous high-flow performance.",
    image: "/manus-storage/elite-product_d4a053f9.webp",
    heroMetric: "0.17 mm",
    heroMetricLabel: "virtual focal spot for CBCT",
    metrics: [
      { value: "48 μm", label: "Ultra HD voxel" },
      { value: "16 × 21", label: "maximum FOV" },
      { value: "10 years", label: "warranty" },
      { value: "300+", label: "exams per day" },
    ],
    highlights: [
      {
        title: "Dual Focal Spot",
        copy: "Dedicated focal performance for CBCT and for PAN/CEPH, optimizing each modality for its diagnostic purpose.",
      },
      {
        title: "Ultra HD sensor",
        copy: "High-resolution acquisition designed to reveal delicate anatomy, fracture lines and critical treatment regions.",
      },
      {
        title: "PMC + MAR",
        copy: "Motion correction and multi-level metal artifact reduction preserve diagnostic detail while reducing repeat exposure.",
      },
      {
        title: "Advanced Position System",
        copy: "A fully adjustable carbon-fiber support system improves patient stability and acquisition consistency.",
      },
    ],
    applications: ["Endodontics", "Implantology", "Orthodontics", "Maxillofacial Surgery"],
    fovs: ["5 × 5", "9 × 6", "9 × 9", "16 × 9", "16 × 15", "16 × 21"],
  },
  {
    slug: "excelsior-mid",
    name: "Excelsior MID",
    family: "Excelsior",
    category: "CBCT",
    modality: "CBCT · PAN · CEPH",
    eyebrow: "Medium field. Maximum confidence.",
    summary:
      "A multi-field CBCT system combining precise 3D imaging, low-dose workflows and advanced digital planning for modern dentistry.",
    image: "/manus-storage/excelsior-mid_9caa2e42.png",
    heroMetric: "16 × 9",
    heroMetricLabel: "maximum field of view",
    metrics: [
      { value: "75 μm", label: "minimum voxel" },
      { value: "4 FOVs", label: "focused acquisition" },
      { value: "PMC", label: "motion correction" },
      { value: "MAR", label: "artifact reduction" },
    ],
    highlights: [
      { title: "AI-assisted cephalometry", copy: "Automated landmark detection accelerates orthodontic evaluation and improves consistency." },
      { title: "3D implant planning", copy: "Plan implant position, dimensions, depth and angulation with a real-size fixture library." },
      { title: "Open digital workflow", copy: "DICOM fusion, STL conversion and flexible reporting connect diagnosis with CAD/CAM and 3D printing." },
      { title: "Integrated patient management", copy: "Secure, network-ready communication supports multi-room practices and existing infrastructure." },
    ],
    applications: ["Periodontics", "Implantology", "Orthodontics", "General Dentistry"],
    fovs: ["5 × 5", "9 × 6", "9 × 9", "16 × 9"],
  },
  {
    slug: "excelsior-max",
    name: "Excelsior MAX",
    family: "Excelsior",
    category: "CBCT",
    modality: "Large-field CBCT · PAN · CEPH",
    eyebrow: "Large field. Complete perspective.",
    summary:
      "A large-field system designed for practices that need complete craniofacial coverage without compromising diagnostic detail.",
    image: "/manus-storage/excelsior-max_734453dc.png",
    heroMetric: "16 × 21",
    heroMetricLabel: "maximum field of view",
    metrics: [
      { value: "75 μm", label: "minimum voxel" },
      { value: "6 FOVs", label: "adaptive coverage" },
      { value: "3D", label: "implant planning" },
      { value: "AI", label: "cephalometry support" },
    ],
    highlights: [
      { title: "Craniofacial coverage", copy: "Fields up to 16 × 21 cm support broad diagnostic and surgical planning needs." },
      { title: "Clinical reporting", copy: "Flexible 2D and 3D templates simplify documentation and image communication." },
      { title: "Volumetric tools", copy: "Segment airways, sinuses, mandible and teeth with corresponding volume measurements." },
      { title: "Virtual endoscopy", copy: "Curved planar reformatting enables internal airway visualization along a defined path." },
    ],
    applications: ["Maxillofacial Surgery", "Orthodontics", "Implantology", "Airway Analysis"],
    fovs: ["5 × 5", "9 × 6", "9 × 9", "16 × 9", "16 × 15", "16 × 21"],
  },
  {
    slug: "excelsior-endo",
    name: "Excelsior ENDO",
    family: "Excelsior",
    category: "CBCT",
    modality: "Ultra-high-resolution CBCT",
    eyebrow: "See what others cannot.",
    summary:
      "A high-resolution tomograph optimized for endodontic diagnostics, powered by a dedicated flat-panel detector and exceptionally fine voxel size.",
    image: "/manus-storage/excelsior-endo_6e266067.png",
    heroMetric: "48 μm",
    heroMetricLabel: "isotropic voxel",
    metrics: [
      { value: "0.2 mm", label: "focal spot" },
      { value: "14 × 9", label: "maximum FOV" },
      { value: "PMC", label: "motion correction" },
      { value: "MAR", label: "artifact reduction" },
    ],
    highlights: [
      { title: "Endodontic detail", copy: "Designed to visualize subtle anatomy and pathology beyond traditional CBCT standards." },
      { title: "Focused acquisition", copy: "Multiple fields of view concentrate resolution on the anatomy relevant to the clinical question." },
      { title: "Diagnostic continuity", copy: "Motion and metal artifact tools help preserve image usability in challenging cases." },
      { title: "Digital planning", copy: "STL conversion, DICOM fusion and reporting connect fine detail to the broader treatment workflow." },
    ],
    applications: ["Endodontics", "Microsurgery", "Root Fracture Assessment", "Implantology"],
    fovs: ["5 × 5", "9 × 6", "9 × 9", "14 × 9"],
  },
  {
    slug: "evolve-2d",
    name: "Evolve 2D",
    family: "Evolve",
    category: "2D",
    modality: "PAN · Optional CEPH",
    eyebrow: "Start focused. Evolve when ready.",
    summary:
      "A user-friendly panoramic platform with adaptive filters, multislice navigation and a clear path to future 3D capability.",
    image: "/manus-storage/evolve-2d_da1e0fb8.jpg",
    heroMetric: "41",
    heroMetricLabel: "panoramic slices",
    metrics: [
      { value: "5", label: "adaptive filters" },
      { value: "2D", label: "dedicated PAN" },
      { value: "CEPH", label: "optional arm" },
      { value: "3D", label: "upgrade path" },
    ],
    highlights: [
      { title: "Adaptive image filters", copy: "Tune image presentation to clinical preference without adding workflow complexity." },
      { title: "Multislice navigation", copy: "Move through 41 panoramic slices to better visualize the structures of interest." },
      { title: "Enhanced Ortho", copy: "Dedicated reconstruction supports greater definition in orthodontic regions." },
      { title: "Expandable platform", copy: "Begin with focused 2D imaging and preserve a path to expanded capability." },
    ],
    applications: ["General Dentistry", "Orthodontics", "Preventive Care", "Treatment Planning"],
  },
  {
    slug: "evolve-3d",
    name: "Evolve 3D",
    family: "Evolve",
    category: "CBCT",
    modality: "CBCT · PAN · Optional CEPH",
    eyebrow: "One intelligent imaging platform.",
    summary:
      "A complete small-field 3D solution prepared for high-flow practices, combining precise acquisition with intelligent reconstruction algorithms.",
    image: "/manus-storage/evolve-3d_3777a696.png",
    heroMetric: "75 μm",
    heroMetricLabel: "minimum voxel",
    metrics: [
      { value: "9 × 9", label: "maximum FOV" },
      { value: "PMC", label: "motion correction" },
      { value: "3 levels", label: "MAR processing" },
      { value: "3-in-1", label: "available platform" },
    ],
    highlights: [
      { title: "UHD endodontic mode", copy: "Focused high-resolution acquisition supports demanding small-structure diagnosis." },
      { title: "Patient Motion Correction", copy: "Automatic processing corrects imperfections caused by patient micro-movements." },
      { title: "Metal Artifact Reduction", copy: "Three selectable levels reduce interference from restorations, implants and endodontic materials." },
      { title: "Smart Contrast", copy: "Area-aware processing improves homogeneity, contrast and diagnostic readability." },
    ],
    applications: ["General Dentistry", "Endodontics", "Implantology", "Orthodontics"],
    fovs: ["5 × 5", "9 × 6", "9 × 9"],
  },
  {
    slug: "evolve-scan",
    name: "Evolve Scan",
    family: "Evolve",
    category: "Intraoral",
    modality: "Intraoral optical scanner",
    eyebrow: "Light in hand. Fluid in workflow.",
    summary:
      "A compact intraoral scanner built for speed, comfort and open digital workflows, with intelligent FLOW AI assistance.",
    image: "/manus-storage/evolve-scan_60fc2a09.png",
    heroMetric: "119 g",
    heroMetricLabel: "scanner weight",
    metrics: [
      { value: "59 sec", label: "complete arch" },
      { value: "30 FPS", label: "scanning frequency" },
      { value: "250", label: "tip cycles" },
      { value: "Open", label: "STL · PLY · OBJ" },
    ],
    highlights: [
      { title: "FLOW AI", copy: "Intelligent assistance supports a more intuitive and efficient scanning experience." },
      { title: "Heat-free anti-fog", copy: "Low-energy defogging helps maintain visibility without adding heat at the tip." },
      { title: "Open CAD/CAM", copy: "Standard files integrate with open restorative, orthodontic and planning systems." },
      { title: "No annual software fee", copy: "The Evolve IOS software license is included with the scanner system." },
    ],
    applications: ["Restorative", "Aligners", "Prosthetics", "Study Models"],
  },
  {
    slug: "evolve-sensor",
    name: "Evolve Intraoral Sensor",
    family: "Evolve",
    category: "Intraoral",
    modality: "Digital intraoral sensor",
    eyebrow: "High-definition imaging in seconds.",
    summary:
      "A compact digital sensor that replaces film with immediate high-definition images, flexible reporting and efficient patient image management.",
    image: "/manus-storage/evolve-sensor_0cacd3aa.jpg",
    heroMetric: "≈ 5 sec",
    heroMetricLabel: "image acquisition",
    metrics: [
      { value: "CsI", label: "sensor technology" },
      { value: "USB 2.0", label: "replaceable cable" },
      { value: "Unlimited", label: "software licenses" },
      { value: "25 lp", label: "theoretical resolution" },
    ],
    highlights: [
      { title: "Sharper images", copy: "Cesium iodide technology and advanced processing support real-time diagnostic clarity." },
      { title: "Organized workflow", copy: "Register, capture, organize, retrieve and share patient images in seconds." },
      { title: "Flexible reporting", copy: "Export common image formats and create PDF reports for clinical communication." },
      { title: "Broad compatibility", copy: "Works with available X-ray equipment and supports multi-computer installation." },
    ],
    applications: ["Diagnostics", "Patient Education", "Treatment Documentation", "General Dentistry"],
  },
  {
    slug: "evolve-xray",
    name: "Evolve X-Ray",
    family: "Evolve",
    category: "Intraoral",
    modality: "Hand-held dental X-ray",
    eyebrow: "Precision that moves with you.",
    summary:
      "A compact hand-held X-ray system designed for mobility, controlled exposure and compatibility with modern intraoral workflows.",
    image: "/manus-storage/evolve-xray_40814aa8.png",
    heroMetric: "60 kVp",
    heroMetricLabel: "nominal voltage",
    metrics: [
      { value: "2.5 mA", label: "tube current" },
      { value: "0.4 mm", label: "focal spot" },
      { value: "0.01–1 s", label: "exposure range" },
      { value: "Li-ion", label: "rechargeable" },
    ],
    highlights: [
      { title: "Mobile by design", copy: "A light, compact form supports efficient positioning across different care settings." },
      { title: "Directed exposure", copy: "A radiopaque collimator minimizes leakage and directs radiation toward the exam target." },
      { title: "Workflow ready", copy: "Compatible with digital sensors, phosphor plates and radiographic film." },
      { title: "High-frequency generator", copy: "Constant-power generation supports controlled, repeatable intraoral imaging." },
    ],
    applications: ["General Dentistry", "Emergency Care", "Mobile Dentistry", "Intraoral Radiography"],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
