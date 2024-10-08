/** @format */

import React from 'react';
import DashboardSidebar from './_components/DashboardSidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=''>
      <DashboardSidebar />
      <div className='max-w-5xl mx-auto'>{children}</div>
    </div>
  );
};

export default DashboardLayout;
