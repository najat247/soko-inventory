import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardPage from '@/pages/dashboard';
import InventoryPage from '@/pages/inventory';
import AddEquipmentPage from '@/pages/inventory/add';
import EditEquipmentPage from '@/pages/inventory/edit/[id]';
import ReportsPage from '@/pages/reports';
import SettingsPage from '@/pages/settings';

const AppRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/add" element={<AddEquipmentPage />} />
        <Route path="/inventory/edit/:id" element={<EditEquipmentPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </DashboardLayout>
  );
};

export default AppRoutes; 