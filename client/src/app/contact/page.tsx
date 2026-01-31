import { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - SJ Boys' Hostel",
  description: "Get in touch with SJ Boys' Hostel administration. Find contact details, office hours, and address information for inquiries and admissions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-8">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}