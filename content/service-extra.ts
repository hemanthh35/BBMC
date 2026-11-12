// Extra long-form content for service pages: guidance sections and additional FAQs.
import type { Faq } from "./services";

export type ExtraSection = { heading: string; body: string[]; list?: string[] };

export const serviceExtra: Record<string, { sections: ExtraSection[]; faqs: Faq[] }> = {
  "architectural-design": {
    sections: [
      {
        heading: "Planning a home that works for your family",
        body: [
          "A good plan starts with how you live: how many people, whether parents stay with you, whether you need a home office, a rental portion or parking for two cars. We turn those needs into room sizes and positions before drawing a single line, so the plan fits your life rather than a template.",
          "We also look ahead. Many Hyderabad families build G+1 today and add a floor later, so we plan the staircase, structure and services for future expansion from the start.",
        ],
      },
      {
        heading: "What affects the design of your plot",
        body: ["Every plot comes with its own constraints. We check these before planning:"],
        list: [
          "Road width and facing, which decide setbacks and Vaasthu placement",
          "Plot shape and size, including irregular or corner plots",
          "Permissible floors and coverage under local rules",
          "Neighbouring buildings, light and ventilation",
          "Soil and site levels",
        ],
      },
    ],
    faqs: [
      { q: "How long does it take to get house plans ready?", a: "Concept layouts usually take one to two weeks after the site study, depending on how quickly options are finalised. Working drawings follow once the plan is approved." },
      { q: "Can you redesign a plan I already have?", a: "Yes. We can review an existing plan, improve the layout and Vaasthu, and prepare fresh working drawings." },
    ],
  },
  "structural-engineering": {
    sections: [
      {
        heading: "Why structural design matters",
        body: [
          "Most building problems, such as cracks, sagging slabs, leaking joints and settlement, start with weak structural design or poor execution. A properly engineered structure is designed for the actual loads it will carry, including future floors, water tanks and the soil conditions on your site.",
          "Good design also saves money. Over-designed columns and beams waste steel and concrete; under-designed ones are unsafe. Our engineers size every member for what it needs to carry, no more and no less.",
        ],
      },
      {
        heading: "What our structural drawings include",
        body: ["Your site team receives clear, buildable drawings covering:"],
        list: [
          "Footing layout, sizes and depths",
          "Column positions, sizes and reinforcement",
          "Plinth and floor beams with bar details",
          "Slab thickness and reinforcement for each floor",
          "Staircase and lintel details",
          "Bar bending schedules for ordering steel",
        ],
      },
      {
        heading: "Adding floors to an existing building",
        body: [
          "Before adding a floor, the existing structure must be checked. We review the original drawings if available, inspect columns, beams and foundations on site, and advise whether the building can take the extra load or needs strengthening first.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need structural drawings for a G+1 house?", a: "Yes. Even a small house benefits from proper structural design, and approving authorities often require structural drawings for permission." },
      { q: "Can you check cracks in my existing building?", a: "Yes. We inspect cracks, identify whether they are structural or surface-level, and recommend repairs." },
    ],
  },
  "interior-design": {
    sections: [
      {
        heading: "Interiors that fit your space and budget",
        body: [
          "Good interiors begin with planning, not decoration. We first fix furniture layouts, storage and circulation so every room works, then choose materials, colours and lighting to bring it together.",
          "We design to a budget you set, with options at different price points for laminates, veneers, hardware and finishes, so you know what you are paying for before work starts.",
        ],
      },
      {
        heading: "Rooms and spaces we design",
        body: ["Our interior work covers homes and businesses:"],
        list: [
          "Living and dining rooms with TV units and partitions",
          "Modular kitchens: straight, L-shaped, U-shaped and island",
          "Bedrooms with wardrobes, study units and dressers",
          "Kids' rooms and guest rooms",
          "Pooja rooms designed with Vaasthu in mind",
          "Offices, clinics, cafes, restaurants and showrooms",
        ],
      },
      {
        heading: "Seeing it before it is built",
        body: [
          "We share 3D views of key rooms so you can see colours, materials and lighting before carpentry begins. Changes are easy at this stage and expensive later.",
        ],
      },
    ],
    faqs: [
      { q: "How long does home interior work take?", a: "It depends on the scope. A 2BHK typically takes a few weeks from design approval, while larger homes take longer. We share a schedule before starting." },
      { q: "Do you provide modular kitchens?", a: "Yes. We design modular kitchens to suit your space, appliances and cooking style, including Vaasthu-friendly placement of the stove and sink." },
    ],
  },
  "vastu-consultation": {
    sections: [
      {
        heading: "Vaasthu that works with modern living",
        body: [
          "Our approach to Vaasthu is practical. We follow traditional principles for directions, entrance, kitchen, bedrooms and puja room, while keeping rooms well-lit, ventilated and comfortable for how families live today.",
          "Because BBMC is also an architecture and engineering firm, our Vaasthu advice is always buildable. We don't suggest changes that compromise the structure or that local rules won't allow.",
        ],
      },
      {
        heading: "Common Vaasthu concerns we help with",
        body: [],
        list: [
          "Choosing between east, west, north and south facing plots",
          "Main entrance and gate position",
          "Kitchen, master bedroom and puja room placement",
          "Staircase, overhead tank and borewell location",
          "Toilet positions in existing homes",
          "Office cabins, cash counters and shop entrances",
        ],
      },
    ],
    faqs: [
      { q: "Is a west-facing or south-facing plot bad as per Vaasthu?", a: "No plot direction is bad in itself. With the right room placement, homes on any facing can follow Vaasthu. We plan the layout to suit the plot's facing." },
      { q: "Do you check Vaasthu from drawings without visiting?", a: "Yes, we can review a plan or layout drawing remotely. For existing buildings, a site visit gives the most accurate advice." },
    ],
  },
  "construction-renovation": {
    sections: [
      {
        heading: "How we keep construction quality on track",
        body: [
          "Quality comes from checking work at every stage, not just at the end. We inspect excavation and footings, reinforcement before every concrete pour, masonry alignment, plastering, waterproofing and finishes, and fix issues before they get covered up.",
          "You get regular updates on progress and spending, so there are no surprises.",
        ],
      },
      {
        heading: "Stages of building a house",
        body: [],
        list: [
          "Site clearing, marking and excavation",
          "Foundation and plinth",
          "Columns, beams and slabs for each floor",
          "Brickwork or blockwork",
          "Electrical and plumbing conduits",
          "Plastering, waterproofing and flooring",
          "Doors, windows, painting and finishing",
        ],
      },
      {
        heading: "Renovation and remodelling",
        body: [
          "Older homes often need more than paint: new kitchens and bathrooms, re-done electrical wiring and plumbing, waterproofing, or an extra floor. We assess the building first and plan renovation in a sequence that keeps disruption low.",
        ],
      },
    ],
    faqs: [
      { q: "How long does it take to build a G+1 house?", a: "It depends on the design, site and specifications, but a typical independent house takes several months from foundation to handover. We share a schedule with your estimate." },
      { q: "Do you provide a fixed estimate before starting?", a: "Yes. We prepare a detailed estimate from the drawings and agreed specifications before construction begins." },
    ],
  },
  "builders-developers": {
    sections: [
      {
        heading: "Development under one roof",
        body: [
          "Most development projects involve separate architects, engineers, contractors and consultants. BBMC brings design, structural engineering, Vaasthu, approvals support and construction together, which means fewer handovers, clearer accountability and faster decisions.",
        ],
      },
      {
        heading: "Working with landowners",
        body: [
          "If you own land and want to develop it, we can study the plot, explain what can be built under local rules and plan a development that suits the location. We discuss the arrangement that suits you, whether design and construction services or a development partnership.",
        ],
        list: [
          "Feasibility: permissible floors, built-up area and parking",
          "Concept design and unit mix",
          "Structural design and approvals drawings",
          "Construction and project management",
        ],
      },
    ],
    faqs: [
      { q: "Do you build apartments for sale?", a: "Yes, BBMC develops residential and commercial projects. Contact us for current and upcoming projects." },
      { q: "Can you take up a project outside Hyderabad?", a: "Yes. We have worked across Telangana and can take up projects in other towns too." },
    ],
  },
  "estimates-valuations": {
    sections: [
      {
        heading: "Why an accurate estimate matters",
        body: [
          "An estimate that is too low leaves you short of money halfway through construction; one that is too high can affect your loan eligibility and plans. Our estimates are prepared from your drawings and specifications by the same team that designs and builds, so they reflect real quantities and current rates.",
        ],
      },
      {
        heading: "Documents usually needed",
        body: ["Requirements vary by bank, but keep these ready:"],
        list: [
          "Approved or proposed building plan",
          "Sale deed and link documents",
          "Property tax receipt (for existing buildings)",
          "Building permission, where already obtained",
          "Your bank's estimate format, if it has one",
        ],
      },
      {
        heading: "Property valuations",
        body: [
          "For existing properties we provide valuation reports covering land value, built-up area, construction quality and age, for loans, sale, purchase or family settlements.",
        ],
      },
    ],
    faqs: [
      { q: "How long does an estimate take?", a: "Once we have the drawings and details, most estimates are ready within a few working days." },
      { q: "Can you prepare estimates for renovation loans?", a: "Yes, we prepare estimates for renovation, additional floors and repairs." },
    ],
  },
  "land-surveying-plot-development": {
    sections: [
      {
        heading: "Why survey before you build or buy",
        body: [
          "Plot dimensions on documents don't always match the ground. A survey confirms the actual size, boundaries and levels before you design, buy or build, preventing costly mistakes and disputes with neighbours.",
        ],
      },
      {
        heading: "Plot development and layouts",
        body: [
          "For larger land parcels, we plan layouts with roads, plots, open spaces and utilities, following applicable rules and keeping Vaasthu in mind for plot orientation. A well-planned layout improves both usability and value.",
        ],
        list: [
          "Topographic and boundary surveys",
          "Plot demarcation and stone fixing",
          "Layout planning with roads and open spaces",
          "Level surveys for drainage and site grading",
        ],
      },
    ],
    faqs: [
      { q: "How long does a plot survey take?", a: "A survey of a typical residential plot is usually done in a single visit, with the drawing shared afterwards." },
      { q: "Can you help with a boundary dispute?", a: "We can survey and document the actual measurements on site, which helps resolve boundary questions." },
    ],
  },
  "building-elevation-design": {
    sections: [
      {
        heading: "Elevation styles we design",
        body: ["The front elevation sets the character of the whole building. Popular styles include:"],
        list: [
          "Modern: clean lines, large glazing and flat roofs",
          "Contemporary: mixed materials such as stone, wood and metal",
          "Minimalist: simple forms and neutral colours",
          "Classic and traditional: columns, arches and detailing",
          "Commercial facades with signage space for shops and offices",
        ],
      },
      {
        heading: "Materials that last",
        body: [
          "A great elevation must also survive Hyderabad's sun and monsoon. We recommend materials such as ACP cladding, HPL panels, stone, textured paint, louvers and glass that suit your budget and need little maintenance, and detail them so water doesn't collect.",
        ],
      },
    ],
    faqs: [
      { q: "How much does an elevation add to the cost?", a: "It depends on the materials chosen. We offer options at different budgets so the elevation fits your overall project cost." },
      { q: "Can the elevation be changed after construction?", a: "Yes, through a facade upgrade with cladding, paint and new features, without rebuilding the structure." },
    ],
  },
  "building-permission-approvals": {
    sections: [
      {
        heading: "Getting permission right the first time",
        body: [
          "Applications are often delayed because drawings don't match the rules for the plot: wrong setbacks, excess height or coverage, or missing documents. We check your plot and road width against applicable rules before preparing drawings, so the application is complete.",
        ],
      },
      {
        heading: "What we check before preparing drawings",
        body: [],
        list: [
          "Ownership and link documents",
          "Whether the layout or plot is approved or regularised",
          "Road width in front of the plot",
          "Setbacks, height and floor limits",
          "Parking requirements",
          "Any applicable fire or environmental norms for larger buildings",
        ],
      },
      {
        heading: "After permission",
        body: [
          "Once permission is granted, construction should follow the approved drawings. We can supervise construction and help with completion and occupancy steps where needed.",
        ],
      },
    ],
    faqs: [
      { q: "Can I start construction before permission?", a: "No. Building without permission can lead to penalties or demolition. Always obtain approval first." },
      { q: "Do you handle regularisation?", a: "Contact us with your documents and we'll explain what applies to your property." },
    ],
  },
};
