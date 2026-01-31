import { Metadata } from "next";
import About from "@/components/About";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
    title: "SJ Boys' Hostel - Student Accommodation",
    description:
        "SJ Boys' Hostel provides comfortable and safe accommodation for male students with excellent facilities and 24/7 security.",
};

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <About />
            <Contact />
        </div>
    );
}
