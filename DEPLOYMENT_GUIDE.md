# 🚀 دليل نشر AZ International

## نظرة عامة على البنية

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Frontend      │────▶│    Backend      │────▶│   Database      │
│   (Vercel)      │     │   (Railway)     │     │  (PostgreSQL)   │
│   Next.js 15    │     │   .NET 8 API    │     │   (Railway)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

---

## 📱 نشر الفرونت إند على Vercel

### الطريقة 1: النشر عبر GitHub (موصى بها)

#### الخطوة 1: رفع الكود على GitHub

```bash
# انتقل لمجلد الفرونت
cd AZ/az_international

# إنشاء repository جديد على GitHub ثم:
git init
git add .
git commit -m "Initial commit - AZ International Frontend"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/az-international-frontend.git
git push -u origin main
```

#### الخطوة 2: ربط Vercel بـ GitHub

1. اذهب إلى [vercel.com](https://vercel.com) وسجل دخول
2. اضغط "Add New Project"
3. اختر "Import Git Repository"
4. اختر الـ repository الخاص بك
5. Vercel سيكتشف تلقائياً أنه مشروع Next.js

#### الخطوة 3: إعداد Environment Variables

في صفحة الإعداد قبل النشر:

1. اضغط على "Environment Variables"
2. أضف المتغير التالي:

| Name                  | Value                                                     |
| --------------------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | `https://azbackendnew-production-817b.up.railway.app/api` |

#### الخطوة 4: النشر

1. اضغط "Deploy"
2. انتظر حتى ينتهي البناء (2-3 دقائق)
3. ستحصل على رابط مثل: `https://az-international.vercel.app`

---

### الطريقة 2: النشر عبر Vercel CLI

```bash
# تثبيت Vercel CLI
npm install -g vercel

# انتقل لمجلد الفرونت
cd AZ/az_international

# تسجيل الدخول
vercel login

# النشر (أول مرة)
vercel

# للنشر للـ production
vercel --prod
```

عند السؤال:

- Set up and deploy? **Y**
- Which scope? اختر حسابك
- Link to existing project? **N** (أول مرة)
- Project name? **az-international**
- Directory? **.** (المجلد الحالي)

---

## ⚙️ إعدادات Vercel المهمة

### إعداد Environment Variables بعد النشر

1. اذهب لـ Vercel Dashboard
2. اختر المشروع
3. Settings > Environment Variables
4. أضف:

```
NEXT_PUBLIC_API_URL = https://azbackendnew-production-817b.up.railway.app/api
```

### إعداد Domain مخصص (اختياري)

1. Settings > Domains
2. أضف الدومين الخاص بك
3. اتبع التعليمات لإعداد DNS

---

## 🔧 نشر الباك إند على Railway (مرجع)

الباك إند منشور بالفعل على:
`https://azbackendnew-production-817b.up.railway.app`

### لإعادة النشر أو التحديث:

#### الخطوة 1: رفع الكود على GitHub

```bash
cd AZ/az_backend_new
git add .
git commit -m "Update backend"
git push origin main
```

#### الخطوة 2: Railway سيقوم بالنشر تلقائياً

- Railway يراقب الـ repository
- أي push جديد = نشر تلقائي

### Environment Variables للباك إند (Railway)

```
DATABASE_PUBLIC_URL = postgresql://...
ASPNETCORE_ENVIRONMENT = Production
JWT_SECRET = your-secret-key
```

---

## 🔒 إعدادات Production المهمة

### للفرونت (Vercel)

- ✅ HTTPS تلقائي
- ✅ CDN عالمي
- ✅ تحديثات تلقائية من GitHub

### للباك إند (Railway)

- ✅ HTTPS تلقائي
- ✅ PostgreSQL مُدار
- ✅ Auto-scaling

---

## 🧪 اختبار بعد النشر

### 1. اختبار الفرونت

```bash
# افتح الرابط في المتصفح
https://your-app.vercel.app

# تأكد من:
# - الصفحة الرئيسية تعمل
# - البحث عن الشهادات يعمل
# - صفحة الأدمن تعمل
```

### 2. اختبار الاتصال بالباك إند

```bash
# اختبر API مباشرة
curl https://azbackendnew-production-817b.up.railway.app/api/Certificates?page=1&pageSize=5
```

### 3. اختبار شامل

- [ ] البحث بالاسم
- [ ] البحث بالرقم التسلسلي
- [ ] إنشاء شهادة جديدة
- [ ] تعديل شهادة
- [ ] حذف شهادة
- [ ] رفع ملف Excel

---

## 🔄 التحديثات المستقبلية

### تحديث الفرونت

```bash
cd AZ/az_international
git add .
git commit -m "Update: description"
git push origin main
# Vercel سينشر تلقائياً
```

### تحديث الباك إند

```bash
cd AZ/az_backend_new
git add .
git commit -m "Update: description"
git push origin main
# Railway سينشر تلقائياً
```

---

## 🐛 حل المشاكل الشائعة

### مشكلة: Build Failed على Vercel

```bash
# تأكد من أن البناء يعمل محلياً
npm run build

# إذا كان هناك أخطاء TypeScript
npm run type-check
```

### مشكلة: API لا يستجيب

1. تأكد من أن الباك إند يعمل على Railway
2. تأكد من صحة `NEXT_PUBLIC_API_URL`
3. تحقق من CORS settings

### مشكلة: الصور لا تظهر

تأكد من إضافة الدومين في `next.config.mjs`:

```javascript
images: {
  domains: ["your-domain.com"],
}
```

---

## 📊 مراقبة الأداء

### Vercel Analytics

1. Dashboard > Analytics
2. راقب: Page Views, Web Vitals, Errors

### Railway Metrics

1. Dashboard > Metrics
2. راقب: CPU, Memory, Network

---

## 💰 التكاليف

### Vercel (Free Tier)

- 100GB Bandwidth/month
- Unlimited Deployments
- SSL مجاني

### Railway (Free Tier)

- $5 credit/month
- PostgreSQL مجاني (محدود)
- SSL مجاني

---

## 📞 الدعم

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- Next.js Docs: https://nextjs.org/docs
