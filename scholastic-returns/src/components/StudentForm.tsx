import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { useEffect, useState } from "react";
  
  export interface Student {
    id: number;
    name: string;
    class: string;
    contact: string;
  }
  
  interface StudentFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (student: Student) => void;
    student?: Student | null;
  }
  
  export const StudentForm = ({
    isOpen,
    onClose,
    onSave,
    student,
  }: StudentFormProps) => {
    const [name, setName] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [contact, setContact] = useState("");
  
    useEffect(() => {
      if (student) {
        setName(student.name);
        setStudentClass(student.class);
        setContact(student.contact);
      } else {
        setName("");
        setStudentClass("");
        setContact("");
      }
    }, [student]);
  
    const handleSave = () => {
      onSave({
        id: student?.id || Date.now(),
        name,
        class: studentClass,
        contact,
      });
      onClose();
    };
  
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{student ? "Edit Student" : "Add Student"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Input
                id="class"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Contact</Label>
              <Input
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };
  