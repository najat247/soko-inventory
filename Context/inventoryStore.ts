import { create } from "zustand";
import { nanoid } from "nanoid";
import { Equipment } from "../Types";

interface InventoryState {
  equipment: Equipment[];
  addEquipment: (newEquipment: Equipment) => void;
}

export const useInventoryStore = create<InventoryState>((set) => ({
  equipment: [],
  addEquipment: (newEquipment) =>
    set((state) => ({
      equipment: [...state.equipment, { ...newEquipment, id: nanoid() }],
    })),
}));
