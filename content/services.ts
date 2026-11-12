export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  /** Original card title + description from the existing site (kept verbatim). */
  title: string;
  short: string;
  /** SEO */
  seoTitle: string;
  metaDescription: string;
  h1: string;
  image: string;
  imageAlt: string;
  intro: string[];
  includes: string[];
  process: { step: string; detail: string }[];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "architectural-design",
    title: "Architectural & Engineering Design",
    short: "Comprehensive architectural planning and engineering solutions for all project types.",
    seoTitle: "Architects in Hyderabad & Telangana | House Plans | BBMC",
    metaDescription:
      "Residential and commercial architects in Hyderabad & Telangana. Vastu-compliant house plans, duplex, G+1, G+2 and villa designs by BBMC since 1995.",
    h1: "Architectural Design & House Plans in Hyderabad & Telangana",
    image: "/images/projects/twin-storey-residence.webp",
    imageAlt: "Architect at BBMC preparing a vastu-compliant house plan in Hyderabad",
    intro: [
      "BBMC has been designing homes, apartments, commercial complexes and institutional buildings across Hyderabad since 1995. Every plan starts with your plot, your budget and the way your family or business actually uses space, and is then refined for light, ventilation, structure and Vaasthu.",
      "We work on independent houses, duplex and triplex homes, G+1 to G+5 residential buildings, villas, apartments, shops, offices, convention halls and mixed-use complexes. Plans are prepared for every plot size and facing, including 30x40, 30x50, 40x60 and larger layouts.",
    ],
    includes: [
      "Site visit and plot analysis (facing, road width, setbacks)",
      "Concept layouts and floor plans for every level",
      "Vaasthu-compliant room placement",
      "Working drawings for construction",
      "Front elevation and 3D views",
      "Drawings for building permission submission",
      "Coordination with structural design and interiors",
    ],
    process: [
      { step: "Consultation", detail: "We understand your requirements, budget and timeline." },
      { step: "Site study", detail: "Plot measurement, facing, setbacks and local rules." },
      { step: "Concept plans", detail: "Layout options with Vaasthu placement for your review." },
      { step: "Final drawings", detail: "Working drawings, elevation and approval drawings." },
      { step: "Execution support", detail: "Site visits and clarifications during construction." },
    ],
    faqs: [
      {
        q: "Do you design houses for small plots like 30x40?",
        a: "Yes. We regularly design for 30x40, 30x50, 40x60 and irregular plots, making the most of every square foot while keeping the plan Vaasthu-compliant.",
      },
      {
        q: "Can you design both residential and commercial buildings?",
        a: "Yes. Our work includes independent houses, villas, apartments, commercial complexes, offices, convention halls and mixed-use buildings.",
      },
      {
        q: "Will the plan follow Vaasthu?",
        a: "Every BBMC design follows Vaasthu principles as standard, balanced with modern planning, light and ventilation.",
      },
      {
        q: "Do you help with building permission drawings?",
        a: "Yes. We prepare the drawings needed for building permission and guide you through the approval process.",
      },
    ],
    related: ["vastu-consultation", "structural-engineering", "building-elevation-design"],
  },
  {
    slug: "structural-engineering",
    title: "Structural Engineering",
    short: "Expert structural analysis and design ensuring safety and durability.",
    seoTitle: "Structural Engineer in Hyderabad | RCC Design | BBMC Hyderabad",
    metaDescription:
      "Structural engineers in Hyderabad & Telangana. RCC design, structural drawings, stability checks and safe, economical designs by BBMC since 1995.",
    h1: "Structural Engineering & RCC Design in Hyderabad",
    image: "/images/services/structural-engineering.webp",
    imageAlt: "BBMC structural engineer inspecting RCC work at a construction site in Hyderabad",
    intro: [
      "A beautiful design is only as good as the structure that holds it up. BBMC's engineering team designs foundations, columns, beams and slabs that are safe, durable and economical, so you don't overspend on steel and concrete or compromise on safety.",
      "We provide structural design for new independent houses, multi-storey residential buildings, commercial complexes and additional floors on existing buildings.",
    ],
    includes: [
      "Structural analysis and RCC design",
      "Foundation, column, beam and slab drawings",
      "Reinforcement (bar bending) details",
      "Design for additional floors on existing buildings",
      "Structural stability assessment",
      "Site supervision at critical stages",
    ],
    process: [
      { step: "Review", detail: "Study the architectural plan and soil / site conditions." },
      { step: "Analysis", detail: "Load calculation and structural modelling." },
      { step: "Design", detail: "Economical member sizing and reinforcement design." },
      { step: "Drawings", detail: "Clear structural drawings for the site team." },
      { step: "Supervision", detail: "Checks at footing, column and slab stages." },
    ],
    faqs: [
      {
        q: "Why do I need a structural engineer for a house?",
        a: "A structural design ensures the building safely carries its loads, avoids cracks and settlement, and uses only as much steel and concrete as needed.",
      },
      {
        q: "Can you check whether I can add another floor?",
        a: "Yes. We assess the existing structure and advise whether an additional floor is possible and what strengthening may be needed.",
      },
      {
        q: "Do you visit the site during construction?",
        a: "Yes, we can inspect key stages such as footing, column and slab reinforcement before concreting.",
      },
    ],
    related: ["architectural-design", "construction-renovation", "estimates-valuations"],
  },
  {
    slug: "interior-design",
    title: "Interior Design & Space Planning",
    short: "Transform spaces with creative interior designs that blend aesthetics with functionality.",
    seoTitle: "Interior Designers in Hyderabad & Telangana | BBMC",
    metaDescription:
      "Home, office, restaurant and cafe interior designers in Hyderabad & Telangana. Modular kitchens, living rooms, bedrooms and space planning by BBMC.",
    h1: "Interior Designers in Hyderabad & Telangana",
    image: "/images/interiors/luxury-living-room.webp",
    imageAlt: "Modern living room interior designed by BBMC in Hyderabad",
    intro: [
      "Our interior team plans spaces that look good and work well every day. From a 2BHK flat to a villa, a cafe or a corporate office, we combine layout, materials, lighting and storage into one clear design.",
      "Because BBMC also handles architecture and Vaasthu, interiors are planned in harmony with your building, avoiding costly changes later.",
    ],
    includes: [
      "Space planning and furniture layouts",
      "Living, dining, bedroom and kids' room design",
      "Modular kitchen and wardrobe design",
      "False ceiling and lighting design",
      "Restaurant, cafe and office interiors",
      "Material and finish selection",
      "3D views before execution",
    ],
    process: [
      { step: "Brief", detail: "Your style, needs and budget." },
      { step: "Layout", detail: "Space planning and furniture placement." },
      { step: "Design", detail: "Materials, colours, lighting and 3D views." },
      { step: "Drawings", detail: "Detailed drawings for carpenters and contractors." },
      { step: "Execution", detail: "Supervision through to handover." },
    ],
    faqs: [
      {
        q: "Do you design interiors for flats and apartments?",
        a: "Yes, we design interiors for apartments, independent houses and villas of all sizes.",
      },
      {
        q: "Do you also design commercial interiors?",
        a: "Yes. Our portfolio includes cafes, restaurants, offices and other commercial spaces.",
      },
      {
        q: "Can interiors follow Vaasthu?",
        a: "Yes. We consider Vaasthu for furniture placement, kitchen layout, bed direction and colours.",
      },
    ],
    related: ["vastu-consultation", "architectural-design", "construction-renovation"],
  },
  {
    slug: "vastu-consultation",
    title: "Vaasthu Consultation",
    short: "Traditional Vaasthu-compliant designs for harmony and prosperity in your space.",
    seoTitle: "Vastu Consultant in Hyderabad & Telangana | BBMC",
    metaDescription:
      "Experienced vastu (Vaasthu) consultant in Hyderabad & Telangana. Vastu for plots, homes, offices and shops, plus vastu correction without demolition.",
    h1: "Vastu Consultant in Hyderabad & Telangana",
    image: "/images/interiors/pooja-room.webp",
    imageAlt: "BBMC vastu consultant reviewing a house plan with clients in Hyderabad",
    intro: [
      "Vastu (also written Vaasthu) is at the heart of every BBMC design. With over 30 years of combined architectural and Vaasthu experience, Er. Paspunoori Srinivas Gupta and the BBMC team help families and businesses plan spaces that are both practical and in harmony with traditional principles.",
      "We advise on new plots before purchase, plans before construction, and existing homes, offices and shops where corrections are needed, often without demolition.",
    ],
    includes: [
      "Plot selection and plot Vastu analysis",
      "Vastu-compliant house plans (east, west, north and south facing)",
      "Vastu for apartments and flats",
      "Vastu for offices, shops and factories",
      "Vastu correction for existing buildings",
      "Site visit with written recommendations",
    ],
    process: [
      { step: "Discuss", detail: "Share the plot / plan details and your concerns." },
      { step: "Analyse", detail: "Directions, entrance, room placement and slopes." },
      { step: "Visit", detail: "On-site study where needed." },
      { step: "Recommend", detail: "Practical corrections or a revised plan." },
    ],
    faqs: [
      {
        q: "Can you check Vastu before I buy a plot?",
        a: "Yes. Checking the plot's facing, shape and surroundings before purchase is one of the most useful times to consult us.",
      },
      {
        q: "Is it possible to correct Vastu without demolition?",
        a: "In many cases, yes. We suggest practical changes to room usage, placement and layout before recommending any structural change.",
      },
      {
        q: "Do you give Vastu consultation for apartments?",
        a: "Yes, we advise on apartments and flats, including entrance, kitchen, bedroom and puja room placement.",
      },
      {
        q: "Can I take only a Vastu consultation without other services?",
        a: "Yes. We welcome clients who need only Vaasthu consultation, as well as full design and construction projects.",
      },
    ],
    related: ["architectural-design", "interior-design", "land-surveying-plot-development"],
  },
  {
    slug: "construction-renovation",
    title: "Construction & Renovation",
    short: "Quality construction and renovation services with attention to every detail.",
    seoTitle: "House Construction & Renovation in Hyderabad, Telangana | BBMC",
    metaDescription:
      "House construction and renovation contractors in Hyderabad & Telangana. Quality construction, transparent communication and timely delivery by BBMC.",
    h1: "House Construction & Renovation in Hyderabad & Telangana",
    image: "/images/services/construction.webp",
    imageAlt: "BBMC construction team building a residential project in Hyderabad",
    intro: [
      "BBMC builds what it designs. Our construction team handles independent houses, residential buildings and commercial projects from foundation to finish, with the same attention to quality and Vaasthu that goes into our drawings.",
      "We also renovate and remodel existing buildings: from kitchen and bathroom upgrades to complete makeovers and additional floors.",
    ],
    includes: [
      "Independent house construction",
      "Residential and commercial building construction",
      "Renovation and remodelling",
      "Additional floor construction",
      "Material selection guidance",
      "Quality checks at each stage",
    ],
    process: [
      { step: "Estimate", detail: "Detailed estimate based on drawings and specifications." },
      { step: "Plan", detail: "Schedule and material planning." },
      { step: "Build", detail: "Foundation, structure, masonry and finishes." },
      { step: "Check", detail: "Quality inspection at every stage." },
      { step: "Handover", detail: "Final finishing and handover." },
    ],
    faqs: [
      {
        q: "What is the house construction cost per sq ft in Hyderabad?",
        a: "It depends on specifications, structure, finishes and site conditions. Contact us with your plot size and requirements for a detailed estimate.",
      },
      {
        q: "Do you take up renovation work?",
        a: "Yes, we handle renovation, remodelling and additional floors for homes and commercial buildings.",
      },
      {
        q: "Can I hire you only for construction with my own plan?",
        a: "Yes. We can review your drawings and take up construction, or provide design and construction together.",
      },
    ],
    related: ["builders-developers", "structural-engineering", "estimates-valuations"],
  },
  {
    slug: "builders-developers",
    title: "Builders & Developers",
    short: "Complete building solutions from foundation to finish with experienced construction teams.",
    seoTitle: "Builders & Developers in Hyderabad & Telangana | BBMC",
    metaDescription:
      "Builders and developers in Hyderabad & Telangana. Residential and commercial development from foundation to finish, with experienced teams since 1995.",
    h1: "Builders & Developers in Hyderabad & Telangana",
    image: "/images/projects/nvs-heights-tower.webp",
    imageAlt: "NVS Heights residential tower developed by BBMC builders in Hyderabad",
    intro: [
      "As builders and developers, BBMC delivers complete residential and commercial projects, combining in-house architecture, engineering and Vaasthu expertise with experienced construction teams.",
      "Landowners and investors work with us for apartments, commercial complexes and mixed-use developments, from feasibility and design through to construction and completion.",
    ],
    includes: [
      "Apartment and residential tower development",
      "Commercial and mixed-use complexes",
      "Feasibility and planning",
      "Design, approvals and construction under one roof",
      "Project management",
    ],
    process: [
      { step: "Feasibility", detail: "Land study and development potential." },
      { step: "Design", detail: "Architecture, structure and Vaasthu." },
      { step: "Approvals", detail: "Drawings and permission support." },
      { step: "Construction", detail: "End-to-end execution." },
    ],
    faqs: [
      {
        q: "Do you work with landowners on development projects?",
        a: "Yes. Contact us with your land details to discuss development options.",
      },
      {
        q: "What kind of projects have you developed?",
        a: "Our portfolio includes apartment complexes, residential towers, commercial complexes, convention halls and mixed-use buildings.",
      },
    ],
    related: ["construction-renovation", "architectural-design", "land-surveying-plot-development"],
  },
  {
    slug: "estimates-valuations",
    title: "Estimates & Valuations",
    short: "Bank-approved estimates and professional property valuations.",
    seoTitle: "Bank Loan Estimates & Property Valuation in Hyderabad | BBMC",
    metaDescription:
      "Bank-approved construction estimates and property valuations across Hyderabad & Telangana for home loans and project financing. BBMC since 1995.",
    h1: "Bank Loan Estimates & Property Valuations in Hyderabad",
    image: "/images/projects/contemporary-residence-hyderabad.webp",
    imageAlt: "Building estimate and valuation documents prepared by BBMC",
    intro: [
      "Most banks need a professional construction estimate before sanctioning a home or construction loan. BBMC prepares clear, bank-approved estimates and property valuations to help secure your project financing.",
      "Because our estimates come from the same team that designs and engineers buildings, they are realistic, detailed and easy for both you and your bank to understand.",
    ],
    includes: [
      "Construction cost estimates for bank loans",
      "Property valuation reports",
      "Detailed quantity and cost breakup",
      "Estimates for additional floors and renovation",
    ],
    process: [
      { step: "Documents", detail: "Share drawings, plot documents and loan requirements." },
      { step: "Inspection", detail: "Site visit where required." },
      { step: "Report", detail: "Estimate or valuation in the bank's required format." },
    ],
    faqs: [
      {
        q: "Will my bank accept your estimate?",
        a: "BBMC provides bank-approved estimates. Please share your bank's name and format so we can prepare it accordingly.",
      },
      {
        q: "Do you do valuation for existing properties?",
        a: "Yes, we provide professional valuation of existing properties.",
      },
    ],
    related: ["architectural-design", "construction-renovation", "building-permission-approvals"],
  },
  {
    slug: "land-surveying-plot-development",
    title: "Land Surveying & Plot Development",
    short: "Accurate land surveying and expert plot development planning.",
    seoTitle: "Land Surveying & Plot Development in Hyderabad | BBMC",
    metaDescription:
      "Land surveyors and plot development planning across Hyderabad & Telangana. Accurate measurement, layout planning and plot development by BBMC.",
    h1: "Land Surveying & Plot Development in Hyderabad",
    image: "/images/projects/balaji-benchmark-enclave.webp",
    imageAlt: "Plot development and layout planning by BBMC in Hyderabad",
    intro: [
      "Accurate measurements are the foundation of every good project. BBMC surveys plots and land, marks boundaries and prepares layouts so that design and construction start on solid ground.",
      "For larger land parcels we plan plot layouts, roads and open spaces, balancing development potential with Vaasthu.",
    ],
    includes: [
      "Plot and land measurement",
      "Boundary marking",
      "Layout and plot development planning",
      "Vaasthu analysis of plots",
    ],
    process: [
      { step: "Survey", detail: "On-site measurement." },
      { step: "Drawing", detail: "Survey drawing with dimensions." },
      { step: "Planning", detail: "Layout or plot development plan." },
    ],
    faqs: [
      {
        q: "Should I survey my plot before designing a house?",
        a: "Yes. Exact measurements prevent design errors and boundary disputes later.",
      },
      {
        q: "Do you plan layouts for larger land parcels?",
        a: "Yes, we prepare plot development and layout plans.",
      },
    ],
    related: ["vastu-consultation", "builders-developers", "architectural-design"],
  },
  {
    slug: "building-elevation-design",
    title: "Elevations for Building",
    short: "Stunning building elevation designs that enhance aesthetics and create lasting impressions.",
    seoTitle: "Building Elevation & 3D Front Elevation Design Hyderabad | BBMC",
    metaDescription:
      "Front elevation and 3D building elevation designers in Hyderabad & Telangana. Modern, contemporary and classic elevations for houses and buildings.",
    h1: "Building Elevation & 3D Front Elevation Design in Hyderabad",
    image: "/images/projects/modern-house-elevation.webp",
    imageAlt: "Premium duplex villa front elevation designed by BBMC",
    intro: [
      "The elevation is the first thing anyone sees. BBMC designs front elevations that suit your plan, budget and taste: modern, contemporary, minimalist or classic.",
      "We provide 3D views so you can see the finished building, including materials and colours, before construction starts.",
    ],
    includes: [
      "Front elevation design for houses and buildings",
      "3D elevation views",
      "Material and colour suggestions",
      "Elevation for renovation / facade upgrade",
    ],
    process: [
      { step: "Style", detail: "Discuss the look you want." },
      { step: "Options", detail: "Elevation concepts on your plan." },
      { step: "3D", detail: "Final 3D view with materials and colours." },
    ],
    faqs: [
      {
        q: "Can you design only the elevation for my existing plan?",
        a: "Yes, we design elevations for plans prepared by others too.",
      },
      {
        q: "Can you upgrade the elevation of an existing building?",
        a: "Yes, we design facade upgrades for existing houses and commercial buildings.",
      },
    ],
    related: ["architectural-design", "interior-design", "construction-renovation"],
  },
  {
    slug: "building-permission-approvals",
    title: "Building Permission & Approvals",
    short: "Drawings and guidance for GHMC, HMDA and municipal building permissions.",
    seoTitle: "Building Permission Drawings, GHMC & HMDA Approvals | BBMC",
    metaDescription:
      "Building permission drawings and approval guidance for GHMC, HMDA and municipal areas across Hyderabad & Telangana. BBMC architects and engineers.",
    h1: "Building Permission & Approval Drawings in Hyderabad",
    image: "/images/projects/modern-apartment-complex.webp",
    imageAlt: "Apartment complex with building permission drawings prepared by BBMC architects",
    intro: [
      "Building permission in Hyderabad is applied for online, and the approving authority depends on where your plot is: GHMC, HMDA or the local municipality.",
      "BBMC prepares permission drawings that follow setback and height rules for your plot and guides you through the documents and steps, so your application is complete the first time.",
    ],
    includes: [
      "Permission drawings as per local rules",
      "Setback, height and coverage checks",
      "Document checklist and guidance",
      "Structural drawings where required",
    ],
    process: [
      { step: "Check", detail: "Plot documents, road width and applicable rules." },
      { step: "Draw", detail: "Prepare compliant plans." },
      { step: "Apply", detail: "Guidance through the online application." },
    ],
    faqs: [
      {
        q: "Which authority approves my building plan?",
        a: "It depends on your plot's location: GHMC, HMDA or the local municipal body. We'll tell you which applies after checking your documents.",
      },
      {
        q: "Can you prepare drawings for building permission?",
        a: "Yes. We prepare plans that meet local setback and height rules for submission.",
      },
    ],
    related: ["architectural-design", "structural-engineering", "estimates-valuations"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
