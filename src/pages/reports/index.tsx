import InventoryValueReport from '@/components/reports/InventoryValueReport';
import MaintenanceReport from '@/components/reports/MaintenanceReport';

const ReportsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reports</h1>
        <button 
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Export PDF
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <InventoryValueReport />
        <MaintenanceReport />
      </div>
    </div>
  );
};

export default ReportsPage; 