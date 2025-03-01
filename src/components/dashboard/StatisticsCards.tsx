import { 
  Box, 
  CheckCircle, 
  Users, 
  AlertTriangle,
  Archive
} from 'lucide-react';
import { useInventoryStatistics } from '@/hooks/useInventoryStatistics';

const StatisticsCards = () => {
  const stats = useInventoryStatistics();

  const cards = [
    {
      title: 'Total Equipment',
      value: stats.totalItems,
      icon: Box,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Available',
      value: stats.availableItems,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'In Use',
      value: stats.inUseItems,
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Under Maintenance',
      value: stats.underMaintenanceItems,
      icon: AlertTriangle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Retired',
      value: stats.retiredItems,
      icon: Archive,
      color: 'text-gray-600',
      bgColor: 'bg-gray-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      {cards.map((card) => (
        <div key={card.title} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`${card.bgColor} p-3 rounded-lg`}>
              <card.icon className={`w-6 h-6 ${card.color}`} />
            </div>
            <span className="text-2xl font-bold">{card.value}</span>
          </div>
          <h3 className="text-gray-600 text-sm">{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards; 