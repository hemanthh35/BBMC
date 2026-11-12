import type { Faq } from "./services";

export type Location = {
  slug: string;
  area: string;
  region?: "Hyderabad" | "Telangana";
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  focus: string[];
  nearby: string[];
  faqs: Faq[];
};

const desc = (area: string) =>
  `Architects, engineers, interior designers and vastu consultants in ${area}, Hyderabad. House plans, construction, bank estimates and approvals by BBMC since 1995.`;

const eastHyderabad: Location[] = [
  {
    slug: "architects-in-boduppal",
    area: "Boduppal",
    seoTitle: "Architects & Vastu Consultants in Boduppal, Hyderabad | BBMC",
    metaDescription: desc("Boduppal"),
    intro: [
      "Boduppal is home to BBMC. Our office is in Srinagar Colony, near the Ambedkar Statue, and we have been designing and building homes and commercial projects for families in and around Boduppal for decades.",
      "Boduppal has grown quickly from open plots into a busy residential area, with many families building independent houses, G+1 and G+2 homes and rental buildings. Being local, we know the plot sizes, road widths and building patterns of the area, and can visit your site the same day.",
    ],
    focus: [
      "Independent house and duplex plans for Boduppal plots",
      "G+2 / G+3 rental building design",
      "Vastu check before buying a plot",
      "Construction and renovation",
      "Bank loan estimates",
    ],
    nearby: ["Uppal", "Peerzadiguda", "Medipally", "Chengicherla", "Mallapur"],
    faqs: [
      { q: "Where is the BBMC office in Boduppal?", a: "Plot No.12, Street No.1, Srinagar Colony, adjacent lane to Universe Bakery, near Ambedkar Statue, Boduppal, Hyderabad – 500092." },
      { q: "Can you visit my plot in Boduppal?", a: "Yes. Since our office is in Boduppal, site visits in the area are quick to arrange. Call or WhatsApp us to schedule." },
      { q: "Do you design rental buildings in Boduppal?", a: "Yes. We design G+2 and larger rental buildings that make good use of the plot while following Vaasthu and local building rules." },
    ],
  },
  {
    slug: "architects-in-uppal",
    area: "Uppal",
    seoTitle: "Architects & Vastu Consultants in Uppal, Hyderabad | BBMC",
    metaDescription: desc("Uppal"),
    intro: [
      "Uppal is one of East Hyderabad's best-connected areas, with the metro, the Warangal highway and a mix of old colonies, new apartments and commercial streets. BBMC's office in neighbouring Boduppal makes us a convenient local partner for Uppal homeowners and businesses.",
      "In Uppal we often work on redevelopment of older houses into modern G+2 or G+3 buildings, commercial frontages along main roads, and Vaasthu corrections for existing homes and shops.",
    ],
    focus: [
      "Redevelopment of old houses into new buildings",
      "Commercial and mixed-use buildings on main roads",
      "Vastu consultation for homes and shops",
      "Interior design for flats and apartments",
      "Structural checks for additional floors",
    ],
    nearby: ["Boduppal", "Ramanthapur", "Habsiguda", "Nacharam", "Peerzadiguda"],
    faqs: [
      { q: "Do you take up projects in Uppal?", a: "Yes. Our Boduppal office is next to Uppal, and we regularly work on homes, apartments and commercial buildings across Uppal." },
      { q: "Can I add a floor to my old house in Uppal?", a: "Often, yes. Our structural engineers will inspect the building and advise on whether an additional floor is safe and what strengthening may be needed." },
      { q: "Do you provide Vastu consultation for shops in Uppal?", a: "Yes. We advise on entrance, cash counter, storage and seating placement for shops and offices." },
    ],
  },
  {
    slug: "architects-in-peerzadiguda",
    area: "Peerzadiguda",
    seoTitle: "Architects & Vastu Consultants in Peerzadiguda | BBMC",
    metaDescription: desc("Peerzadiguda"),
    intro: [
      "Peerzadiguda, right beside Boduppal, has seen rapid growth in new layouts and gated plots. Many owners here are building their first independent house, and getting the plan and Vaasthu right from the start matters.",
      "BBMC helps Peerzadiguda clients from plot purchase to handover: checking plot Vaasthu, preparing house plans and elevations, structural design, bank estimates and construction.",
    ],
    focus: ["First-home house plans", "Plot Vastu analysis", "Front elevation design", "Bank loan estimates", "Construction"],
    nearby: ["Boduppal", "Uppal", "Medipally", "Ghatkesar"],
    faqs: [
      { q: "Can you check the Vastu of a plot in Peerzadiguda before I buy?", a: "Yes. We review the plot's facing, shape, slope and surroundings and tell you what to expect before you commit." },
      { q: "Do you provide complete design and construction in Peerzadiguda?", a: "Yes, from house plans and structural design to construction and finishing." },
    ],
  },
  {
    slug: "architects-in-nacharam",
    area: "Nacharam",
    seoTitle: "Architects, Engineers & Vastu Consultants in Nacharam | BBMC",
    metaDescription: desc("Nacharam"),
    intro: [
      "Nacharam combines established residential colonies with one of East Hyderabad's well-known industrial areas. That mix brings a wide range of projects: family homes, rental buildings, offices and industrial or commercial structures.",
      "BBMC's architects and structural engineers design for both, including Vaasthu for offices and factories, which many business owners in Nacharam ask for.",
    ],
    focus: ["Residential buildings", "Office and commercial design", "Vastu for factories and offices", "Structural engineering", "Renovation"],
    nearby: ["Mallapur", "Habsiguda", "Uppal", "Tarnaka"],
    faqs: [
      { q: "Do you provide Vastu for factories in Nacharam?", a: "Yes. We advise on placement of machinery, storage, offices and entrances according to Vaasthu." },
      { q: "Do you design commercial buildings in Nacharam?", a: "Yes, including offices, shops and mixed-use buildings." },
    ],
  },
  {
    slug: "architects-in-habsiguda",
    area: "Habsiguda",
    seoTitle: "Architects & Interior Designers in Habsiguda, Hyderabad | BBMC",
    metaDescription: desc("Habsiguda"),
    intro: [
      "Habsiguda and the surrounding Street No. 8 and Tarnaka belt are mature, high-demand neighbourhoods with many apartments and commercial streets. Here the most common needs are interior design, renovation and redevelopment of older buildings.",
      "BBMC designs interiors for flats and offices, plans redevelopment projects, and checks existing structures before renovation.",
    ],
    focus: ["Apartment interior design", "Office interiors", "Redevelopment planning", "Structural assessment", "Vastu for flats"],
    nearby: ["Tarnaka", "Nacharam", "Uppal", "Ramanthapur"],
    faqs: [
      { q: "Do you design interiors for apartments in Habsiguda?", a: "Yes. We design living rooms, kitchens, bedrooms and storage for apartments of all sizes." },
      { q: "Can you check Vastu for my flat?", a: "Yes. We review the entrance, kitchen, bedrooms and puja room and suggest practical changes." },
    ],
  },
  {
    slug: "architects-in-medipally",
    area: "Medipally",
    seoTitle: "Architects & Vastu Consultants in Medipally, Hyderabad | BBMC",
    metaDescription: desc("Medipally"),
    intro: [
      "Medipally, along the Warangal highway, is a fast-developing area with new residential layouts and highway-facing commercial plots. Close to our Boduppal office, it's an area where we design many new independent houses and commercial buildings.",
      "For highway-facing plots we focus on commercial frontage, parking and elevation; for residential plots, on efficient Vaasthu-compliant layouts.",
    ],
    focus: ["Independent house design", "Commercial frontage buildings", "Elevation design", "Construction", "Bank estimates"],
    nearby: ["Boduppal", "Peerzadiguda", "Uppal", "Ghatkesar"],
    faqs: [
      { q: "Do you design commercial buildings on the highway in Medipally?", a: "Yes. We plan commercial frontage, parking and elevations for highway-facing plots." },
      { q: "How quickly can you visit a site in Medipally?", a: "Medipally is close to our Boduppal office, so site visits are easy to arrange." },
    ],
  },
  {
    slug: "architects-in-lb-nagar",
    area: "LB Nagar",
    seoTitle: "Architects & Vastu Consultants in LB Nagar, Hyderabad | BBMC",
    metaDescription: desc("LB Nagar"),
    intro: [
      "LB Nagar is a major residential and commercial hub of South-East Hyderabad, with a mix of independent houses, apartments and busy commercial roads. BBMC serves LB Nagar clients for new homes, rental buildings, commercial complexes and interiors.",
      "Our combined architecture, structural and Vaasthu expertise means one team handles the whole project, from plan to permission drawings to construction.",
    ],
    focus: ["House and rental building design", "Commercial complexes", "Vastu consultation", "Interior design", "Permission drawings"],
    nearby: ["Uppal", "Ramanthapur", "Hayathnagar", "Nagole"],
    faqs: [
      { q: "Do you take projects in LB Nagar?", a: "Yes, we serve LB Nagar and nearby areas for design, Vaasthu, interiors and construction." },
      { q: "Can you prepare building permission drawings for LB Nagar?", a: "Yes. We prepare drawings as per the applicable local rules and guide you through the application." },
    ],
  },
  {
    slug: "architects-in-ghatkesar",
    area: "Ghatkesar",
    seoTitle: "Architects, Builders & Vastu Consultants in Ghatkesar | BBMC",
    metaDescription: desc("Ghatkesar"),
    intro: [
      "Ghatkesar, on Hyderabad's eastern edge along the Warangal highway and the Outer Ring Road, is popular for open plots, villas, layouts and educational and institutional campuses.",
      "BBMC helps Ghatkesar landowners with land surveying, layout planning, villa design and campus buildings, along with Vaasthu for plots and layouts.",
    ],
    focus: ["Land surveying and plot development", "Villa and farmhouse design", "Institutional and campus buildings", "Layout Vastu", "Construction"],
    nearby: ["Peerzadiguda", "Medipally", "Boduppal", "Uppal"],
    faqs: [
      { q: "Do you do land surveying in Ghatkesar?", a: "Yes. We survey land, mark boundaries and prepare layout and plot development plans." },
      { q: "Do you design villas and farmhouses?", a: "Yes, including Vaasthu-compliant villa and farmhouse designs." },
    ],
  },
];

