import React from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";

const LoginRequiredModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = () => {
    onClose();
    navigate("/login");
  };

  const handleSignup = () => {
    onClose();
    navigate("/register");
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="relative w-full max-w-md transform transition-all duration-300 animate-in fade-in zoom-in">
          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_25_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-br from-purple-500/10 to-pink-500/10" />

            <div className="relative z-10 p-8 text-center">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-300 transition-colors rounded-full hover:bg-white/10 hover:text-white"
                aria-label="Close modal"
              >
                <IoClose className="w-6 h-6" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-purple-500/20 border border-purple-500/30">
                  <FaLock className="w-8 h-8 text-purple-400" />
                </div>
              </div>

              <h2 className="mb-3 text-2xl font-bold text-white">
                Generate More Images
              </h2>

              <p className="mb-8 text-gray-300 text-sm leading-relaxed">
                You've reached your guest image generation limit. Sign in or create
                an account to unlock unlimited image generation and save your creations.
              </p>

              <div className="mb-8 space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  <span>Unlimited image generation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  <span>Save to your gallery</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  <span>Access full history</span>
                </div>
              </div>


              <div className="flex flex-col gap-3">
                <button
                  onClick={handleLogin}
                  className="w-full py-3 font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-[0_10_30px_rgba(139,92,246,0.3)] hover:shadow-[0_15_40px_rgba(139,92,246,0.4)] active:scale-95"
                >
                  Sign In
                </button>

                <button
                  onClick={handleSignup}
                  className="w-full py-3 font-semibold text-white transition-all duration-200 border rounded-lg border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30"
                >
                  Create Account
                </button>
              </div>

              <p className="mt-6 text-xs text-gray-400">
                Already have an account?{" "}
                <button
                  onClick={handleLogin}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  Sign in here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRequiredModal;
