// All text from the original landing page, kept verbatim, plus new SEO copy.

export const heroSlides = [
  {
    image: "/images/projects/bommak-narsimha-convention-hall.webp",
    title: "Designing Dreams. Building Excellence.",
    subtitle:
      "Professional Architects, Engineers, Interior Designers, Vaasthu Experts, and Builders with 30+ Years of Excellence",
  },
  {
    image: "/images/projects/twin-storey-residence.webp",
    title: "Expert Architects",
    subtitle: "Innovative architectural designs that blend creativity with functionality for your dream spaces",
  },
  {
    image: "/images/services/structural-engineering.webp",
    title: "Professional Engineers",
    subtitle: "Structural engineering excellence ensuring safety, durability, and precision in every project",
  },
  {
    image: "/images/interiors/pooja-room.webp",
    title: "Vaasthu Consultants",
    subtitle: "Traditional Vaasthu-compliant designs bringing harmony, prosperity, and positive energy to your space",
  },
  {
    image: "/images/interiors/luxury-living-room.webp",
    title: "Interior Designers",
    subtitle: "Transform your spaces with elegant interiors that reflect your style and personality",
  },
  {
    image: "/images/services/construction.webp",
    title: "Expert Builders",
    subtitle: "Quality construction from foundation to finish with attention to every detail",
  },
  {
    image: "/images/projects/balaji-benchmark-enclave.webp",
    title: "Property Developers",
    subtitle: "Complete real estate development solutions for residential and commercial projects",
  },
];

export const about = {
  eyebrow: "About BBMC",
  title: "Building Trust Through Quality & Innovation",
  paragraphs: [
    "Balaji Benchmark Consultants (BBMC) is a premier Hyderabad-based firm offering comprehensive end-to-end services in architecture, engineering, interior design, Vaasthu consulting, construction, and building planning. With over three decades of industry expertise, we have established ourselves as trusted partners for both residential and commercial projects.",
    "Our commitment to quality construction, creative planning, and strong focus on Vaasthu-compliant designs has earned us the trust of countless clients across Telangana and beyond. We take pride in transforming visions into reality while maintaining the highest standards of excellence.",
  ],
  tags: ["Architectural Design", "Structural Engineering", "Interior Design", "Vaasthu Consulting"],
};

export const servicesIntro = {
  eyebrow: "Our Services",
  title: "Comprehensive Solutions for Your Project",
  text: "From concept to completion, we offer a full range of professional services to bring your vision to life.",
};

export const whyChoose = {
  eyebrow: "Why Choose Us",
  title: "The BBMC Advantage",
  text: "What sets us apart from the rest and makes us your ideal partner for all construction needs.",
  items: [
    { title: "Tailor-Made Designs", description: "Custom architectural solutions crafted to match your unique vision and requirements." },
    { title: "100% Vaasthu Compliance", description: "All our designs follow traditional Vaasthu principles for harmony and prosperity." },
    { title: "Bank Loan Support", description: "We provide bank-approved estimates and valuations to help secure your project financing." },
    { title: "Client-First Approach", description: "Transparent communication and dedicated support throughout your project journey." },
    { title: "Timely Delivery", description: "We value your time and ensure quality delivery within committed timelines." },
    {
      title: "Flexible Engagement",
      description:
        "Whether you need just Vaasthu consultation, interior design, planning, elevations, or a complete end-to-end construction project, we welcome all clients and deliver excellence at every scale.",
    },
  ],
};

export const founder = {
  eyebrow: "Leadership",
  title: "Meet Our Founder",
  text: "The visionary behind 30+ years of architectural excellence",
  quote: "At BBMC, we don't just build structures — we bring visions to life.",
  bio: [
    "With over 30 years of expertise in architecture, engineering, and construction, Er. Paspunoori Srinivas Gupta founded BBMC in 1995 with a vision to deliver exceptional quality and innovative designs.",
    "Under his leadership, BBMC has transformed ideas into iconic homes, campuses, and commercial landmarks across Telangana. His commitment to Vaasthu-compliant designs, customer satisfaction, and excellence has made BBMC a trusted name in the construction industry.",
    "Er. Gupta's hands-on approach and deep understanding of both traditional principles and modern engineering techniques ensure that every project receives the personalized attention it deserves.",
  ],
  badges: ["30+ Years Experience", "Since 1995", "Vaasthu Expert", "3000+ Happy Clients"],
};

export const testimonialsIntro = {
  eyebrow: "Testimonials",
  title: "What Our Clients Say",
  text: "Read reviews from our satisfied clients who trusted us with their dream projects.",
};

// NOTE: the original source marks these as placeholders ("replace with real testimonials
// from Google Reviews"). Replace with real reviews before launch. No Review schema is emitted for them.
export const testimonials = [
  { name: "Rajesh K.", initials: "RK", rating: 5, source: "Google Review",
    review: "Excellent architectural design and Vaasthu consultation. The team was very professional and understood our requirements perfectly. Highly recommended for anyone looking for quality construction services." },
  { name: "Priya M.", initials: "PM", rating: 5, source: "Google Review",
    review: "BBMC delivered our dream home exactly as we envisioned. Their attention to detail and commitment to Vaasthu principles is commendable. Great experience working with them." },
  { name: "Suresh R.", initials: "SR", rating: 5, source: "Google Review",
    review: "Professional team with over 30 years of experience. They helped us with structural planning and bank loan estimates. Very satisfied with their transparent approach." },
  { name: "Anitha D.", initials: "AD", rating: 5, source: "Google Review",
    review: "We got our commercial building designed by BBMC. The interior design suggestions were creative and practical. They completed the project on time with great quality." },
  { name: "Venkat P.", initials: "VP", rating: 5, source: "Google Review",
    review: "Best consultants in Hyderabad for Vaasthu-compliant designs. The team is knowledgeable and very client-friendly. Will definitely recommend to others." },
];