// ---------------- Rest of Hyderabad ----------------

type AreaType = "it" | "premium" | "residential" | "commercial" | "growth";

const focusByType: Record<AreaType, string[]> = {
  it: ["Apartment and villa interiors", "Office and co-working interiors", "Vastu for flats and offices", "Independent house design", "Rental building design"],
  premium: ["Luxury villa and bungalow design", "High-end interiors", "Vastu consultation for homes and offices", "Redevelopment of older homes", "Front elevation and facade upgrades"],
  residential: ["Independent house and duplex plans", "G+2 / G+3 rental buildings", "Vastu for homes and plots", "Interiors for flats", "Bank loan estimates"],
  commercial: ["Commercial and mixed-use buildings", "Shop and showroom interiors", "Vastu for shops and offices", "Structural checks for additional floors", "Renovation"],
  growth: ["Plot Vastu check before purchase", "Villa and independent house design", "Gated community and layout planning", "Construction", "Building permission drawings"],
};

const hyd = (slug: string, area: string, type: AreaType, about: string, nearby: string[]): Location => ({
  slug: `architects-in-${slug}`,
  area,
  region: "Hyderabad",
  seoTitle: `Architects & Vastu Consultants in ${area}, Hyderabad | BBMC`,
  metaDescription: `Architects, structural engineers, interior designers and vastu consultants in ${area}, Hyderabad. House plans, interiors, construction and approvals by BBMC since 1995.`,
  intro: [
    about,
    `BBMC has designed and built across Hyderabad since 1995. For ${area} clients we handle the full project with one team: Vaasthu-compliant plans, structural design, interiors, bank estimates, permission drawings and construction. Call or WhatsApp us to arrange a site visit.`,
  ],
  focus: focusByType[type],
  nearby,
  faqs: [
    { q: `Do you take up projects in ${area}?`, a: `Yes. We serve ${area} and all of Hyderabad for architecture, Vaasthu, structural design, interiors and construction.` },
    { q: `Can you visit my site in ${area}?`, a: "Yes. Call or WhatsApp us with your location and we'll schedule a site visit." },
    { q: "Do all your designs follow Vaasthu?", a: "Yes. Every BBMC design follows Vaasthu principles, balanced with modern planning, light and ventilation." },
  ],
});

