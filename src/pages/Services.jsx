import { useState } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Teeth Cleaning",
      desc: "Professional cleaning to remove plaque and tartar, keeping your teeth and gums healthy.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVldGglMjBjbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      features: ["Ultrasonic cleaning", "Polishing", "Fluoride treatment", "30-minute session"],
      price: "$120",
      duration: "30 min",
      icon: "🦷",
      gradient: "from-blue-100 to-blue-50"
    },
    {
      title: "Root Canal Treatment",
      desc: "Pain-free root canal treatment with modern technology and digital anesthesia.",
      image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vdCUyMGNhbmFsfGVufDB8fDB8fHww",
      features: ["Pain management", "Single visit", "Digital X-rays", "Crown placement"],
      price: "$850",
      duration: "1-2 hours",
      icon: "🔬",
      gradient: "from-purple-100 to-blue-50"
    },
    {
      title: "Dental Implants",
      desc: "Permanent solution for missing teeth with 98% success rate and lifetime warranty.",
      image: "https://images.unsplash.com/photo-1612283105859-6e2585710acd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzc2luZyUyMHRlZXRofGVufDB8fDB8fHww",
      features: ["Titanium implant", "Natural look", "Quick recovery", "Free consultation"],
      price: "$2,500",
      duration: "2-3 hours",
      icon: "⭐",
      gradient: "from-emerald-100 to-blue-50"
    },
    {
      title: "Braces & Aligners",
      desc: "Make your teeth healthy and fixed with our latest technology.",
      image: "https://images.unsplash.com/photo-1597780429637-151fe9eb48ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyYWNlc3xlbnwwfHwwfHx8MA%3D%3D",
      features: ["Invisible options", "3D scanning", "Progress tracking", "24/7 support"],
      price: "$3,800",
      duration: "Custom Plan",
      icon: "✨",
      gradient: "from-cyan-100 to-blue-50"
    },
    {
      title: "Teeth Whitening",
      desc: "Brighten your smile safely and effectively with professional-grade solutions.",
      image: "https://media.istockphoto.com/id/629585568/photo/pointing-to-teeth.webp?a=1&b=1&s=612x612&w=0&k=20&c=BsBRRSF5i0Lfv9aO8vm5qSAd_nHTUsT5vt-bxYx9eTA=",
      features: ["Laser whitening", "Sensitivity protection", "Lasts 2+ years", "30-minute session"],
      price: "$350",
      duration: "45 min",
      icon: "⚡",
      gradient: "from-amber-100 to-blue-50"
    },
    {
      title: "General Checkup",
      desc: "Comprehensive dental exams with AI-assisted diagnosis for long-term oral health.",
      image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVudGFsJTIwZXhhbXMlMjB3aXRoJTIwQUktYXNzaXN0ZWQlMjBkaWFnbm9zaXN8ZW58MHx8MHx8fDA%3D",
      features: ["Full examination", "Oral cancer screening", "Digital records", "Follow-up plan"],
      price: "$90",
      duration: "45 min",
      icon: "🏥",
      gradient: "from-indigo-100 to-blue-50"
    },
  ];

  const getGradientColor = (gradient) => {
    const colors = {
      "from-blue-100 to-blue-50": "blue",
      "from-purple-100 to-blue-50": "purple",
      "from-emerald-100 to-blue-50": "emerald",
      "from-cyan-100 to-blue-50": "cyan",
      "from-amber-100 to-blue-50": "amber",
      "from-indigo-100 to-blue-50": "indigo"
    };
    return colors[gradient] || "blue";
  };

  return (
    <div className="py-24  bg-gradient-to-br from-blue-900 via-blue-100 to-blue-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full mb-4">
            Premium Dental Care
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Advanced <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Dental Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience cutting-edge dental treatments with our state-of-the-art technology and expert care team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const gradientColor = getGradientColor(service.gradient);
            
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div className={`
                  relative bg-white rounded-3xl shadow-2xl transition-all duration-500 transform
                  ${hoveredCard === index 
                    ? 'scale-105 -translate-y-4' 
                    : 'scale-100'
                  }
                  hover:shadow-3xl border border-gray-100 overflow-hidden
                `}>
                  
                  {/* Image Container with Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-blue-600 font-bold rounded-xl text-sm shadow-lg">
                        {service.price}
                      </span>
                      <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-lg">
                        {service.duration}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{service.icon}</span>
                    </div>

                    {/* Floating tags on image */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs rounded-full">
                        Popular
                      </span>
                      {index === 0 && (
                        <span className="px-3 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-xs rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-2 text-sm text-gray-500">4.9 (120)</span>
                        </div>
                      </div>
                      {hoveredCard === index && (
                        <span className="text-blue-500 text-2xl animate-bounce">→</span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed border-l-4 border-blue-100 pl-4">
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Includes:
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 group/feature">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 group-hover/feature:bg-blue-500 transition-colors duration-300">
                              <svg className="w-3 h-3 text-blue-500 group-hover/feature:text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="group-hover/feature:text-gray-900 transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <button className={`
                        px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform
                        ${hoveredCard === index 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg scale-105' 
                          : `bg-gradient-to-r from-blue-50 to-${gradientColor}-50 text-blue-600`
                        }
                        hover:shadow-xl hover:scale-105
                      `}>
                        Book Now
                      </button>
                      <div className="flex items-center gap-4">
                        <button className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 group/link">
                          <span className="flex items-center">
                            Details
                            <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors duration-300 group/favorite">
                          <svg className="w-5 h-5 text-gray-400 group-hover/favorite:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`
                    absolute inset-0 rounded-3xl border-3 pointer-events-none transition-all duration-500
                    ${hoveredCard === index 
                      ? 'border-blue-400/40 opacity-100' 
                      : 'border-transparent opacity-0'
                    }
                  `}></div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className={`absolute w-20 h-20 bg-${gradientColor}-500 rotate-45 origin-top-right -translate-y-10 translate-x-10 opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                </div>

                {/* Floating Animation for Hovered Card */}
                {hoveredCard === index && (
                  <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-300 via-blue-600 to-blue-300 rounded-3xl p-10 text-white shadow-2xl overflow-hidden">
          <div className="relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-20 -translate-x-20"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {[
                { value: "5000+", label: "Happy Patients"},
                { value: "98%", label: "Success Rate" },
                { value: "24/7", label: "Emergency Support" },
                { value: "15+", label: "Expert Dentists" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-5xl font-bold mb-2 flex items-center justify-center">
                    <span className="mr-2 text-3xl">{stat.icon}</span>
                    {stat.value}
                  </div>
                  <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6 relative z-10">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto relative z-10">
            Schedule a free consultation and get a personalized treatment plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Book Free Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
            <button className="group px-10 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now: <span className="ml-2 font-black">(123) 456-7890</span>
              </span>
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-6 relative z-10">
            ⚡ Same-day appointments available | 🛡️ 100% satisfaction guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;