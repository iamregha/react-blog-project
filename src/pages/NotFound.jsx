// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h1>
      <p className="text-lg mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
