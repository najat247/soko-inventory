import { useMemo } from 'react';
import { useInventoryStore } from '@/store/inventory';

const MaintenanceReport = () => {
  const { equipment } = useInventoryStore();

  const maintenanceData = useMemo(() => {
    const needsMaintenance = equipment.filter(
      item => item.status === 'Under Maintenance'
    );

    const upcomingMaintenance = equipment.filter(item => {
      if (!item.lastMaintenance) return false;
      const lastDate = new Date(item.lastMaintenance);
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      return lastDate < threeMonthsAgo;
    });

    return { needsMaintenance, upcomingMaintenance };
  }, [equipment]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Maintenance Report</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-md font-medium mb-2">Currently Under Maintenance ({maintenanceData.needsMaintenance.length})</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            {maintenanceData.needsMaintenance.length > 0 ? (
              <ul className="space-y-2">
                {maintenanceData.needsMaintenance.map(item => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-gray-500">{item.serialNumber}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No equipment currently under maintenance</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-md font-medium mb-2">Needs Maintenance ({maintenanceData.upcomingMaintenance.length})</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            {maintenanceData.upcomingMaintenance.length > 0 ? (
              <ul className="space-y-2">
                {maintenanceData.upcomingMaintenance.map(item => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-gray-500">Last: {item.lastMaintenance}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No equipment needs maintenance</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceReport; 