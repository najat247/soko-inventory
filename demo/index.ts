import React, { useEffect } from "react";
import InventoryTable from "../src/Components/InventoryTable";
import { useInventoryStore } from "../src/Context/inventoryStore";
import "../src/index.css";

const Demo: React.FC = () => {
  const { addEquipment } = useInventoryStore();

  // Add some demo data
  useEffect(() => {
    addEquipment({
      id: "1",
      name: "Demo Equipment 1",
      category: "Category 1",
      serialNumber: "SN-001",
      status: "Available",
      assignedTo: "User 1",
    });
    addEquipment({
      id: "2",
      name: "Demo Equipment 2",
      category: "Category 2",
      serialNumber: "SN-002",
      status: "In Use",
      assignedTo: "User 2",
    });
    addEquipment({
      id: "3",
      name: "Demo Equipment 3",
      category: "Category 3",
      serialNumber: "SN-003",
      status: "Under Maintenance",
      assignedTo: "User 3",
    });
  }, [addEquipment]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Inventory System Demo</h1>
      <InventoryTable />
    </div>
  );
};

export default Demo;