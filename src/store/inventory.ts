import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';
import { Equipment, InventoryFilters } from '@/types';

interface InventoryState {
  equipment: Equipment[];
  filters: InventoryFilters;
  addEquipment: (equipment: Omit<Equipment, 'id'>) => void;
  updateEquipment: (id: string, equipment: Partial<Equipment>) => void;
  deleteEquipment: (id: string) => void;
  setFilters: (filters: Partial<InventoryFilters>) => void;
}

// Initial demo data
const initialEquipment: Equipment[] = [
  {
    id: nanoid(),
    name: 'MacBook Pro',
    category: 'Electronics',
    serialNumber: 'MBP2023001',
    status: 'In Use',
    assignedTo: 'John Doe',
    purchaseDate: '2023-01-15',
    lastMaintenance: '2023-11-20',
    notes: 'Company laptop for development team'
  },
  {
    id: nanoid(),
    name: 'Office Desk',
    category: 'Furniture',
    serialNumber: 'DSK2023045',
    status: 'Available',
    purchaseDate: '2023-03-10',
    notes: 'Standing desk - adjustable height'
  }
];

export const useInventoryStore = create<InventoryState>()(
  persist(
    (set) => ({
      equipment: initialEquipment,
      filters: {
        search: '',
        status: 'all',
        category: 'all'
      },
      addEquipment: (newEquipment) =>
        set((state) => ({
          equipment: [...state.equipment, { ...newEquipment, id: nanoid() }]
        })),
      updateEquipment: (id, updatedEquipment) =>
        set((state) => ({
          equipment: state.equipment.map((item) =>
            item.id === id ? { ...item, ...updatedEquipment } : item
          )
        })),
      deleteEquipment: (id) =>
        set((state) => ({
          equipment: state.equipment.filter((item) => item.id !== id)
        })),
      setFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters }
        }))
    }),
    {
      name: 'inventory-storage'
    }
  )
); 