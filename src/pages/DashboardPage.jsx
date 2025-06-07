import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

function DashboardPage() {
  const studentProgressData = [
    { name: "Week 1", progress: 70 },
    { name: "Week 2", progress: 80 },
    { name: "Week 3", progress: 90 },
    { name: "Week 4", progress: 95 },
  ];

  const attendanceData = [
    { name: "Monday", attendance: 90 },
    { name: "Tuesday", attendance: 85 },
    { name: "Wednesday", attendance: 95 },
    { name: "Thursday", attendance: 80 },
    { name: "Friday", attendance: 88 },
  ];

  const behaviorData = [
    { metric: "Engagement", score: 85 },
    { metric: "Participation", score: 90 },
    { metric: "Punctuality", score: 80 },
    { metric: "Discipline", score: 95 },
  ];

  const quizPerformanceData = [
    { name: "Excellent", value: 40 },
    { name: "Good", value: 30 },
    { name: "Average", value: 20 },
    { name: "Poor", value: 10 },
  ];

  const COLORS = ["#4CAF50", "#FFC107", "#2196F3", "#F44336"]; // Colors for quiz performance

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="bg-blue-500 text-white p-4 rounded-xl shadow mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Student Progress */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Student Progress</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={studentProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="progress"
                  stroke="#3B82F6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Student Attendance */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Student Attendance</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="attendance" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Student Behavior */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Student Behavior</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={behaviorData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Behavior"
                  dataKey="score"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Previous Quizzes */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Previous Quizzes</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={quizPerformanceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  label
                >
                  {quizPerformanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;