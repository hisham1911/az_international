/**
 * Service method enum
 */
export const ServiceMethod = {
  MagneticParticleTesting: 1,
  LiquidPenetrantTesting: 2,
  RadiographicTesting: 3,
  UltrasonicTesting: 4,
  VisualTesting: 5,
} as const;

export type ServiceMethodType = typeof ServiceMethod[keyof typeof ServiceMethod];

/**
 * Service method labels
 */
export const ServiceMethodLabels: Record<ServiceMethodType, string> = {
  [ServiceMethod.MagneticParticleTesting]: "Magnetic Particle Testing",
  [ServiceMethod.LiquidPenetrantTesting]: "Liquid Penetrant Testing",
  [ServiceMethod.RadiographicTesting]: "Radiographic Testing",
  [ServiceMethod.UltrasonicTesting]: "Ultrasonic Testing",
  [ServiceMethod.VisualTesting]: "Visual Testing",
};

/**
 * Service method options for dropdown
 */
export const ServiceMethodOptions = [
  {
    value: ServiceMethod.MagneticParticleTesting,
    label: "Magnetic Particle Testing",
  },
  {
    value: ServiceMethod.LiquidPenetrantTesting,
    label: "Liquid Penetrant Testing",
  },
  { value: ServiceMethod.RadiographicTesting, label: "Radiographic Testing" },
  { value: ServiceMethod.UltrasonicTesting, label: "Ultrasonic Testing" },
  { value: ServiceMethod.VisualTesting, label: "Visual Testing" },
] as const;

/**
 * Get service method label by method id
 */
export function getServiceMethodLabel(method: number | string): string {
  const methodNum = typeof method === "string" ? parseInt(method, 10) : method;
  return ServiceMethodLabels[methodNum as ServiceMethodType] || "Unknown Method";
}

/**
 * Certificate type enum
 */
export const CertificateType = {
  Recertificate: 1,
  Initial: 2,
} as const;

export type CertificateTypeType = typeof CertificateType[keyof typeof CertificateType];

/**
 * Certificate type labels
 */
export const CertificateTypeLabels: Record<CertificateTypeType, string> = {
  [CertificateType.Recertificate]: "Recertificate",
  [CertificateType.Initial]: "Initial",
};

/**
 * Certificate type options for dropdown
 */
export const CertificateTypeOptions = [
  {
    value: CertificateType.Recertificate,
    label: "Recertificate",
  },
  {
    value: CertificateType.Initial,
    label: "Initial",
  },
] as const;

/**
 * Get certificate type label by type id
 */
export function getCertificateTypeLabel(type: number | string): string {
  const typeNum = typeof type === "string" ? parseInt(type, 10) : type;
  return CertificateTypeLabels[typeNum as CertificateTypeType] || "Unknown Type";
}