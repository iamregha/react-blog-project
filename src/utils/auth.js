// src/utils/auth.js
export const isAuthenticated = () => {
  return !!localStorage.getItem("loggedInUser");
};

export const getLoggedInUser = () => {
  return JSON.parse(localStorage.getItem("loggedInUser"));
};

export const logout = () => {
  localStorage.removeItem("loggedInUser");
};
