import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { registerUser } from "../../services/auth.service";

const RegisterForm = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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
      const res = await registerUser(form)
      navigate('/')
    } catch (err) {
      setError(err?.response?.data?.error)
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  const Invalid = !check || !form.name || !form.email || !(form.password.length >= 8);

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center justify-center overflow-hidden bg-transparent rounded-3xl">


      <div className="w-[448px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 lg:p-9  shadow-[0_0_40px_rgba(139,92,246,0.25)] text-white">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-3xl">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Join thousands of creators on DaVinci Studio
          </p>
        </div>


        <div className="space-y-6">
          <div>
            <label className="block pl-3 mb-2 text-xs font-semibold text-left text-gray-300">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 flex items-center text-gray-400 left-4">
                <FaUser className="w-4 h-4" />
              </span>
              <input type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required name="name"
                className="w-full py-[10px] pl-[48px] pr-[16px] text-white text-[16px] transition-all border outline-none rounded-2xl border-white/10 bg-white/5 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40"
              />
            </div>
          </div>

          <div>
            <label className="block pl-3 mb-2 text-xs font-semibold text-left text-gray-300">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 flex items-center text-gray-400 left-4">
                <CiMail className="w-5 h-5" />
              </span>
              <input type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} name="email" required
                className="w-full py-[10px] pl-[48px] pr-[16px] text-white text-[16px] transition-all border outline-none rounded-2xl border-white/10 bg-white/5 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40"
              />
            </div>
          </div>

          <div>
            <label className="block pl-3 mb-2 text-xs font-semibold text-left text-gray-300">
              Password
            </label>
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

        <div className="flex items-end mt-6 space-x-3">
          <input checked={check}
            onChange={() => setCheck(!check)}
            type="checkbox"
            className="w-4 h-4 mt-1 text-purple-500 rounded border-white/20 bg-white/5 focus:ring-purple-500"
          />
          <p className="text-xs text-gray-400">
            I agree to the{" "}
            <Link to="/terms-and-conditions" className="text-purple-400 underline cursor-pointer">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policy" className="text-purple-400 underline cursor-pointer">
              Privacy Policy
            </Link>
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
          {loading ? <>Creating <Spinner /></> : "Create Account →"}
        </button>}

        <p className="mt-8 text-xs text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 cursor-pointer hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;