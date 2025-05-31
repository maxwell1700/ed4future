import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Track selected role
  const [isRoleSelected, setIsRoleSelected] = useState(false); // Track if role is selected

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    console.log(`Logging in as ${role}:`, email, password);

    // Navigate to the appropriate dashboard based on role
    if (role === "teacher") {
      navigate("/dashboard");
    } else {
      navigate("/student-dashboard"); // Example route for student dashboard
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        {!isRoleSelected ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Select Your Role
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setRole("teacher");
                  setIsRoleSelected(true);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md"
              >
                Teacher
              </button>
              <button
                onClick={() => {
                  setRole("student");
                  setIsRoleSelected(true);
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md"
              >
                Student
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              {role === "teacher" ? "Teacher Login" : "Student Login"}
            </h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md"
              >
                Log In
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}

export default LoginPage;