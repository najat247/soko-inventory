export type EquipmentStatus = 'Available' | 'In Use' | 'Under Maintenance' | 'Retired';
export type EquipmentCategory = 'Electronics' | 'Furniture' | 'Tools' | 'Vehicles' | 'Other';

export interface Equipment {
  id: string;
  name: string;
  category: EquipmentCategory;
  serialNumber: string;
  status: EquipmentStatus;
  assignedTo?: string;
  purchaseDate: string;
  lastMaintenance?: string;
  notes?: string;
}

export interface InventoryFilters {
  search: string;
  status: EquipmentStatus | 'all';
  category: EquipmentCategory | 'all';
} 