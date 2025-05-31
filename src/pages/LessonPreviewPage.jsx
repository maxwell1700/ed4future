import React from "react";
import { useNavigate } from "react-router-dom";
import AutorenewIcon from '@mui/icons-material/Autorenew';

function LessonPreviewPage() {
  const navigate = useNavigate();

  const handleConfirmAndSave = () => {
    // Simulate saving the lesson (e.g., API call)
    console.log("Lesson confirmed and saved.");
    navigate("/dashboard"); // Navigate to the dashboard
  };

  const handleBackToEditor = () => {
    navigate("/create-lesson"); // Navigate back to the Create Lesson page
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-6 relative">
      <h1 className="text-xl font-semibold text-gray-700 mb-2">AI Lesson Preview</h1>

      <div className="bg-blue-900 text-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold">Water Cycle Lesson</h2>
        <p className="text-sm">Grade 5 | Science | 45 minutes</p>
      </div>

      <section className="bg-white p-6 rounded-xl shadow space-y-2">
        <h3 className="text-lg font-semibold">Learning Objectives</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Identify and describe the different stages of the water cycle</li>
          <li>Understand how water changes states during the water cycle</li>
          <li>Explain the importance of the water cycle to Earth’s ecosystems</li>
          <li>Create a simple model demonstrating the water cycle</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl shadow space-y-2">
        <h3 className="text-lg font-semibold">Lesson Overview</h3>
        <p className="text-sm text-gray-700">
          This interactive lesson introduces students to the water cycle through a combination of visual aids,
          discussions, and hands-on activities. Students will learn about evaporation, condensation, precipitation, and
          collection while engaging with our Water Avatar guide.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {["Evaporation", "Condensation", "Precipitation", "Collection", "Water Vapor", "Clouds"].map((term) => (
            <span key={term} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
              {term}
            </span>
          ))}
        </div>
      </section>

  {/* Bottom Left Buttons */}
  <div className="absolute bottom-8 left-8 flex gap-4">
        <button
          onClick={handleBackToEditor}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
        >
          Back to Editor
        </button>
        <button
  onClick={() => console.log("Regenerating lesson content...")}
  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md flex items-center gap-2"
>
  Regenerate <AutorenewIcon />
</button>
      </div>

      {/* Bottom Right Button */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={handleConfirmAndSave}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Launch Lesson
        </button>
      </div>
    </div>
  );
}

export default LessonPreviewPage;