export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "vastu-tips-for-east-facing-house",
    title: "Vastu Tips for an East-Facing House: A Practical Guide",
    description:
      "Where to place the main door, kitchen, master bedroom and puja room in an east-facing house, explained simply by BBMC's Vaasthu consultants in Hyderabad.",
    date: "2026-11-13",
    image: "/images/interiors/pooja-room.webp",
    sections: [
      {
        heading: "Why east-facing houses are popular",
        body: [
          "In Vaasthu, the east is associated with the rising sun, light and new beginnings. East-facing plots are among the most sought-after in Hyderabad, but the facing alone does not make a house Vaasthu-compliant. What matters is how the rooms are arranged inside.",
        ],
      },
      {
        heading: "Room placement guidelines",
        body: ["These are the commonly followed principles we start with when planning an east-facing home:"],
        list: [
          "Main entrance: in the north-east part of the east side, avoiding the south-east corner.",
          "Kitchen: south-east (Agneya) corner, with the cook facing east.",
          "Master bedroom: south-west corner.",
          "Puja room: north-east corner.",
          "Living room: towards the north or east.",
          "Staircase: south, west or south-west; avoid the north-east.",
          "Open space: leave more open space on the east and north than on the south and west.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Toilets or the staircase in the north-east, a heavy overhead water tank in the north-east, and a kitchen in the north-east are the issues we see most often in existing homes. Many of these can be improved without demolition.",
        ],
      },
      {
        heading: "Get a plan checked",
        body: [
          "Every plot is different: size, road position, neighbouring buildings and slope all affect the plan. BBMC's Vaasthu consultants can review your plot or existing plan and suggest practical, buildable solutions.",
        ],
      },
    ],
  },
  {
    slug: "building-permission-process-hyderabad",
    title: "Building Permission in Hyderabad: Steps and Documents",
    description:
      "An overview of the building permission process in Hyderabad: which authority applies, the documents you typically need, and how architects help.",
    date: "2026-11-13",
    image: "/images/projects/modern-house-elevation.webp",
    sections: [
      {
        heading: "Which authority approves your plan?",
        body: [
          "Building permission in Hyderabad is applied for online. Depending on where your plot is, it is approved by GHMC, HMDA or the local municipal body. The rules for setbacks, height and coverage depend on plot size and road width.",
        ],
      },
      {
        heading: "Documents usually required",
        body: ["Exact requirements vary by authority and plot, but you will typically need:"],
        list: [
          "Ownership documents (sale deed / title deed)",
          "Link documents and encumbrance certificate",
          "Approved layout or plot regularisation documents, where applicable",
          "Building plans prepared by a licensed professional",
          "Structural drawings for larger buildings",
          "Identity proof of the owner",
        ],
      },
      {
        heading: "Typical steps",
        body: [],
        list: [
          "Check the plot documents and applicable rules",
          "Prepare compliant building plans",
          "Submit the online application with documents and fees",
          "Respond to any queries from the authority",
          "Receive the permission and start construction",
        ],
      },
      {
        heading: "How BBMC helps",
        body: [
          "We check your documents, prepare plans that meet the setback and height rules for your plot, and guide you through the application, reducing the chance of rejection or delay. Always confirm current fees and requirements with the approving authority.",
        ],
      },
    ],
  },
  {
    slug: "bank-loan-estimate-for-house-construction",
    title: "Bank Loan Estimates for House Construction: What You Need to Know",
    description:
      "What a construction estimate for a home loan contains, why banks ask for it and how to get one prepared in Hyderabad.",
    date: "2026-11-13",
    image: "/images/services/construction.webp",
    sections: [
      {
        heading: "Why banks ask for an estimate",
        body: [
          "When you apply for a home construction loan, the bank needs to know how much the building will cost and in what stages the money will be spent. A professional estimate gives them that, and the loan amount and disbursement schedule are usually based on it.",
        ],
      },
      {
        heading: "What an estimate contains",
        body: [],
        list: [
          "Built-up area per floor",
          "Quantities of major items: concrete, steel, masonry, plastering, flooring",
          "Rates and total cost per item",
          "Stage-wise cost breakup (foundation, structure, finishing)",
          "Signature of a qualified professional",
        ],
      },
      {
        heading: "Tips",
        body: [
          "Ask your bank for its required format before the estimate is prepared, and keep the approved building plan ready. A realistic estimate avoids shortfalls during construction.",
          "BBMC prepares bank-approved estimates and property valuations for clients across Hyderabad and Telangana.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
