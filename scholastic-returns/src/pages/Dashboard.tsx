import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { Bell, Edit, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { StudentForm, Student } from "@/components/StudentForm";
import { ItemForm, Item } from "@/components/ItemForm";
import { DeleteConfirmationDialog } from "@/components/DeleteConfirmationDialog";
import apiClient from "@/lib/api";

const Dashboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const [isStudentFormOpen, setIsStudentFormOpen] = useState(false);
  const [isItemFormOpen, setIsItemFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const [itemToDelete, setItemToDelete] = useState<{ id: number; type: 'student' | 'item' } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [studentsRes, itemsRes] = await Promise.all([
          apiClient.get('/students'),
          apiClient.get('/items'),
        ]);
        setStudents(studentsRes.data);
        setItems(itemsRes.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddStudent = () => {
    setSelectedStudent(null);
    setIsStudentFormOpen(true);
  };

  const handleEditStudent = (student: Student) => {
    setSelectedStudent(student);
    setIsStudentFormOpen(true);
  };

  const handleDeleteStudent = (id: number) => {
    setItemToDelete({ id, type: 'student' });
    setIsDeleteDialogOpen(true);
  };

  const handleAddItem = () => {
    setSelectedItem(null);
    setIsItemFormOpen(true);
  };

  const handleEditItem = (item: Item) => {
    setSelectedItem(item);
    setIsItemFormOpen(true);
  };

  const handleDeleteItem = (id: number) => {
    setItemToDelete({ id, type: 'item' });
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      try {
        if (itemToDelete.type === 'student') {
          await apiClient.delete(`/students/${itemToDelete.id}`);
          setStudents(students.filter((s) => s.id !== itemToDelete.id));
        } else {
          await apiClient.delete(`/items/${itemToDelete.id}`);
          setItems(items.filter((i) => i.id !== itemToDelete.id));
        }
      } catch (error) {
        console.error("Failed to delete item", error);
      }
    }
    setIsDeleteDialogOpen(false);
    setItemToDelete(null);
  };

  const handleSaveStudent = async (student: Omit<Student, 'id'>) => {
    try {
      if (selectedStudent) {
        const updatedStudent = await apiClient.put(`/students/${selectedStudent.id}`, student);
        setStudents(students.map((s) => (s.id === selectedStudent.id ? updatedStudent.data : s)));
      } else {
        const newStudent = await apiClient.post('/students', student);
        setStudents([...students, newStudent.data]);
      }
    } catch (error) {
      console.error("Failed to save student", error);
    }
  };

  const handleSaveItem = async (item: Omit<Item, 'id'>) => {
    try {
      if (selectedItem) {
        const updatedItem = await apiClient.put(`/items/${selectedItem.id}`, item);
        setItems(items.map((i) => (i.id === selectedItem.id ? updatedItem.data : i)));
      } else {
        const newItem = await apiClient.post('/items', item);
        setItems([...items, newItem.data]);
      }
    } catch (error) {
      console.error("Failed to save item", error);
    }
  };

  const stats = [
    { title: "Total Students", value: students.length },
    { title: "Lost Items", value: items.filter(i => i.itemType === 'lost').length },
    { title: "Found Items", value: items.filter(i => i.itemType === 'found').length },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        
        <main className="flex-1 bg-background">
          {/* Top Navigation */}
          <header className="border-b border-border">
            <div className="flex items-center justify-between h-16 px-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, Sarah!</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <Bell className="h-5 w-5" />
                </Button>
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Students Table */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Students</CardTitle>
                <Button onClick={handleAddStudent}>Add Student</Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.class}</TableCell>
                        <TableCell>{student.contact}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" onClick={() => handleEditStudent(student)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDeleteStudent(student.id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Items Table */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Lost & Found Items</CardTitle>
                <Button onClick={handleAddItem}>Add Item</Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.itemName}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                              item.itemType === "found"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {item.itemType}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" onClick={() => handleEditItem(item)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDeleteItem(item.id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <StudentForm 
        isOpen={isStudentFormOpen}
        onClose={() => setIsStudentFormOpen(false)}
        onSave={handleSaveStudent}
        student={selectedStudent}
      />
      <ItemForm
        isOpen={isItemFormOpen}
        onClose={() => setIsItemFormOpen(false)}
        onSave={handleSaveItem}
        item={selectedItem}
      />
      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Are you sure?"
        description="This action cannot be undone."
      />
    </SidebarProvider>
  );
};

export default Dashboard;