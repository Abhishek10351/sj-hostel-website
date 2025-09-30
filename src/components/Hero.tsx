import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">SJ Hostel</h2>
        <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Student Residential Accommodation Facility
        </p>
        <div className="bg-white text-blue-900 px-8 py-4 rounded-md inline-block font-semibold">
          Providing Quality Housing for Academic Excellence
        </div>
      </div>
    </section>
  );
}