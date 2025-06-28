import React from "react";
import "./logout.css";
import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Example logout logic
    localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <motion.div
      className="logout-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logout-card">
        <LogOut className="logout-icon" size={40} />
        <h2 className="logout-title">Are you sure you want to log out?</h2>
        <p className="logout-subtext">You’ll be returned to the login screen.</p>
        <div className="logout-actions">
          <button className="cancel-btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Logout;
