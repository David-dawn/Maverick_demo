/**
 * Single source of truth for hydropower projects.
 * Used by MajorProjectsGrid and Case Study carousel.
 */

export type ProjectEntry = {
  name: string;
  client: string;
  scope: string[];
  capacity: number;
  energyOutput: string;
  image: string;
  location?: string;
};

export const projectsData: ProjectEntry[] = [
  {
    name: "1,525MW Mambilla Hydroelectric Power",
    client: "Federal Ministry of Power",
    scope: [
      "Final Engineering Design and Construction Supervision",
      "1,525MW Hydropower Plant (5,400 GWh annually)",
      "330km Transmission Line Network of 330kV between Mambilla and Makurdi",
      "320km Transmission Line Network of 330kV between Mambilla and Jalingo",
    ],
    capacity: 1525,
    energyOutput: "5,400 GWh per annum",
    image: "/mep-media/image5.jpeg",
    location: "Nigeria",
  },
  {
    name: "700MW Zungeru Hydroelectric Power",
    client: "Federal Ministry of Power",
    scope: [
      "Project Management and Supervision",
      "700MW Hydropower Plant (2,600 GWh annually)",
      "33km 330kV transmission line connecting Shiroro and Jebba",
      "35km 132kV transmission line between Zungeru and Tegina",
      "33/132/330kV Switchyard",
    ],
    capacity: 700,
    energyOutput: "2,600 GWh per annum",
    image: "/mep-media/Zungeru hydroelectric.png",
    location: "Nigeria",
  },
  {
    name: "30MW Gurara Hydroelectric Power",
    client: "Federal Ministry of Water Resources",
    scope: [
      "Final Engineering Design and Construction Supervision",
      "30MW Hydropower Plant (120 GWh per year)",
      "139km 132kV transmission line to Kaduna and 21km 33kV distribution line",
      "330/132/33kV Substation and 2×15MVA Power Transformers",
    ],
    capacity: 30,
    energyOutput: "120 GWh per annum",
    image: "/mep-media/image8.jpeg",
    location: "Nigeria",
  },
  {
    name: "5,150MW Grand Ethiopian Renaissance Dam",
    client: "Ethiopian Electric Power",
    scope: [
      "Consultancy and advisory for large-scale hydropower",
      "5,150MW Hydropower Plant",
      "Transmission and energy integration components",
    ],
    capacity: 5150,
    energyOutput: "15,692 GWh per annum (design)",
    image: "/mep-media/image10.png",
    location: "Ethiopia",
  },
  {
    name: "450MW Cana Brava Hydroelectric Power Plant",
    client: "Cana Brava Energia S.A.",
    scope: [
      "Engineering and design consultancy",
      "450MW Hydropower Plant",
      "Transmission and substation scope",
    ],
    capacity: 450,
    energyOutput: "Approx. 2,300 GWh per annum",
    image: "/mep-media/image11.png",
    location: "Brazil",
  },
  {
    name: "40MW Kashimbila Hydroelectric Power",
    client: "Federal Ministry of Water Resources ",
    scope: [
      "Operation and Maintenance",
      "Multipurpose dam and hydropower development",
      "40MW Hydropower Plant",
      "Water supply and flood control components",
    ],
    capacity: 40,
    energyOutput: "Approx. 200 GWh per annum",
    image: "/mep-media/kash.png",
    location: "Nigeria",
  },
];
