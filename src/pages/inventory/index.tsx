import InventoryTable from '@/components/inventory/InventoryTable';
import InventoryFilters from '@/components/inventory/InventoryFilters';
import { Link } from 'react-router-dom';

const InventoryPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <Link
          to="/inventory/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Equipment
        </Link>
      </div>
      
      <InventoryFilters />
      <InventoryTable />
    </div>
  );
};

export default InventoryPage; 