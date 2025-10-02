"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div
                        className={`transform transition-all duration-1000 ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                    >
                        <Badge
                            variant="secondary"
                            className="mb-4 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
                        >
                            Student Accommodation
                        </Badge>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                            SJ Boys'
                            <span className="block text-blue-200">Hostel</span>
                        </h1>

                        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed max-w-2xl">
                            Student Residential Accommodation Facility for Male
                            Students
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 group"
                            >
                                <Link
                                    href="/information"
                                    className="flex items-center gap-2"
                                >
                                    Explore Information
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300"
                            >
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div
                        className={`hidden lg:flex justify-center items-center transform transition-all duration-1000 delay-300 ${
                            isVisible
                                ? "translate-y-0 opacity-100 scale-100"
                                : "translate-y-8 opacity-0 scale-95"
                        }`}
                    >
                        <div className="relative">
                            <div className="w-64 h-64 xl:w-80 xl:h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                                <Building2 className="w-32 h-32 xl:w-40 xl:h-40 text-white/80" />
                            </div>
                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-200 rounded-full animate-pulse delay-500"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div
                    className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                        <span className="text-sm font-medium">
                            Providing Quality Housing for Academic Excellence
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
