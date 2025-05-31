import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './components/Layout'; // Import Layout component
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CreateLessonPage from './pages/CreateLessonPage';
import LessonPreviewPage from './pages/LessonPreviewPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login page without header */}
        <Route path="/" element={<LoginPage />} />

        {/* Pages wrapped with Layout */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <DashboardPage />
            </Layout>
          }
        />
        <Route
          path="/create-lesson"
          element={
            <Layout>
              <CreateLessonPage />
            </Layout>
          }
        />
        <Route
          path="/lesson-preview"
          element={
            <Layout>
              <LessonPreviewPage />
            </Layout>
          }
        />
        {/* Fallback route */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}