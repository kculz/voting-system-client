import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AdminProtectedRoute = () => {
  const { admin } = useSelector((state) => state.adminAuth);

  return admin ? (
    <Outlet />
  ) : (
    <Navigate to='/admin-login' replace />
  );
};

export default AdminProtectedRoute;