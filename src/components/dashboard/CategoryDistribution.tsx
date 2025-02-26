import { useInventoryStatistics } from '@/hooks/useInventoryStatistics';

const CategoryDistribution = () => {
  const { byCategory } = useInventoryStatistics();
  const categories = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);

  const getPercentage = (value: number) => {
    const total = Object.values(byCategory).reduce((sum, curr) => sum + curr, 0);
    return ((value / total) * 100).toFixed(1);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Category Distribution</h2>
      <div className="space-y-4">
        {categories.map(([category, count]) => (
          <div key={category}>
            <div className="flex justify-between text-sm mb-1">
              <span>{category}</span>
              <span className="text-gray-600">{count} items ({getPercentage(count)}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${getPercentage(count)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDistribution; 