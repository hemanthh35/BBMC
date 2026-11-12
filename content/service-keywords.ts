// How people search for each service. Used in page titles and a short "Also known as" line.
export const serviceKeywords: Record<string, { title?: string; phrases: string[] }> = {
  "architectural-design": {
    title: "Architects in Hyderabad | Residential Architects | BBMC",
    phrases: ["Architects in Hyderabad", "Residential architects Hyderabad", "Building plan consultants Hyderabad", "House plan designers"],
  },
  "structural-engineering": {
    title: "Civil & Structural Engineers in Hyderabad | BBMC",
    phrases: ["Civil engineers Hyderabad", "Civil engineer near me", "Structural engineers Hyderabad", "Structural consultants near me"],
  },
  "interior-design": {
    title: "Interior Designers in Hyderabad | Home Interiors | BBMC",
    phrases: ["Interior designers Hyderabad", "Home interior designers near me", "Modular kitchen designers", "Office interior designers"],
  },
  "vastu-consultation": {
    title: "Vastu Consultants in Hyderabad | Vastu Advisor | BBMC",
    phrases: ["Vastu consultants Hyderabad", "Vastu advisor near me", "Vaasthu expert", "Vastu for home and office"],
  },
  "construction-renovation": {
    title: "Construction & Home Renovation Consultants Hyderabad | BBMC",
    phrases: ["Construction consultants Hyderabad", "Home renovation consultants Hyderabad", "House construction contractors", "Civil contractors"],
  },
  "builders-developers": {
    phrases: ["Builders in Hyderabad", "Independent house builders", "Villa builders", "Property developers Hyderabad"],
  },
  "estimates-valuations": {
    phrases: ["Bank loan estimate Hyderabad", "Property valuers Hyderabad", "Construction cost estimate", "Building valuation"],
  },
  "land-surveying-plot-development": {
    phrases: ["Land surveyors Hyderabad", "Plot surveyors", "Layout planning consultants", "Boundary survey"],
  },
  "building-elevation-design": {
    title: "3D Elevation Designers in Hyderabad | Front Elevation | BBMC",
    phrases: ["3D elevation designers Hyderabad", "Front elevation design", "Building facade design", "House elevation designers near me"],
  },
  "building-permission-approvals": {
    title: "Building Plan Approval Consultants Hyderabad | GHMC | BBMC",
    phrases: ["Building plan consultants Hyderabad", "GHMC plan approval", "HMDA building permission", "Building permission drawings"],
  },
};
