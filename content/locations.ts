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
  /** Zone pages only: neighbourhoods covered by this zone. */
  areas?: string[];
};

/** Use the long title if it fits Google's ~60-character display, else the short one. */
const fitTitle = (long: string, short: string) => (long.length <= 62 ? long : short);

const desc = (area: string) =>
  `Architects, engineers, interior designers & vastu consultants in ${area}, Hyderabad. House plans, construction, bank estimates & approvals by BBMC since 1995.`;

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
  seoTitle: fitTitle(`Architects & Vastu Consultants in ${area}, Hyderabad | BBMC`, `Architects & Vastu Consultants in ${area} | BBMC`),
  metaDescription: `Architects, engineers, interior designers & vastu consultants in ${area}, Hyderabad. House plans, interiors & construction by BBMC since 1995.`,
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

  // ---- Construction hotspots ----
  hyd("neopolis", "Neopolis", "premium",
    "Neopolis, the planned high-rise district next to Kokapet, is one of Hyderabad's most talked-about addresses, with premium residential towers and large commercial developments rising close to the Financial District and the Outer Ring Road. We help buyers and investors here with luxury interiors, Vaasthu reviews of apartment layouts and commercial fit-outs.",
    ["Kokapet", "Narsingi", "Gachibowli"]),
  hyd("tellapur", "Tellapur", "growth",
    "Tellapur, west of Gachibowli near the Outer Ring Road, has grown rapidly with gated communities, villas and high-rise apartments popular with IT professionals. We design villas and independent houses, interiors for new apartments, and check plot Vaasthu before purchase.",
    ["Kollur", "Gachibowli", "Kondapur", "Sangareddy"]),
  hyd("kollur", "Kollur", "growth",
    "Kollur, on the western Outer Ring Road beyond Tellapur, is a fast-developing belt of gated villa communities, apartments and open plots. BBMC handles plot Vaasthu, villa and house design, structural engineering and construction for Kollur clients.",
    ["Tellapur", "Mokila", "Narsingi"]),
  hyd("mokila", "Mokila", "premium",
    "Mokila, towards Shankarpally on the city's western edge, is known for spacious villa plots and gated villa communities in green surroundings. We design Vaasthu-compliant villas and farmhouses, landscaped layouts and premium interiors here.",
    ["Kollur", "Tellapur", "Narsingi"]),
  hyd("pragathi-nagar", "Pragathi Nagar", "residential",
    "Pragathi Nagar, next to Bachupally and Nizampet, is an established residential colony with independent houses and apartments, and many owners now rebuilding or adding floors. We design new homes and rental buildings, check structures before additions, and advise on Vaasthu.",
    ["Bachupally", "Kukatpally", "Miyapur"]),
  hyd("adibatla", "Adibatla", "growth",
    "Adibatla, on the southern Outer Ring Road, has grown around its aerospace and IT parks into an active market for plots, villas, apartments and industrial buildings. We help with land surveying, plot development, house and villa design, and industrial structures.",
    ["Tukkuguda", "Shamshabad", "LB Nagar"]),
  hyd("rajendra-nagar", "Rajendra Nagar", "residential",
    "Rajendra Nagar, in south-west Hyderabad on the way to the airport, mixes established colonies, institutional campuses and farmhouses with new residential development. We design independent houses, farmhouses and institutional buildings, and take up redevelopment of older homes.",
    ["Budwel", "Shamshabad", "Narsingi"]),
  hyd("budwel", "Budwel", "growth",
    "Budwel, next to Rajendra Nagar, is emerging as a new IT and residential hub with planned layouts and upcoming developments. We help landowners and buyers with plot Vaasthu, layout planning, building design and construction.",
    ["Rajendra Nagar", "Shamshabad", "Narsingi"]),
  hyd("tukkuguda", "Tukkuguda", "growth",
    "Tukkuguda, near the airport and the southern Outer Ring Road, has become a popular area for open plots, new layouts and independent houses. We survey land, plan layouts, check plot Vaasthu and design and build homes here.",
    ["Shamshabad", "Adibatla"]),
  hyd("pocharam", "Pocharam", "growth",
    "Pocharam, close to Ghatkesar on the eastern side of the city and home to a major IT campus, has seen steady growth in apartments, independent houses and rental buildings. Being near our Boduppal office, we can visit Pocharam sites quickly for design, Vaasthu and construction.",
    ["Ghatkesar", "Peerzadiguda", "Boduppal"]),

  // ---- Premium neighbourhoods ----
  hyd("sainikpuri", "Sainikpuri", "premium",
    "Sainikpuri, near ECIL in north-east Hyderabad, began as a planned colony for defence officers and is known for its wide, tree-lined roads and spacious independent houses. Owners here often rebuild or upgrade older homes, and we design premium houses, elevations and interiors that suit the neighbourhood's character.",
    ["AS Rao Nagar", "Secunderabad", "Uppal"]),
  hyd("as-rao-nagar", "AS Rao Nagar", "premium",
    "AS Rao Nagar, beside ECIL and Sainikpuri, is one of north-east Hyderabad's most sought-after residential and shopping areas. We design independent houses, apartments and commercial buildings, redevelop older homes and provide Vaasthu consultation across AS Rao Nagar.",
    ["Sainikpuri", "Uppal", "Secunderabad"]),
  hyd("film-nagar", "Film Nagar", "premium",
    "Film Nagar, next to Jubilee Hills and home to many from the Telugu film industry, is lined with luxury homes and villas. We design bespoke residences, high-end interiors and facade upgrades, with Vaasthu built into every plan.",
    ["Jubilee Hills", "Banjara Hills", "Manikonda"]),
  hyd("financial-district", "Financial District", "premium",
    "The Financial District and Nanakramguda, Hyderabad's corporate hub beside Gachibowli, are surrounded by luxury high-rise apartments and premium offices. We design apartment and office interiors, review layouts for Vaasthu and plan commercial fit-outs here.",
    ["Gachibowli", "Kokapet", "Neopolis", "Narsingi"]),
  hyd("somajiguda", "Somajiguda", "premium",
    "Somajiguda, in the heart of the city near Raj Bhavan, combines upscale residences with hotels, hospitals and offices. Most projects here are redevelopments, premium interiors and commercial upgrades on compact, high-value plots.",
    ["Banjara Hills", "Begumpet", "Ameerpet"]),
  hyd("himayatnagar", "Himayatnagar", "premium",
    "Himayatnagar is a long-established upscale shopping and residential area in central Hyderabad. We design commercial frontages and showrooms, redevelop older houses, check structures for additional floors and provide Vaasthu advice.",
    ["Somajiguda", "Ameerpet", "Banjara Hills"]),
  hyd("nallagandla", "Nallagandla", "premium",
    "Nallagandla, between Gachibowli and Tellapur, is popular for gated communities, villas and premium apartments close to the IT corridor. We design villas, luxury interiors and Vaasthu-compliant homes for Nallagandla families.",
    ["Gachibowli", "Tellapur", "Kondapur"]),
];

