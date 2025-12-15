# AZ International

<div align="center">
  <img src="public/placeholder-logo.svg" alt="AZ International Logo" width="150">
  <p>Official website for AZ International, a premier provider of engineering inspection, technical consultancy, and professional training services. Features a robust certificate verification system and an intuitive admin dashboard.</p>
</div>

## ✨ Key Features

- **Advanced Certificate Verification**: Users can instantly verify the authenticity of certificates using a unique ID or QR code.
- **Comprehensive Admin Dashboard**: A secure and feature-rich dashboard for managing certificates, services, clients, and site content.
- **Responsive & Modern UI**: Built with **Tailwind CSS** and **shadcn/ui** for a beautiful, consistent, and responsive user experience across all devices.
- **Interactive & Smooth Animations**: Engaging user interface with animations powered by **Framer Motion**.
- **Data Visualization**: The admin dashboard includes insightful charts and analytics, visualized using **Recharts**.
- **Performance Optimized**: Leveraging **Next.js** for server-side rendering (SSR), static site generation (SSG), and optimized image loading to ensure fast page speeds.
- **SEO Friendly**: Structured for high visibility on search engines to attract more clients.
- **Type Safety**: Full TypeScript support for better development experience and code quality.

## 🚀 Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts/Data Visualization**: [Recharts](https://recharts.org/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation
- **Code Quality**: ESLint, Prettier, Husky
- **Deployment**: Vercel / Node.js server

## 🏁 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repo-url>
    cd AZ
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the necessary environment variables. You can use `.env.example` as a template if available.

    ```env
    # Example
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

4.  **Set up Git hooks (optional but recommended):**

    ```bash
    npm run prepare
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 📂 Project Structure

```
AZ/
├── app/              # Main application routes and pages (Next.js App Router)
├── components/       # Shared UI components (admin, animations, shadcn/ui)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions, API services, and constants
├── public/           # Static assets (images, logos)
├── styles/           # Global styles
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
