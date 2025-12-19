# AZ International - Certificate Verification System

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

**A modern certificate verification and management system for NDT (Non-Destructive Testing) certifications.**

[Live Demo](#) • [API Documentation](../az_backend_new/README.md) • [Deployment Guide](./DEPLOYMENT_GUIDE.md)

</div>

---

## ✨ Features

- 🔍 **Certificate Search** - Search by name or serial number
- ✅ **Certificate Verification** - QR code verification for authenticity
- 📊 **Admin Dashboard** - Full CRUD operations for certificates
- 📤 **Excel Import** - Bulk import certificates from Excel files
- 🎨 **Modern UI** - Built with Radix UI and Tailwind CSS
- 📱 **Responsive** - Works on all devices
- 🌐 **Bilingual** - English and Arabic support

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/az-international.git

# Navigate to frontend directory
cd az-international

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Environment Variables

| Variable              | Description     | Default                                                   |
| --------------------- | --------------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | Backend API URL | `https://azbackendnew-production-817b.up.railway.app/api` |

---

## 📁 Project Structure

```
az_international/
├── app/                    # Next.js App Router
│   ├── adminAZ/           # Admin dashboard pages
│   │   └── certificates/  # Certificate management
│   ├── certificates/      # Public certificate pages
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (shadcn/ui)
│   └── animations/       # Animation components
├── lib/                   # Utilities and services
│   ├── api-services.ts   # API client functions
│   └── enums.ts          # Enums and constants
├── types/                 # TypeScript types
└── public/               # Static assets
```

---

## 🛠️ Tech Stack

| Technology          | Purpose                         |
| ------------------- | ------------------------------- |
| **Next.js 15**      | React framework with App Router |
| **TypeScript**      | Type safety                     |
| **Tailwind CSS**    | Styling                         |
| **Radix UI**        | Accessible components           |
| **React Hook Form** | Form handling                   |
| **Zod**             | Schema validation               |

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npm run lint:fix  # Fix ESLint errors
npm run format    # Format with Prettier
npm run type-check # TypeScript check
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variable:
   - `NEXT_PUBLIC_API_URL` = `https://azbackendnew-production-817b.up.railway.app/api`
4. Deploy!

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

### Deploy with Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🔗 Related

- **Backend API**: [az_backend_new](../az_backend_new/README.md)
- **API URL**: `https://azbackendnew-production-817b.up.railway.app/api`

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with ❤️ by AZ International Team**

</div>
