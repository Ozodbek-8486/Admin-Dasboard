"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Edit, Trash2, Users, Clock, DollarSign, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function CoursesSection() {
  const [searchTerm, setSearchTerm] = useState("")

  const courses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "John Doe",
      category: "Programming",
      students: 45,
      duration: "12 weeks",
      price: "$299",
      status: "Active",
      startDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Python for Beginners",
      instructor: "Jane Smith",
      category: "Programming",
      students: 89,
      duration: "8 weeks",
      price: "$199",
      status: "Active",
      startDate: "2024-01-10",
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Mike Johnson",
      category: "Marketing",
      students: 67,
      duration: "10 weeks",
      price: "$399",
      status: "Active",
      startDate: "2024-01-20",
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      instructor: "Sarah Wilson",
      category: "Design",
      students: 34,
      duration: "6 weeks",
      price: "$249",
      status: "Draft",
      startDate: "2024-02-01",
    },
  ]

  const categories = [
    { name: "Programming", count: 24 },
    { name: "Design", count: 18 },
    { name: "Marketing", count: 15 },
    { name: "Business", count: 12 },
    { name: "Data Science", count: 8 },
  ]

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold">Course Management</h2>
          <p className="text-sm text-muted-foreground">Manage your training courses and content</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Add New Course
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Course</DialogTitle>
              <DialogDescription>Add a new course to your training center catalog.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="sm:text-right">
                  Title
                </Label>
                <Input id="title" className="sm:col-span-3" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="instructor" className="sm:text-right">
                  Instructor
                </Label>
                <Select>
                  <SelectTrigger className="sm:col-span-3">
                    <SelectValue placeholder="Select instructor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="jane">Jane Smith</SelectItem>
                    <SelectItem value="mike">Mike Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="sm:text-right">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="sm:col-span-3">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="sm:text-right">
                  Price
                </Label>
                <Input id="price" type="number" className="sm:col-span-3" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="sm:text-right">
                  Duration
                </Label>
                <Input id="duration" placeholder="e.g., 8 weeks" className="sm:col-span-3" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="sm:text-right">
                  Description
                </Label>
                <Textarea id="description" className="sm:col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full sm:w-auto">
                Create Course
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <TabsList className="grid w-full sm:w-auto grid-cols-4">
            <TabsTrigger value="all" className="text-xs sm:text-sm">
              All
            </TabsTrigger>
            <TabsTrigger value="active" className="text-xs sm:text-sm">
              Active
            </TabsTrigger>
            <TabsTrigger value="draft" className="text-xs sm:text-sm">
              Draft
            </TabsTrigger>
            <TabsTrigger value="archived" className="text-xs sm:text-sm">
              Archived
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-full sm:w-[300px]"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base lg:text-lg">All Courses</CardTitle>
                  <CardDescription className="text-sm">
                    Complete list of all courses in your training center
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Mobile Card View */}
                  <div className="block lg:hidden space-y-4">
                    {filteredCourses.map((course) => (
                      <Card key={course.id} className="border">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-sm leading-tight mb-1">{course.title}</h3>
                              <p className="text-xs text-muted-foreground">by {course.instructor}</p>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              <span>{course.students}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              <span>{course.price.replace("$", "")}</span>
                            </div>
                            <Badge
                              variant={course.status === "Active" ? "default" : "secondary"}
                              className="text-xs w-fit"
                            >
                              {course.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Desktop Table View */}
                  <div className="hidden lg:block">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course</TableHead>
                          <TableHead>Instructor</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Students</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredCourses.map((course) => (
                          <TableRow key={course.id}>
                            <TableCell className="font-medium">{course.title}</TableCell>
                            <TableCell>{course.instructor}</TableCell>
                            <TableCell>{course.category}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {course.students}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {course.duration}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                {course.price.replace("$", "")}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={course.status === "Active" ? "default" : "secondary"}>
                                {course.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>

          {/* Categories Sidebar */}
          <div className="space-y-4 order-first lg:order-last">
            <Card>
              <CardHeader>
                <CardTitle className="text-base lg:text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                    <span className="text-sm">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base lg:text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold">156</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Total Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold">89%</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Completion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold">4.8</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Avg Rating</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
