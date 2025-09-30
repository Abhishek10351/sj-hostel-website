export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">SJ Hostel</h1>
            <nav className="space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#facilities" className="text-gray-600 hover:text-gray-900">Facilities</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to SJ Hostel</h2>
          <p className="text-xl mb-8">A comfortable home away from home for students</p>
          <div className="bg-white text-blue-600 px-6 py-3 rounded-lg inline-block font-semibold">
            Your Safe Haven for Academic Excellence
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">About Our Hostel</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              SJ Hostel provides a safe, comfortable, and conducive environment for students to focus on their studies 
              while building lasting friendships and memories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Comfortable Living</h4>
              <p className="text-gray-600">Well-furnished rooms with all basic amenities for a comfortable stay.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">24/7 Security</h4>
              <p className="text-gray-600">Round-the-clock security ensuring the safety of all residents.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Study Environment</h4>
              <p className="text-gray-600">Quiet study areas and library facilities for academic focus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Facilities</h3>
            <p className="text-lg text-gray-600">Everything you need for a comfortable hostel life</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <span className="text-3xl mb-3 block">🍽️</span>
              <h4 className="font-semibold mb-2">Mess Facility</h4>
              <p className="text-sm text-gray-600">Nutritious meals three times a day</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <span className="text-3xl mb-3 block">🌐</span>
              <h4 className="font-semibold mb-2">WiFi</h4>
              <p className="text-sm text-gray-600">High-speed internet throughout the hostel</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <span className="text-3xl mb-3 block">🧺</span>
              <h4 className="font-semibold mb-2">Laundry</h4>
              <p className="text-sm text-gray-600">Washing machine and drying facilities</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <span className="text-3xl mb-3 block">🎮</span>
              <h4 className="font-semibold mb-2">Recreation</h4>
              <p className="text-sm text-gray-600">Common room with games and TV</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <span className="text-3xl mb-3 block">🚿</span>
              <h4 className="font-semibold mb-2">Clean Bathrooms</h4>
              <p className="text-sm text-gray-600">Well-maintained washrooms with hot water</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <span className="text-3xl mb-3 block">🏥</span>
              <h4 className="font-semibold mb-2">Medical Aid</h4>
              <p className="text-sm text-gray-600">First aid and medical assistance available</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <span className="text-3xl mb-3 block">🅿️</span>
              <h4 className="font-semibold mb-2">Parking</h4>
              <p className="text-sm text-gray-600">Secure parking for bikes and vehicles</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <span className="text-3xl mb-3 block">📞</span>
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-600">Warden and staff available round the clock</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
            <p className="text-lg text-gray-300">Get in touch with us for any queries or admissions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Warden Details</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">👨‍💼</span>
                  <span>Mr. [Warden Name]</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">📞</span>
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">✉️</span>
                  <span>warden@sjhostel.edu</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Hostel Address</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">📍</span>
                  <div>
                    <p>SJ Hostel</p>
                    <p>[Your College/University Name]</p>
                    <p>[Address Line 1]</p>
                    <p>[City, State - PIN Code]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-blue-600 px-8 py-4 rounded-lg inline-block">
              <h4 className="text-lg font-semibold mb-2">Visiting Hours</h4>
              <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p className="text-sm text-blue-200 mt-2">Sunday: Emergency contact only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 SJ Hostel. All rights reserved. | Made with ❤️ for students
          </p>
        </div>
      </footer>
    </div>
  );
}
