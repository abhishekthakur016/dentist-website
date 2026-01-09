import {
  FaUserMd,
  FaTooth,
  FaSmile,
  FaShieldAlt,
  FaStar,
  FaClock,
  FaHeadset,
  FaAward,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserMd />,
    title: "Expert Dentists",
    desc: "Board-certified dental professionals with 10+ years of clinical experience and continuous training.",
    highlight: "15+ Specialists",
  },
  {
    icon: <FaTooth />,
    title: "Advanced Technology",
    desc: "Digital scanners, laser dentistry, and 3D imaging for precise, pain-free treatments and faster recovery.",
    highlight: "Pain-Free",
  },
  {
    icon: <FaSmile />,
    title: "Personalized Care",
    desc: "Customized treatment plans focused on your comfort, goals, and long-term oral health success.",
    highlight: "Patient-First",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safety & Hygiene",
    desc: "Hospital-grade sterilization, single-use instruments, and strict infection control protocols.",
    highlight: "100% Sterile",
  },
  {
    icon: <FaClock />,
    title: "Flexible Hours",
    desc: "Evening and weekend appointments with minimal waiting time to fit your busy schedule.",
    highlight: "Open 7 Days",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Emergency dental care and after-hours support for urgent dental concerns anytime.",
    highlight: "Emergency Ready",
  },
  {
    icon: <FaAward />,
    title: "Award-Winning",
    desc: "Recognized as the top dental clinic for patient satisfaction and clinical excellence.",
    highlight: "Top Rated",
  },
  {
    icon: <FaStar />,
    title: "5-Star Experience",
    desc: "Luxurious amenities, comfortable environment, and attentive care from start to finish.",
    highlight: "Luxury Care",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20  bg-gradient-to-br from-blue-800 via-blue-100 to-blue-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
              Why We're Different
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience The{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                DentalCare Difference
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with compassionate care to deliver 
            exceptional dental experiences that put your comfort and health first.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600 font-medium">Patient Satisfaction</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-sm text-gray-600 font-medium">Successful Treatments</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">15 Min</div>
              <div className="text-sm text-gray-600 font-medium">Average Wait Time</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Emergency Support</div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent transform rotate-45 translate-x-8 -translate-y-8"></div>
              </div>

              {/* Icon Container */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center h-20 w-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-3xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {item.highlight}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:text-blue-700 group-hover:gap-3 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row (Additional Features) */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.slice(4).map((item, index) => (
            <div
              key={index + 4}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-xl shadow-md">
                  {item.icon}
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-full text-xs font-medium mb-2">
                    {item.highlight}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Premium Dental Care?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied patients who trust us with their smiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointment"
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <FaStar className="w-4 h-4" />
                Book Premium Appointment
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
              >
                Call Now: (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;