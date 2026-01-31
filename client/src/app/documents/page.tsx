import { Metadata } from "next";
import Documents from "@/components/Documents";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Documents - SJ Boys' Hostel",
  description: "Access important documents, forms, and notices for SJ Boys' Hostel residents and applicants.",
};

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-8">
        <Documents />
      </div>
      <Footer />
    </div>
  );
}
  