import { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "SJ Boys' Hostel - Student Accommodation",
    description:
        "SJ Boys' Hostel provides comfortable and safe accommodation for male students with excellent facilities and 24/7 security.",
};

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <About />
            <Footer />
        </div>
    );
}
