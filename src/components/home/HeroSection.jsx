import { ArrowRight, Calendar, Clock, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-300 via-blue-900 to-blue-300 text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Dental pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">#1 Rated Dental Clinic</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Your Perfect</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Smile Journey
              </span>
              <span className="block">Begins Here</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Experience world-class dental care in a comfortable, modern environment. 
              Our expert team combines advanced technology with compassionate care.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                <Shield className="w-5 h-5 text-blue-200" />
                <span className="text-sm font-medium">Pain-Free</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                <Clock className="w-5 h-5 text-blue-200" />
                <span className="text-sm font-medium">Same-Day</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-200" />
                <span className="text-sm font-medium">Flexible Hours</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/appointment"
                className="group bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-300 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
              <div className="h-4 w-px bg-white/30"></div>
              <div className="flex items-center gap-2">
                <span className="font-bold">5,000+</span>
                <span>Happy Patients</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hulala.avif"
                  alt="Modern Dental Clinic with Doctor and Patient"
                  className="w-full h-[500px]  object-cover"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
                
                {/* Floating Card 1 */}
                <div className="absolute bottom-6 left-6 bg-white text-gray-800 p-4 rounded-xl shadow-xl max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold">Online Booking</p>
                      <p className="text-sm text-gray-600">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -top-6 -right-6 bg-blue-700 text-white p-5 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">30 Min</div>
                  <div className="text-sm opacity-90">Average Wait Time</div>
                </div>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-800 p-5 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Emergency</p>
                    <p className="text-sm text-gray-600">Available Now</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration for image */}
            <div className="absolute -z-10 top-6 -left-6 w-32 h-32 border-4 border-white/20 rounded-full"></div>
            <div className="absolute -z-10 -bottom-6 left-1/3 w-24 h-24 border-2 border-white/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/70">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,106.7C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;