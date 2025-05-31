import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ title }) {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">{title}</h1>
      <nav className="flex gap-4">
        <button onClick={() => navigate("/dashboard")} className="hover:underline">
          Dashboard
        </button>
        <button onClick={() => navigate("/create-lesson")} className="hover:underline">
          Create Lesson
        </button>
        <button onClick={() => navigate("/")} className="hover:underline">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;