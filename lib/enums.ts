/**
 * Service method enum - matches backend ServiceMethod.cs
 */
export const ServiceMethod = {
  VisualTesting: 1,
  LiquidPenetrantTesting: 2,
  MagneticParticleTesting: 3,
  RadiographicTesting: 4,
  UltrasonicTesting: 5,
} as const;

export type ServiceMethodType =
  (typeof ServiceMethod)[keyof typeof ServiceMethod];

/**
 * Service method labels
 */
export const ServiceMethodLabels: Record<ServiceMethodType, string> = {
  [ServiceMethod.VisualTesting]: "Visual Testing",
  [ServiceMethod.LiquidPenetrantTesting]: "Liquid Penetrant Testing",
  [ServiceMethod.MagneticParticleTesting]: "Magnetic Particle Testing",
  [ServiceMethod.RadiographicTesting]: "Radiographic Testing",
  [ServiceMethod.UltrasonicTesting]: "Ultrasonic Testing",
};

/**
 * Service method options for dropdown
 */
export const ServiceMethodOptions = [
  { value: ServiceMethod.VisualTesting, label: "Visual Testing" },
  {
    value: ServiceMethod.LiquidPenetrantTesting,
    label: "Liquid Penetrant Testing",
  },
  {
    value: ServiceMethod.MagneticParticleTesting,
    label: "Magnetic Particle Testing",
  },
  { value: ServiceMethod.RadiographicTesting, label: "Radiographic Testing" },
  { value: ServiceMethod.UltrasonicTesting, label: "Ultrasonic Testing" },
] as const;

/**
 * Get service method label by method id
 */
export function getServiceMethodLabel(method: number | string): string {
  const methodNum = typeof method === "string" ? parseInt(method, 10) : method;
  return (
    ServiceMethodLabels[methodNum as ServiceMethodType] || "Unknown Method"
  );
}

/**
 * Certificate type enum - matches backend CertificateType.cs
 */
export const CertificateType = {
  Initial: 1,
  Recertificate: 2,
} as const;

export type CertificateTypeType =
  (typeof CertificateType)[keyof typeof CertificateType];

/**
 * Certificate type labels
 */
export const CertificateTypeLabels: Record<CertificateTypeType, string> = {
  [CertificateType.Initial]: "Initial",
  [CertificateType.Recertificate]: "Recertificate",
};

/**
 * Certificate type options for dropdown
 */
export const CertificateTypeOptions = [
  { value: CertificateType.Initial, label: "Initial" },
  { value: CertificateType.Recertificate, label: "Recertificate" },
] as const;

/**
 * Get certificate type label by type id
 */
export function getCertificateTypeLabel(type: number | string): string {
  const typeNum = typeof type === "string" ? parseInt(type, 10) : type;
  return (
    CertificateTypeLabels[typeNum as CertificateTypeType] || "Unknown Type"
  );
}
