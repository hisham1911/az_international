# 🎓 AZ International - Certificate Verification System (Frontend)

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

**نظام حديث للتحقق من شهادات الـ NDT (Non-Destructive Testing)**

[🌐 Live Demo](https://azinternational.vercel.app) • [📚 API Docs](https://azbackendnew-production-817b.up.railway.app/swagger)

</div>

---

## ✨ الميزات الرئيسية

| الميزة                   | الوصف                                  |
| ------------------------ | -------------------------------------- |
| 🔍 **البحث عن الشهادات** | البحث بالاسم أو رقم الشهادة التسلسلي   |
| ✅ **التحقق من الصحة**   | التحقق من صحة وأصالة الشهادات          |
| 📊 **لوحة الإدارة**      | إدارة كاملة للمتدربين والشهادات (CRUD) |
| 📤 **استيراد Excel**     | رفع البيانات بالجملة من ملفات Excel    |
| 🎨 **تصميم حديث**        | بناء باستخدام Radix UI و Tailwind CSS  |
| 📱 **تصميم متجاوب**      | يعمل على جميع الأجهزة والشاشات         |

---

## 🖼️ لمحات عن التطبيق

### الصفحة الرئيسية

صفحة هبوط حديثة تعرض خدمات AZ International مع إمكانية سهلة للوصول للتحقق من الشهادات.

### لوحة الإدارة

واجهة شاملة لإدارة المتدربين والشهادات مع إمكانية رفع ملفات Excel.

### البحث عن الشهادات

وظيفة بحث متقدمة تتيح للمستخدمين التحقق من الشهادات بالاسم أو الرقم التسلسلي.

### عرض الشهادة الفردية

عرض تفصيلي للشهادة مع حالة التحقق وخيارات الطباعة.

---

## 🛠️ التقنيات المستخدمة

| التقنية             | الغرض                            |
| ------------------- | -------------------------------- |
| **Next.js 15**      | إطار عمل React مع App Router     |
| **TypeScript 5**    | الكتابة الآمنة والكشف عن الأخطاء |
| **Tailwind CSS**    | التصميم السريع والمتجاوب         |
| **Radix UI**        | مكونات واجهة قابلة للوصول        |
| **React Hook Form** | إدارة النماذج                    |
| **Zod**             | التحقق من صحة البيانات           |
| **Recharts**        | الرسوم البيانية والتصور البيانات |

---

## 📁 هيكل المشروع

```
az_international/
├── app/                          # Next.js App Router
│   ├── adminAZ/                 # لوحة الإدارة
│   │   ├── certificates/        # إدارة الشهادات
│   │   │   ├── create/         # إنشاء شهادة
│   │   │   ├── edit/[id]/      # تعديل شهادة
│   │   │   └── add/            # إضافة شهادة (قديم)
│   │   ├── services/           # إدارة الخدمات
│   │   │   ├── add/           # إضافة خدمة
│   │   │   └── edit/[id]/     # تعديل خدمة
│   │   ├── login/             # تسجيل دخول الإدارة
│   │   └── layout.jsx         # تخطيط الإدارة
│   ├── certificates/           # صفحات الشهادات العامة
│   │   ├── [id]/              # عرض الشهادة الفردية
│   │   └── page.jsx           # صفحة البحث عن الشهادات
│   ├── services/              # صفحات الخدمات
│   ├── clients/               # صفحة العملاء
│   ├── about/                 # من نحن
│   ├── contact/               # اتصل بنا
│   └── page.tsx               # الصفحة الرئيسية
├── components/                 # المكونات القابلة لإعادة الاستخدام
│   ├── ui/                    # مكونات واجهة المستخدم (shadcn/ui)
│   ├── animations/            # مكونات التحريك
│   ├── qr-certificate-card.jsx # مكون رموز QR
│   └── admin/                 # مكونات الإدارة
├── lib/                       # المرافق والمساعدات
│   ├── api-services.ts        # عميل API
│   ├── auth-utils.ts          # أدوات المصادقة
│   ├── enums.ts              # الثوابت
│   ├── environment.mjs       # إعدادات البيئة
│   ├── constants.ts          # الثوابت العامة
│   └── performance-monitor.ts # مراقبة الأداء
├── types/                     # تعريفات TypeScript
├── utils/                     # أدوات مساعدة
├── styles/                    # ملفات التصميم
├── hooks/                     # React Hooks مخصصة
├── public/                    # الملفات الثابتة
└── node_modules/              # dependencies
```

---

## 🚀 البدء السريع

### المتطلبات الأساسية

- **Node.js 18+**
- **npm 8+** أو **yarn**
- اتصال بالإنترنت لتحميل dependencies

### التثبيت والتشغيل

#### 1. تحميل المشروع

```bash
# استنساخ المستودع
git clone https://github.com/hisham1911/az_international.git

# الانتقال لمجلد المشروع
cd az_international
```

#### 2. تثبيت التبعيات

```bash
# تثبيت جميع التبعيات المطلوبة
npm install
```

#### 3. إعداد متغيرات البيئة

```bash
# إنشاء ملف متغيرات البيئة
cp .env.example .env.local
```

#### 4. تشغيل الخادم المحلي

```bash
# تشغيل وضع التطوير
npm run dev
```

#### 5. فتح التطبيق

افتح المتصفح واذهب إلى: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ متغيرات البيئة

```env
# API URL (مطلوب)
NEXT_PUBLIC_API_URL=https://azbackendnew-production-817b.up.railway.app/api

# إعدادات إضافية (اختيارية)
NODE_ENV=development
```

---

## 📦 الأوامر المتاحة

| الأمر                | الوصف                         |
| -------------------- | ----------------------------- |
| `npm run dev`        | تشغيل خادم التطوير            |
| `npm run build`      | بناء التطبيق للإنتاج          |
| `npm run start`      | تشغيل خادم الإنتاج            |
| `npm run lint`       | فحص الكود باستخدام ESLint     |
| `npm run lint:fix`   | إصلاح مشاكل ESLint تلقائياً   |
| `npm run format`     | تنسيق الكود باستخدام Prettier |
| `npm run type-check` | فحص أنواع TypeScript          |

---

## 🚀 النشر (Deployment)

### Vercel (الطريقة الموصى بها)

1. **رفع الكود على GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **استيراد المشروع في Vercel**
   - اذهب إلى [Vercel.com](https://vercel.com)
   - اضغط "Import Project"
   - اختر المستودع من GitHub

3. **إضافة متغيرات البيئة:**

   ```
   NEXT_PUBLIC_API_URL=https://azbackendnew-production-817b.up.railway.app/api
   ```

4. **النشر!** ✨

### استخدام Vercel CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# نشر المشروع
vercel --prod
```

---

## 🔗 المشاريع ذات الصلة

| المشروع         | الوصف                     | الرابط                                                                 |
| --------------- | ------------------------- | ---------------------------------------------------------------------- |
| **Backend API** | API مكتوب بـ ASP.NET Core | [GitHub](https://github.com/hisham1911/AZ_backend_new)                 |
| **Live API**    | API الإنتاج على Railway   | [Railway](https://azbackendnew-production-817b.up.railway.app)         |
| **API Docs**    | توثيق API                 | [Swagger](https://azbackendnew-production-817b.up.railway.app/swagger) |

---

## 📚 دليل المطور

### فهم المشروع

#### ما هو Next.js؟

Next.js هو إطار عمل React متقدم يوفر:

- **Server-Side Rendering (SSR)**: تحسين SEO وسرعة التحميل
- **Static Site Generation (SSG)**: صفحات ثابتة مسبقة التوليد
- **API Routes**: بناء APIs داخل التطبيق
- **File-based Routing**: نظام توجيه مبني على ملفات

#### هيكل البيانات

```typescript
// نموذج المتدرب
interface Trainee {
  id: number;
  serialNumber: string;
  personName: string;
  country?: string;
  state?: string;
  streetAddress?: string;
  certificates: TraineeCertificate[];
}

// نموذج الشهادة
interface TraineeCertificate {
  id: number;
  serviceMethod: number;
  certificateType: number;
  expiryDate: string;
  isExpired: boolean;
}
```

### إضافة ميزة جديدة

#### 1. إنشاء صفحة جديدة

```bash
# إنشاء صفحة في app/
mkdir app/new-feature
touch app/new-feature/page.tsx
```

#### 2. إنشاء مكون جديد

```bash
# إنشاء مكون في components/
touch components/NewFeature.tsx
```

#### 3. إضافة API جديد

```typescript
// في lib/api-services.ts
export async function getNewFeature() {
  const response = await fetch(`${API_BASE_URL}/new-feature`);
  return response.json();
}
```

#### 4. إضافة التوجيه

```typescript
// في components/navbar.tsx
const navLinks = [
  // ... روابط موجودة
  { name: "New Feature", href: "/new-feature" },
];
```

### أفضل الممارسات

#### 1. استخدام TypeScript

```typescript
interface Props {
  title: string;
  onClick: () => void;
}

export default function MyComponent({ title, onClick }: Props) {
  return <button onClick={onClick}>{title}</button>;
}
```

#### 2. استخدام React Hooks

```typescript
import { useState, useEffect } from 'react';

export default function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getData();
      setData(result);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return <div>{/* عرض البيانات */}</div>;
}
```

#### 3. تصميم متجاوب مع Tailwind

```jsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div className="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
    {/* محتوى البطاقة */}
  </div>
</div>
```

#### 4. إدارة النماذج مع React Hook Form

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'الاسم مطلوب'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
});

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
    </form>
  );
}
```

---

## 🐛 الإبلاغ عن المشاكل

إذا واجهت أي مشاكل:

1. تحقق من [Issues](https://github.com/hisham1911/az_international/issues) الموجودة
2. إذا كانت المشكلة جديدة، أنشئ Issue جديد مع:
   - وصف واضح للمشكلة
   - خطوات إعادة إنتاج المشكلة
   - معلومات النظام (Node.js version, npm version, إلخ)
   - لقطات شاشة إذا أمكن

---

## 🤝 المساهمة

نرحب بالمساهمات! يرجى:

1. Fork المشروع
2. إنشاء branch جديد: `git checkout -b feature/amazing-feature`
3. Commit التغييرات: `git commit -m 'Add amazing feature'`
4. Push للـ branch: `git push origin feature/amazing-feature`
5. فتح Pull Request

---

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

---

## 🙏 شكر وتقدير

- **AZ International** لثقتهم في هذا المشروع
- **فريق التطوير** لجهودهم المبذولة
- **المجتمع المفتوح** للمكتبات والأدوات المستخدمة

---

<div align="center">

**بناء بحب ❤️ لـ AZ International**

[⬆ العودة لأعلى](#-az-international---certificate-verification-system-frontend)

</div>
