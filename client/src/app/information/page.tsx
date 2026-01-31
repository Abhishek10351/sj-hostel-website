import { Metadata } from "next";
import Facilities from "@/components/Facilities";
import Rules from "@/components/Rules";
import FeeStructure from "@/components/FeeStructure";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Information - SJ Boys' Hostel",
  description: "Complete information about SJ Boys' Hostel including facilities, rules & regulations, and fee structure for prospective and current residents.",
};

export default function InformationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-8">
        {/* Page Header */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hostel Information
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about SJ Boys' Hostel - from facilities and amenities 
              to rules and fee structure.
            </p>
          </div>
        </section>

        {/* Tabbed Content */}
        <section className="py-8 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="facilities" className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 lg:mb-12 h-auto bg-white shadow-lg rounded-2xl p-2">
                <TabsTrigger 
                  value="facilities" 
                  className="text-base sm:text-lg py-4 px-6 rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
                >
                  <span className="hidden sm:inline">Facilities & Amenities</span>
                  <span className="sm:hidden">Facilities</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="rules" 
                  className="text-base sm:text-lg py-4 px-6 rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
                >
                  <span className="hidden sm:inline">Rules & Regulations</span>
                  <span className="sm:hidden">Rules</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="fees" 
                  className="text-base sm:text-lg py-4 px-6 rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
                >
                  <span className="hidden sm:inline">Fee Structure</span>
                  <span className="sm:hidden">Fees</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="facilities" className="mt-0 focus-visible:outline-none">
                <div className="animate-in fade-in-0 duration-500">
                  <Facilities />
                </div>
              </TabsContent>
              
              <TabsContent value="rules" className="mt-0 focus-visible:outline-none">
                <div className="animate-in fade-in-0 duration-500">
                  <Rules />
                </div>
              </TabsContent>
              
              <TabsContent value="fees" className="mt-0 focus-visible:outline-none">
                <div className="animate-in fade-in-0 duration-500">
                  <FeeStructure />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </div>
  );
}