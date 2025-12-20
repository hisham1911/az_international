/**
 * خدمات API للمتدربين والشهادات
 * الهيكل الجديد: Trainee + Certificates
 */

import { getAuthToken } from "./auth-utils";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://azbackendnew-production-817b.up.railway.app/api";

function getAuthHeaders(): HeadersInit {
  const token = getAuthToken();
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

// ==================== Types ====================

export interface TraineeCertificate {
  id: number;
  serviceMethod: number;
  methodCode: string;
  certificateType: number;
  expiryDate: string;
  isExpired: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Trainee {
  id: number;
  serialNumber: string;
  personName: string;
  country?: string;
  state?: string;
  streetAddress?: string;
  createdAt: string;
  updatedAt: string;
  certificates: TraineeCertificate[];
}

export interface PagedResult<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// ==================== Trainee API ====================

export async function getAllTrainees(
  page: number = 1,
  pageSize: number = 20
): Promise<PagedResult<Trainee>> {
  const response = await fetch(
    `${API_BASE_URL}/Trainees?page=${page}&pageSize=${pageSize}`,
    { method: "GET", headers: getAuthHeaders() }
  );
  if (!response.ok) throw new Error("Failed to get trainees");
  return response.json();
}

export async function searchTrainees(params: {
  serialNumber?: string;
  personName?: string;
}): Promise<Trainee[]> {
  const queryParams = new URLSearchParams();
  if (params.serialNumber)
    queryParams.append("serialNumber", params.serialNumber);
  if (params.personName) queryParams.append("personName", params.personName);

  const response = await fetch(
    `${API_BASE_URL}/Trainees/search?${queryParams}`,
    { method: "GET", headers: getAuthHeaders() }
  );
  if (!response.ok) return [];
  return response.json();
}

export async function getTraineeById(id: number): Promise<Trainee> {
  const response = await fetch(`${API_BASE_URL}/Trainees/${id}`, {
    method: "GET",
    headers: getAuthHeaders(),
  });
  if (!response.ok) throw new Error("Trainee not found");
  return response.json();
}

export async function createTrainee(data: {
  serialNumber: string;
  personName: string;
  country?: string;
  state?: string;
  streetAddress?: string;
  certificates: {
    serviceMethod: number;
    certificateType: number;
    expiryDate: string;
  }[];
}): Promise<Trainee> {
  const response = await fetch(`${API_BASE_URL}/Trainees`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    if (response.status === 409)
      throw new Error("Serial number already exists");
    throw new Error("Failed to create trainee");
  }
  return response.json();
}

export async function updateTrainee(
  id: number,
  data: {
    serialNumber?: string;
    personName?: string;
    country?: string;
    state?: string;
    streetAddress?: string;
  }
): Promise<Trainee> {
  const response = await fetch(`${API_BASE_URL}/Trainees/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update trainee");
  return response.json();
}

export async function deleteTrainee(id: number): Promise<boolean> {
  const response = await fetch(`${API_BASE_URL}/Trainees/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return response.ok;
}

// ==================== Certificate API ====================

export async function addCertificateToTrainee(
  traineeId: number,
  data: { serviceMethod: number; certificateType: number; expiryDate: string }
): Promise<TraineeCertificate> {
  const response = await fetch(
    `${API_BASE_URL}/Trainees/${traineeId}/certificates`,
    {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    if (response.status === 409)
      throw new Error("Certificate for this method already exists");
    throw new Error("Failed to add certificate");
  }
  return response.json();
}

export async function updateCertificate(
  traineeId: number,
  certificateId: number,
  data: {
    serviceMethod?: number;
    certificateType?: number;
    expiryDate?: string;
  }
): Promise<TraineeCertificate> {
  const response = await fetch(
    `${API_BASE_URL}/Trainees/${traineeId}/certificates/${certificateId}`,
    { method: "PUT", headers: getAuthHeaders(), body: JSON.stringify(data) }
  );
  if (!response.ok) throw new Error("Failed to update certificate");
  return response.json();
}

export async function deleteCertificate(
  traineeId: number,
  certificateId: number
): Promise<boolean> {
  const response = await fetch(
    `${API_BASE_URL}/Trainees/${traineeId}/certificates/${certificateId}`,
    { method: "DELETE", headers: getAuthHeaders() }
  );
  return response.ok;
}

// ==================== Search (للتوافق مع صفحة البحث العامة) ====================

export async function searchServiceByName(name: string): Promise<any[]> {
  const trainees = await searchTrainees({ personName: name });
  // تحويل إلى التنسيق المتوقع من صفحة البحث
  return trainees.flatMap((t) =>
    t.certificates.map((c) => ({
      id: c.id,
      traineeId: t.id,
      serialNumber: t.serialNumber,
      personName: t.personName,
      serviceMethod: c.serviceMethod,
      certificateType: c.certificateType,
      expiryDate: c.expiryDate,
      isExpired: c.isExpired,
      methodCode: c.methodCode,
    }))
  );
}

export async function searchServiceBySerialNumber(
  serial: string
): Promise<any[]> {
  const trainees = await searchTrainees({ serialNumber: serial });
  return trainees.flatMap((t) =>
    t.certificates.map((c) => ({
      id: c.id,
      traineeId: t.id,
      serialNumber: t.serialNumber,
      personName: t.personName,
      serviceMethod: c.serviceMethod,
      certificateType: c.certificateType,
      expiryDate: c.expiryDate,
      isExpired: c.isExpired,
      methodCode: c.methodCode,
    }))
  );
}

// ==================== Legacy (للتوافق مع صفحات الإدارة) ====================

export const getAllCertificates = getAllTrainees;
export const getAllServices = getAllTrainees;

export async function getServiceById(id: string | number): Promise<any> {
  // id هنا هو traineeId
  const trainee = await getTraineeById(Number(id));
  return {
    id: trainee.id,
    serialNumber: trainee.serialNumber,
    personName: trainee.personName,
    country: trainee.country,
    state: trainee.state,
    streetAddress: trainee.streetAddress,
    certificates: trainee.certificates,
  };
}

export async function createService(data: {
  serialNumber: string;
  personName: string;
  serviceMethod: number;
  certificateType: number;
  expiryDate: string;
}): Promise<any> {
  // البحث عن المتدرب أولاً
  const trainees = await searchTrainees({ serialNumber: data.serialNumber });

  if (trainees.length > 0) {
    // المتدرب موجود، أضف شهادة جديدة
    const trainee = trainees[0];
    await addCertificateToTrainee(trainee.id, {
      serviceMethod: data.serviceMethod,
      certificateType: data.certificateType,
      expiryDate: data.expiryDate,
    });
    return getTraineeById(trainee.id);
  } else {
    // إنشاء متدرب جديد مع الشهادة
    return createTrainee({
      serialNumber: data.serialNumber,
      personName: data.personName,
      certificates: [
        {
          serviceMethod: data.serviceMethod,
          certificateType: data.certificateType,
          expiryDate: data.expiryDate,
        },
      ],
    });
  }
}

export async function updateService(
  id: string | number,
  data: {
    personName?: string;
    serviceMethod?: number;
    certificateType?: number;
    expiryDate?: string;
  }
): Promise<any> {
  const traineeId = Number(id);

  // تحديث بيانات المتدرب
  if (data.personName) {
    await updateTrainee(traineeId, { personName: data.personName });
  }

  return getTraineeById(traineeId);
}

export async function deleteService(id: string | number): Promise<boolean> {
  return deleteTrainee(Number(id));
}

export async function deleteAllData(): Promise<any> {
  const response = await fetch(`${API_BASE_URL}/Trainees/delete-all`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!response.ok) throw new Error("Failed to delete all data");
  return response.json();
}

export async function getCertificateStats(): Promise<any> {
  const response = await fetch(`${API_BASE_URL}/Trainees/stats`, {
    method: "GET",
    headers: getAuthHeaders(),
  });
  if (!response.ok) throw new Error("Failed to get stats");
  return response.json();
}

export async function sendEmail(emailData: {
  userName: string;
  userEmail: string;
  subject: string;
  message: string;
}): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/Email/SendEmail`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(emailData),
  });
  if (!response.ok) throw new Error("Failed to send email");
  const text = await response.text();
  return text ? JSON.parse(text) : { success: true };
}

// ==================== Missing exports ====================

export async function uploadExcelFile(file: File): Promise<any> {
  const formData = new FormData();
  formData.append("file", file);

  const token = getAuthToken();
  const headers: HeadersInit = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  const response = await fetch(`${API_BASE_URL}/Certificates/import`, {
    method: "POST",
    headers,
    body: formData,
  });

  if (!response.ok) throw new Error("Failed to upload file");
  return response.json();
}

export async function searchService(serial: string): Promise<any | null> {
  const results = await searchServiceBySerialNumber(serial);
  return results.length > 0 ? results[0] : null;
}

export const getCertificateById = getServiceById;
