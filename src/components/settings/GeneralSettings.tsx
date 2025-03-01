import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface GeneralSettings {
  companyName: string;
  maintenanceInterval: number;
  lowStockThreshold: number;
  enableNotifications: boolean;
}

const GeneralSettings = () => {
  const [settings, setSettings] = useState<GeneralSettings>({
    companyName: 'Soko Inventory',
    maintenanceInterval: 90,
    lowStockThreshold: 5,
    enableNotifications: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save settings logic here
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulated API call
      toast.success('Settings saved successfully');
    } catch (error) {
      toast.error('Failed to save settings');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">General Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            value={settings.companyName}
            onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Maintenance Interval (days)
          </label>
          <input
            type="number"
            value={settings.maintenanceInterval}
            onChange={(e) => setSettings({ ...settings, maintenanceInterval: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Low Stock Threshold
          </label>
          <input
            type="number"
            value={settings.lowStockThreshold}
            onChange={(e) => setSettings({ ...settings, lowStockThreshold: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="notifications"
            checked={settings.enableNotifications}
            onChange={(e) => setSettings({ ...settings, enableNotifications: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="notifications" className="ml-2 block text-sm text-gray-900">
            Enable Notifications
          </label>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralSettings; 