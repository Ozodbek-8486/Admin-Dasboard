"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, DollarSign, CreditCard, TrendingUp, AlertCircle } from "lucide-react"

export function PaymentsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const payments = [
    {
      id: 1,
      student: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "/placeholder-user.jpg",
      },
      course: "Advanced React Development",
      amount: 299,
      paymentDate: "2024-01-15",
      method: "Credit Card",
      status: "Completed",
      transactionId: "TXN001234",
    },
    {
      id: 2,
      student: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "/placeholder-user.jpg",
      },
      course: "Python for Beginners",
      amount: 199,
      paymentDate: "2024-01-10",
      method: "PayPal",
      status: "Completed",
      transactionId: "TXN001235",
    },
    {
      id: 3,
      student: {
        name: "Carol Davis",
        email: "carol@example.com",
        avatar: "/placeholder-user.jpg",
      },
      course: "Digital Marketing Mastery",
      amount: 399,
      paymentDate: "2024-01-20",
      method: "Bank Transfer",
      status: "Pending",
      transactionId: "TXN001236",
    },
    {
      id: 4,
      student: {
        name: "David Wilson",
        email: "david@example.com",
        avatar: "/placeholder-user.jpg",
      },
      course: "UI/UX Design Fundamentals",
      amount: 249,
      paymentDate: "2024-01-12",
      method: "Credit Card",
      status: "Failed",
      transactionId: "TXN001237",
    },
  ]

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || payment.status.toLowerCase() === statusFilter

    return matchesSearch && matchesStatus
  })

  const totalRevenue = payments.reduce(
    (sum, payment) => (payment.status === "Completed" ? sum + payment.amount : sum),
    0,
  )

  const pendingAmount = payments.reduce(
    (sum, payment) => (payment.status === "Pending" ? sum + payment.amount : sum),
    0,
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Payment Management</h2>
          <p className="text-muted-foreground">Track payments and financial transactions</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+22%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${pendingAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {payments.filter((p) => p.status === "Pending").length} transactions
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Transaction</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$287</div>
            <p className="text-xs text-muted-foreground">Per successful payment</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search payments..."
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
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="refunded">Refunded</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Complete record of all payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={payment.student.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {payment.student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{payment.student.name}</div>
                        <div className="text-sm text-muted-foreground">{payment.student.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{payment.course}</TableCell>
                  <TableCell className="font-medium">${payment.amount}</TableCell>
                  <TableCell>{payment.paymentDate}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell className="font-mono text-sm">{payment.transactionId}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        payment.status === "Completed"
                          ? "default"
                          : payment.status === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
