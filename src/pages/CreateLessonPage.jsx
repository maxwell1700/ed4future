import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateLessonPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [useAIMode, setUseAIMode] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [aiMode, setAiMode] = useState("Teaching Assistant Mode"); // Default AI mode

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || (!content && !useAIMode)) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulate saving the lesson (e.g., API call)
    console.log("Lesson created:", { title, description, content, aiInput, aiMode });

    // Navigate to the lesson preview page after submission
    navigate("/lesson-preview");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create a New Lesson
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Lesson Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter lesson title"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter lesson description"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          {!useAIMode && (
            <div className="mb-6">
              <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                Lesson Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter lesson content"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
          )}

          {/* AI Mode Toggle */}
          <div className="flex items-center justify-between border p-4 rounded-lg bg-gray-50 mb-6">
            <label className="text-sm font-medium text-gray-700">Use AI Co-Teach Mode</label>
            <button
              type="button"
              onClick={() => setUseAIMode(!useAIMode)}
              className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition ${
                useAIMode ? "bg-blue-500" : ""
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform ${
                  useAIMode ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          {/* Conditional AI Input Panel */}
          {useAIMode && (
            <div className="mb-6">
              <label htmlFor="aiMode" className="block text-gray-700 font-medium mb-2">
                AI Generation Mode
              </label>
              <select
                id="aiMode"
                value={aiMode}
                onChange={(e) => setAiMode(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Teaching Assistant Mode">Teaching Assistant Mode</option>
                <option value="Interactive Video Generator">Interactive Video Generator</option>
                <option value="Interactive Quiz">Interactive Quiz</option>
              </select>
              <textarea
                id="aiInput"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder={`Describe your lesson for ${aiMode}...`}
                rows={4}
                className="w-full p-3 border border-blue-300 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-primary mt-4"
              ></textarea>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md"
          >
            Preview Lesson
          </button>
        </form>
      </div>
    </main>
  );
}

export default CreateLessonPage;