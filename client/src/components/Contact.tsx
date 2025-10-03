"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
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

        const section = document.getElementById("contact");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="contact"
            className="bg-slate-900 text-white py-12 md:py-16"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-8 md:mb-12 ${
                        isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Contact Information
                    </h3>
                    <p className="text-base md:text-lg text-slate-300">
                        For inquiries regarding hostel allotment and
                        accommodation details
                    </p>
                </div>

                <div className="grid gap-6 md:gap-8 lg:grid-cols-2 mb-8 md:mb-12">
                    <Card
                        className={`bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors duration-300 ${
                            isVisible
                                ? "animate-slide-in-left animation-delay-200"
                                : "opacity-0"
                        }`}
                    >
                        <CardHeader>
                            <CardTitle className="text-white flex items-center gap-2 text-base md:text-lg">
                                <User className="w-4 h-4 md:w-5 md:h-5" />
                                Hostel Administration
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 md:space-y-4">
                            <div className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                                <User className="w-4 h-4 text-blue-400 shrink-0" />
                                <span>Hostel Warden</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                                <span>+91 XXXXX XXXXX</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                                <span className="break-all">
                                    warden@sjhostel.edu.in
                                </span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        className={`bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors duration-300 ${
                            isVisible
                                ? "animate-slide-in-right animation-delay-300"
                                : "opacity-0"
                        }`}
                    >
                        <CardHeader>
                            <CardTitle className="text-white flex items-center gap-2 text-base md:text-lg">
                                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                                Address
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-start gap-3 text-slate-300">
                                <MapPin className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                                <div className="text-sm md:text-base leading-relaxed">
                                    <p className="font-medium">
                                        SJ Boys' Hostel
                                    </p>
                                    <p>[College/University Name]</p>
                                    <p>[Address Line 1]</p>
                                    <p>[City, State - PIN Code]</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="text-center">
                    <Card
                        className={`bg-blue-900 border-blue-800 inline-block max-w-md mx-auto w-full hover:bg-blue-850 transition-colors duration-300 ${
                            isVisible
                                ? "animate-scale-in animation-delay-500"
                                : "opacity-0"
                        }`}
                    >
                        <CardContent className="p-4 md:p-6">
                            <div className="flex items-center gap-2 mb-3 justify-center">
                                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                                <h4 className="text-base md:text-lg font-semibold text-white">
                                    Office Hours
                                </h4>
                            </div>
                            <Separator className="mb-4 bg-blue-700" />
                            <div className="space-y-2 text-white text-sm md:text-base">
                                <p className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                    <strong>Monday to Friday:</strong>
                                    <span>9:00 AM - 6:00 PM</span>
                                </p>
                                <p className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                    <strong>Saturday:</strong>
                                    <span>9:00 AM - 2:00 PM</span>
                                </p>
                                <div className="mt-3 pt-2">
                                    <Badge
                                        variant="secondary"
                                        className="bg-blue-800 text-white border-blue-700 text-xs md:text-sm px-3 py-1"
                                    >
                                        Sunday: Emergency Contact Only
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
