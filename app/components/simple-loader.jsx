"use client";

export default function SimpleLoader() {
  return (
    <div className="fixed left-0 top-0 z-[9999] h-1 w-full animate-pulse bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
      <div className="h-full w-full animate-[loader_2s_ease-in-out_infinite] bg-blue-600" />
    </div>
  );
}

export function FullLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />
      <p className="mt-4 font-medium text-blue-600">جاري التحميل...</p>
    </div>
  );
}

export function ButtonSpinner({ className = "" }) {
  return (
    <svg
      className={`-mr-1 h-5 w-5 animate-spin text-white ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
