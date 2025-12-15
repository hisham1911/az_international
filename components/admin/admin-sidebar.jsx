"use client";

import {
  LayoutDashboard,
  Award,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  FileText,
  BarChart3,
  Bell,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const navItems = [
    {
      title: "Dashboard",
      href: "/adminAZ",
      icon: LayoutDashboard,
    },
    {
      title: "Certificates",
      href: "/adminAZ/certificates",
      icon: Award,
    },
    {
      title: "Templates",
      href: "/adminAZ/templates",
      icon: FileText,
    },
    {
      title: "Users",
      href: "/adminAZ/users",
      icon: Users,
    },
    {
      title: "Chats",
      href: "/adminAZ/chats",
      icon: MessageSquare,
    },
    {
      title: "Analytics",
      href: "/adminAZ/analytics",
      icon: BarChart3,
    },
    {
      title: "Notifications",
      href: "/adminAZ/notifications",
      icon: Bell,
    },
    {
      title: "Settings",
      href: "/adminAZ/settings",
      icon: Settings,
    },
  ];

  return (
    <div
      className={cn(
        "flex h-full flex-col border-r border-gray-200 bg-white transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
        <Link href="/adminAZ" className="flex items-center">
          {!collapsed && (
            <span className="text-xl font-bold text-blue-600">AZ Admin</span>
          )}
          {collapsed && (
            <span className="text-xl font-bold text-blue-600">AZ</span>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="h-8 w-8 text-gray-500"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100",
                collapsed ? "justify-center" : "justify-start"
              )}
            >
              <item.icon
                className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-3")}
              />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-gray-200 p-4">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-gray-600 hover:bg-gray-100",
            collapsed && "justify-center"
          )}
        >
          <LogOut className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-2")} />
          {!collapsed && <span>Logout</span>}
        </Button>
      </div>
    </div>
  );
}