const restOfHyderabad: Location[] = [
  hyd("gachibowli", "Gachibowli", "it",
    "Gachibowli sits at the heart of Hyderabad's IT corridor, close to the Financial District, with high-rise apartments, gated villa communities and offices. Most of our work here is apartment and villa interiors, office fit-outs and Vaasthu advice for new homes.",
    ["Kondapur", "Madhapur", "Manikonda", "Kokapet"]),
  hyd("kondapur", "Kondapur", "it",
    "Kondapur is one of the busiest residential neighbourhoods in the IT corridor, mixing apartments with independent houses and rental buildings for working professionals. We design rental buildings, house plans and interiors that make the most of compact plots.",
    ["Gachibowli", "Madhapur", "Kukatpally", "Miyapur"]),
  hyd("madhapur", "Madhapur", "commercial",
    "Madhapur and HITEC City form Hyderabad's best-known technology and business district, packed with offices, cafes, restaurants and serviced apartments. We design commercial buildings, office and restaurant interiors, and Vaasthu layouts for businesses.",
    ["Gachibowli", "Kondapur", "Jubilee Hills"]),
  hyd("kukatpally", "Kukatpally", "residential",
    "Kukatpally, including the large KPHB Colony, is one of Hyderabad's most populated residential areas. Many owners here are rebuilding older houses into G+2 or G+3 buildings, and we plan these for rental income, Vaasthu and structural safety.",
    ["Miyapur", "Kondapur", "Bachupally"]),
  hyd("miyapur", "Miyapur", "residential",
    "Miyapur, at the north-western end of the metro line, has grown fast with apartments and independent houses. We design new homes, rental buildings and interiors, and check Vaasthu for plots before purchase.",
    ["Kukatpally", "Bachupally", "Kondapur"]),
  hyd("bachupally", "Bachupally", "growth",
    "Bachupally and Nizampet are among north-west Hyderabad's fastest-growing residential areas, with new layouts, independent houses and gated communities. We help owners from plot selection and Vaasthu to plans, approvals and construction.",
    ["Miyapur", "Kukatpally", "Kompally"]),
  hyd("manikonda", "Manikonda", "residential",
    "Manikonda, next to the IT corridor, is popular for independent houses and mid-rise apartments. We design compact, Vaasthu-compliant houses and rental buildings, along with interiors for flats.",
    ["Gachibowli", "Kokapet", "Narsingi"]),
  hyd("kokapet", "Kokapet", "premium",
    "Kokapet and Narsingi on the western edge of the city have become a hub for premium high-rises, luxury villas and gated communities near the Outer Ring Road. We design villas, high-end interiors and Vaasthu layouts for these homes.",
    ["Gachibowli", "Manikonda", "Narsingi"]),
  hyd("narsingi", "Narsingi", "growth",
    "Narsingi, close to the Outer Ring Road and the Financial District, is seeing rapid villa and apartment development. We help clients with plot Vaasthu, villa design, structural engineering and construction.",
    ["Kokapet", "Manikonda", "Gachibowli"]),
  hyd("jubilee-hills", "Jubilee Hills", "premium",
    "Jubilee Hills is one of Hyderabad's most prestigious addresses, with large bungalows, luxury villas and upscale commercial streets. We design premium homes, facade upgrades, luxury interiors and Vaasthu corrections for existing bungalows.",
    ["Banjara Hills", "Madhapur", "Ameerpet"]),
  hyd("banjara-hills", "Banjara Hills", "premium",
    "Banjara Hills combines elegant older bungalows with high-end shops, offices and hospitals. Our work here includes redevelopment of older homes, premium interiors, commercial design and Vaasthu consultation.",
    ["Jubilee Hills", "Ameerpet", "Begumpet"]),
  hyd("ameerpet", "Ameerpet", "commercial",
    "Ameerpet and the surrounding central belt are dense, busy commercial and residential areas. We design commercial and mixed-use buildings, structural checks for additional floors, and shop and office interiors.",
    ["Begumpet", "Banjara Hills", "Kukatpally"]),
  hyd("begumpet", "Begumpet", "commercial",
    "Begumpet links Hyderabad and Secunderabad and has a mix of offices, hotels and established residential colonies. We help with commercial building design, office interiors and redevelopment of older homes.",
    ["Secunderabad", "Ameerpet", "Banjara Hills"]),
  hyd("secunderabad", "Secunderabad", "residential",
    "Secunderabad, Hyderabad's twin city, has historic bungalows, busy markets and growing residential colonies. We design new homes, redevelop older houses, plan rental buildings and provide Vaasthu consultation across Secunderabad.",
    ["Tarnaka", "Begumpet", "Kompally"]),
  hyd("kompally", "Kompally", "growth",
    "Kompally, along the highway to the north of the city, is popular for villas, gated communities and independent houses. We design Vaasthu-compliant villas and houses and handle construction for Kompally clients.",
    ["Secunderabad", "Bachupally"]),
  hyd("dilsukhnagar", "Dilsukhnagar", "commercial",
    "Dilsukhnagar is one of South-East Hyderabad's busiest commercial and residential hubs. We design commercial buildings, rental buildings and shop interiors, and provide Vaasthu advice for homes and businesses.",
    ["LB Nagar", "Uppal", "Ramanthapur"]),
  hyd("shamshabad", "Shamshabad", "growth",
    "Shamshabad, around Rajiv Gandhi International Airport, has open plots, warehouses, commercial projects and new residential layouts. We help with land surveying, plot development, commercial design and construction.",
    ["Narsingi", "LB Nagar"]),
];

