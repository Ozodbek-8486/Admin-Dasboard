"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, Calendar, DollarSign, BookOpen, User } from "lucide-react"

export function EnrollmentsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const enrollments = [
    {
      id: 1,
      student: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "/placeholder-user.jpg",
      },
      course: {
        title: "Advanced React Development",
        instructor: "John Doe",
      },
      enrollmentDate: "2024-01-15",
      startDate: "2024-01-20",
      progress: 67,
      status: "Active",
      paymentStatus: "Paid",
      amount: "$299",
    },
    {
      id: 2,
      student: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "/placeholder-user.jpg",
      },
      course: {
        title: "Python for Beginners",
        instructor: "Jane Smith",
      },
      enrollmentDate: "2024-01-10",
      startDate: "2024-01-15",
      progress: 92,
      status: "Active",
      paymentStatus: "Paid",
      amount: "$199",
    },
    {
      id: 3,
      student: {
        name: "Carol Davis",
        email: "carol@example.com",
        avatar: "/placeholder-user.jpg",
      },
      course: {
        title: "Digital Marketing Mastery",
        instructor: "Mike Johnson",
      },
      enrollmentDate: "2024-01-20",
      startDate: "2024-01-25",
      progress: 23,
      status: "Active",
      paymentStatus: "Pending",
      amount: "$399",
    },
    {
      id: 4,
      student: {
        name: "David Wilson",
        email: "david@example.com",
        avatar: "/placeholder-user.jpg",
      },
      course: {
        title: "UI/UX Design Fundamentals",
        instructor: "Sarah Wilson",
      },
      enrollmentDate: "2024-01-12",
      startDate: "2024-02-01",
      progress: 0,
      status: "Pending",
      paymentStatus: "Paid",
      amount: "$249",
    },
  ]

  const filteredEnrollments = enrollments.filter((enrollment) => {
    const matchesSearch =
      enrollment.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.course.instructor.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || enrollment.status.toLowerCase() === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Enrollment Management</h2>
          <p className="text-muted-foreground">Track student enrollments and course progress</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Enrollments</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,089</div>
            <p className="text-xs text-muted-foreground">87% of total enrollments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+5%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$84,290</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+22%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search enrollments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Enrollments Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Enrollments</CardTitle>
          <CardDescription>Complete list of student enrollments and their progress</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Enrollment Date</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEnrollments.map((enrollment) => (
                <TableRow key={enrollment.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={enrollment.student.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {enrollment.student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{enrollment.student.name}</div>
                        <div className="text-sm text-muted-foreground">{enrollment.student.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{enrollment.course.title}</div>
                      <div className="text-sm text-muted-foreground">by {enrollment.course.instructor}</div>
                    </div>
                  </TableCell>
                  <TableCell>{enrollment.enrollmentDate}</TableCell>
                  <TableCell>{enrollment.startDate}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{enrollment.progress}%</span>
                      </div>
                      <Progress value={enrollment.progress} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={enrollment.status === "Active" ? "default" : "secondary"}>
                      {enrollment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={enrollment.paymentStatus === "Paid" ? "default" : "destructive"}>
                      {enrollment.paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{enrollment.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
