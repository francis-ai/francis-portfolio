// AdminApp.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './admin/pages/Login'; 

export default function AdminApp() {

  return (
    <Routes>
      {/* Admin Login */}
      <Route path="login" element={<AdminLogin />} />

    </Routes>
  );
}
