import type { Faq } from "./services";

export type Location = {
  slug: string;
  area: string;
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  focus: string[];
  nearby: string[];
  faqs: Faq[];
};

const desc = (area: string) =>
  `Architects, engineers, interior designers and vastu consultants in ${area}, Hyderabad. House plans, construction, bank estimates and approvals by BBMC since 1995.`;

export const locations: Location[] = [
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

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
