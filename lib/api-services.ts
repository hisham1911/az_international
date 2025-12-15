/**
 * خدمات API للشهادات
 *
 * هذا الملف يحتوي على دوال للتعامل مع بيانات الشهادات
 * يتصل بنقاط نهاية API الحقيقية لإدارة الشهادات
 */

import type { Certificate } from "@/types";

// عنوان API الأساسي
const API_BASE_URL = "https://azinternational-eg.com/api";

// وقت التخزين المؤقت - 5 دقائق
const CACHE_TTL = 5 * 60 * 1000;

// كائن للتخزين المؤقت
const cache = {
  data: new Map<string, unknown>(),
  timestamps: new Map<string, number>(),

  // حفظ البيانات في التخزين المؤقت
  set<T>(key: string, data: T): T {
    this.data.set(key, data);
    this.timestamps.set(key, Date.now());
    return data;
  },

  // الحصول على البيانات من التخزين المؤقت
  get<T>(key: string): T | null {
    const timestamp = this.timestamps.get(key);
    if (!timestamp) return null;

    // التحقق من صلاحية التخزين المؤقت
    const isExpired = Date.now() - timestamp > CACHE_TTL;
    if (isExpired) {
      this.data.delete(key);
      this.timestamps.delete(key);
      return null;
    }

    return this.data.get(key) as T;
  },

  // مسح التخزين المؤقت
  invalidate(keyPattern?: RegExp | string): void {
    if (keyPattern instanceof RegExp) {
      // مسح المفاتيح التي تطابق النمط
      [...this.data.keys()].forEach((key) => {
        if (keyPattern.test(key)) {
          this.data.delete(key);
          this.timestamps.delete(key);
        }
      });
    } else if (typeof keyPattern === "string") {
      // مسح مفتاح محدد
      this.data.delete(keyPattern);
      this.timestamps.delete(keyPattern);
    } else {
      // مسح جميع المفاتيح
      this.data.clear();
      this.timestamps.clear();
    }
  },
};

interface ServiceData {
  name: string;
  s_N: string;
  method: number;
  type: number;
  endDate: string;
  country?: string;
  state?: string;
  streetAddress?: string;
}

interface EmailData {
  userName: string;
  userEmail: string;
  subject: string;
  message: string;
}

/**
 * الحصول على جميع الشهادات
 */
export async function getAllServices(): Promise<Certificate[]> {
  const cacheKey = "getAllServices";
  const cachedData = cache.get<Certificate[]>(cacheKey);

  // إذا وجدنا بيانات مخزنة مؤقتًا، نستخدمها
  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/Services`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`خطأ في الحصول على جميع الشهادات: ${response.status}`);
    }

    const data = await response.json();
    // تخزين البيانات مؤقتًا قبل إرجاعها
    return cache.set(cacheKey, data);
  } catch (error) {
    throw error;
  }
}

/**
 * البحث عن شهادة باستخدام الاسم
 */
export async function searchServiceByName(
  search: string
): Promise<Certificate[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/Services/searchByName?search=${encodeURIComponent(
        search
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    // Handle 404 as empty results instead of error
    if (response.status === 404) {
      return [];
    }

    if (!response.ok) {
      // Return empty results for non-critical errors
      return [];
    }

    const data = await response.json();

    // Process certificate data
    const processedData = Array.isArray(data)
      ? data.map((cert: unknown) => ({
          ...(cert as Record<string, unknown>),
        }))
      : [];

    return processedData as unknown as Certificate[];
  } catch (error) {
    // Return empty results for any errors
    return [];
  }
}

/**
 * البحث عن شهادة باستخدام الرقم التسلسلي
 */
export async function searchServiceBySerialNumber(
  search: string
): Promise<Certificate[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/Services/searchByS_N?search=${encodeURIComponent(
        search
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    // Handle 404 as empty results instead of error
    if (response.status === 404) {
      return [];
    }

    if (!response.ok) {
      // Return empty results for non-critical errors
      return [];
    }

    const data = await response.json();

    // Process certificate data
    const processedData = Array.isArray(data)
      ? data.map((cert: unknown) => ({
          ...(cert as Record<string, unknown>),
        }))
      : [];

    return processedData as unknown as Certificate[];
  } catch (error) {
    // Return empty results for any errors
    return [];
  }
}

/**
 * Search for a certificate by ID or serial number
 */
export async function searchService(
  search: string
): Promise<Certificate | null> {
  try {
    // Check if search is a serial number
    const results = await searchServiceBySerialNumber(search);

    if (results && results.length > 0) {
      const result = results[0];
      return {
        ...result,
      };
    }

    // If no results found by serial number, try getting by ID
    try {
      const idResult = await getServiceById(search);
      if (idResult) {
        // Format the location data properly
        return {
          ...idResult,
        };
      }
    } catch (idError) {
      // Silently ignore ID search errors and return null
    }

    return null;
  } catch (error) {
    return null;
  }
}

/**
 * إنشاء شهادة جديدة
 */
export async function createService(
  data: Partial<ServiceData>
): Promise<Certificate> {
  try {
    // Format the data according to API requirements
    const formattedData: ServiceData = {
      name: data.name?.trim() || "",
      s_N: data.s_N?.trim() || "",
      method: parseInt(String(data.method)) || 1,
      type: parseInt(String(data.type)) || 1,
      endDate: data.endDate
        ? new Date(data.endDate).toISOString()
        : new Date().toISOString(),
      // Include empty location fields as the API still expects them
      country: "",
      state: "",
      streetAddress: "",
    };

    const response = await fetch(`${API_BASE_URL}/Services/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      // More user-friendly error messages based on status code
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
      } else if (response.status === 500) {
        throw new Error(
          "Server error. Please try again later or contact support."
        );
      } else {
        throw new Error(`Failed to create certificate. Please try again.`);
      }
    }

    const result = await response.json();
    return result;
  } catch (error) {
    // If the error is already user-friendly (from our catches above), pass it through
    // Otherwise, provide a generic message
    if (error instanceof Error && error.message.includes("Failed to fetch")) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    }
    throw error;
  }
}

