import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Toaster from "./components/toast";
import Navbar from "./components/navbar";
import UserPage from "./pages/user";
import ErrorPage from "./pages/error";
import Discover from "./pages/discover";
import AddPost from "./pages/addPost";
import Profile from "./pages/profile";

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
          <Route path="/discover" element={<Discover />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
}
