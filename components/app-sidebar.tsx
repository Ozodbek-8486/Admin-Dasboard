"use client"

import { useState, useEffect } from "react"
import {
  BookOpen,
  Users,
  GraduationCap,
  BarChart3,
  Settings,
  Home,
  Calendar,
  DollarSign,
  FileText,
  Bell,
  User,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

import { useSidebar } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    id: "dashboard",
  },
  {
    title: "Courses",
    icon: BookOpen,
    id: "courses",
  },
  {
    title: "Students",
    icon: Users,
    id: "students",
  },
  {
    title: "Instructors",
    icon: GraduationCap,
    id: "instructors",
  },
  {
    title: "Enrollments",
    icon: Calendar,
    id: "enrollments",
  },
  {
    title: "Payments",
    icon: DollarSign,
    id: "payments",
  },
  {
    title: "Reports",
    icon: FileText,
    id: "reports",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    id: "analytics",
  },
  {
    title: "Notifications",
    icon: Bell,
    id: "notifications",
  },
  {
    title: "Settings",
    icon: Settings,
    id: "settings",
  },
]

interface AppSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function AppSidebar({ activeSection, setActiveSection }: AppSidebarProps) {
  const { open, setOpen } = useSidebar()
  const isMobile = useIsMobile()
  const [showDesktopMenu, setShowDesktopMenu] = useState(false)

  // Desktop hover functionality
  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        // Show sidebar when mouse is near the left edge (within 20px)
        if (e.clientX <= 20) {
          setShowDesktopMenu(true)
        }
        // Hide sidebar when mouse moves away from the sidebar area
        else if (e.clientX > 280) {
          setShowDesktopMenu(false)
        }
      }

      document.addEventListener("mousemove", handleMouseMove)
      return () => document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile])

  const handleMenuItemClick = (sectionId: string) => {
    setActiveSection(sectionId)
    // Close mobile menu after selection
    if (isMobile) {
      setOpen(false)
    }
    // Close desktop menu after selection
    if (!isMobile) {
      setShowDesktopMenu(false)
    }
  }

  // Don't render sidebar on desktop if not hovered
  if (!isMobile && !showDesktopMenu) {
    return null
  }

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 bg-background border shadow-md"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      )}

      {/* Desktop Hover Menu */}
      {!isMobile && showDesktopMenu && (
        <div
          className="fixed left-0 top-0 h-full w-64 bg-background border-r shadow-lg z-40 transition-all duration-200"
          onMouseLeave={() => setShowDesktopMenu(false)}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="border-b p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Training Center</span>
                  <span className="text-xs text-muted-foreground">Admin Dashboard</span>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground mb-2">Main Menu</p>
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t p-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start text-xs">
                      <span className="font-medium">Admin User</span>
                      <span className="text-muted-foreground">admin@training.com</span>
                    </div>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top" className="w-56">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sidebar - Fixed */}
      {isMobile && open && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />

          {/* Sidebar */}
          <div className="fixed left-0 top-0 h-full w-[50vw] bg-background border-r shadow-lg">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="border-b p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Training Center</span>
                    <span className="text-xs text-muted-foreground">Admin Dashboard</span>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Main Menu</p>
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleMenuItemClick(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                        activeSection === item.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t p-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start text-xs">
                        <span className="font-medium">Admin User</span>
                        <span className="text-muted-foreground">admin@training.com</span>
                      </div>
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" className="w-56">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>Sign out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
