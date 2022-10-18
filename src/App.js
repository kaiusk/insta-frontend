import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Toaster from "./components/toast";
import Navbar from "./components/navbar";
import UserPage from "./pages/user";
import ErrorPage from "./pages/error";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Toaster></Toaster>
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:id" element={<UserPage />} />
          {/*
          <Route path="/register" element={<RegisterScreen />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/user-profile" element={<ProfileScreen />} />
          </Route>
          */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
}
