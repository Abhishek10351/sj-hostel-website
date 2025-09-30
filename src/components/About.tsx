import { Card, CardContent } from "@/components/ui/card";
import { Shield, Home, BookOpen } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Home,
      title: "Residential Facilities",
      description: "Well-maintained accommodation with essential amenities for student residents.",
      bgColor: "bg-blue-50",
    },
    {
      icon: Shield,
      title: "Security & Safety", 
      description: "24/7 security surveillance and safety protocols for resident protection.",
      bgColor: "bg-gray-50",
    },
    {
      icon: BookOpen,
      title: "Academic Environment",
      description: "Conducive study spaces and quiet hours to support academic performance.",
      bgColor: "bg-slate-50",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">About SJ Hostel</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SJ Hostel is a student residential facility designed to provide safe, comfortable, 
            and supportive accommodation for students pursuing their academic goals. Our facility 
            maintains high standards of living and academic environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border shadow-sm">
              <CardContent className="p-6">
                <div className={`${feature.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}