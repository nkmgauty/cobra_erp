import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Admin_login from "../Admin_login";
import Login from "../Login";
import Staff_login from "../Staff_login";
import Registration from "../Registration";
import New_pass from "../New_pass";
import Mail_or_phone from "../Mail_or_phone";
import Admin_Dashboard from "../Dashboard/Admin/Admin_Dashboard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/admin" element={<Admin_login />} />
        <Route exact path="/staff" element={<Staff_login />} />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/newpass" element={<New_pass />} />
        <Route exact path="/mailorph" element={<Mail_or_phone />} />
        <Route exact path="/admindashboard" element={<Admin_Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
