import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInventoryStore } from '@/store/inventory';
import { Equipment, EquipmentStatus, EquipmentCategory } from '@/types';

interface InventoryFormProps {
  initialData?: Equipment;
  isEditing?: boolean;
}

const InventoryForm = ({ initialData, isEditing = false }: InventoryFormProps) => {
  const navigate = useNavigate();
  const { addEquipment, updateEquipment } = useInventoryStore();

  const [formData, setFormData] = useState<Omit<Equipment, 'id'>>({
    name: initialData?.name || '',
    category: initialData?.category || 'Electronics',
    serialNumber: initialData?.serialNumber || '',
    status: initialData?.status || 'Available',
    assignedTo: initialData?.assignedTo || '',
    purchaseDate: initialData?.purchaseDate || '',
    lastMaintenance: initialData?.lastMaintenance || '',
    notes: initialData?.notes || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && initialData) {
      updateEquipment(initialData.id, formData);
    } else {
      addEquipment(formData);
    }
    navigate('/inventory');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value as EquipmentCategory })}
          >
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Tools">Tools</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Serial Number</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.serialNumber}
            onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as EquipmentStatus })}
          >
            <option value="Available">Available</option>
            <option value="In Use">In Use</option>
            <option value="Under Maintenance">Under Maintenance</option>
            <option value="Retired">Retired</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Assigned To</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.assignedTo}
            onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Purchase Date</label>
          <input
            type="date"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.purchaseDate}
            onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Maintenance</label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.lastMaintenance}
            onChange={(e) => setFormData({ ...formData, lastMaintenance: e.target.value })}
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => navigate('/inventory')}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          {isEditing ? 'Update Equipment' : 'Add Equipment'}
        </button>
      </div>
    </form>
  );
};

export default InventoryForm; 