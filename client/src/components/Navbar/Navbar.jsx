import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import "../../index.css";
import "./navbar.css";
import img1 from "../../assets/Images/bg-remove.jpg";
import blur from "../../assets/Images/blur.jpg";
import model from "../../assets/Images/model.jpg";
import clothes from "../../assets/Images/perfume.jpg";
import app from "../../assets/Images/app.jpg";
import { useLoading } from "../../contexts/LoaderContext";
import { useAuthContext } from "../../contexts/AuthContext";

const featureItems = [
    { title: "Background Removal", desc: "Auto-remove image bg", img: img1, path: "/background-removal" },
    { title: "Custom Background", desc: "Add custom background", img: model, path: "/custom-background" },
    { title: "Blur Background", desc: "Easily blur the bg", img: blur, path: "/blur-background" },
];

const businessItems = [
    { title: "E-Commerce", desc: "Optimize product photos", img: clothes, path: "/ecommerce" },
    { title: "Photographer", desc: "Enhance photography work", img: model, path: "/photographer" },
    { title: "App Developer", desc: "Use in UI mockups", img: app, path: "/app-developer" },
];

export default function Navbar() {
    const { user } = useAuthContext()
    const { setLoading } = useLoading();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [featureDrop, setFeatureDrop] = useState(false);
    const [businessDrop, setBusinessDrop] = useState(false);
    const dropdownRef = useRef(null);
    const busRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = e => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setFeatureDrop(false);
            if (busRef.current && !busRef.current.contains(e.target)) setBusinessDrop(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navigateTo = (path) => {
        setLoading(true);
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <nav
            className="shadow-lg sticky top-0 z-50 py-2"
            style={{ backgroundImage: "linear-gradient(to right, var(--primary-color), var(--secondary-color))" }}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="bg-white p-2 rounded-md">
                        <Scissors className="h-6 w-6 text-[var(--primary-color)]" />
                    </div>
                    <span className="text-white text-xl font-bold">WA Remover</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-white hover:text-[var(--ter-color)]">Home</Link>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setFeatureDrop(!featureDrop)}
                            className="flex items-center gap-1 text-white hover:text-[var(--ter-color)]"
                        >
                            Features
                            <IoIosArrowDown className={`transition-transform duration-300 ${featureDrop ? "rotate-180" : "rotate-0"}`} />
                        </button>
                        {featureDrop && (
                            <div className="absolute top-full mt-2 w-96 bg-white p-4 rounded shadow-lg">
                                {featureItems.map(item => (
                                    <div
                                        key={item.title}
                                        className="flex items-center p-3 rounded hover:bg-gray-100 cursor-pointer"
                                        onClick={() => navigateTo(item.path)}
                                    >
                                        <img src={item.img} alt="" className="h-12 w-20 rounded-md object-cover" />
                                        <div className="ml-3">
                                            <p className="font-medium">{item.title}</p>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative" ref={busRef}>
                        <button
                            onClick={() => setBusinessDrop(!businessDrop)}
                            className="flex items-center gap-1 text-white hover:text-[var(--ter-color)]"
                        >
                            For Business
                            <IoIosArrowDown className={`transition-transform duration-300 ${businessDrop ? "rotate-180" : "rotate-0"}`} />
                        </button>
                        {businessDrop && (
                            <div className="absolute top-full mt-2 w-96 bg-white p-4 rounded shadow-lg">
                                {businessItems.map(item => (
                                    <div
                                        key={item.title}
                                        className="flex items-center p-3 rounded hover:bg-gray-100 cursor-pointer"
                                        onClick={() => navigateTo(item.path)}
                                    >
                                        <img src={item.img} alt="" className="h-12 w-20 rounded-md object-cover" />
                                        <div className="ml-3">
                                            <p className="font-medium">{item.title}</p>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/about" className="text-white hover:text-[var(--ter-color)]">About</Link>
                </div>

                <div className="hidden md:flex gap-3">
                    {
                        user?.email ?
                            <button
                                onClick={() => navigateTo("/user/dashboard")}
                                className="button-2 text-white border border-white px-4 py-1.5 rounded hover:bg-[var(--ter-color)] transition"
                            >
                                Dashboard
                            </button>
                            :
                            <>
                                <button
                                    onClick={() => navigateTo("/auth/login")}
                                    className="button-2 text-white border border-white px-4 py-1.5 rounded hover:bg-[var(--ter-color)] transition"
                                >
                                    Log In
                                </button>
                                <button
                                    onClick={() => navigateTo("/auth/signup")}
                                    className="button-2 text-white border border-white px-4 py-1.5 rounded hover:bg-[var(--ter-color)] transition"
                                >
                                    Sign Up
                                </button>
                            </>
                    }
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-[1000px] p-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="space-y-4">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-black transition">Home</Link>

                    <div>
                        <button
                            onClick={() => setFeatureDrop(!featureDrop)}
                            className="flex justify-between items-center w-full font-semibold text-[var(--primary-color)] border-t py-3"
                        >
                            Features <IoIosArrowDown className={`transition-transform duration-300 ${featureDrop ? "rotate-180" : "rotate-0"}`} />
                        </button>
                        {featureDrop && (
                            <div className="pl-2 space-y-2">
                                {featureItems.map(item => (
                                    <div key={item.title} onClick={() => navigateTo(item.path)} className="flex gap-3 items-center cursor-pointer hover:bg-gray-100 p-2 rounded">
                                        <img src={item.img} alt="" className="h-10 w-16 rounded object-cover" />
                                        <div>
                                            <p className="font-medium text-sm">{item.title}</p>
                                            <p className="text-xs text-gray-600 leading-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            onClick={() => setBusinessDrop(!businessDrop)}
                            className="flex justify-between items-center w-full font-semibold text-[var(--primary-color)] border-t py-3"
                        >
                            For Business <IoIosArrowDown className={`transition-transform duration-300 ${businessDrop ? "rotate-180" : "rotate-0"}`} />
                        </button>
                        {businessDrop && (
                            <div className="pl-2 space-y-2">
                                {businessItems.map(item => (
                                    <div key={item.title} onClick={() => navigateTo(item.path)} className="flex gap-3 items-center cursor-pointer hover:bg-gray-100 p-2 rounded">
                                        <img src={item.img} alt="" className="h-10 w-16 rounded object-cover" />
                                        <div>
                                            <p className="font-medium text-sm">{item.title}</p>
                                            <p className="text-xs text-gray-600 leading-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-black transition">About</Link>

                    <div className="flex flex-col gap-2 mt-3">
                        <button
                            onClick={() => navigateTo("/auth/login")}
                            className="button-2 w-full border text-[var(--primary-color)] border-[var(--primary-color)] py-2 rounded hover:bg-[var(--primary-color)] hover:text-white transition"
                        >Log In</button>
                        <button
                            onClick={() => navigateTo("/auth/signup")}
                            className="button-2 w-full border text-white bg-[var(--primary-color)] py-2 rounded hover:bg-[var(--ter-color)] transition"
                        >Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
