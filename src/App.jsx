import React from 'react'
import AdminDashBoardPage from './pages/AdminDashboardPage';

// import { Router } from 'lucide-react';
// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileDetailsForm from './pages/ProfileDetailForm';
import Navbar from './widget/NavBar';
import ProfileListViewPage from './pages/ProfileListViewPage';
import AdminDashBoard from './pages/Admin';

const App=()=> {
  return (
    <>
      {/* <AdminDashBoardPage/> */}
      {/* <ProfileListViewPage/> */}
      <Router>
        {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<ProfileListViewPage/>} />
        <Route path="/admin" element={<AdminDashBoardPage />} />
        <Route path="/form" element={<ProfileDetailsForm />} />
        <Route path="/admin1" element={<AdminDashBoard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;