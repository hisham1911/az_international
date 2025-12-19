"use client";

/**
 * وظائف مساعدة للمصادقة في لوحة تحكم المشرف
 */

// إعدادات API
// Use environment variable or fallback to Railway deployed backend
const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://azbackendnew-production-817b.up.railway.app/api";

interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
}

/**
 * التحقق من حالة تسجيل الدخول
 */
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  const token = localStorage.getItem("adminToken");
  const authenticated = localStorage.getItem("adminAuthenticated") === "true";
  return authenticated && !!token;
}

/**
 * الحصول على JWT Token
 */
export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("adminToken");
}

/**
 * الحصول على headers للطلبات المصادق عليها
 */
export function getAuthHeaders(): HeadersInit {
  const token = getAuthToken();
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

/**
 * تنفيذ تسجيل الدخول باستخدام API
 */
export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  try {
    // Try new Auth API first
    const response = await fetch(`${API_URL}/Auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      // Store JWT token and authentication state
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminAuthenticated", "true");
      localStorage.setItem("adminEmail", data.email);
      localStorage.setItem("adminRole", data.role);
      return {
        success: true,
        message: "تم تسجيل الدخول بنجاح",
        token: data.token,
      };
    } else {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        message:
          errorData.message || "فشل تسجيل الدخول: بيانات الاعتماد غير صالحة",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `خطأ في الاتصال بالخادم: ${error instanceof Error ? error.message : "Unknown error"}`,
    };
  }
}

/**
 * تنفيذ تسجيل الخروج
 */
export function logout(): void {
  localStorage.removeItem("adminAuthenticated");
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminEmail");
  localStorage.removeItem("adminRole");
}
