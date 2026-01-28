import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Calendar, 
  CreditCard, 
  AlertCircle,
  CheckCircle 
} from "lucide-react";

export default function FeeStructure() {
  const feeTypes = [
    {
      type: "Accommodation Fee",
      description: "Monthly room rent including basic utilities",
      amount: "₹8,000",
      period: "Per Month",
      color: "bg-blue-600"
    },
    {
      type: "Mess Fee",
      description: "Three meals per day (breakfast, lunch, dinner)",
      amount: "₹4,500",
      period: "Per Month",
      color: "bg-green-600"
    },
    {
      type: "Security Deposit",
      description: "Refundable deposit (returned upon checkout)",
      amount: "₹15,000",
      period: "One-time",
      color: "bg-purple-600"
    },
    {
      type: "Admission Fee",
      description: "One-time registration and processing fee",
      amount: "₹2,000",
      period: "One-time",
      color: "bg-orange-600"
    }
  ];

  const additionalCharges = [
    { service: "Laundry Service", charge: "₹500/month", optional: true },
    { service: "WiFi Connection", charge: "Included", optional: false },
    { service: "Electricity (beyond 100 units)", charge: "₹5/unit", optional: false },
    { service: "Room Damage", charge: "As per actual", optional: false },
    { service: "Key Replacement", charge: "₹200", optional: false },
    { service: "Late Payment Fine", charge: "₹100/day", optional: false }
  ];

  const paymentMethods = [
    "Online Bank Transfer (NEFT/RTGS)",
    "UPI Payment (PhonePe, Google Pay, Paytm)",
    "Demand Draft (in favor of 'SJ Hostel')",
    "Cash Payment (at office during working hours)"
  ];

  return (
    <section id="fees" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Fee Structure</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for quality accommodation and services.
          </p>
        </div>

        {/* Main Fee Structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {feeTypes.map((fee, index) => (
            <Card key={index} className="shadow-lg border-0 overflow-hidden">
              <div className={`${fee.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <DollarSign className="w-8 h-8" />
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {fee.period}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{fee.type}</h4>
                <p className="text-gray-600 text-sm mb-4">{fee.description}</p>
                <div className="text-3xl font-bold text-gray-900">{fee.amount}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Additional Charges */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                Additional Charges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {additionalCharges.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700">{item.service}</span>
                      {item.optional && (
                        <Badge variant="outline" className="text-xs">Optional</Badge>
                      )}
                    </div>
                    <span className="font-medium text-gray-900">{item.charge}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-green-600" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{method}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Online payments are preferred for faster processing.
                  Payment receipts will be issued for all transactions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Schedule */}
        <Card className="shadow-sm bg-slate-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Payment Schedule & Important Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Payment Due Dates:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Monthly fees: Due by 5th of every month</li>
                  <li>• Security deposit: Before room allocation</li>
                  <li>• Admission fee: At the time of registration</li>
                  <li>• Late payment fine applies after due date</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Refund Policy:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Security deposit: Refunded within 30 days</li>
                  <li>• Monthly fees: No refund for partial months</li>
                  <li>• Mess fees: Adjusted for valid leave periods</li>
                  <li>• Advance notice required for checkout</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}