import React from "react";
import Header from "./Header"; // Import Header component
import Logo from "../Assets/Logo ED4FUTURE.png"; // Import the logo image

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="" logo={Logo} /> {/* Pass the logo as a prop */}
      <main className="p-8">{children}</main> {/* Page-specific content */}
    </div>
  );
}

export default Layout;