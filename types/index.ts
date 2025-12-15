// Global type definitions for AZ International application

export interface Certificate {
  id: string;
  srId?: string;
  name: string;
  serialNumber: string;
  s_N?: string;
  certificateType: string;
  method: string | number;
  type: string | number;
  issueDate?: string;
  expiryDate?: string;
  endDate?: string;
  status: "active" | "expired" | "unknown";
}

export interface FormattedCertificate {
  id: string;
  name: string;
  title: string;
  type: string;
  serialNumber: string;
  expiryDate: string;
  status: "active" | "expired" | "unknown";
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export interface ServiceCategory {
  id: string;
  name: string;
  link: string;
  description: string;
  services: string[];
}

export interface SearchFormData {
  query: string;
  type: "name" | "serial";
}

// Component Props Types
export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

// Admin Types
export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  lastLogin?: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resourceType: string;
  resourceId?: string;
  details?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
}
