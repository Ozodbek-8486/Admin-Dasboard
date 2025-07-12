"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, BookOpen, GraduationCap, DollarSign, TrendingUp, Calendar, Award } from "lucide-react"

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Courses",
      value: "156",
      change: "+3%",
      icon: BookOpen,
      color: "text-green-600",
    },
    {
      title: "Instructors",
      value: "42",
      change: "+2%",
      icon: GraduationCap,
      color: "text-purple-600",
    },
    {
      title: "Revenue",
      value: "$84,290",
      change: "+18%",
      icon: DollarSign,
      color: "text-yellow-600",
    },
  ]

  const recentCourses = [
    { name: "Advanced React Development", students: 45, progress: 78, status: "Active" },
    { name: "Python for Beginners", students: 89, progress: 92, status: "Active" },
    { name: "Digital Marketing Mastery", students: 67, progress: 45, status: "Active" },
    { name: "UI/UX Design Fundamentals", students: 34, progress: 23, status: "Starting Soon" },
  ]

  const recentEnrollments = [
    { student: "John Smith", course: "React Development", date: "2024-01-15", amount: "$299" },
    { student: "Sarah Johnson", course: "Python Basics", date: "2024-01-15", amount: "$199" },
    { student: "Mike Davis", course: "Digital Marketing", date: "2024-01-14", amount: "$399" },
    { student: "Emily Brown", course: "UI/UX Design", date: "2024-01-14", amount: "$249" },
  ]

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-3 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-xl lg:text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-2">
        {/* Recent Course Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
              <BookOpen className="h-4 w-4 lg:h-5 lg:w-5" />
              Course Performance
            </CardTitle>
            <CardDescription className="text-sm">Overview of active courses and their progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 lg:space-y-4">
            {recentCourses.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1 min-w-0 flex-1">
                    <p className="text-sm font-medium leading-tight">{course.name}</p>
                    <p className="text-xs text-muted-foreground">{course.students} students enrolled</p>
                  </div>
                  <Badge variant={course.status === "Active" ? "default" : "secondary"} className="text-xs shrink-0">
                    {course.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Enrollments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
              <Users className="h-4 w-4 lg:h-5 lg:w-5" />
              Recent Enrollments
            </CardTitle>
            <CardDescription className="text-sm">Latest student registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 lg:space-y-4">
              {recentEnrollments.map((enrollment, index) => (
                <div key={index} className="flex items-center justify-between gap-2">
                  <div className="space-y-1 min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">{enrollment.student}</p>
                    <p className="text-xs text-muted-foreground truncate">{enrollment.course}</p>
                  </div>
                  <div className="text-right space-y-1 shrink-0">
                    <p className="text-sm font-medium">{enrollment.amount}</p>
                    <p className="text-xs text-muted-foreground">{enrollment.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
            <TrendingUp className="h-4 w-4 lg:h-5 lg:w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription className="text-sm">Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 lg:gap-4 grid-cols-2 lg:grid-cols-4">
            <Button className="h-16 lg:h-20 flex-col gap-1 lg:gap-2 text-xs lg:text-sm">
              <BookOpen className="h-4 w-4 lg:h-5 lg:w-5" />
              Add New Course
            </Button>
            <Button
              variant="outline"
              className="h-16 lg:h-20 flex-col gap-1 lg:gap-2 text-xs lg:text-sm bg-transparent"
            >
              <Users className="h-4 w-4 lg:h-5 lg:w-5" />
              Manage Students
            </Button>
            <Button
              variant="outline"
              className="h-16 lg:h-20 flex-col gap-1 lg:gap-2 text-xs lg:text-sm bg-transparent"
            >
              <Calendar className="h-4 w-4 lg:h-5 lg:w-5" />
              Schedule Class
            </Button>
            <Button
              variant="outline"
              className="h-16 lg:h-20 flex-col gap-1 lg:gap-2 text-xs lg:text-sm bg-transparent"
            >
              <Award className="h-4 w-4 lg:h-5 lg:w-5" />
              Generate Reports
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
