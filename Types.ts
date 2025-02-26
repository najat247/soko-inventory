export type EquipmentStatus = "Available" | "In Use" | "Under Maintenance";

export interface Equipment {
  id: string;
  name: string;
  category: string;
  serialNumber: string;
  status: EquipmentStatus;
  assignedTo?: string;
  lastCheckedOut?: string;
}
