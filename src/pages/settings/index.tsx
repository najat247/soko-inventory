import GeneralSettings from '@/components/settings/GeneralSettings';

const SettingsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="max-w-3xl">
        <GeneralSettings />
      </div>
    </div>
  );
};

export default SettingsPage; 