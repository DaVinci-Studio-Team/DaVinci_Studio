import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Spinner from "./Spinner";
import { loginUser } from "../../services/auth.service";

const LoginForm = () => {

  const navigate = useNavigate();

  const [ form, setForm ] = React.useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(false)
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const handleEye = (e) => {
    e.preventDefault();
    setEyeOpen(!eyeOpen);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser(form);
      navigate('/');

    } catch (err) {
      setError(err?.response?.data?.error)
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  const Invalid = !form.email || !form.password || !(form.password.length >= 8);

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center justify-center overflow-hidden bg-transparent rounded-3xl">
      
      <div className="w-[448px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 lg:p-9 shadow-[0_0_40px_rgba(139,92,246,0.25)] text-white">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-3xl">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to continue to DaVinci Studio
          </p>
        </div>

        <div className="space-y-6">

          {/* Email */}
          <div>
            <label className="block pl-3 mb-2 text-xs font-semibold text-left text-gray-300">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 flex items-center text-gray-400 left-4">
                <CiMail className="w-5 h-5" />
              </span>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full py-[12px] pl-[48px] pr-[16px] text-white transition-all border outline-none rounded-2xl border-white/10 bg-white/5 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40"
                value={form.email}
                onChange={handleChange}
                name="email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block pl-3 text-xs font-semibold text-left text-gray-300">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-xs text-purple-400 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 flex items-center text-gray-400 left-4">
                <FaLock className="w-4 h-4" />
              </span>
              <input type={eyeOpen ? "text" : "password"} placeholder="Use 8-16 characters" value={form.password} name="password"
                onChange={handleChange} required minLength={8} maxLength={16}
                className="w-full py-[10px] pl-[48px] pr-[16px] text-white text-[16px] transition-all border outline-none rounded-2xl border-white/10 bg-white/5 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40"
              />
              <button onClick={handleEye} className="absolute inset-y-0 flex items-center text-gray-400 right-4">
                {eyeOpen ? <IoEye className="w-4 h-4 cursor-pointer" /> : <IoEyeOff className="w-4 h-4 cursor-pointer" />}
              </button>
            </div>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center mt-6 space-x-3">
          <input
            type="checkbox"
            className="w-4 h-4 text-purple-500 rounded border-white/20 bg-white/5 focus:ring-purple-500"
          />
          <p className="text-xs text-gray-400">
            Remember me
          </p>
        </div>

        {error && <p className="mt-4 text-xs text-center text-red-500">{error}</p>}

        {<button
          type="submit"
          disabled={Invalid || loading}
          className={`mt-8 w-full py-3 px-9 rounded-2xl font-semibold text-white 
            bg-gradient-to-r from-purple-700 to-pink-700 
            shadow-[0_0_25px_rgba(236,72,153,0.2)] 
            transition-all flex items-center justify-center gap-2
            hover:opacity-90 active:scale-[0.97]
            disabled:opacity-40 
            disabled:cursor-not-allowed 
            disabled:shadow-none 
            `}
        >
          {loading ? <>Signing In <Spinner /></> : "Sign In →"}
        </button>}

        <p className="mt-8 text-xs text-center text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-400 cursor-pointer hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;