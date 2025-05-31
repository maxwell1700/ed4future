import React from "react";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts";

function DashboardPage() {
  const navigate = useNavigate();

  const studentProgressData = [
    { name: "Week 1", progress: 70 },
    { name: "Week 2", progress: 75 },
    { name: "Week 3", progress: 80 },
    { name: "Week 4", progress: 85 },
  ]; // Example data, replace with dynamic data if needed

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 border-r hidden md:block">
        <h2 className="text-xl font-bold mb-8">ED4F</h2>
        <nav className="flex flex-col gap-4 text-gray-700">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-left hover:text-primary"
            aria-label="Navigate to Dashboard"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="text-left hover:text-primary"
            aria-label="Navigate to Profile"
          >
            Profile
          </button>
          <button
            onClick={() => navigate("/settings")}
            className="text-left hover:text-primary"
            aria-label="Navigate to Settings"
          >
            Settings
          </button>
          <button
            onClick={() => navigate("/")}
            className="mt-8 text-left text-red-500 hover:text-red-700"
            aria-label="Logout"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome, Teacher</h1>
            <p className="text-muted text-sm">Here’s what’s happening today.</p>
          </div>
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="Teacher's avatar"
            className="w-10 h-10 rounded-full"
          />
        </header>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate("/create-lesson")}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
            aria-label="Create a new lesson"
          >
            + Create Lesson
          </button>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Past Lessons</h3>
            <ul className="text-sm text-muted">
              <li>Water Cycle - May 25</li>
              <li>Plant Life - May 20</li>
              <li>Weather Patterns - May 15</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Upcoming Activities</h3>
            <p className="text-sm text-muted">Quiz on Friday</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Student Progress</h3>
            <div className="h-48">
              {studentProgressData && studentProgressData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={studentProgressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="progress" stroke="#3B82F6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-sm text-muted">No progress data available.</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;