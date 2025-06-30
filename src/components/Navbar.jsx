import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-indigo-700")}>
          About
        </NavLink>
        <NavLink to="/posts" className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-indigo-700")}>
          Posts
        </NavLink>
        <Link to="/create" className="text-gray-700 hover:text-indigo-500">
          Create
        </Link>

      </div>
    </div>
  </nav>
);

export default Navbar;
