import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Clock 
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
          <p className="text-lg text-slate-300">For inquiries regarding accommodation and admissions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="w-5 h-5" />
                Hostel Administration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <User className="w-4 h-4 text-blue-400" />
                <span>Hostel Warden</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>warden@sjhostel.edu.in</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">SJ Hostel</p>
                  <p>[College/University Name]</p>
                  <p>[Address Line 1]</p>
                  <p>[City, State - PIN Code]</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="bg-blue-900 border-blue-800 inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Clock className="w-5 h-5" />
                <h4 className="text-lg font-semibold text-white">Office Hours</h4>
              </div>
              <Separator className="mb-4 bg-blue-700" />
              <div className="space-y-2 text-white">
                <p><strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                <div className="mt-3">
                  <Badge variant="secondary" className="bg-blue-800 text-white border-blue-700">
                    Sunday: Emergency Contact Only
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}