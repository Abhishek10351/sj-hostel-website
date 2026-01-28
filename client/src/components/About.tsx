"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Home, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function About() {
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

    const features = [
        {
            icon: Home,
            title: "Residential Facilities",
            description:
                "Well-maintained accommodation with essential amenities for student residents.",
            bgColor: "bg-blue-50",
            delay: "delay-100",
        },
        {
            icon: Shield,
            title: "Security & Safety",
            description:
                "24/7 security surveillance and safety protocols for resident protection.",
            bgColor: "bg-gray-50",
            delay: "delay-300",
        },
        {
            icon: BookOpen,
            title: "Academic Environment",
            description:
                "Conducive study spaces and quiet hours to support academic performance.",
            bgColor: "bg-slate-50",
            delay: "delay-500",
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-16 lg:py-24 bg-white overflow-hidden"
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
                        About SJ Boys' Hostel
                    </h3>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        SJ Boys' Hostel provides safe, comfortable accommodation for male students
                        pursuing their academic goals. We maintain high standards of living with
                        modern facilities and a supportive environment conducive to learning.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className={`group text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                                isVisible
                                    ? `translate-y-0 opacity-100 ${feature.delay}`
                                    : "translate-y-8 opacity-0"
                            } hover:-translate-y-2`}
                        >
                            <CardContent className="p-8 lg:p-10">
                                <div
                                    className={`${feature.bgColor} w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <feature.icon className="w-10 h-10 lg:w-12 lg:h-12 text-gray-700" />
                                </div>
                                <h4 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Stats Section */}
                <div
                    className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 delay-700 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    {[
                        { number: "200+", label: "Students" },
                        { number: "24/7", label: "Security" },
                        { number: "100%", label: "WiFi Coverage" },
                        { number: "15+", label: "Years Experience" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
