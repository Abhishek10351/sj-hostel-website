import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Users, AlertTriangle } from "lucide-react";

export default function Rules() {
  const ruleCategories = [
    {
      title: "General Conduct",
      icon: Users,
      color: "bg-blue-50 border-blue-200",
      rules: [
        "Maintain discipline and respect fellow students",
        "Ragging, smoking, alcohol, and substance abuse are strictly prohibited",
        "Proper dress code required in common areas"
      ]
    },
    {
      title: "Timings",
      icon: Clock,
      color: "bg-green-50 border-green-200",
      rules: [
        "Hostel gates close at 10:00 PM",
        "Study hours: 6:00 PM - 10:00 PM (maintain silence)",
        "Mess timings: Breakfast 7-9 AM, Lunch 12-2 PM, Dinner 8-10 PM"
      ]
    },
    {
      title: "Property & Safety",
      icon: Shield,
      color: "bg-purple-50 border-purple-200",
      rules: [
        "Students responsible for room keys and property",
        "Electrical appliances require prior approval",
        "Report any damages immediately to administration"
      ]
    }
  ];

  return (
    <section id="rules" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Rules & Regulations</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guidelines ensuring a safe, peaceful, and conducive environment for all residents.
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