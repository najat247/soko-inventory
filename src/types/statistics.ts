export interface InventoryStatistics {
  totalItems: number;
  availableItems: number;
  inUseItems: number;
  underMaintenanceItems: number;
  retiredItems: number;
  byCategory: {
    [key: string]: number;
  };
}

export interface EquipmentHistory {
  id: string;
  equipmentId: string;
  action: 'created' | 'updated' | 'deleted' | 'status_changed' | 'assigned';
  timestamp: string;
  details: string;
  performedBy: string;
} 