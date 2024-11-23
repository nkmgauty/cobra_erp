import React, { useEffect, useState } from "react";

function Admin_main() {
  return (
    <div>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">
          Dashboard Overview
        </h2>
        <div className="grid grid-cols-4 gap-2 p-2">
          <div className="bg-white p-4 rounded shadow-md ">
            <h3>Invoices Awaiting Payment 0 / 0</h3>

            <h3>Invoices Awaiting Payment 0 / 0</h3>
          </div>
          <div>
            <h3>Invoices Awaiting Payment 0 / 0</h3>
          </div>
          <div>
            <h3>Invoices Awaiting Payment 0 / 0</h3>
          </div>
        </div>
        <div className="grid grid-cols-[60%_40%] gap-6">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold">Invoices Awaiting Payment</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3">
                <p>test1</p>
              </div>
              <div className="p-3">
                <p>test2</p>
              </div>
              <div className="p-3">
                <p>test3</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold">Converted Leads</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_main;
