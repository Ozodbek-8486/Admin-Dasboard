"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, BookOpen, DollarSign, Clock } from "lucide-react"

export function AnalyticsSection() {
  const performanceMetrics = [
    {
      title: "Course Completion Rate",
      value: "78%",
      change: "+5%",
      trend: "up",
      description: "Students completing courses",
    },
    {
      title: "Average Session Duration",
      value: "45 min",
      change: "+12%",
      trend: "up",
      description: "Time spent per session",
    },
    {
      title: "Student Retention",
      value: "89%",
      change: "-2%",
      trend: "down",
      description: "Students continuing courses",
    },
    {
      title: "Revenue Growth",
      value: "$84,290",
      change: "+18%",
      trend: "up",
      description: "Monthly revenue",
    },
  ]

  const topCourses = [
    { name: "Advanced React Development", students: 234, completion: 89, revenue: "$69,666" },
    { name: "Python for Beginners", students: 189, completion: 92, revenue: "$37,611" },
    { name: "Digital Marketing Mastery", students: 156, completion: 76, revenue: "$62,244" },
    { name: "UI/UX Design Fundamentals", students: 98, completion: 84, revenue: "$24,402" },
    { name: "Data Science Bootcamp", students: 87, completion: 71, revenue: "$43,413" },
  ]

  const studentEngagement = [
    { metric: "Daily Active Users", value: "1,247", percentage: 87 },
    { metric: "Weekly Active Users", value: "2,156", percentage: 76 },
    { metric: "Monthly Active Users", value: "2,847", percentage: 94 },
    { metric: "Course Interactions", value: "15,678", percentage: 82 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <p className="text-muted-foreground">Comprehensive insights into your training center performance</p>
      </div>

      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        {performanceMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              {metric.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>{metric.change}</span>{" "}
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Performing Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Top Performing Courses
            </CardTitle>
            <CardDescription>Courses ranked by student enrollment and completion</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCourses.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{course.name}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {course.students} students
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {course.revenue}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline">{course.completion}% completion</Badge>
                </div>
                <Progress value={course.completion} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Student Engagement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Student Engagement
            </CardTitle>
            <CardDescription>User activity and engagement metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {studentEngagement.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.metric}</span>
                  <span className="text-sm font-bold">{item.value}</span>
                </div>
                <div className="space-y-1">
                  <Progress value={item.percentage} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Engagement Rate</span>
                    <span>{item.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Revenue Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Revenue Analytics
          </CardTitle>
          <CardDescription>Financial performance breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-2xl font-bold">$84,290</div>
              <div className="text-sm text-muted-foreground">Total Revenue</div>
              <div className="text-xs text-green-600">+18% from last month</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">$287</div>
              <div className="text-sm text-muted-foreground">Average Order Value</div>
              <div className="text-xs text-green-600">+8% from last month</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">294</div>
              <div className="text-sm text-muted-foreground">Total Transactions</div>
              <div className="text-xs text-green-600">+22% from last month</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Progress Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Learning Progress Analytics
          </CardTitle>
          <CardDescription>Student learning patterns and progress tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-medium">Average Study Time</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Daily Average</span>
                  <span className="font-medium">2.5 hours</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Weekly Average</span>
                  <span className="font-medium">16.8 hours</span>
                </div>
                <Progress value={84} className="h-2" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Completion Rates by Category</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Programming</span>
                  <span className="font-medium">89%</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Design</span>
                  <span className="font-medium">76%</span>
                </div>
                <Progress value={76} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Marketing</span>
                  <span className="font-medium">82%</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
