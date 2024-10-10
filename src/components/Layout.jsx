import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AdminSidebar />
      <div className=" p-4 sm:ml-64">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout
