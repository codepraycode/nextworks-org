import type { Service, Stat } from "./types"

export const COMPANY_INFO = {
  name: "NeXtworks",
  tagline: "Empowering Businesses Through Technology",
  description:
    "Leading provider of comprehensive technology solutions, specializing in network infrastructure, IT services, and digital transformation.",
  email: "info@nextworks.com.ng",
  phone: ["+234 809 965 2296"],
  address: "8, Kehinde Akamo street, Ilupeju, Lagos, Nigeria",
}

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Network Infrastructure",
    slug: "network-infrastructure",
    icon: "network",
    shortDescription: "Design, implementation, and management of robust network solutions for businesses of all sizes.",
    fullDescription:
      "Our network infrastructure services provide end-to-end solutions from design to deployment and ongoing management. We ensure your network is secure, scalable, and optimized for performance.",
    features: [
      "Network Design & Architecture",
      "LAN/WAN Implementation",
      "Wireless Network Solutions",
      "Network Security & Monitoring",
      "Performance Optimization",
    ],
    benefits: [
      "Enhanced connectivity and reliability",
      "Improved security posture",
      "Scalable infrastructure",
      "24/7 monitoring and support",
    ],
  },
  {
    id: "2",
    title: "Information Services",
    slug: "information-services",
    icon: "database",
    shortDescription:
      "Comprehensive IT services including system administration, cloud solutions, and data management.",
    fullDescription:
      "Transform your business with our comprehensive information services. From cloud migration to data analytics, we help you leverage technology for competitive advantage.",
    features: [
      "Cloud Solutions & Migration",
      "Data Management & Analytics",
      "System Administration",
      "Backup & Disaster Recovery",
      "IT Infrastructure Management",
    ],
    benefits: [
      "Reduced operational costs",
      "Improved data accessibility",
      "Enhanced business continuity",
      "Scalable cloud infrastructure",
    ],
  },
  {
    id: "3",
    title: "IP Surveillance",
    slug: "ip-surveillance",
    icon: "camera",
    shortDescription: "Advanced IP-based surveillance systems for comprehensive security monitoring and management.",
    fullDescription:
      "Protect your assets with our state-of-the-art IP surveillance solutions. We design and implement comprehensive security systems tailored to your specific needs.",
    features: [
      "HD IP Camera Installation",
      "Video Management Systems",
      "Remote Monitoring Solutions",
      "Access Control Integration",
      "Analytics & Reporting",
    ],
    benefits: [
      "Enhanced security coverage",
      "Remote access and monitoring",
      "Intelligent video analytics",
      "Scalable security infrastructure",
    ],
  },
  {
    id: "4",
    title: "Automation Solutions",
    slug: "automation",
    icon: "cpu",
    shortDescription:
      "Smart automation systems to streamline operations and improve efficiency across your organization.",
    fullDescription:
      "Embrace the future with our automation solutions. We help businesses optimize processes, reduce costs, and improve productivity through intelligent automation.",
    features: [
      "Process Automation",
      "Smart Building Solutions",
      "IoT Integration",
      "Workflow Optimization",
      "Custom Automation Development",
    ],
    benefits: ["Increased operational efficiency", "Reduced manual errors", "Cost savings", "Improved productivity"],
  },
  {
    id: "5",
    title: "IT Consultancy",
    slug: "consultancy",
    icon: "lightbulb",
    shortDescription: "Expert guidance on technology strategy, digital transformation, and IT infrastructure planning.",
    fullDescription:
      "Navigate the complex technology landscape with confidence. Our experienced consultants provide strategic guidance to help you make informed decisions and achieve your business objectives.",
    features: [
      "Technology Strategy",
      "Digital Transformation",
      "IT Infrastructure Planning",
      "Security Assessments",
      "Vendor Selection & Management",
    ],
    benefits: ["Strategic technology roadmap", "Optimized IT investments", "Risk mitigation", "Competitive advantage"],
  },
  {
    id: "6",
    title: "Training & Development",
    slug: "training",
    icon: "graduation-cap",
    shortDescription:
      "Professional training programs to upskill your team in the latest technologies and best practices.",
    fullDescription:
      "Invest in your team with our comprehensive training programs. We offer customized courses covering the latest technologies and industry best practices.",
    features: [
      "Technical Skills Training",
      "Certification Programs",
      "Custom Workshops",
      "Online & In-Person Sessions",
      "Hands-on Labs",
    ],
    benefits: ["Enhanced team capabilities", "Industry certifications", "Improved productivity", "Knowledge retention"],
  },
]

export const STATS: Stat[] = [
  { label: "Years of Experience", value: "10", suffix: "+" },
  { label: "Projects Completed", value: "500", suffix: "+" },
  { label: "Happy Clients", value: "200", suffix: "+" },
  { label: "Team Members", value: "50", suffix: "+" },
]

export const WHY_CHOOSE_US = [
  {
    title: "Expert Team",
    description: "Our certified professionals bring years of experience and industry expertise to every project.",
    icon: "users",
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered hundreds of projects across various industries and scales.",
    icon: "award",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support to ensure your systems run smoothly at all times.",
    icon: "headphones",
  },
  {
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and best practices to deliver innovative solutions.",
    icon: "zap",
  },
]
