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
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Textarea } from "@/components/ui/textarea";
  import { useEffect, useState } from "react";
  
  export interface Item {
    id: number;
    itemName: string;
    description: string;
    location: string;
    itemType: "lost" | "found";
    imageUrl?: string;
  }
  
  interface ItemFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (item: Item) => void;
    item?: Item | null;
  }
  
  export const ItemForm = ({ isOpen, onClose, onSave, item }: ItemFormProps) => {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [itemType, setItemType] = useState<"lost" | "found">("lost");
  
    useEffect(() => {
      if (item) {
        setItemName(item.itemName);
        setDescription(item.description);
        setLocation(item.location);
        setItemType(item.itemType);
      } else {
        setItemName("");
        setDescription("");
        setLocation("");
        setItemType("lost");
      }
    }, [item]);
  
    const handleSave = () => {
      onSave({
        id: item?.id || Date.now(),
        itemName,
        description,
        location,
        itemType,
      });
      onClose();
    };
  
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{item ? "Edit Item" : "Add Item"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="itemName">Item Name</Label>
              <Input
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="itemType">Item Type</Label>
              <Select
                value={itemType}
                onValueChange={(value: "lost" | "found") => setItemType(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select item type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lost">Lost</SelectItem>
                  <SelectItem value="found">Found</SelectItem>
                </SelectContent>
              </Select>
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
  