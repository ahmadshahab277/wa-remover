import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../../components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = { username: "", email: "", password: "" };

export default function SignUp() {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = () => {
    const { username, email, password } = state;

    if (!username || !email || !password) {
      return toast.error("Please fill in all fields");
    }
    
    if (username.trim().length < 3) {
      return toast.error("Username must be at least 3 characters long");
    }
    
    if (password.trim().length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }

    const newUserData = {
      username,
      email,
      password,
    };

    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_LINK}/auth/signup`, newUserData)
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          toast.success("User registered successfully");
          navigate("/auth/login");
        }
      })
      .catch((err) => {
        const msg =
          err.response?.data?.message || err.message || "Signup failed";
        console.error(msg);
        alert(msg);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section className="bg-[#F2F4F6] min-h-screen flex justify-center items-center">
        <div className="w-[850px] flex bg-white h-[550px] shadow-xl rounded-xl overflow-hidden">
          {/* Right Panel */}
          <div className="right w-1/2 flex justify-center items-center px-8 py-6">
            <div className="flex flex-col w-full max-w-[280px]">
              <h1 className="text-2xl font-semibold text-[var(--tog-color)] mb-6 text-center">
                SignUp
              </h1>

              <div className="mb-4 relative">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full px-4 py-2 border border-[var(--ter-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--tog-color)]"
                  onChange={handleChange}
                />
                <span className="material-symbols-outlined absolute right-3 top-2.5 text-[var(--secondary-color)]">
                  person
                </span>
              </div>
              <div className="mb-4 relative">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-[var(--ter-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--tog-color)]"
                  onChange={handleChange}
                />
                <span className="material-symbols-outlined absolute right-3 top-2.5 text-[var(--secondary-color)]">
                  mail
                </span>
              </div>

              <div className="mb-4 relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-[var(--ter-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--tog-color)]"
                  onChange={handleChange}
                />
                <span className="material-symbols-outlined absolute right-3 top-2.5 text-[var(--secondary-color)]">
                  lock
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--primary-color)] hover:bg-[var(--tog-color)] cursor-pointer text-white font-semibold py-2 rounded transition ease-linear"
                onClick={handleSignup}
              >
                SignUp
              </button>

              <p className="text-[#666] text-sm text-center mt-6 mb-3">
                or login with social platforms
              </p>

              <div className="flex justify-center gap-4 text-[var(--secondary-color)] text-lg">
                <a href="#">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Left Panel */}
          <div className="left-signup flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-white font-bold mb-2">Welcome</h1>
            <p className="text-white mb-6">
              Already have an account? Log in to continue.
            </p>
            <button
              className="reg-btn"
              type="submit"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </button>
          </div>
        </div>
      </section>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}
