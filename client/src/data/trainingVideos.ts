/**
 * Design philosophy: Precision in Motion — training content is organized as a precise, searchable learning sequence rather than a raw list of links.
 */

export type TrainingCategory = "Clinical sessions" | "Image acquisition" | "3D workspace" | "Implant planning" | "Image review";

export type TrainingVideo = {
  id: string;
  title: string;
  category: TrainingCategory;
  presenter?: string;
  description: string;
  learningPoints: string[];
};

export const trainingVideos: TrainingVideo[] = [
  {
    id: "ZVuf8g6McZ0",
    title: "The GP’s Guide to Cone Beam Everyday Use",
    category: "Clinical sessions",
    presenter: "Dr. Tony Tomaro",
    description: "A practical clinical presentation on incorporating cone beam imaging into everyday general dentistry and using three-dimensional information to support routine diagnostic decisions.",
    learningPoints: ["Everyday CBCT indications", "Clinical decision support", "Practice integration"],
  },
  {
    id: "D0k_uQR81YU",
    title: "Integrating CBCT into Your Practice",
    category: "Clinical sessions",
    presenter: "Dr. Lou Graham",
    description: "A practice-focused session covering how CBCT can become part of the clinical workflow, from identifying appropriate cases to communicating image findings with patients.",
    learningPoints: ["Workflow adoption", "Case selection", "Patient communication"],
  },
  {
    id: "CswZyHJFCOQ",
    title: "Emergency Exams: The New Norm",
    category: "Clinical sessions",
    presenter: "Dr. Lou Graham",
    description: "A recorded clinical discussion on approaching emergency examinations and using diagnostic imaging to support focused evaluation in time-sensitive situations.",
    learningPoints: ["Emergency examination", "Focused imaging", "Clinical triage"],
  },
  {
    id: "I70n4B2QFsk",
    title: "Capture a 15 × 13 FOV Image",
    category: "Image acquisition",
    description: "A step-by-step demonstration of patient preparation, positioning and acquisition for a 15 × 13 cm field-of-view scan.",
    learningPoints: ["Patient positioning", "FOV selection", "Scan capture"],
  },
  {
    id: "XXkUMPKnpys",
    title: "Capture a Full-Arch Scan",
    category: "Image acquisition",
    description: "This tutorial demonstrates the workflow for acquiring a complete arch, with attention to positioning and consistent image capture.",
    learningPoints: ["Full-arch workflow", "Positioning sequence", "Acquisition review"],
  },
  {
    id: "NQXg2rvHQLk",
    title: "Capture a Panorex Image",
    category: "Image acquisition",
    description: "A guided panoramic acquisition tutorial covering patient setup, alignment and the steps required to produce a Panorex image.",
    learningPoints: ["Panoramic setup", "Patient alignment", "Image acquisition"],
  },
  {
    id: "JssVRkZLe6g",
    title: "3D Settings and Templates",
    category: "3D workspace",
    description: "Learn how to configure the three-dimensional workspace and use templates to establish repeatable viewing arrangements for common tasks.",
    learningPoints: ["3D preferences", "Workspace templates", "Repeatable layouts"],
  },
  {
    id: "Nwaz2T2j2II",
    title: "Alt Key and Pinpoint in Three Planar Views",
    category: "3D workspace",
    description: "A focused explanation of keyboard-assisted navigation and pinpoint positioning across axial, coronal and sagittal views.",
    learningPoints: ["Three-planar navigation", "Alt-key control", "Point localization"],
  },
  {
    id: "N_V2Np9kYU4",
    title: "Annotate Text and Add Arrow Labels",
    category: "3D workspace",
    description: "This lesson shows how to add text and directional arrow annotations so findings can be identified clearly in saved images and reports.",
    learningPoints: ["Text annotations", "Arrow labels", "Finding communication"],
  },
  {
    id: "xJDO3jND690",
    title: "Capture Images to Print, Save or Email",
    category: "3D workspace",
    description: "A practical guide to capturing a view from the software and preparing it for printing, local storage or electronic sharing.",
    learningPoints: ["Screen capture", "Export options", "Image sharing"],
  },
  {
    id: "Js2Mc9aTgNA",
    title: "CPR Functions and Applications",
    category: "3D workspace",
    description: "Explore curved planar reformation tools and learn how reconstructed views can follow curved anatomy for focused inspection.",
    learningPoints: ["CPR navigation", "Curved anatomy", "Reformatted views"],
  },
  {
    id: "P4j0ZzzhGbg",
    title: "Create, Save and Recall Scenes",
    category: "3D workspace",
    description: "Learn to save a configured view as a scene and recall it later, supporting consistent review and presentation of a case.",
    learningPoints: ["Scene creation", "Saved viewpoints", "Case presentation"],
  },
  {
    id: "VU9OuIEsEvg",
    title: "Crop, 3D Slab and MIP",
    category: "3D workspace",
    description: "A walkthrough of volume cropping, slab controls and maximum intensity projection for isolating and reviewing relevant anatomy.",
    learningPoints: ["Volume cropping", "3D slab control", "MIP visualization"],
  },
  {
    id: "sfb12KPAgk8",
    title: "Fusion Stitch",
    category: "3D workspace",
    description: "This tutorial introduces the fusion-stitch workflow used to combine compatible acquisitions into a broader image dataset.",
    learningPoints: ["Dataset selection", "Fusion workflow", "Stitched review"],
  },
  {
    id: "PVjz6WDY0Y8",
    title: "Implant Editor Library",
    category: "Implant planning",
    description: "Learn how to access and work with the implant library, including the tools used to select and manage implant representations in a plan.",
    learningPoints: ["Implant library", "Component selection", "Plan setup"],
  },
  {
    id: "O3SK2L3kqNM",
    title: "Implant Planning Functions",
    category: "Implant planning",
    description: "A guided overview of implant planning controls for placing, orienting and reviewing a virtual implant in the three-dimensional dataset.",
    learningPoints: ["Virtual placement", "Orientation controls", "Plan review"],
  },
  {
    id: "gYkRSYe7Ga0",
    title: "Mandibular Canal Marking",
    category: "Implant planning",
    description: "This lesson demonstrates how to trace and display the mandibular canal as a visual reference during planning and image review.",
    learningPoints: ["Canal tracing", "Anatomical reference", "Planning context"],
  },
  {
    id: "uAlnYViYUGM",
    title: "Measurement Functions",
    category: "Implant planning",
    description: "Learn how to use the software’s linear and spatial measurement controls to document distances in the image dataset.",
    learningPoints: ["Linear measurement", "Distance documentation", "Planning checks"],
  },
  {
    id: "N0pR0X613JE",
    title: "Mouse Functions for Adjusting Images",
    category: "Image review",
    description: "A concise introduction to mouse controls for moving through views, adjusting image presentation and navigating a dataset efficiently.",
    learningPoints: ["Mouse navigation", "View adjustment", "Workflow shortcuts"],
  },
  {
    id: "ekmUCulM9SU",
    title: "Load Patient Scans Side by Side",
    category: "Image review",
    description: "This tutorial explains how to load multiple datasets and arrange patient scans side by side for comparison and follow-up review.",
    learningPoints: ["Multi-data loading", "Side-by-side review", "Case comparison"],
  },
  {
    id: "TeZuuX7IOdg",
    title: "Multiplanar CT Slices and Crossbars",
    category: "Image review",
    description: "Learn to navigate multiplanar CT slices and use linked crossbars to keep the same anatomical location synchronized across views.",
    learningPoints: ["MPR slices", "Linked crossbars", "Synchronized navigation"],
  },
  {
    id: "Zgp2i3pXRJA",
    title: "Panoramic Image Functions",
    category: "Image review",
    description: "A review of panoramic reconstruction tools, including the controls used to shape and inspect the panoramic image.",
    learningPoints: ["Panoramic reconstruction", "Image controls", "Arch review"],
  },
  {
    id: "iBmWqZMStmc",
    title: "Patient List Page and Loading",
    category: "Image review",
    description: "An orientation to the patient list, case selection and the steps used to load an examination into the viewing workspace.",
    learningPoints: ["Patient list", "Case selection", "Exam loading"],
  },
  {
    id: "TAsriZk35CI",
    title: "Pixel Density Tool and Color Template",
    category: "Image review",
    description: "This lesson introduces pixel-density inspection and the use of color templates to visualize value ranges within an image.",
    learningPoints: ["Pixel values", "Color templates", "Density visualization"],
  },
  {
    id: "FTOyHfrhwo0",
    title: "Raysum for Smoothing Coarse and Grainy Images",
    category: "Image review",
    description: "Learn how the Raysum display option can be used to adjust the presentation of images that appear coarse or grainy during review.",
    learningPoints: ["Raysum display", "Image smoothing", "Review settings"],
  },
];

export const trainingCategories = ["All", "Clinical sessions", "Image acquisition", "3D workspace", "Implant planning", "Image review"] as const;
