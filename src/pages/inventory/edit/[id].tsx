import { useParams } from 'react-router-dom';
import { useInventoryStore } from '@/store/inventory';
import InventoryForm from '@/components/inventory/InventoryForm';

const EditEquipmentPage = () => {
  const { id } = useParams<{ id: string }>();
  const { equipment } = useInventoryStore();
  const equipmentItem = equipment.find(item => item.id === id);

  if (!equipmentItem) {
    return <div>Equipment not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Equipment</h1>
      <InventoryForm initialData={equipmentItem} isEditing />
    </div>
  );
};

export default EditEquipmentPage; 