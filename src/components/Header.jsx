import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ title, logo }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/"); // Redirect to login page
  };

  return (
    <header className="bg-blue-500 text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        {logo && <img src={logo} alt="Logo" className="h-10" />} {/* Display the logo */}
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <nav className="flex items-center gap-4 relative">
        <button onClick={() => navigate("/dashboard")} className="hover:underline">
          Home
        </button>
        <button onClick={() => navigate("/create-lesson")} className="hover:underline">
          Create Lesson
        </button>

        {/* User Profile Section */}
        <div className="relative">
        <img
  src="https://randomuser.me/api/portraits/men/1.jpg" // Example profile image
  alt="User Profile"
  className="h-10 w-10 rounded-full cursor-pointer"
  onClick={handleProfileClick}
/>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <button
                onClick={() => navigate("/profile")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </button>
              <button
                onClick={() => navigate("/settings")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Settings
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;