// ---------------- Telangana ----------------

const tg = (slug: string, area: string, about: string): Location => ({
  slug: `architects-in-${slug}`,
  area,
  region: "Telangana",
  seoTitle: `Architects & Vastu Consultants in ${area}, Telangana | BBMC`,
  metaDescription: `Architects, structural engineers, interior designers and vastu consultants serving ${area}, Telangana. House plans, Vaasthu, structural design and construction by BBMC since 1995.`,
  intro: [
    about,
    `BBMC's work spans homes, campuses and commercial landmarks across Telangana. For clients in ${area} we prepare plans, Vaasthu analysis, structural drawings and estimates, share drawings over WhatsApp and email, and schedule site visits at key stages.`,
  ],
  focus: ["Vaasthu-compliant house plans", "Commercial and institutional buildings", "Structural design and drawings", "Bank loan estimates", "Layout and plot development"],
  nearby: [],
  faqs: [
    { q: `Do you take up projects in ${area}?`, a: `Yes. We serve clients across Telangana, including ${area}, for design, Vaasthu, structural engineering and construction.` },
    { q: "Can you prepare plans without frequent site visits?", a: "Yes. With plot details and photos we can prepare plans and Vaasthu analysis remotely, and visit the site at the stages that matter." },
    { q: "Do you prepare drawings for building permission outside Hyderabad?", a: "Yes. We prepare drawings as per the rules of the local authority that applies to your plot." },
  ],
});

