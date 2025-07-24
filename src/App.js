import Posts from "./pages/Posts"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import NotFound from "./pages/NotFound";

function App() {
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
      </Routes>
    </Router>
  );
}

export default App;
