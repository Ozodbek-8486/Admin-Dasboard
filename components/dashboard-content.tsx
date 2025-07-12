"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { DashboardOverview } from "@/components/sections/dashboard-overview"
import { CoursesSection } from "@/components/sections/courses-section"
import { StudentsSection } from "@/components/sections/students-section"
import { InstructorsSection } from "@/components/sections/instructors-section"
import { EnrollmentsSection } from "@/components/sections/enrollments-section"
import { PaymentsSection } from "@/components/sections/payments-section"
import { ReportsSection } from "@/components/sections/reports-section"
import { AnalyticsSection } from "@/components/sections/analytics-section"
import { NotificationsSection } from "@/components/sections/notifications-section"
import { SettingsSection } from "@/components/sections/settings-section"

interface DashboardContentProps {
  activeSection: string
}

export function DashboardContent({ activeSection }: DashboardContentProps) {
  const isMobile = useIsMobile()

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />
      case "courses":
        return <CoursesSection />
      case "students":
        return <StudentsSection />
      case "instructors":
        return <InstructorsSection />
      case "enrollments":
        return <EnrollmentsSection />
      case "payments":
        return <PaymentsSection />
      case "reports":
        return <ReportsSection />
      case "analytics":
        return <AnalyticsSection />
      case "notifications":
        return <NotificationsSection />
      case "settings":
        return <SettingsSection />
      default:
        return <DashboardOverview />
    }
  }

  const getSectionTitle = () => {
    switch (activeSection) {
      case "dashboard":
        return "Dashboard Overview"
      case "courses":
        return "Course Management"
      case "students":
        return "Student Management"
      case "instructors":
        return "Instructor Management"
      case "enrollments":
        return "Enrollment Management"
      case "payments":
        return "Payment Management"
      case "reports":
        return "Reports & Analytics"
      case "analytics":
        return "Analytics Dashboard"
      case "notifications":
        return "Notifications"
      case "settings":
        return "Settings"
      default:
        return "Dashboard"
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="flex h-14 lg:h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
        {/* Mobile: Add padding for the menu button */}
        <div className={`flex-1 ${isMobile ? "ml-12" : ""}`}>
          <h1 className="text-lg lg:text-xl font-semibold">{getSectionTitle()}</h1>
        </div>
      </header>
      <main className="flex-1 p-4 lg:p-6 overflow-auto bg-black min-h-screen">{renderSection()}</main>
    </div>
  )
}
