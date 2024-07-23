import { Route } from 'react-router-dom';

import Dashboard from '@/pages/admin/dashboard';
import User from '@/pages/admin/users';
import ManageHomePage from '@/pages/admin/manage-home-section';
import KelasIndex from '@/pages/admin/kelas';

export const adminRoutes = [
  <Route path="/dashboard" element={<Dashboard />} />,
  <Route path="/manage-user" element={<User />} />,
  <Route path="/manage-kelas" element={<KelasIndex />} />,
  <Route path="/manage-home-section" element={<ManageHomePage />} />,
];
