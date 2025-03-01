import { useInventoryStore } from '@/store/inventory';
import { EquipmentStatus, EquipmentCategory } from '@/types';

const InventoryFilters = () => {
  const { filters, setFilters } = useInventoryStore();

  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Search equipment..."
        className="px-4 py-2 border rounded-lg"
        value={filters.search}
        onChange={(e) => setFilters({ search: e.target.value })}
      />
      
      <select
        className="px-4 py-2 border rounded-lg"
        value={filters.status}
        onChange={(e) => setFilters({ status: e.target.value as EquipmentStatus | 'all' })}
      >
        <option value="all">All Status</option>
        <option value="Available">Available</option>
        <option value="In Use">In Use</option>
        <option value="Under Maintenance">Under Maintenance</option>
        <option value="Retired">Retired</option>
      </select>

      <select
        className="px-4 py-2 border rounded-lg"
        value={filters.category}
        onChange={(e) => setFilters({ category: e.target.value as EquipmentCategory | 'all' })}
      >
        <option value="all">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Tools">Tools</option>
        <option value="Vehicles">Vehicles</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default InventoryFilters; 