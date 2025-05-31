import React from "react";
import Header from "./Header"; // Import Header component

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="ED4F App" /> {/* Common Header */}
      <main className="p-8">{children}</main> {/* Page-specific content */}
    </div>
  );
}

export default Layout;