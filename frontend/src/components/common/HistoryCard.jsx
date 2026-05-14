import { Download, Trash2 } from "lucide-react";
import React from "react";

const HistoryCard = () => {
  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0B1020] transition-all
        shadow-[0_0_40px_rgba(0,0,0,0.35)] duration-300 hover:border-violet-400/30 hover:shadow-[0_0_50px_rgba(139,92,246,0.12)]"
    >
      <div className="overflow-hidden aspect-square">
        <img src="https://images.unsplash.com/photo-1656427868828-79a829b92b2b?w=1080&q=80" alt="history"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-3 text-left">
        <h3 className=" text-[14px] font-semibold leading-snug text-white line-clamp-2">
          Cyberpunk city at night with neon lights
        </h3>

        <p className="my-2 text-[12px] font-medium text-gray-400 ">
          5/14/2026
        </p>

        <div className="flex items-center gap-3">
          
          <button
            className="flex-1 h-9 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl 
            text-white font-medium flex items-center justify-center gap-2 transition-all duration-300
              hover:bg-white/[0.08] hover:border-violet-400/30"
          >
            <Download size={18} />
            Download
          </button>

          <button className="flex items-center justify-center text-red-400 transition-all duration-300 border w-11 h-9 rounded-2xl border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/40"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;