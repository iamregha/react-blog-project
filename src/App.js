import { useEffect } from "react";
import Posts from "./pages/Posts"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  useEffect(() => {
  const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
  if (existingUsers.length === 0) {
    const defaultUsers = [
      { username: "regha", password: "pass123", bio: "Regha's blog" },
      { username: "admin", password: "admin", bio: "I am admin" },
    ];
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
}, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:slug" element={<PostDetail />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:slug/edit" element={<EditPost />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
