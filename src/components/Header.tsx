import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <Building2 className="w-7 h-7 text-blue-900" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SJ Hostel</h1>
              <p className="text-sm text-gray-600">Student Accommodation</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-1">
            <Button variant="ghost" asChild className="text-gray-700">
              <a href="#about">About</a>
            </Button>
            <Button variant="ghost" asChild className="text-gray-700">
              <a href="#facilities">Facilities</a>
            </Button>
            <Button variant="ghost" asChild className="text-gray-700">
              <a href="#contact">Contact</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}