import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Bell } from "lucide-react";

const Students = () => {
  const students = [
    { id: "1001", name: "Sophia Clark", class: "Grade 9", contact: "sophia.clark@email.com" },
    { id: "1002", name: "Ethan Miller", class: "Grade 10", contact: "ethan.miller@email.com" },
    { id: "1003", name: "Olivia Davis", class: "Grade 11", contact: "olivia.davis@email.com" },
    { id: "1004", name: "Noah Wilson", class: "Grade 9", contact: "noah.wilson@email.com" },
    { id: "1005", name: "Ava Taylor", class: "Grade 12", contact: "ava.taylor@email.com" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        
        <main className="flex-1 bg-background">
          {/* Top Navigation */}
          <header className="border-b border-border">
            <div className="flex items-center justify-between h-16 px-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Students</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Button>Add New Student</Button>
                <Button variant="ghost" size="sm">
                  <Bell className="h-5 w-5" />
                </Button>
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
            </div>
          </header>

          <div className="p-6">
            {/* Students Table */}
            <Card>
              <CardHeader>
                <CardTitle>Students</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Contact</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.id}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.class}</TableCell>
                        <TableCell>{student.contact}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Students;