import { useMemo } from 'react';
import { useInventoryStore } from '@/store/inventory';
import { InventoryStatistics } from '@/types/statistics';

export const useInventoryStatistics = (): InventoryStatistics => {
  const { equipment } = useInventoryStore();

  return useMemo(() => {
    const stats: InventoryStatistics = {
      totalItems: equipment.length,
      availableItems: 0,
      inUseItems: 0,
      underMaintenanceItems: 0,
      retiredItems: 0,
      byCategory: {}
    };

    equipment.forEach((item) => {
      // Count by status
      switch (item.status) {
        case 'Available':
          stats.availableItems++;
          break;
        case 'In Use':
          stats.inUseItems++;
          break;
        case 'Under Maintenance':
          stats.underMaintenanceItems++;
          break;
        case 'Retired':
          stats.retiredItems++;
          break;
      }

      // Count by category
      stats.byCategory[item.category] = (stats.byCategory[item.category] || 0) + 1;
    });

    return stats;
  }, [equipment]);
}; 