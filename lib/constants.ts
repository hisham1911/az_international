// Application constants

export const APP_CONFIG = {
  name: "AZ International",
  description:
    "Engineering inspection, technical consultancy, and professional training services",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://azinternational.com",
  email: "info@azinternational-eg.com",
  phone: "(02) 22-8-79-691",
  mobile: "+20 100 064 3414",
  mobileRaw: "201000643414",
  address: "33 Gamal El deen Kassem St. Nasr City, Cairo",
} as const;

export const CERTIFICATE_TYPES = {
  1: "Magnetic Particle Testing",
  2: "Liquid Penetrant Testing",
  3: "Radiographic Testing",
  4: "Ultrasonic Testing",
  5: "Visual Testing",
} as const;

export const NDT_METHODS = {
  ULTRASONIC: "Ultrasonic Testing (UT)",
  MAGNETIC_PARTICLE: "Magnetic Particle Testing (MT)",
  LIQUID_PENETRANT: "Liquid Penetrant Testing (PT)",
  RADIOGRAPHIC: "Radiographic Testing (RT)",
  VISUAL: "Visual Testing (VT)",
} as const;

export const CERTIFICATE_STATUS = {
  ACTIVE: "active",
  EXPIRED: "expired",
  UNKNOWN: "unknown",
} as const;

export const SEARCH_TYPES = {
  NAME: "name",
  SERIAL: "serial",
} as const;

export const API_ENDPOINTS = {
  SEARCH_BY_NAME: "/api/certificates/search/name",
  SEARCH_BY_SERIAL: "/api/certificates/search/serial",
  CONTACT_FORM: "/api/contact",
} as const;

export const ROUTES = {
  HOME: "/",
  SERVICES: "/services",
  CERTIFICATES: "/certificates",
  CONTACT: "/contact",
  ABOUT: "/about",
  ADMIN: "/adminAZ",
  ADMIN_LOGIN: "/adminAZ/login",
  ADMIN_CERTIFICATES: "/adminAZ/certificates",
} as const;

export const ANIMATION_DELAYS = {
  FAST: 100,
  NORMAL: 200,
  SLOW: 300,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;