/**
 * تحديث شهادة موجودة
 */
export async function updateService(
  id: string | number,
  data: Partial<ServiceData>
): Promise<Certificate> {
  try {
    // Format the data according to API requirements
    const formattedData = {
      srId: parseInt(String(id)),
      name: data.name?.trim() || "",
      s_N: data.s_N?.trim() || "",
      method: parseInt(String(data.method)) || 1,
      type: parseInt(String(data.type)) || 1,
      endDate: data.endDate
        ? new Date(data.endDate).toISOString()
        : new Date().toISOString(),
      country: "",
      state: "",
      streetAddress: "",
    };

    const response = await fetch(`${API_BASE_URL}/Services/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      // More user-friendly error messages based on status code
      if (response.status === 400) {
        throw new Error(
          "Invalid certificate data. Please check all fields and try again."
        );
      } else if (response.status === 401 || response.status === 403) {
        throw new Error(
          "You don't have permission to update this certificate."
        );
      } else if (response.status === 404) {
        throw new Error("Certificate not found. It may have been deleted.");
      } else if (response.status === 409) {
        throw new Error(
          "A certificate with this serial number already exists."
        );
      } else if (response.status === 500) {
        throw new Error(
          "Server error. Please try again later or contact support."
        );
      } else {
        throw new Error(`Failed to update certificate. Please try again.`);
      }
    }

    const result = await response.json();
    return result;
  } catch (error) {
    // If the error is already user-friendly (from our catches above), pass it through
    // Otherwise, provide a generic message
    if (error instanceof Error && error.message.includes("Failed to fetch")) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    }
    throw error;
  }
}

/**
 * حذف شهادة
 */
export async function deleteService(id: string | number): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/Services/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // More user-friendly error messages based on status code
      if (response.status === 401 || response.status === 403) {
        throw new Error(
          "You don't have permission to delete this certificate."
        );
      } else if (response.status === 404) {
        throw new Error(
          "Certificate not found. It may have already been deleted."
        );
      } else if (response.status === 500) {
        throw new Error(
          "Server error. Please try again later or contact support."
        );
      } else {
        throw new Error(`Failed to delete certificate. Please try again.`);
      }
    }

    // إبطال مفعول التخزين المؤقت بعد الحذف
    cache.invalidate(/^(getAllServices|searchByName|searchBySerial)/);

    return true;
  } catch (error) {
    // If the error is already user-friendly (from our catches above), pass it through
    // Otherwise, provide a generic message
    if (error instanceof Error && error.message.includes("Failed to fetch")) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    }
    throw error;
  }
}

/**
 * إرسال بريد إلكتروني
 */
export async function sendEmail(emailData: EmailData): Promise<unknown> {
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

/**
 * رفع ملف اكسل للشهادات
 */
export async function uploadExcelFile(file: File): Promise<unknown> {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/Services/UploadExcelFile`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      // User-friendly error messages
      if (response.status === 400) {
        throw new Error(
          "Invalid file. Please check the file format and try again."
        );
      } else if (response.status === 401 || response.status === 403) {
        throw new Error(
          "You don't have permission to upload certificate files."
        );
      } else if (response.status === 500) {
        throw new Error(
          "Server error. Please try again later or contact support."
        );
      } else {
        throw new Error("Failed to upload file. Please try again.");
      }
    }

    // محاولة معالجة الاستجابة كـ JSON بحذر
    let result;
    try {
      const text = await response.text();
      try {
        result = JSON.parse(text);
      } catch (jsonError) {
        // If JSON parsing fails, check if the response contains a success message
        if (
          text.includes("success") ||
          text.includes("Successfully") ||
          text.includes("uploaded")
        ) {
          result = {
            success: true,
            message: "File uploaded successfully",
            addedCount: "multiple", // Default value if not available
            data: text, // Keep original text for verification
          };
        } else {
          throw new Error("Invalid response format from server");
        }
      }
    } catch (error) {
      throw new Error("Error reading response from server");
    }

    // Invalidate cache after upload
    cache.invalidate(/^(getAllServices|searchByName|searchBySerial)/);

    return result;
  } catch (error) {
    // If error is already handled, pass it through, otherwise give a general message
    if (error instanceof Error && error.message.includes("Failed to fetch")) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    }
    throw error;
  }
}

/**
 * Get certificate by ID
 */
export async function getServiceById(
  id: string | number
): Promise<Certificate> {
  try {
    const response = await fetch(`${API_BASE_URL}/Services/getById?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // Handle 404 with more specific error
    if (response.status === 404) {
      throw new Error("Certificate not found. It may have been deleted.");
    }

    if (!response.ok) {
      // More user-friendly error messages based on status code
      if (response.status === 401 || response.status === 403) {
        throw new Error("You don't have permission to view this certificate.");
      } else if (response.status === 500) {
        throw new Error(
          "Server error. Please try again later or contact support."
        );
      } else {
        throw new Error("Failed to retrieve certificate. Please try again.");
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // If the error is already user-friendly (from our catches above), pass it through
    // Otherwise, provide a generic message
    if (error instanceof Error && error.message.includes("Failed to fetch")) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    }
    throw error;
  }
}
