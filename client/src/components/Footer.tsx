"use client";

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Home, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footer = document.querySelector("footer");
        if (footer) observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    return (
        <footer className="bg-slate-950 text-white py-6 md:py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-6 ${
                        isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                >
                    {/* Hostel Info */}
                    <div
                        className={`${
                            isVisible
                                ? "animate-slide-in-left animation-delay-100"
                                : "opacity-0"
                        }`}
                    >
                        <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sm md:text-base">
                            <Home className="w-4 h-4" />
                            SJ Boys' Hostel
                        </h4>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                            Providing safe, comfortable, and affordable
                            accommodation for male students with modern
                            facilities and a supportive environment.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div
                        className={`${
                            isVisible
                                ? "animate-fade-in-up animation-delay-200"
                                : "opacity-0"
                        }`}
                    >
                        <h4 className="font-bold text-white mb-3 text-sm md:text-base">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-xs md:text-sm">
                            <li>
                                <a
                                    href="/"
                                    className="text-slate-400 hover:text-white transition-colors duration-200"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/information"
                                    className="text-slate-400 hover:text-white transition-colors duration-200"
                                >
                                    Information
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/management"
                                    className="text-slate-400 hover:text-white transition-colors duration-200"
                                >
                                    Management
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/documents"
                                    className="text-slate-400 hover:text-white transition-colors duration-200"
                                >
                                    Documents
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-slate-400 hover:text-white transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div
                        className={`${
                            isVisible
                                ? "animate-fade-in-up animation-delay-300"
                                : "opacity-0"
                        }`}
                    >
                        <h4 className="font-bold text-white mb-3 text-sm md:text-base">
                            Contact Info
                        </h4>
                        <ul className="space-y-2 text-xs md:text-sm">
                            <li className="flex items-center gap-2 text-slate-400">
                                <Phone className="w-3 h-3 shrink-0" />
                                <span>+91 XXXXX XXXXX</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-400">
                                <Mail className="w-3 h-3 shrink-0" />
                                <span className="break-all">
                                    warden@sjhostel.edu.in
                                </span>
                            </li>
                            <li className="flex items-start gap-2 text-slate-400">
                                <MapPin className="w-3 h-3 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">
                                    SJ Boys' Hostel
                                    <br />
                                    College Campus
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Office Hours */}
                    <div
                        className={`${
                            isVisible
                                ? "animate-slide-in-right animation-delay-500"
                                : "opacity-0"
                        }`}
                    >
                        <h4 className="font-bold text-white mb-3 text-sm md:text-base">
                            Office Hours
                        </h4>
                        <ul className="space-y-2 text-xs md:text-sm text-slate-400">
                            <li>
                                <strong className="text-white">
                                    Mon - Fri:
                                </strong>
                                <br />
                                9:00 AM - 6:00 PM
                            </li>
                            <li>
                                <strong className="text-white">
                                    Saturday:
                                </strong>
                                <br />
                                9:00 AM - 2:00 PM
                            </li>
                            <li>
                                <strong className="text-white">Sunday:</strong>
                                <br />
                                Emergency Only
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="mb-4 bg-slate-800" />

                <div
                    className={`text-center ${
                        isVisible
                            ? "animate-fade-in-up animation-delay-500"
                            : "opacity-0"
                    }`}
                >
                    <p className="text-slate-400 text-xs md:text-sm">
                        © 2026 SJ Boys' Hostel. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
