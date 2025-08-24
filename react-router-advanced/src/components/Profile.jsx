import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🚀 Advanced React Router Demo</h1>

      {/* Navigation */}
      <nav className="space-x-4 mb-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* ✅ Protected Route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile/*" element={<Profile />} />
        </Route>

        {/* ✅ Dynamic Route */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
["ProfileDetails", "ProfileSettings"]