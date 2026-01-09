import { useState } from 'react';
import { ArrowRight, Search, Filter, Sparkles, Zap, Shield, Clock } from 'lucide-react';
import ServiceCard from "./ServiceCard";

const services = [
  { 
    title: "Teeth Cleaning", 
    img: "/images/services/cleaning.png",
    description: "Professional cleaning to remove plaque, tartar, and stains for optimal oral hygiene.",
    duration: "30-45 min",
    icon: <Sparkles className="w-6 h-6" />,
    featured: true,
    category: "preventive"
  },
  { 
    title: "Braces & Aligners", 
    img: "/images/services/braces.png",
    description: "Modern orthodontic solutions for teeth straightening and bite correction.",
    duration: "18-24 months",
    icon: <Zap className="w-6 h-6" />,
    featured: true,
    category: "orthodontics"
  },
  { 
    title: "Dental Implants", 
    img: "/images/services/implant.png",
    description: "Permanent tooth replacement solutions that look and function like natural teeth.",
    duration: "3-6 months",
    icon: <Shield className="w-6 h-6" />,
    featured: true,
    category: "surgical"
  },
  { 
    title: "Teeth Whitening", 
    img: "/images/services/whitening.png",
    description: "Professional-grade whitening treatments for a brighter, more confident smile.",
    duration: "1-2 visits",
    icon: <Sparkles className="w-6 h-6" />,
    featured: true,
    category: "cosmetic"
  },
  { 
    title: "Root Canal Therapy", 
    img: "/images/services/root-canal.png",
    description: "Pain-free treatment to save infected teeth and relieve severe toothache.",
    duration: "1-2 visits",
    icon: <Shield className="w-6 h-6" />,
    featured: false,
    category: "restorative"
  },
  { 
    title: "Dental Crowns", 
    img: "/images/services/crown.png",
    description: "Custom-made caps to restore damaged teeth to their natural shape and function.",
    duration: "2 visits",
    icon: <Shield className="w-6 h-6" />,
    featured: false,
    category: "restorative"
  },
  { 
    title: "Veneers", 
    img: "/images/services/veneers.png",
    description: "Thin porcelain shells to transform the appearance of your smile.",
    duration: "2-3 visits",
    icon: <Sparkles className="w-6 h-6" />,
    featured: false,
    category: "cosmetic"
  },
  { 
    title: "Emergency Dental", 
    img: "/images/services/emergency.png",
    description: "Immediate care for dental emergencies, available 24/7 for urgent cases.",
    duration: "As needed",
    icon: <Clock className="w-6 h-6" />,
    featured: false,
    category: "emergency"
  },
];

const categories = ["All", "Preventive", "Cosmetic", "Restorative", "Orthodontics", "Surgical", "Emergency"];

const ServicesList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllServices, setShowAllServices] = useState(false);

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "All" || 
      service.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedServices = showAllServices ? filteredServices : filteredServices.filter(service => service.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Comprehensive Dental Care</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Dental Services</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            From routine cleanings to advanced cosmetic procedures, we offer a full spectrum of 
            dental treatments using the latest technology and techniques.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Dental Procedures</div>
            </div>
            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Sterile Equipment</div>
            </div>
            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-1">Pain-Free</div>
              <div className="text-sm text-gray-600">Guarantee</div>
            </div>
            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-1">Same-Day</div>
              <div className="text-sm text-gray-600">Appointments</div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for a dental service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category === "All" && <Filter className="w-4 h-4" />}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service}
                index={index}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* View More/Less Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowAllServices(!showAllServices)}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {showAllServices ? 'Show Featured Services' : 'View All Services'}
            <ArrowRight className={`w-5 h-5 transform transition-transform ${showAllServices ? 'rotate-180' : 'group-hover:translate-x-2'}`} />
          </button>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden">
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Smile?
                </h3>
                <p className="text-blue-100 mb-6">
                  Schedule a consultation with our dental experts and get a personalized 
                  treatment plan for your perfect smile.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/appointment"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Book Appointment
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                  >
                    Call Now: (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-4xl font-bold mb-2">Free</div>
                  <div className="text-xl font-semibold">Consultation</div>
                  <p className="text-sm text-blue-200 mt-2">For new patients</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;