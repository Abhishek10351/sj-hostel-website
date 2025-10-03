"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Utensils,
    Wifi,
    WashingMachine,
    BookOpen,
    Bath,
    Heart,
    Car,
    Headphones,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Facilities() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const facilities = [
        {
            icon: Utensils,
            title: "Dining Hall",
            description: "Hygienic mess facility with nutritious meals",
            color: "text-orange-600",
            bgColor: "bg-orange-50",
        },
        {
            icon: Wifi,
            title: "Internet Connectivity",
            description: "High-speed WiFi access throughout the premises",
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            icon: WashingMachine,
            title: "Laundry Services",
            description: "Washing and drying facilities for residents",
            color: "text-purple-600",
            bgColor: "bg-purple-50",
        },
        {
            icon: BookOpen,
            title: "Study Hall",
            description: "Dedicated spaces for academic activities",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            icon: Bath,
            title: "Sanitation Facilities",
            description: "Clean washrooms with hot water supply",
            color: "text-cyan-600",
            bgColor: "bg-cyan-50",
        },
        {
            icon: Heart,
            title: "Medical Assistance",
            description: "First aid and medical support available",
            color: "text-red-600",
            bgColor: "bg-red-50",
        },
        {
            icon: Car,
            title: "Vehicle Parking",
            description: "Secure parking area for resident vehicles",
            color: "text-gray-600",
            bgColor: "bg-gray-50",
        },
        {
            icon: Headphones,
            title: "Administrative Support",
            description: "Round-the-clock staff assistance",
            color: "text-indigo-600",
            bgColor: "bg-indigo-50",
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="facilities"
            className="py-16 lg:py-24 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-16 transform transition-all duration-1000 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Hostel Facilities
                    </h3>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive amenities designed to support your
                        academic journey and daily life
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {facilities.map((facility, index) => (
                        <Card
                            key={index}
                            className={`group hover:shadow-2xl transition-all duration-500 bg-white border-0 transform ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-8 opacity-0"
                            } hover:-translate-y-3 hover:scale-105`}
                            style={{
                                transitionDelay: isVisible
                                    ? `${index * 100}ms`
                                    : "0ms",
                            }}
                        >
                            <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col">
                                <div
                                    className={`${facility.bgColor} w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}
                                >
                                    <facility.icon
                                        className={`w-8 h-8 lg:w-10 lg:h-10 ${facility.color}`}
                                    />
                                </div>
                                <h4 className="font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors text-lg lg:text-xl">
                                    {facility.title}
                                </h4>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-grow">
                                    {facility.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Additional Features */}
                <div
                    className={`mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-xl transform transition-all duration-1000 delay-700 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <div className="text-center mb-8">
                        <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Our Hostel Facilities
                        </h4>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Our state-of-the-art facilities are designed with
                            student comfort and convenience in mind
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Modern Infrastructure",
                                desc: "Latest amenities and well-maintained facilities",
                            },
                            {
                                title: "Student-Centric Design",
                                desc: "Everything designed keeping student needs in focus",
                            },
                            {
                                title: "24/7 Availability",
                                desc: "Round-the-clock access to essential services",
                            },
                        ].map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-3 h-3 bg-blue-600 rounded-full mx-auto mb-4 group-hover:scale-150 transition-transform"></div>
                                <h5 className="font-bold text-gray-900 mb-2">
                                    {item.title}
                                </h5>
                                <p className="text-gray-600 text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
