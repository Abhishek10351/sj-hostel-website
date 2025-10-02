import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Shield, 
  Users, 
  Wifi, 
  Volume2, 
  Utensils,
  AlertTriangle 
} from "lucide-react";

export default function Rules() {
  const ruleCategories = [
    {
      title: "General Conduct",
      icon: Users,
      color: "bg-blue-50 border-blue-200",
      rules: [
        "Residents must maintain discipline and respect fellow students at all times",
        "Ragging in any form is strictly prohibited and will result in immediate expulsion",
        "Smoking, alcohol consumption, and substance abuse are strictly forbidden",
        "Female visitors are not permitted in room areas. Common area meetings only during visiting hours",
        "Students must carry their hostel ID cards at all times within the premises",
        "Proper dress code must be maintained in common areas and mess hall"
      ]
    },
    {
      title: "Time Regulations",
      icon: Clock,
      color: "bg-green-50 border-green-200",
      rules: [
        "Hostel gates close at 10:00 PM sharp. Late entry requires prior permission from warden",
        "Study hours: 6:00 PM to 10:00 PM (silence must be maintained in all floors)",
        "Breakfast: 7:00 AM - 9:00 AM, Lunch: 12:00 PM - 2:00 PM, Dinner: 7:00 PM - 9:00 PM",
        "Room cleaning and inspection: Every Saturday 9:00 AM - 11:00 AM (mandatory attendance)",
        "Lights out by 11:00 PM on weekdays, 12:00 AM on weekends",
        "Visiting hours for family: Sundays 10:00 AM - 5:00 PM (lobby area only)"
      ]
    },
    {
      title: "Room & Property",
      icon: Shield,
      color: "bg-purple-50 border-purple-200",
      rules: [
        "Room keys are the responsibility of the student. Loss will incur replacement charges",
        "Damage to hostel property will be charged to the student's account",
        "Room sharing is not permitted without prior approval from the warden",
        "Electrical appliances must be approved by the administration before use",
        "Rooms must be kept clean and tidy. Random inspections will be conducted"
      ]
    },
    {
      title: "Technology & Noise",
      icon: Wifi,
      color: "bg-orange-50 border-orange-200",
      rules: [
        "WiFi usage is monitored. Misuse may result in connection termination",
        "Music and entertainment devices should not disturb other residents",
        "Mobile phones should be on silent mode during study hours",
        "Gaming and streaming are restricted during peak study hours",
        "Technical support is available only during office hours"
      ]
    }
  ];

  return (
    <section id="rules" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Rules & Regulations</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These guidelines ensure a safe, peaceful, and conducive environment for all male residents.
            All students are expected to familiarize themselves with and adhere to these regulations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {ruleCategories.map((category, index) => (
            <Card key={index} className={`${category.color} shadow-sm`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-900">
                  <category.icon className="w-6 h-6" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-red-50 border-red-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-red-900">
              <AlertTriangle className="w-6 h-6" />
              Important Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-red-800">
              <p className="font-medium">Violation of any rules may result in:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-red-300 text-red-700">Warning</Badge>
                <Badge variant="outline" className="border-red-300 text-red-700">Fine</Badge>
                <Badge variant="outline" className="border-red-300 text-red-700">Suspension</Badge>
                <Badge variant="outline" className="border-red-300 text-red-700">Expulsion</Badge>
              </div>
              <p className="text-sm mt-3">
                For any clarifications regarding these rules, please contact the hostel administration during office hours.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}