import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const ExploreFilter = () => {
    const categories = [
        "Cyberpunk aesthetics",
        "Fantasy landscapes",
        "Abstract art",
        "Photorealistic portraits",
        "Anime characters",
        "Sci-fi scenes",
    ];

    return (
        <div className="relative p-7 mb-10 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden
                        bg-gradient-to-r from-[#0B0618] via-[#0F1B3A] to-[#12061F] shadow-[0_0_40px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_60%)] pointer-events-none" />

            <div className="relative flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center">
                    <FaArrowTrendUp className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="font-semibold text-white text-md">
                    Trending Prompts
                </h2>
            </div>

            <div className="relative flex flex-wrap gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        className=" px-[20px] py-[10px] text-sm font-medium text-gray-200 rounded-2xl border border-white/10 bg-white/[0.06] 
                        backdrop-blur-md hover:border-purple-400/40 hover:bg-white/[0.08] transition-allduration-300shadow-sm"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ExploreFilter;