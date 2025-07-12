"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardContent } from "@/components/dashboard-content"

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard")

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <SidebarInset className="flex-1">
          <DashboardContent activeSection={activeSection} />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
