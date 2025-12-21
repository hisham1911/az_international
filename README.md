# 🎓 AZ International - Certificate Verification System (Frontend)

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

**Modern certificate verification and management system for NDT certifications**

[🌐 Live Demo](https://azinternational.vercel.app) • [📚 API Docs](https://azbackendnew-production-817b.up.railway.app/swagger)

</div>

---

## ✨ Features

| Feature                   | Description                             |
| ------------------------- | --------------------------------------- |
| 🔍 **Certificate Search** | Search by trainee name or serial number |
| ✅ **Verification**       | Verify certificate authenticity         |
| 📊 **Admin Dashboard**    | Full CRUD for trainees & certificates   |
| 📤 **Excel Import**       | Bulk import from Excel files            |
| 🎨 **Modern UI**          | Built with Radix UI & Tailwind CSS      |
| 📱 **Responsive**         | Mobile-first design                     |
| 🌐 **Bilingual**          | English & Arabic support                |

---

## 🖼️ Screenshots

### Home Page

Modern landing page with certificate search functionality.

### Admin Dashboard

Comprehensive management interface for certificates.

### Certificate Search

Quick search with real-time results.

---

## 🛠️ Tech Stack

| Technology          | Purpose                         |
| ------------------- | ------------------------------- |
| **Next.js 15**      | React framework with App Router |
| **TypeScript**      | Type safety                     |
| **Tailwind CSS**    | Utility-first styling           |
| **Radix UI**        | Accessible components           |
| **React Hook Form** | Form handling                   |
| **Zod**             | Schema validation               |

---

## 📁 Project Structure

```
az_international/
├── app/                      # Next.js App Router
│   ├── adminAZ/             # Admin dashboard
│   │   ├── certificates/    # Certificate management
│   │   │   ├── create/     # Create certificate
│   │   │   └── edit/       # Edit certificate
│   │   └── layout.tsx      # Admin layout
│   ├── certificates/        # Public certificate pages
│   └── page.tsx            # Home page
├── components/              # Reusable components
│   ├── ui/                 # UI components (shadcn/ui)
│   └── animations/         # Animation components
├── lib/                     # Utilities
│   ├── api-services.ts     # API client
│   └── enums.ts            # Constants
└── public/                  # Static assets
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/hisham1911/az_international.git
cd az_international

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Environment Variables

```env
NEXT_PUBLIC_API_URL=https://azbackendnew-production-817b.up.railway.app/api
```

---

## 📦 Scripts

| Script           | Description              |
| ---------------- | ------------------------ |
| `npm run dev`    | Start development server |
| `npm run build`  | Build for production     |
| `npm run start`  | Start production server  |
| `npm run lint`   | Run ESLint               |
| `npm run format` | Format with Prettier     |

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://azbackendnew-production-817b.up.railway.app/api
   ```
4. Deploy!

### Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

---

## 🔗 Related Projects

| Project         | Description      | URL                                                            |
| --------------- | ---------------- | -------------------------------------------------------------- |
| **Backend API** | ASP.NET Core API | [GitHub](https://github.com/hisham1911/AZ_backend_new)         |
| **Live API**    | Production API   | [Railway](https://azbackendnew-production-817b.up.railway.app) |

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with ❤️ for AZ International**

[⬆ Back to Top](#-az-international---certificate-verification-system-frontend)

</div>
