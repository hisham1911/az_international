/**
 * خدمات API للشهادات
 * يتصل بـ CertificatesController الجديد
 */

import type { Certificate } from "@/types";

import { getAuthToken } from "./auth-utils";

// عنوان API الأساسي
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://azbackendnew-production-817b.up.railway.app/api";

/**
 * الحصول على headers للطلبات المصادق عليها
 */
function getAuthHeaders(): HeadersInit {
  const token = getAuthToken();
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

/**
 * الحصول على جميع الشهادات مع pagination
 */
export async function getAllCertificates(
  page: number = 1,
  pageSize: number = 20
): Promise<any> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/Certificates?page=${page}&pageSize=${pageSize}`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error(`خطأ في الحصول على الشهادات: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

/**
 * البحث عن الشهادات
 */
export async function searchCertificates(searchParams: {
  serialNumber?: string;
  personName?: string;
  serviceMethod?: number;
  expired?: boolean;
  page?: number;
  pageSize?: number;
}): Promise<Certificate[]> {
  try {
    const queryParams = new URLSearchParams();

    if (searchParams.serialNumber)
      queryParams.append("serialNumber", searchParams.serialNumber);
    if (searchParams.personName)
      queryParams.append("personName", searchParams.personName);
    if (searchParams.serviceMethod)
      queryParams.append(
        "serviceMethod",
        searchParams.serviceMethod.toString()
      );
    if (searchParams.expired !== undefined)
      queryParams.append("expired", searchParams.expired.toString());
    if (searchParams.page)
      queryParams.append("page", searchParams.page.toString());
    if (searchParams.pageSize)
      queryParams.append("pageSize", searchParams.pageSize.toString());

    const response = await fetch(
      `${API_BASE_URL}/Certificates/search?${queryParams}`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );

    if (response.status === 404) {
      return [];
    }

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    return [];
  }
}

/**
 * البحث عن شهادة باستخدام الاسم
 */
export async function searchServiceByName(
  search: string
): Promise<Certificate[]> {
  return searchCertificates({ personName: search });
}

/**
 * البحث عن شهادة باستخدام الرقم التسلسلي
 */
export async function searchServiceBySerialNumber(
  search: string
): Promise<Certificate[]> {
  return searchCertificates({ serialNumber: search });
}

/**
 * الحصول على شهادة بالـ ID
 */
export async function getCertificateById(
  id: string | number
): Promise<Certificate> {
  try {
    const response = await fetch(`${API_BASE_URL}/Certificates/${id}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (response.status === 404) {
      throw new Error("Certificate not found. It may have been deleted.");
    }

    if (!response.ok) {
      throw new Error("Failed to retrieve certificate. Please try again.");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

/**
 * إنشاء شهادة جديدة
 */
export async function createCertificate(data: {
  serialNumber: string;
  personName: string;
  serviceMethod: number;
  certificateType: number;
  expiryDate: string;
  country?: string;
  state?: string;
  streetAddress?: string;
}): Promise<Certificate> {
  try {
    const response = await fetch(`${API_BASE_URL}/Certificates`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error(
          "Invalid certificate data. Please check all fields and try again."
        );
      } else if (response.status === 401 || response.status === 403) {
        throw new Error("You don't have permission to create certificates.");
      } else if (response.status === 409) {
        throw new Error(
          "A certificate with this serial number already exists."
        );
      } else {
        throw new Error("Failed to create certificate. Please try again.");
      }
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

/**
 * تحديث شهادة موجودة
 */
export async function updateCertificate(
  id: string | number,
  data: {
    serialNumber?: string;
    personName?: string;
    serviceMethod?: number;
    certificateType?: number;
    expiryDate?: string;
    country?: string;
    state?: string;
    streetAddress?: string;
  }
): Promise<Certificate> {
  try {
    const response = await fetch(`${API_BASE_URL}/Certificates/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Certificate not found. It may have been deleted.");
      } else if (response.status === 409) {
        throw new Error(
          "A certificate with this serial number already exists."
        );
      } else {
        throw new Error("Failed to update certificate. Please try again.");
      }
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

/**
 * حذف شهادة
 */
export async function deleteCertificate(id: string | number): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/Certificates/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          "Certificate not found. It may have already been deleted."
        );
      } else {
        throw new Error("Failed to delete certificate. Please try again.");
      }
    }

    return true;
  } catch (error) {
    throw error;
  }
}

/**
 * رفع ملف Excel للشهادات
 */
export async function uploadExcelFile(file: File): Promise<any> {
  try {
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

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error(
          "Invalid file. Please check the file format and try again."
        );
      } else if (response.status === 401 || response.status === 403) {
        throw new Error(
          "You don't have permission to upload certificate files."
        );
      } else {
        throw new Error("Failed to upload file. Please try again.");
      }
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

// Legacy functions for backward compatibility
export const getAllServices = getAllCertificates;
export const createService = createCertificate;
export const updateService = updateCertificate;
export const deleteService = deleteCertificate;
export const getServiceById = getCertificateById;
export const searchService = async (
  search: string
): Promise<Certificate | null> => {
  const results = await searchServiceBySerialNumber(search);
  return results.length > 0 ? results[0] : null;
};

/**
 * تنظيف البيانات القديمة
 */
export async function cleanupOldFormatData(): Promise<any> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/Certificates/cleanup-old-format`,
      {
        method: "POST",
        headers: getAuthHeaders(),
      }
    );

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        throw new Error(
          "You don't have permission to perform cleanup operations."
        );
      } else {
        throw new Error("Failed to cleanup old data. Please try again.");
      }
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

/**
 * الحصول على إحصائيات الشهادات
 */
export async function getCertificateStats(): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}/Certificates/stats`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to get certificate statistics.");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

/**
 * إرسال بريد إلكتروني
 */
export async function sendEmail(emailData: {
  userName: string;
  userEmail: string;
  subject: string;
  message: string;
}): Promise<unknown> {
  try {
    const response = await fetch(`${API_BASE_URL}/Email/SendEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    const text = await response.text();
    return text ? JSON.parse(text) : { success: true };
  } catch (error) {
    throw error;
  }
}
