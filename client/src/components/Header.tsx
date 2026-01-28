"use client";

import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/information", label: "Information" },
        { href: "/management", label: "Management" },
        { href: "/documents", label: "Documents" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header
            className={`bg-white shadow-sm border-b sticky top-0 z-50 transition-all duration-300 ${
                isScrolled ? "py-2 shadow-md" : "py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link
                        href="/"
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                        <Building2
                            className={`text-blue-900 transition-all duration-300 ${
                                isScrolled ? "w-6 h-6" : "w-7 h-7"
                            }`}
                        />
                        <div>
                            <h1
                                className={`font-bold text-gray-900 transition-all duration-300 ${
                                    isScrolled ? "text-xl" : "text-2xl"
                                }`}
                            >
                                SJ Boys' Hostel
                            </h1>
                            <p
                                className={`text-gray-600 transition-all duration-300 ${
                                    isScrolled ? "text-xs" : "text-sm"
                                }`}
                            >
                                Student Accommodation
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-1">
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                variant="ghost"
                                asChild
                                className="text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200 px-4 py-2"
                            >
                                <Link href={item.href}>{item.label}</Link>
                            </Button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden hover:bg-blue-50 transition-colors"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
                    }`}
                >
                    <nav className="flex flex-col space-y-1 pt-4">
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                variant="ghost"
                                asChild
                                className="text-gray-700 justify-start hover:bg-blue-50 hover:text-blue-900 transition-all duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Link
                                    href={item.href}
                                    className="w-full text-left px-4 py-3"
                                >
                                    {item.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
