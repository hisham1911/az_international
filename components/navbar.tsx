"use client";

import {
  Menu,
  X,
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface SubmenuItem {
  title: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const currentPath = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        {
          title: "Quality Assurance & Controls",
          href: "/quality-assurance/",
        },
        {
          title: "Field/Industrial Inspection",
          href: "/field-industrial/",
        },
        {
          title: "Specialized Services",
          href: "/specialized-services/",
        },
        {
          title: "Standard NDT Services",
          href: "/standard-ndt/",
        },
        {
          title: "Capacity Building Training",
          href: "/capacity-building/",
        },
      ],
    },
    { name: "Clients", href: "/clients" },
    { name: "Certificates", href: "/certificates" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll effect for main navigation
  useEffect(() => {
    const handleResize = () => {
      // Fix any mobile menu issues on resize
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const handleServiceLinkClick = (e: React.MouseEvent, href: string) => {
    if (currentPath === "/services") {
      e.preventDefault();
      window.location.hash = href;
      window.dispatchEvent(new HashChangeEvent("hashchange"));
      (document.activeElement as HTMLElement)?.blur();
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-white"
      }`}
    >
      {/* Top bar with social media links - always visible */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-sm backdrop-blur-sm">
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex items-center justify-between">
            {/* Contact info - hidden on small screens, flex on medium and up */}
            <div className="hidden items-center space-x-4 text-xs sm:flex">
              <a
                href="tel:+20222879691"
                className="group flex items-center transition-all duration-300 hover:text-blue-200"
              >
                <div className="mr-2 rounded-full bg-blue-700/30 p-1 transition-all duration-300 group-hover:bg-blue-600/50">
                  <Phone className="h-3 w-3" />
                </div>
                <span className="whitespace-nowrap">(02) 22-8-79-691</span>
              </a>
              <a
                href="mailto:info@azinternational-eg.com"
                className="group hidden items-center transition-all duration-300 hover:text-blue-200 md:flex"
              >
                <div className="mr-2 rounded-full bg-blue-700/30 p-1 transition-all duration-300 group-hover:bg-blue-600/50">
                  <Mail className="h-3 w-3" />
                </div>
                <span className="whitespace-nowrap">
                  info@azinternational-eg.com
                </span>
              </a>
            </div>
            {/* Social icons - centered on mobile, right-aligned on desktop */}
            <div className="mx-auto flex space-x-3 sm:mx-0">
              <a
                href="https://www.facebook.com/share/191aoswa1U/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group relative overflow-hidden p-1"
              >
                <div className="absolute inset-0 scale-0 rounded-full bg-blue-600/0 transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-600/20" />
                <div className="group-hover:animate-ping-once absolute inset-0 scale-0 rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                <Facebook className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:text-blue-200" />
              </a>
              <a
                href="https://www.instagram.com/az.qualitycontrol/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group relative p-1"
              >
                <div className="absolute inset-0 scale-0 rounded-full bg-blue-600/0 transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-600/20" />
                <Instagram className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:text-blue-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/az-engineering-3721b718b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group relative p-1"
              >
                <div className="absolute inset-0 scale-0 rounded-full bg-blue-600/0 transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-600/20" />
                <Linkedin className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:text-blue-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="relative flex h-20 items-center justify-between">
          {/* Decorative element - hidden on small screens */}
          <div className="pointer-events-none absolute bottom-0 right-0 hidden h-16 w-64 rounded-tl-full bg-gradient-to-l from-blue-100/10 to-transparent opacity-60 md:block" />

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group relative flex items-center">
              <div className="relative flex items-center">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-70 blur-sm transition duration-500 group-hover:opacity-100" />
                <div
                  className="relative overflow-hidden rounded-full bg-white p-1 ring-1 ring-gray-200"
                  style={{
                    height: "52px",
                    width: "52px",
                  }}
                >
                  <Image
                    src="/images/az-logo.png"
                    alt="AZ International Logo"
                    width={50}
                    height={50}
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="ml-3 flex flex-col">
                <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-base font-bold tracking-tight text-transparent transition-all duration-500 group-hover:from-blue-600 group-hover:to-sky-400 md:text-lg">
                  AZ International
                </span>
                <span className="text-xs text-gray-500 transition-all duration-500 group-hover:text-blue-600">
                  Engineering & Inspection
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-sm font-medium hover:text-blue-600 data-[state=open]:text-blue-600">
                          <Link
                            href={link.href}
                            className="text-sm font-medium hover:text-blue-600"
                          >
                            {link.name}
                          </Link>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="min-w-[300px] rounded-xl border bg-white p-4 shadow-2xl">
                          <div className="space-y-2">
                            <Link
                              href="/services"
                              className="mb-2 block rounded-lg border-b border-gray-200 px-4 py-3 text-sm font-bold text-blue-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700"
                            >
                              View All Services
                            </Link>
                            {link.submenu.map((section) => (
                              <Link
                                key={section.title}
                                href={`/services${section.href}`}
                                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                                onClick={(e) =>
                                  handleServiceLinkClick(e, section.href)
                                }
                              >
                                {section.title}
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`rounded-md px-3 py-2 text-sm font-medium hover:text-blue-600 ${
                          currentPath === link.href
                            ? "text-blue-600"
                            : "text-gray-700"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <div key={link.name} className="px-3 py-2">
                {link.submenu ? (
                  <div>
                    <div className="space-y-1">
                      <Link
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex w-full items-center rounded-md px-3 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {link.name} - View All
                      </Link>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      >
                        Individual Services
                        <svg
                          className={`ml-2 h-4 w-4 transform transition-transform ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    {dropdownOpen && (
                      <div className="mt-2 space-y-2 pl-4">
                        {link.submenu.map((section) => (
                          <button
                            key={section.title}
                            onClick={() => {
                              router.push(`/services${section.href}`);
                              setIsMenuOpen(false);
                            }}
                            className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            {section.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${
                      currentPath === link.href
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
