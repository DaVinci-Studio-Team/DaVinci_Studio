import { Link } from "react-router-dom";
import Logo from "../../assets/images/DaVinci_Logo.png";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-10 text-white bg-gray-900 border-t border-gray-700">
            <div className="grid grid-cols-1 gap-8 px-6 py-10 mx-auto max-w-7xl md:grid-cols-3 lg:grid-cols-5">
                <div className="col-span-2">
                    <div className="flex items-center gap-2 mb-3">
                        <img src={Logo} alt="DaVinci Logo" className="w-10 h-10" />
                        <h2 className="text-xl font-bold">DaVinci Studio</h2>
                    </div>
                    <p className="text-sm text-gray-400 text-start">
                        From concept to creation, we turn your imagination into visually captivating experiences with DaVinci Studio
                    </p>
                </div>

                <div>
                    <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link to="/" className="hover:text-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center md:flex lg:flex">
                    <h3 className="mb-3 text-lg font-semibold">Connect with Us</h3>
                    <ul className="space-y-2 text-gray-400 text-start">
                        <li>
                            <FaInstagram className="inline-block mr-2 text-pink-500" />
                            <Link to="/instagram" className="hover:text-white">Instagram</Link>
                        </li>
                        <li>
                            <FaFacebook className="inline-block mr-2 text-blue-600" />
                            <Link to="/facebook" className="hover:text-white">Facebook</Link>
                        </li>
                        <li>
                            <FaTwitter className="inline-block mr-2 text-blue-400" />
                            <Link to="/twitter" className="hover:text-white">Twitter</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-3 text-lg font-semibold">Contact</h3>
                    <p className="text-sm text-gray-400">
                        Email: support@davinci.com
                    </p>
                    <p className="text-sm text-gray-400">
                        Phone: +91 9876543210
                    </p>
                </div>
            </div>

            <div className="py-4 text-sm text-center text-gray-500 border-t border-gray-700">
                © {new Date().getFullYear()} DaVinci Studio. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;