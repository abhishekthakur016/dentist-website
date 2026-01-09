import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTooth, FaBars, FaTimes, FaPhoneAlt, FaUser, FaCalendarAlt } from "react-icons/fa";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: <FaTooth className="mr-2" /> },
    { path: "/services", label: "Services" },
    // { path: "/dentists", label: "Our Dentists" },
    // { path: "/testimonials", label: "Testimonials" },
    // { path: "/AboutClinic", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
    
     <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-lg">

        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo & Brand */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <FaTooth className="text-white text-2xl" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">+</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
                  Smile<span className="text-blue-600">Care</span>
                </h1>
                <p className="text-xs text-gray-500 font-medium">Dental Excellence Clinic</p>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-blue-50 text-blue-600 border-b-2 border-blue-500"
                        : "text-black hover:text-blue-600 hover:bg-blue-50"
                    }`
                  }
                >
                  {item.icon && item.icon}
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <NavLink
                to="/appointment"
                className=" bg-blue-900 to-blue-300 text-white font-medium px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <FaCalendarAlt />
                Book Appointment
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500"
                          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      }`
                    }
                  >
                    {item.icon && item.icon}
                    {item.label}
                  </NavLink>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <NavLink
                    to="/appointment"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaCalendarAlt />
                    Book Appointment
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;


