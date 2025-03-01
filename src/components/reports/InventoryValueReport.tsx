import { useMemo } from 'react';
import { useInventoryStore } from '@/store/inventory';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const InventoryValueReport = () => {
  const { equipment } = useInventoryStore();

  const data = useMemo(() => {
    const categoryValues = equipment.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoryValues).map(([category, count]) => ({
      category,
      count
    }));
  }, [equipment]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Equipment by Category</h2>
      <div className="w-full overflow-x-auto">
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#3B82F6" />
        </BarChart>
      </div>
    </div>
  );
};

export default InventoryValueReport; 