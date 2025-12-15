"use client";

/**
 * وظائف مساعدة للمصادقة في لوحة تحكم المشرف
 */

// إعدادات API
const API_URL = "https://azinternational-eg.com/api";

interface LoginResponse {
  success: boolean;
  message: string;
}

/**
 * التحقق من حالة تسجيل الدخول
 */
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("adminAuthenticated") === "true";
}

/**
 * تنفيذ تسجيل الدخول باستخدام API
 */
export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_URL}/Acount/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.text();

    if (data.includes("Login successful")) {
      // تخزين حالة تسجيل الدخول
      localStorage.setItem("adminAuthenticated", "true");
      return { success: true, message: "تم تسجيل الدخول بنجاح" };
    } else {
      return {
        success: false,
        message: "فشل تسجيل الدخول: بيانات الاعتماد غير صالحة",
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
}
