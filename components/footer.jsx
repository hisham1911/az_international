import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-blue-950 to-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top section with main content */}
        <div className="grid grid-cols-1 gap-6 py-5 md:grid-cols-2 md:py-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="group mb-3 flex items-center">
              <div className="relative mr-3">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600/30 to-blue-400/30 opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100"></div>
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 p-1 ring-1 ring-white/10 md:h-11 md:w-11">
                  <Image
                    src="/images/az-logo.png"
                    alt="AZ International Logo"
                    width={40}
                    height={40}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>
              <div>
                <h3 className="bg-gradient-to-r from-blue-300 to-sky-200 bg-clip-text text-lg font-bold text-transparent transition-all duration-300 group-hover:from-blue-200 group-hover:to-sky-100 md:text-xl">
                  AZ INTERNATIONAL
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-blue-300/80">
                  Engineering & Technical Consulting
                </span>
              </div>
            </div>{" "}
            <p className="mb-3 max-w-md text-xs leading-relaxed text-gray-300/90">
              Third party inspection and capacity building body since 2012,
              specializing in NDT, quality control inspection, and capacity
              building courses. We provide high-quality services to develop
              human resources in steel fabrication, oil and gas, chemical,
              fertilizers, cement and electrical power plants sectors.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:items-end">
            <h4 className="relative mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-blue-200">
              Contact Us
              <span className="absolute -bottom-1 left-0 h-0.5 w-12 rounded-full bg-gradient-to-r from-blue-500/80 to-transparent"></span>
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="group flex items-start">
                <div className="mr-2.5 rounded-full bg-blue-800/30 p-1.5 transition-all duration-300 group-hover:bg-blue-700/50">
                  <MapPin className="h-3 w-3 flex-shrink-0 text-blue-300" />
                </div>
                <span className="text-xs text-gray-300/90 transition-colors duration-300 group-hover:text-blue-200">
                  33 Gamal El-Deen Kassem St., Nasr City, Cairo, Egypt
                </span>
              </li>
              <li className="group flex items-center">
                <div className="mr-2.5 rounded-full bg-blue-800/30 p-1.5 transition-all duration-300 group-hover:bg-blue-700/50">
                  <Phone className="h-3 w-3 flex-shrink-0 text-blue-300" />
                </div>
                <a
                  href="tel:+20222879691"
                  className="text-xs text-gray-300/90 transition-colors duration-300 group-hover:text-blue-200"
                >
                  (02) 22-8-79-691
                </a>
              </li>
              <li className="group flex items-center">
                <div className="mr-2.5 rounded-full bg-blue-800/30 p-1.5 transition-all duration-300 group-hover:bg-blue-700/50">
                  <Mail className="h-3 w-3 flex-shrink-0 text-blue-300" />
                </div>
                <a
                  href="mailto:info@azinternational-eg.com"
                  className="text-xs text-gray-300/90 transition-colors duration-300 group-hover:text-blue-200"
                >
                  info@azinternational-eg.com
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* Social Media Links Section */}
        <div className="border-t border-blue-800/30 py-4">
          <div className="flex items-center justify-center space-x-6">
            <h4 className="mr-2 text-xs font-semibold uppercase tracking-wider text-blue-200">
              Follow Us:
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/191aoswa1U/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group rounded-full bg-blue-800/30 p-2 transition-all duration-300 hover:bg-blue-700/50"
              >
                <Facebook className="h-4 w-4 text-blue-300 transition-colors duration-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/az.qualitycontrol/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group rounded-full bg-blue-800/30 p-2 transition-all duration-300 hover:bg-blue-700/50"
              >
                <Instagram className="h-4 w-4 text-blue-300 transition-colors duration-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/az-engineering-3721b718b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group rounded-full bg-blue-800/30 p-2 transition-all duration-300 hover:bg-blue-700/50"
              >
                <Linkedin className="h-4 w-4 text-blue-300 transition-colors duration-300 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom copyright bar */}
        <div className="relative overflow-hidden border-t border-blue-800/30 py-3 text-center text-[11px] text-blue-200/70">
          <div className="animate-shimmer pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/10 to-transparent"></div>
          <p>
            © {new Date().getFullYear()} AZ INTERNATIONAL. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
