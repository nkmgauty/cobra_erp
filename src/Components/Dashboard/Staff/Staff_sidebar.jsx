import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Admin_sidebar({ isOpen }) {
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [isUtilitiesOpen, setIsUtilitiesOpen] = useState(false);
  const [isReportsOpen, setIsReportsOpen] = useState(false);

  const toggleSalesDropdown = () => {
    setIsSalesOpen(!isSalesOpen);
    
  };

  const toggleUtilitiesDropdown = () => {
    setIsUtilitiesOpen(!isUtilitiesOpen)
    
  };

  const toggleReportsDropdown = () => {
    setIsReportsOpen(!isReportsOpen)
    
  };

 

  return (
    <div>
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gray-800 h-screen text-white transition-all duration-300`}
      >
        <div className="p-4">
          <h1
            className={`text-2xl font-bold transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Dashboard
          </h1>
          <ul className="mt-6">
            <li className="p-2 hover:bg-gray-700 rounded"><FontAwesomeIcon icon="fa-solid fa-house" />Home</li>
            <li className="p-2 hover:bg-gray-700 rounded"><FontAwesomeIcon icon="fa-solid fa-house" />Leads</li>
            <li className="p-2 hover:bg-gray-700 rounded">Customers</li>
            <li
              className="p-2 hover:bg-gray-700 rounded"
              onClick={toggleSalesDropdown}
            >
              Sales
              <span className="float-right">{isSalesOpen ? "▲" : "▼"}</span>
            </li>
            {isSalesOpen && (
              <ul className="pl-6 mt-2 space-y-2 text-sm">
                <li className="p-2 hover:bg-gray-600 rounded">Proposals</li>
                <li className="p-2 hover:bg-gray-600 rounded">Estimates</li>
                <li className="p-2 hover:bg-gray-600 rounded">Invoices</li>
                <li className="p-2 hover:bg-gray-600 rounded">Payments</li>
                <li className="p-2 hover:bg-gray-600 rounded">Credit Notes</li>
                <li className="p-2 hover:bg-gray-600 rounded">Items</li>
              </ul>
            )}
            <li className="p-2 hover:bg-gray-700 rounded">Tasks</li>
            <li className="p-2 hover:bg-gray-700 rounded">Support</li>
            <li className="p-2 hover:bg-gray-700 rounded">Knowledge Base</li>
            <li className="p-2 hover:bg-gray-700 rounded" onClick={toggleUtilitiesDropdown} >Utilities
            <span className="float-right">{isUtilitiesOpen ? "▲" : "▼"}</span>
            </li>
            {isUtilitiesOpen && (
              <ul className="pl-6 mt-2 space-y-2 text-sm">
                <li className="p-2 hover:bg-gray-600 rounded">Media</li>
                <li className="p-2 hover:bg-gray-600 rounded">Bulk PDF Export</li>
                <li className="p-2 hover:bg-gray-600 rounded">Calender</li>
                <li className="p-2 hover:bg-gray-600 rounded">Announcements</li>
                <li className="p-2 hover:bg-gray-600 rounded">Activity Log</li>
                <li className="p-2 hover:bg-gray-600 rounded">Ticket Pipe Log</li>
              </ul>
            )}
            <li className="p-2 hover:bg-gray-700 rounded" onClick={toggleReportsDropdown} >Reports
            <span className="float-right">{isUtilitiesOpen ? "▲" : "▼"}</span>
            </li>
            {isReportsOpen && (
              <ul className="pl-6 mt-2 space-y-2 text-sm">
                <li className="p-2 hover:bg-gray-600 rounded">Sales</li>
                <li className="p-2 hover:bg-gray-600 rounded">Expenses</li>
                <li className="p-2 hover:bg-gray-600 rounded">Expenses vs income</li>
                <li className="p-2 hover:bg-gray-600 rounded">Leads</li>
                <li className="p-2 hover:bg-gray-600 rounded">Timesheets Overview</li>
                <li className="p-2 hover:bg-gray-600 rounded">KB Articles</li>
              </ul>
            )}
            <li className="p-2 hover:bg-gray-700 rounded">Setup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admin_sidebar;
