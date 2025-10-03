"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Phone, 
  Mail, 
  Shield, 
  Users, 
  ClipboardList,
  Heart,
  Utensils 
} from "lucide-react";

export default function HostelCommittee() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('committee');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);
  const managementTeam = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chief Warden",
      department: "Administration",
      phone: "+91 98765 43210",
      email: "chief.warden@sjhostel.edu.in",
      responsibilities: ["Overall hostel administration", "Policy implementation", "Student welfare"],
      icon: Shield
    },
    {
      name: "Mr. Suresh Patel",
      position: "Assistant Warden",
      department: "Student Affairs",
      phone: "+91 98765 43211",
      email: "asst.warden@sjhostel.edu.in",
      responsibilities: ["Daily operations", "Student discipline", "Emergency response"],
      icon: User
    },
    {
      name: "Mrs. Priya Sharma",
      position: "Mess Manager",
      department: "Food Services",
      phone: "+91 98765 43212",
      email: "mess.manager@sjhostel.edu.in",
      responsibilities: ["Meal planning", "Food quality control", "Dietary requirements"],
      icon: Utensils
    },
    {
      name: "Mr. Vikram Singh",
      position: "Maintenance Supervisor",
      department: "Technical Services",
      phone: "+91 98765 43213",
      email: "maintenance@sjhostel.edu.in",
      responsibilities: ["Infrastructure maintenance", "Repair services", "Safety systems"],
      icon: ClipboardList
    }
  ];

  const studentCommittee = [
    {
      name: "Arjun Mehta",
      position: "Student Representative - Final Year",
      course: "B.Tech Computer Science",
      responsibilities: ["Student grievances", "Academic coordination", "Event organization"]
    },
    {
      name: "Sneha Reddy",
      position: "Student Representative - Third Year",
      course: "B.Tech Electronics",
      responsibilities: ["Cultural activities", "Sports coordination", "Mess committee"]
    },
    {
      name: "Rahul Gupta",
      position: "Student Representative - Second Year",
      course: "B.Tech Mechanical",
      responsibilities: ["New student orientation", "Discipline committee", "Infrastructure feedback"]
    }
  ];

  const committees = [
    {
      name: "Disciplinary Committee",
      icon: Shield,
      members: ["Chief Warden (Chairman)", "Assistant Warden", "2 Faculty Members", "1 Student Representative"],
      purpose: "Address disciplinary issues and maintain hostel code of conduct"
    },
    {
      name: "Mess Committee",
      icon: Utensils,
      members: ["Mess Manager (Chairman)", "Student Representatives", "1 Warden", "Kitchen Staff Representative"],
      purpose: "Oversee food quality, menu planning, and address mess-related concerns"
    },
    {
      name: "Welfare Committee",
      icon: Heart,
      members: ["Chief Warden (Chairman)", "Medical Officer", "Student Counselor", "2 Student Representatives"],
      purpose: "Student welfare, health issues, and emergency support services"
    },
    {
      name: "Infrastructure Committee",
      icon: ClipboardList,
      members: ["Maintenance Supervisor (Chairman)", "Technical Staff", "Assistant Warden", "Student Representatives"],
      purpose: "Maintenance planning, facility upgrades, and infrastructure development"
    }
  ];

  return (
    <section id="committee" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Hostel Management & Committee
          </h3>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated team ensures smooth operations and maintains a conducive living environment 
            for all male residents through effective management and student participation.
          </p>
        </div>

        {/* Management Team */}
        <div className="mb-8 md:mb-12">
          <h4 className={`text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2 ${isVisible ? 'animate-slide-in-left animation-delay-200' : 'opacity-0'}`}>
            <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
            Management Team
          </h4>
          <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
            {managementTeam.map((member, index) => (
              <Card 
                key={index} 
                className={`shadow-sm border hover:shadow-md transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                        <member.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-base md:text-lg text-gray-900 truncate">
                          {member.name}
                        </CardTitle>
                        <p className="text-blue-600 font-medium text-sm md:text-base">
                          {member.position}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500">
                          {member.department}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span className="truncate">{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                    <Mail className="w-4 h-4 shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-900 mb-2">
                      Key Responsibilities:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {member.responsibilities.map((resp, respIndex) => (
                        <Badge key={respIndex} variant="outline" className="text-xs">
                          {resp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Committee */}
        <div className="mb-8 md:mb-12">
          <h4 className={`text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2 ${isVisible ? 'animate-slide-in-right animation-delay-500' : 'opacity-0'}`}>
            <User className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
            Student Representatives
          </h4>
          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studentCommittee.map((student, index) => (
              <Card 
                key={index} 
                className={`shadow-sm border hover:shadow-md transition-all duration-300 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 7) * 100}ms` }}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                    </div>
                    <h5 className="font-bold text-gray-900 text-sm md:text-base">
                      {student.name}
                    </h5>
                    <p className="text-green-600 font-medium text-xs md:text-sm">
                      {student.position}
                    </p>
                    <p className="text-gray-500 text-xs">{student.course}</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-900 mb-2">
                      Responsibilities:
                    </p>
                    <ul className="space-y-1">
                      {student.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-xs text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full shrink-0"></span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Committees */}
        <div>
          <h4 className={`text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2 ${isVisible ? 'animate-slide-in-left animation-delay-500' : 'opacity-0'}`}>
            <ClipboardList className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
            Hostel Committees
          </h4>
          <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
            {committees.map((committee, index) => (
              <Card 
                key={index} 
                className={`shadow-sm border hover:shadow-md transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 10) * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-base md:text-lg">
                    <committee.icon className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                    <span>{committee.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-900 mb-2">
                      Committee Members:
                    </p>
                    <ul className="space-y-1">
                      {committee.members.map((member, memberIndex) => (
                        <li key={memberIndex} className="text-xs md:text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0 mt-1.5"></span>
                          <span className="leading-relaxed">{member}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-900 mb-1">Purpose:</p>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {committee.purpose}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 md:mt-12">
          <Card className={`bg-blue-50 border-blue-200 shadow-sm ${isVisible ? 'animate-scale-in animation-delay-500' : 'opacity-0'}`}>
            <CardContent className="p-4 md:p-6 text-center">
              <h5 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                Need to Contact the Committee?
              </h5>
              <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed">
                For any grievances, suggestions, or assistance, you can reach out to the respective committee members 
                during office hours or submit a written application at the warden's office.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-600 text-xs">Office Hours: 9 AM - 6 PM</Badge>
                <Badge variant="outline" className="text-xs">Emergency: 24/7</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}