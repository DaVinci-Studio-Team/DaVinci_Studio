import React from "react";
import { Search, SlidersHorizontal, CalendarDays } from "lucide-react";

const HistoryFilter = () => {
    return (
        <div className="flex flex-col gap-4 mb-10 md:flex-row md:items-center max-h-[50px]">

            {/* Search Box */}
            <div className="relative flex-1">
                <Search size={20} className="absolute text-gray-400 -translate-y-1/2 left-5 top-1/2" />
                <input type="text" placeholder="Search by prompt..."
                    className="w-full h-[50px] rounded-2xl border border-white/10 bg-white/[0.04]
                    backdrop-blur-xl pl-14 pr-5 text-white placeholder:text-gray-400 shadow-[0_0_20px_rgba(255,255,255,0.03)]
                    transition-all duration-300 focus:outline-none focus:border-violet-400/50 focus:bg-white/[0.06]"
                />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">

                <button
                    className="flex items-center gap-2 h-[50px] px-7 rounded-2xl border border-white/10
                    bg-white/[0.04] backdrop-blur-xl text-white transition-all duration-300
                    hover:border-violet-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                >
                    <SlidersHorizontal size={18} />
                    <span className="font-medium">Filter</span>
                </button>

                <button
                    className="flex items-center gap-2 h-[50px] px-7 rounded-2xl border border-white/10
                    bg-white/[0.04] backdrop-blur-xl text-white transition-all duration-300
                    hover:border-violet-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                >
                    <CalendarDays size={18} />
                    <span className="font-medium">Date</span>
                </button>
            </div>
        </div>
    );
};

export default HistoryFilter;