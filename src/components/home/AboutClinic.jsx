import { CheckCircle, Award, Shield } from 'lucide-react';
import siteConfig from "../../config/siteConfig";
import Button from "../common/Button";

const AboutClinic = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content - Enhanced */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-60"></div>
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Award className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-700">Trusted Clinic Since 2010</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">{siteConfig.clinicName}</span>
              </h2>

              <div className="space-y-5">
                <p className="text-lg text-gray-700 leading-relaxed bg-white/50 p-4 rounded-xl border-l-4 border-blue-500">
                  <span className="font-bold text-blue-600">{siteConfig.clinicName}</span> is a modern dental clinic committed to 
                  providing high-quality, pain-free dental care using the latest 
                  technology and internationally approved treatment methods.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed bg-white/50 p-4 rounded-xl border-l-4 border-blue-400">
                  Led by <span className="font-bold text-blue-700">{siteConfig.doctorName}</span>, 
                  our clinic focuses on patient comfort, hygiene, and long-term oral 
                  health solutions for all age groups.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Certified Specialists</h4>
                    <p className="text-sm text-gray-600 mt-1">Experienced & certified dental specialists</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Advanced Technology</h4>
                    <p className="text-sm text-gray-600 mt-1">Advanced equipment & painless treatments</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Safety First</h4>
                    <p className="text-sm text-gray-600 mt-1">Strict hygiene & safety standards</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Flexible Hours</h4>
                    <p className="text-sm text-gray-600 mt-1">Weekend & emergency appointments</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="primary" className="px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Learn More About Us
                </Button>
                <Button variant="outline" className="px-8 py-3 rounded-lg border-2 hover:border-blue-600 hover:bg-blue-600 ">
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image - Enhanced */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/images/aboutclinic.avif"
                alt="Modern Dental Clinic Interior"
                className="w-full h-[500px] object-cover  transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Open Now</span>
                </div>
              </div>
            </div>

            {/* Experience Badge - Enhanced */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">
                  {siteConfig.experience || "10+"}
                </p>
                <p className="text-sm font-medium tracking-wider uppercase opacity-90">Years of Excellence</p>
                <div className="mt-2 flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute -right-4 bottom-4 right-2 bg-white rounded-2xl shadow-xl p-5">
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-700">5,000+</p>
                  <p className="text-xs text-gray-600">Happy Patients</p>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent mx-auto"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-700">98%</p>
                  <p className="text-xs text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>

            {/* Pattern decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-blue-200 rounded-xl -z-10"></div>
            <div className="absolute top-1/2 -left-4 w-8 h-8 border-2 border-blue-200 rounded-full -z-10"></div>
          </div>

        </div>

        {/* Additional Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-blue-700 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Emergency Service</div>
          </div>
          <div className="text-center p-6 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-blue-700 mb-2">15+</div>
            <div className="text-sm text-gray-600">Expert Dentists</div>
          </div>
          <div className="text-center p-6 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-blue-700 mb-2">50+</div>
            <div className="text-sm text-gray-600">Dental Services</div>
          </div>
          <div className="text-center p-6 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-blue-700 mb-2">∞</div>
            <div className="text-sm text-gray-600">Smiles Created</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClinic;