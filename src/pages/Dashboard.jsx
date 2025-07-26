import React, { useState, useEffect } from "react";
import { getLoggedInUser, logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = getLoggedInUser();
    if (user) {
      setUsername(user.username);
      setBio(user.bio || "");
    }
  }, []);

  const handleSaveBio = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((u) =>
      u.username === username ? { ...u, bio } : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedInUser", JSON.stringify({ username, bio }));
    alert("Bio updated!");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Welcome, {username}!</h2>
        <button
          onClick={handleLogout}
          className="text-red-600 hover:underline text-sm"
        >
          Logout
        </button>
      </div>

      <label className="block text-sm font-semibold mb-2">Your Bio:</label>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        rows={5}
        cols={50}
        className="w-full border rounded px-3 py-2"
      />
      <button
        onClick={handleSaveBio}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Save Bio
      </button>
    </div>
  );
};

export default Dashboard;
