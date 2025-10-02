import { Metadata } from "next";
import Header from "@/components/Header";
import HostelCommittee from "@/components/HostelCommittee";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Management - SJ Boys' Hostel",
  description: "Meet our management team, student representatives, and various committees responsible for hostel operations and student welfare.",
};

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-8">
        <HostelCommittee />
      </div>
      <Footer />
    </div>
  );
}