import React, { useState } from 'react'
import Admin_sidebar from './Admin_sidebar';
import Admin_header from './Admin_header';
import Admin_main from './Admin_main';





function Admin_Dashboard() {

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };

  return (
    <>
    <div className="flex h-screen">
      <Admin_sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Admin_header toggleSidebar={toggleSidebar} />
        <Admin_main />
      </div>
    </div>
    
    
    </>
  )
}

export default Admin_Dashboard