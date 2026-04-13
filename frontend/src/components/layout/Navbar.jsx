import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/images/DaVinci_Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 text-white bg-gray-900 border-gray-700 shadow-md rounded-b-2xl">
            <div className="flex items-center justify-between px-2 py-3 mx-auto max-w-7xl">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} alt="DaVinci Logo" className="inline-block w-10 h-10 mr-2" />
                    </Link>
                    <h1 className="m-0 text-2xl font-bold">DaVinci Studio</h1>
                </div>

                {/* Desktop Menu list */}
                <ul className="hidden gap-6 md:flex">
                    <li className="cursor-pointer hover:text-gray-300">Home</li>
                    <li className="cursor-pointer hover:text-gray-300">About</li>
                    <li className="cursor-pointer hover:text-gray-300">Contact</li>
                </ul>

                {/* Hamburger Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu list */}
            {isOpen && (
                <ul className="flex flex-col gap-4 px-4 pb-4 md:hidden">
                    <li className="cursor-pointer hover:text-gray-300">Home</li>
                    <li className="cursor-pointer hover:text-gray-300">About</li>
                    <li className="cursor-pointer hover:text-gray-300">Contact</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;