export const contactIntro = {
  eyebrow: "Contact Us",
  title: "Get In Touch",
  text: "Ready to start your project? Reach out to us for a free consultation and let's build your dream together.",
};

export const portfolioIntro = {
  eyebrow: "Portfolio",
  projects: {
    title: "Our Projects",
    text: "Explore our diverse range of architectural projects that showcase our expertise and commitment to excellence.",
  },
  interiors: {
    title: "Interior Designing",
    text: "Discover our stunning interior designs that blend aesthetics with functionality for modern living spaces.",
  },
};

const p = (slug: string, title: string, kind: "Architecture" | "Interior") => ({
  slug,
  title,
  kind,
  image: `/images/${kind === "Architecture" ? "projects" : "interiors"}/${slug}.webp`,
  alt: `${title} – ${kind === "Architecture" ? "architecture project" : "interior design"} by BBMC, Hyderabad`,
});

export const projects = [
  p("contemporary-residence-hyderabad", "Contemporary Residence, Hyderabad", "Architecture"),
  p("bommak-narsimha-convention-hall", "Bommak Narsimha Convention Hall", "Architecture"),
  p("modern-house-elevation", "Modern House Elevation", "Architecture"),
  p("bommaku-arcade-commercial-building", "Bommaku Arcade Commercial Building", "Architecture"),
  p("twin-storey-residence", "Twin-Storey Residence", "Architecture"),
  p("balaji-benchmark-enclave", "BBMC Balaji Benchmark Enclave", "Architecture"),
  p("contemporary-duplex-house", "Contemporary Duplex House", "Architecture"),
  p("nvs-heights-tower", "NVS Heights Tower", "Architecture"),
  p("pareeksha-residential-tower", "Pareeksha Residential Tower", "Architecture"),
  p("contemporary-luxury-villa", "Contemporary Luxury Villa", "Architecture"),
  p("premium-duplex-villa", "Premium Duplex Villa", "Architecture"),
  p("commercial-complex-with-retail", "Commercial Complex with Retail", "Architecture"),
];

export const interiors = [
  p("luxury-living-room", "Luxury Living Room", "Interior"),
  p("living-room-wooden-ceiling", "Living Room with Wooden Ceiling", "Interior"),
  p("modular-kitchen", "Modular Kitchen", "Interior"),
  p("island-kitchen", "Island Kitchen", "Interior"),
  p("master-bedroom", "Master Bedroom", "Interior"),
  p("designer-wardrobe", "Designer Wardrobe", "Interior"),
  p("pooja-room", "Pooja Room", "Interior"),
  p("contemporary-living-room", "Contemporary Living Room", "Interior"),
  p("teal-accent-bedroom", "Teal Accent Bedroom", "Interior"),
  p("botanical-wardrobe", "Botanical Wardrobe", "Interior"),
  p("open-living-and-dining", "Open Living & Dining", "Interior"),
  p("bedroom-with-study", "Bedroom with Study", "Interior"),
  p("salon-interior", "Salon Interior", "Interior"),
  p("urban-coffee-cafe", "Urban Coffee Cafe", "Interior"),
  p("industrial-restaurant-design", "Industrial Restaurant Design", "Interior"),
  p("rooftop-terrace-lounge", "Rooftop Terrace Lounge", "Interior"),
  p("designer-staircase", "Designer Staircase", "Interior"),
  p("grand-foyer-design", "Grand Foyer Design", "Interior"),
];

export const homeFaqs = [
  { q: "Where is BBMC located?",
    a: "Our office is at Plot No.12, Street No.1, Srinagar Colony, near Ambedkar Statue, Boduppal, Hyderabad – 500092. We serve clients across all of Hyderabad and Secunderabad, and in cities and towns across Telangana, including Warangal, Karimnagar, Nizamabad and Khammam." },
  { q: "What services does BBMC offer?",
    a: "Architectural and engineering design, structural engineering, interior design, Vaasthu consultation, construction and renovation, building and development, bank loan estimates and valuations, land surveying, building elevations and building permission drawings." },
  { q: "Are all BBMC designs Vaasthu-compliant?",
    a: "Yes. Every BBMC design follows traditional Vaasthu principles, balanced with modern planning, light and ventilation." },
  { q: "Can I hire BBMC only for one service, like Vaasthu or elevation?",
    a: "Yes. Whether you need just Vaasthu consultation, interior design, planning, elevations, or a complete end-to-end construction project, we welcome all clients." },
  { q: "Do you provide bank loan estimates?",
    a: "Yes, we provide bank-approved estimates and valuations to help secure your project financing." },
  { q: "How long has BBMC been in business?",
    a: "BBMC was founded in 1995 by Er. Paspunoori Srinivas Gupta and has 30+ years of experience, 500+ projects delivered and 3000+ happy clients." },
];
