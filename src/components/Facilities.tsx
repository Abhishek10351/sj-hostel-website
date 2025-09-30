import { Card, CardContent } from "@/components/ui/card";
import { 
  Utensils, 
  Wifi, 
  WashingMachine, 
  BookOpen, 
  Bath, 
  Heart, 
  Car, 
  Headphones 
} from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      icon: Utensils,
      title: "Dining Hall",
      description: "Hygienic mess facility with nutritious meals",
    },
    {
      icon: Wifi,
      title: "Internet Connectivity",
      description: "High-speed WiFi access throughout the premises",
    },
    {
      icon: WashingMachine,
      title: "Laundry Services",
      description: "Washing and drying facilities for residents",
    },
    {
      icon: BookOpen,
      title: "Study Hall",
      description: "Dedicated spaces for academic activities",
    },
    {
      icon: Bath,
      title: "Sanitation Facilities",
      description: "Clean washrooms with hot water supply",
    },
    {
      icon: Heart,
      title: "Medical Assistance",
      description: "First aid and medical support available",
    },
    {
      icon: Car,
      title: "Vehicle Parking",
      description: "Secure parking area for resident vehicles",
    },
    {
      icon: Headphones,
      title: "Administrative Support",
      description: "Round-the-clock staff assistance",
    },
  ];

  return (
    <section id="facilities" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Hostel Facilities</h3>
          <p className="text-lg text-gray-600">Comprehensive amenities for student accommodation</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white border">
              <CardContent className="p-6 text-center">
                <facility.icon className="w-8 h-8 mx-auto mb-3 text-blue-900" />
                <h4 className="font-semibold mb-2 text-gray-900">{facility.title}</h4>
                <p className="text-sm text-gray-600">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}