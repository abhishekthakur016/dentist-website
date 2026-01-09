import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaClock } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className=" bg-gradient-to-rl from-blue-900 via-blue-100 to-blue-900 pt-12 pb-6 border-t border-gray-200 ">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-blue-600 text-xl font-bold">SC</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">SmileCare<span className="text-blue-600">.</span></h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Providing exceptional dental care with modern technology and a compassionate touch for over 15 years.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300"
                  aria-label={`Follow on ${Icon.name.replace('Fa', '')}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-6 pb-2 border-b border-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Dentists', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-blue-400 text-xs">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-6 pb-2 border-b border-gray-100">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Our Location</p>
                  <p className="text-gray-600 text-sm">123 Dental Street, Smile City, SC 12345</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Call Us</p>
                  <p className="text-gray-600 text-sm">(123) 456-7890</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Email Us</p>
                  <p className="text-gray-600 text-sm">hello@smilecare.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-6 pb-2 border-b border-gray-100">Opening Hours</h3>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaClock className="text-blue-500" />
              </div>
              <div className="space-y-2">
                {[
                  { day: 'Mon - Fri', time: '8:00 AM - 7:00 PM' },
                  { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
                  { day: 'Sunday', time: 'Emergency Only' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-gray-600 text-sm bg-gray-50 px-3 py-1 rounded-full">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 mt-4">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-6">
          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-6 mb-8 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-gray-800 font-semibold text-lg mb-2">Stay Updated</h3>
                <p className="text-gray-600">Subscribe to our newsletter for dental tips and special offers.</p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 md:w-64 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-gray-600">
                © {currentYear} SmileCare Dental Clinic. All rights reserved.
              </p>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Sitemap</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-500">Online Now</span>
              </div>
              <div className="text-gray-400">|</div>
              <div className="text-sm text-gray-500">
                <span className="font-medium text-blue-600">24/7</span> Emergency Support
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;