import React from "react";
import Login from "./pages/login";
import Toaster from "./components/toast";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Toaster></Toaster>
      <div className="container">
        <Login></Login>
      </div>
    </div>
  );
}
