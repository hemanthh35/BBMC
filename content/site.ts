// Single source of truth for business details (NAP). Keep identical to Google Business Profile.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://bbmcconsultants.in").replace(/\/$/, "");

export const site = {
  name: "Balaji Benchmark Consultants",
  shortName: "BBMC",
  legalName: "Balaji Benchmark Consultants (BBMC)",
  tagline: "Designing Dreams. Building Excellence.",
  roles: "Architects | Engineers | Vaasthu Consultants | Interior Designers | Builders | Developers",
  foundingYear: 1995,
  founder: {
    name: "Er. Paspunoori Srinivas Gupta",
    role: "Founder & Managing Director",
    subRole: "Principal Consultant, BBMC Balaji Benchmark Consultants",
    image: "/images/er-paspunoori-srinivas-gupta-founder-bbmc.webp",
  },
  phones: [
    { display: "+91 93910 36765", tel: "+919391036765" },
    { display: "+91 96429 81899", tel: "+919642981899" },
  ],
  email: "bbmcconsultants@gmail.com",
  whatsapp: "919391036765",
  whatsappText: "Hi BBMC, I would like to inquire about your services.",
  hours: {
    display: "Mon - Sun: 9:00 AM - 10:00 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "22:00",
  },
  address: {
    lines: [
      "Plot No.12, Street No.1, Srinagar Colony,",
      "Adjacent lane to Universe Bakery,",
      "Near Ambedkar Statue, Boduppal,",
      "Hyderabad, Telangana - 500092",
    ],
    street: "Plot No.12, Street No.1, Srinagar Colony, Adjacent lane to Universe Bakery, Near Ambedkar Statue",
    locality: "Boduppal",
    city: "Hyderabad",
    region: "Telangana",
    postalCode: "500092",
    country: "IN",
  },
  geo: { lat: 17.4175222, lng: 78.5851395 },
  mapsUrl: "https://maps.app.goo.gl/VeRk9wKnZJkvT1kF6",
  mapsEmbed: "https://www.google.com/maps?q=17.4175222,78.5851395&z=17&output=embed",
  social: {
    facebook: "https://www.facebook.com/share/1BThqWfbeZ/",
    instagram: "https://www.instagram.com/srinivasguptapaspunoori_bbmc/profile",
    youtube: "https://www.youtube.com/@bbmcconsultants",
  },
  logo: "/images/bbmc-logo.webp",
  stats: [
    { value: "30+ Years", label: "of Excellence" },
    { value: "Vaasthu Compliant", label: "Designs" },
    { value: "3000+", label: "Happy Clients" },
    { value: "500+", label: "Projects Delivered" },
  ],
  areasServed: [
    "Boduppal", "Uppal", "Peerzadiguda", "Nacharam", "Habsiguda", "Tarnaka", "Medipally",
    "Ramanthapur", "Mallapur", "LB Nagar", "Ghatkesar", "Hayathnagar", "Secunderabad", "Hyderabad",
  ],
};

export const whatsappLink = (text: string = site.whatsappText) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
