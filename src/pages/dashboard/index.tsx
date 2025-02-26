import { Link } from 'react-router-dom';
import { BoxesIcon, ClipboardList, Settings } from 'lucide-react';
import StatisticsCards from '@/components/dashboard/StatisticsCards';
import CategoryDistribution from '@/components/dashboard/CategoryDistribution';

const DashboardPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <StatisticsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CategoryDistribution />
        </div>

        <div className="space-y-4">
          <Link
            to="/inventory"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <BoxesIcon className="w-8 h-8 mb-3 text-blue-600" />
            <h2 className="text-lg font-semibold">Inventory</h2>
            <p className="text-gray-600">Manage your equipment inventory</p>
          </Link>

          <Link
            to="/reports"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <ClipboardList className="w-8 h-8 mb-3 text-green-600" />
            <h2 className="text-lg font-semibold">Reports</h2>
            <p className="text-gray-600">View inventory reports and analytics</p>
          </Link>

          <Link
            to="/settings"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <Settings className="w-8 h-8 mb-3 text-purple-600" />
            <h2 className="text-lg font-semibold">Settings</h2>
            <p className="text-gray-600">Configure system settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 