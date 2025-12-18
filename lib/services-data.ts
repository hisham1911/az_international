// Centralized services data configuration
export interface ServiceCategory {
  id: string;
  name: string;
  link: string;
  description: string;
  services: string[];
  icon?: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "quality",
    name: "Quality Assurance & Controls",
    link: "/services/quality-assurance",
    description:
      "Comprehensive quality inspection and control services for all engineering disciplines",
    services: [
      "Quality inspection of all engineering disciplines",
      "Ultrasonic Testing (UT)",
      "Magnetic Particle Testing (MT)",
      "Dye Penetrant Testing (PT)",
      "Visual Inspection (VT)",
      "Welders inspection and procedure testing",
      "Welder performance qualifications",
      "Coating/Painting inspection",
    ],
  },
  {
    id: "field",
    name: "Field/Industrial Inspection",
    link: "/services/field-industrial",
    description:
      "On-site inspection and NDT services for industrial facilities and equipment",
    services: [
      "Pipeline welding inspection and NDT",
      "On-stream wall thickness measurement",
      "Refinery equipment inspection",
      "Pressure vessels & drums inspection",
      "Storage tank inspection",
      "Heat exchangers inspection",
      "Piping & headers inspection",
      "Towers & reactors inspection",
    ],
  },
  {
    id: "specialized",
    name: "Specialized Services",
    link: "/services/specialized-services",
    description:
      "Advanced specialized inspection and testing services for complex applications",
    services: [
      "Vendor inspection and surveillance",
      "Pre-commissioning testing inspection",
      "Rope Access Inspection (LEEA-certified)",
      "Tank integrity inspections (API 653)",
      "Portable alloy analysis (PMI)",
      "Internal bore ultrasonic service",
      "Surface replication analysis",
      "Turnaround inspection services",
    ],
  },
  {
    id: "training",
    name: "Capacity Building Training",
    link: "/services/capacity-building",
    description:
      "Professional training and capacity building programs for technical expertise development",
    services: [
      "Customized technical training courses",
      "NDT certification programs",
      "Quality control inspection training",
      "Welding technology courses",
      "Case studies & practical exercises",
      "Educational videos and materials",
      "Professional requalification programs",
      "Industry-specific training solutions",
    ],
  },
  {
    id: "ndt",
    name: "Standard NDT Services",
    link: "/services/standard-ndt",
    description:
      "Comprehensive non-destructive testing using industry-standard techniques",
    services: [
      "Ultrasonic Testing (UT) - Contact techniques",
      "Magnetic Particle Testing (MT)",
      "Liquid Penetrant Testing (PT)",
      "Computerized ultrasonic mapping",
      "Storage tanks inspection",
      "Pipeline inspection services",
      "Leak detection and testing",
      "Surface wave methods",
    ],
  },
];

// Service icons mapping
export const serviceIcons = {
  quality: "FileCheck",
  field: "Wrench",
  specialized: "Shield",
  training: "Users",
  ndt: "Microscope",
  certifications: "Award",
} as const;

// Homepage services data (simplified version)
export const homepageServices = serviceCategories.map((category) => ({
  icon: serviceIcons[category.id as keyof typeof serviceIcons] || "FileCheck",
  title: category.name,
  description: category.description,
  link: category.link,
}));
