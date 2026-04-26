import React from "react";
import { FaLock } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-transparent rounded-3xl">
      
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
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full py-[12px] pl-[48px] pr-[16px] text-white transition-all border outline-none rounded-2xl border-white/10 bg-white/5 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40"
              />
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

        <button
          className="mt-8 w-full py-3 px-9 rounded-2xl font-semibold text-white 
          bg-gradient-to-r from-purple-700 to-pink-700
          shadow-[0_0_25px_rgba(236,72,153,0.2)] 
          hover:opacity-90 active:scale-[0.97] transition-all 
          flex items-center justify-center gap-2"
        >
          Sign In →
        </button>

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
    </div>
  );
};

export default LoginForm;