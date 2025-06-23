import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow-md p-4">
    <div className="max-w-5xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        My Blog
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-indigo-500">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-indigo-500">
          About
        </Link>
        <Link to="/posts" className="text-gray-700 hover:text-indigo-500">
        Posts
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