const telangana: Location[] = [
  tg("warangal", "Warangal", "Warangal, Telangana's second-largest city and a historic centre, has strong demand for independent homes, commercial complexes and educational buildings."),
  tg("karimnagar", "Karimnagar", "Karimnagar is a fast-growing district headquarters in north Telangana, with new residential layouts, independent houses and commercial buildings."),
  tg("nizamabad", "Nizamabad", "Nizamabad, in northern Telangana, is an important trading town where families and businesses are building new homes, shops and commercial complexes."),
  tg("khammam", "Khammam", "Khammam in south-east Telangana is expanding steadily, with demand for independent houses, apartments and commercial buildings."),
  tg("nalgonda", "Nalgonda", "Nalgonda, south-east of Hyderabad, is seeing new residential layouts and independent homes, along with commercial and institutional projects."),
  tg("mahabubnagar", "Mahabubnagar", "Mahabubnagar, south of Hyderabad, is a growing district centre with new layouts, independent houses and commercial development."),
  tg("siddipet", "Siddipet", "Siddipet has developed quickly in recent years, with new residential colonies, commercial buildings and public infrastructure."),
  tg("sangareddy", "Sangareddy", "Sangareddy, on Hyderabad's north-western edge and close to the Patancheru industrial belt, has growing demand for homes, rental buildings and industrial structures."),
];

export const locations: Location[] = [
  ...eastHyderabad.map((l) => ({ ...l, region: "Hyderabad" as const })),
  ...restOfHyderabad,
  ...telangana,
];

export const hyderabadLocations = locations.filter((l) => l.region === "Hyderabad");
export const telanganaLocations = locations.filter((l) => l.region === "Telangana");

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
