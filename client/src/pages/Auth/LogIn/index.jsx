import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../../contexts/AuthContext";
import Loader from "../../../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = { username: "", password: "" };

export default function Login() {
  const { dispatch } = useAuthContext();
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    const { username, password } = state;

    if (!username || !password) {
      return toast.error("Please fill in all fields");
    }

    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_LINK}/auth/login`, { username, password })
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          toast.success("Login Successfull");
          setState(initialState);
          localStorage.setItem("bgjwt", data.token);
          dispatch({ type: "SET_LOGGED_IN", payload: { user: data.user } });
          navigate("/");
        }
      })
      .catch((err) => {
        const msg =
          err.response?.data?.message || err.message || "Login failed";
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
      <section className="bg-[#F2F4F6] min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-[850px] flex flex-col md:flex-row bg-white md:h-[550px] shadow-xl rounded-xl overflow-hidden">
          {/* Left Panel */}
          <div className="left flex flex-col items-center justify-center text-center p-8 md:w-1/2 w-full h-[300px] md:h-auto">
            <h1 className="text-white text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-white mb-6">Don't have an account?</p>
            <button
              className="reg-btn"
              type="submit"
              onClick={() => navigate("/auth/signup")}
            >
              Register
            </button>
          </div>

          {/* Right Panel */}
          <div className="right md:w-1/2 w-full flex justify-center items-center px-8 py-6">
            <div className="flex flex-col w-full max-w-[280px]">
              <h1 className="text-2xl font-semibold text-[var(--tog-color)] mb-6 text-center">
                Login
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

              <a
                href="#"
                className="text-sm text-[var(--secondary-color)] hover:underline mb-4"
              >
                Forgot Password?
              </a>

              <button
                type="submit"
                className="w-full bg-[var(--primary-color)] hover:bg-[var(--tog-color)] cursor-pointer text-white font-semibold py-2 rounded transition ease-linear"
                onClick={handleLogin}
              >
                Login
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
        </div>
      </section>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}
