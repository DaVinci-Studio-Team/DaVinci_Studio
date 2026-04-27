import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/images/DaVinci_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";

const Navbar = () => {
    const navigation = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const user = false;

    const links = [
        { name: "Home", path: "/" },
        { name: "History", path: "/history" },
        { name: "Explore", path: "/explore" },
        { name: "Dashboard", path: "/dashboard" },
    ];

    const hadleNav = () => {

    }

    return (
        <nav className="sticky top-0 z-50 border-b backdrop-blur-xl bg-black/30 border-white/10">
            <div className="flex items-center justify-between px-[24px] py-[16px] lg:mx-[120px] mx-auto max-w-7xl">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <div className="absolute inset-0 transition bg-purple-500 opacity-50 blur-xl group-hover:opacity-80 animate-pulse"></div>
                        <LuSparkles className='relative z-10 text-purple-500 w-7 h-7' />
                    </div>

                    <span className="text-xl font-bold text-transparent engagement-font bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text">
                        DaVinci Studio
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="items-center hidden gap-8 text-white md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="relative text-sm transition hover:text-purple-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="items-center hidden gap-3 font-semibold text-white md:flex">
                    {user ? (
                        <button onClick={() => navigation("/login")}
                            className="px-[16px] h-8 text-sm transition rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50">
                            Logout
                        </button>
                    ) : (
                        <>
                            <button onClick={() => navigation("/login")} className="px-[16px] h-8 text-sm rounded-lg hover:bg-white/10">
                                Login
                            </button>
                            <button onClick={() => navigation("/register")} className="px-[16px] h-8 text-sm rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                                Sign Up
                            </button>
                        </>
                    )}
                </div>

                {/* Hamburger */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-4 px-6 py-4 text-white bg-black/10">
                    {links.map((link) => (
                        <Link to={link.path} key={link.name} className="hover:text-purple-400" >
                            {link.name}
                        </Link>
                    ))}

                    <hr className="border-white/10" />

                    {user ? (
                        <button className="py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                            Logout
                        </button>
                    ) : (
                        <>
                            <button>Login</button>
                            <button className="py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;