// ---------------- Telangana ----------------

const tg = (slug: string, area: string, about: string): Location => ({
  slug: `architects-in-${slug}`,
  area,
  region: "Telangana",
  seoTitle: fitTitle(`Architects & Vastu Consultants in ${area}, Telangana | BBMC`, `Architects & Vastu Consultants in ${area} | BBMC`),
  metaDescription: `Architects, engineers & vastu consultants serving ${area}, Telangana. House plans, Vaasthu, structural design & construction by BBMC since 1995.`,
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

// ---------------- Hyderabad zones (one page per zone, listing every neighbourhood) ----------------

const zone = (slug: string, name: string, about: string[], areas: string[], focus: string[], nearby: string[]): Location => ({
  slug: `architects-in-${slug}`,
  area: name,
  region: "Hyderabad",
  seoTitle: `Architects & Vastu Consultants in ${name.split(" (")[0]} | BBMC`,
  metaDescription: `Architects, engineers & vastu consultants across ${name.split(" (")[0]}: ${areas.slice(0, 3).join(", ")} and more. BBMC since 1995.`,
  intro: about,
  focus,
  nearby,
  areas,
  faqs: [
    { q: `Which areas of ${name} do you cover?`, a: `All of them, including ${areas.slice(0, 6).join(", ")} and every neighbourhood listed on this page.` },
    { q: "Can you visit my plot or site?", a: "Yes. Call or WhatsApp us with your location and we'll schedule a site visit." },
    { q: "Do you handle building permission drawings here?", a: "Yes. We prepare drawings as per the rules of the authority that applies to your plot (GHMC, HMDA or the local municipality)." },
  ],
});

const zones: Location[] = [
  zone(
    "northeast-hyderabad",
    "Northeast Hyderabad (ECIL, Kapra & Nagole)",
    [
      "The ECIL, Kapra, Sainikpuri and Nagole belt in north-east Hyderabad mixes established colonies with fast-growing layouts towards Jawaharnagar, Narapally and Pratap Singaram. Many families here are building independent houses and G+2 rental buildings on new plots, or rebuilding older homes.",
      "BBMC's Boduppal office is close by, so site visits across this side of the city are quick to arrange. We handle plot Vaasthu, house plans, structural design, bank estimates, permission drawings and construction.",
    ],
    ["Sainikpuri", "AS Rao Nagar", "Kapra Lake area", "Sainik Puri Extension", "Dammaiguda Extension", "Jawaharnagar", "Thumkunta", "Yamnampet", "Edulabad", "Korremula", "Pratap Singaram Road", "Ankireddypally", "Narapally", "Bandlaguda (Nagole)", "Rampally Dayara", "Rajiv Gandhi Nagar (Kapra)", "Chintal Cheruvu", "Bhavani Nagar"],
    ["Independent house and duplex plans", "G+2 / G+3 rental buildings", "Plot Vaasthu before purchase", "Bank loan estimates", "Construction"],
    ["Boduppal", "Uppal", "Ghatkesar", "Peerzadiguda"],
  ),
  zone(
    "north-hyderabad",
    "North Hyderabad (Medchal, Alwal & Kompally)",
    [
      "North Hyderabad stretches from Alwal and Bollaram along the Medchal highway to Kompally, Thumkunta and the villages around the Outer Ring Road. It is popular for villas, gated communities, farm plots and new layouts.",
      "We design Vaasthu-compliant villas and independent houses, plan layouts and plot developments, and take up construction across the northern corridor.",
    ],
    ["Kompally", "Bachupally", "Miyapur", "Pragathi Nagar", "Kowkur","Turkapally", "Thummalur", "Pudur", "Pothaipally", "Bommaipally", "Aliyabad", "Yellampet", "Muduchintalapally", "Devarayamjal", "Gundlapochampally", "Medchal Road area", "Alwal Extension", "Bollaram", "Rajiv Rahadari", "Qutubullapur Road area"],
    ["Villa and farmhouse design", "Layout and plot development", "Plot Vaasthu", "Independent house design", "Construction"],
    ["Kompally", "Secunderabad", "Bachupally"],
  ),
  zone(
    "east-hyderabad",
    "East Hyderabad (Uppal, Ghatkesar & LB Nagar)",
    [
      "East Hyderabad is BBMC's home ground. From Uppal, Boduppal and Peerzadiguda out to Pocharam, Ghatkesar and Bibinagar along the Warangal highway, and south to Gaddiannaram and Meerpet, it covers busy established colonies and fast-growing new layouts.",
      "We have designed and built homes, rental buildings and commercial projects across the east for three decades: plans, Vaasthu, structural design, approvals and construction under one roof.",
    ],
    ["Uppal", "Boduppal", "Medipally", "Pocharam", "LB Nagar", "Pocharam Village","Annojiguda Extension", "Ghatkesar Village", "Edulabad Road area", "Bibinagar", "Ramannapet", "Tukkuguda East", "Peerzadiguda Extension", "Boduppal Extension", "Mallapur Industrial Area", "Uppal Bhagayath", "Kamalanagar", "Gaddiannaram", "Sri Ram Nagar Colony", "Medipally Extension", "Meerpet HB Colony"],
    ["House plans and rental buildings", "Commercial and industrial buildings", "Vaasthu for homes, shops and factories", "Bank loan estimates", "Construction and renovation"],
    ["Boduppal", "Uppal", "Peerzadiguda", "Medipally", "LB Nagar"],
  ),
  zone(
    "south-hyderabad",
    "South Hyderabad (Old City & Gandipet)",
    [
      "South Hyderabad covers the dense, historic Old City around Bahadurpura, Falaknuma, Yakutpura and Santosh Nagar, as well as the open, fast-developing belt towards Gandipet, Himayat Sagar and Chilukur.",
      "In the Old City we focus on redevelopment of older houses, structural checks and Vaasthu corrections; towards Gandipet and Chilukur, on villas, farmhouses and plot development.",
    ],
    ["Adibatla", "Rajendra Nagar", "Budwel", "Shamshabad", "Tukkuguda", "Gandipet", "Chilukur","Himayat Sagar", "Premavathipet", "Peeramcheru", "Hyderguda", "Bahadurpura", "Kishanbagh", "Falaknuma Extension", "Chandrayangutta Road area", "Saidabad", "Santosh Nagar", "Yakutpura", "Dabirpura", "Puranapul", "Jahanuma"],
    ["Redevelopment of older houses", "Structural assessment", "Vaasthu corrections", "Villa and farmhouse design", "Plot development"],
    ["Narsingi", "Shamshabad", "Dilsukhnagar"],
  ),
  zone(
    "west-hyderabad",
    "West Hyderabad (Gachibowli, Tellapur & Patancheru)",
    [
      "West Hyderabad runs from the IT corridor around Gachibowli, Raidurg and Khajaguda through Manikonda, Puppalguda and Narsingi to Tellapur, Osman Nagar and the Patancheru industrial belt. Demand here ranges from apartment interiors to villas and industrial buildings.",
      "BBMC designs homes, interiors, villas and industrial structures across the west, with Vaasthu and structural design handled in-house.",
    ],
    ["Kokapet", "Neopolis", "Narsingi", "Tellapur", "Kollur", "Gachibowli", "Kondapur", "Mokila", "Financial District", "Nallagandla", "Film Nagar", "Kondapur Extension","Gachibowli Extension", "Khajaguda", "Raidurg", "Puppalguda", "Manikonda Jagir", "Gandipet Road area", "Narsingi Extension", "Tellapur Extension", "Osman Nagar", "Pocharam West", "Peerancheru", "Patelguda", "Ashok Nagar (Patancheru)", "Bollarum (Patancheru)", "Rudraram"],
    ["Apartment and villa interiors", "Villa design", "Industrial and commercial buildings", "Vaasthu for homes and offices", "Independent house design"],
    ["Gachibowli", "Kondapur", "Manikonda", "Kokapet", "Narsingi", "Sangareddy"],
  ),
  zone(
    "central-hyderabad",
    "Central Hyderabad (Kachiguda, Basheerbagh & Secunderabad)",
    [
      "Central Hyderabad, from Basheerbagh and Himayatnagar's neighbours through Kachiguda, Barkatpura and Nallakunta to Padmarao Nagar and Warasiguda near Secunderabad, is dense and long established. Most projects here are redevelopments, additional floors, renovations and commercial upgrades.",
      "Our structural engineers check existing buildings before any addition, and our architects make the most of compact central plots while keeping them Vaasthu-compliant.",
    ],
    ["Somajiguda", "Himayatnagar", "Basheerbagh", "Gandhinagar", "Bakaram", "Ashoknagar", "Hill Fort", "Nallakunta", "Barkatpura", "Kachiguda", "Afzalgunj", "Gowliguda", "Chaderghat", "Putlibowli", "Sitaphalmandi", "Bholakpur", "Padmarao Nagar", "Warasiguda"],
    ["Redevelopment and additional floors", "Structural assessment", "Commercial building design", "Renovation and interiors", "Vaasthu consultation"],
    ["Secunderabad", "Ameerpet", "Begumpet", "Habsiguda"],
  ),
];

// People search "builders in X", "architects near X", "construction company in X".
// Titles and descriptions use those everyday words, shortened to fit Google's display.
const withSearchWords = (l: Location): Location => {
  const name = l.area.split(" (")[0];
  return {
    ...l,
    seoTitle:
      [
        `Architects, Builders & Vastu Consultants in ${name} | BBMC`,
        `Architects & Builders in ${name} | Vastu & Interiors | BBMC`,
        `Architects & Builders in ${name} | BBMC`,
      ].find((t) => t.length <= 62) ?? `Builders in ${name} | BBMC`,
    metaDescription: `Builders, architects, structural engineers & vastu consultants in ${name}. House plans, construction, interiors & approvals by BBMC since 1995.`,
  };
};

export const locations: Location[] = [
  ...zones,
  ...eastHyderabad.map((l) => ({ ...l, region: "Hyderabad" as const })),
  ...restOfHyderabad,
  ...telangana,
].map(withSearchWords);

export const zoneLocations = zones;

// Top construction and real-estate hotspots, by corridor
export const hotspots = [
  { corridor: "West Hyderabad: IT & luxury corridor", zone: "architects-in-west-hyderabad", areas: ["Kokapet", "Neopolis", "Narsingi", "Tellapur", "Kollur", "Gachibowli", "Kondapur", "Mokila"] },
  { corridor: "North Hyderabad: residential & mid-segment growth", zone: "architects-in-north-hyderabad", areas: ["Kompally", "Bachupally", "Miyapur", "Pragathi Nagar"] },
  { corridor: "South Hyderabad: airport & industrial corridor", zone: "architects-in-south-hyderabad", areas: ["Adibatla", "Rajendra Nagar", "Budwel", "Shamshabad", "Tukkuguda"] },
  { corridor: "East Hyderabad: suburban & highway belt", zone: "architects-in-east-hyderabad", areas: ["Uppal", "Boduppal", "Medipally", "Pocharam", "LB Nagar"] },
  { corridor: "Premium neighbourhoods", zone: "architects-in-central-hyderabad", areas: ["Jubilee Hills", "Banjara Hills", "Film Nagar", "Kokapet", "Neopolis", "Financial District", "Nallagandla", "Somajiguda", "Himayatnagar", "Sainikpuri", "AS Rao Nagar"] },
];

/** Link to an area's own page if it has one, otherwise to its zone page. */
export const areaHref = (area: string, zoneSlug: string) => {
  const own = locations.find((l) => l.area === area && !l.areas);
  return `/${own ? own.slug : zoneSlug}`;
};

export const hyderabadLocations = locations.filter((l) => l.region === "Hyderabad" && !l.areas);
export const telanganaLocations = locations.filter((l) => l.region === "Telangana");

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
