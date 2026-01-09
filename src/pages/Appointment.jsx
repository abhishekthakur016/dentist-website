import useForm from "../hooks/useForm";
import Button from "../components/common/Button";
import Loader from "../components/common/Loader";
import { sendToWhatsApp } from "../utils/whatsapp";
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const validate = (values) => {
  const errors = {};

  if (!values.name) errors.name = "Patient name is required";
  if (!values.phone) errors.phone = "Phone number is required";
  if (!values.date) errors.date = "Please select appointment date";
  if (!values.time) errors.time = "Please select appointment time";

  return errors;
};

const Appointment = () => {
  const {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(
    {
      name: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    },
    validate
  );

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("general");
  const [availableSlots, setAvailableSlots] = useState([]);

  const services = [
    { id: "general", name: "General Checkup", icon: "🦷" },
    { id: "cleaning", name: "Teeth Cleaning", icon: "✨" },
    { id: "whitening", name: "Teeth Whitening", icon: "⚪" },
    { id: "ortho", name: "Orthodontics", icon: "🔗" },
    { id: "implant", name: "Dental Implants", icon: "🦴" },
    { id: "emergency", name: "Emergency", icon: "🚨" },
  ];

  const doctors = [
    { id: "dr1", name: "Dr. Sarah Johnson", specialty: "General Dentistry", available: ["09:00", "14:00"] },
    { id: "dr2", name: "Dr. Michael Chen", specialty: "Orthodontics", available: ["10:00", "15:00"] },
    { id: "dr3", name: "Dr. Emma Wilson", specialty: "Cosmetic Dentistry", available: ["11:00", "16:00"] },
  ];

  useEffect(() => {
    // Generate available time slots
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour}:00`);
      if (hour < 17) slots.push(`${hour}:30`);
    }
    setAvailableSlots(slots);
  }, []);

  const onSubmit = async (data) => {
    const appointmentDetails = {
      ...data,
      service: selectedService,
    };

    sendToWhatsApp({
      name: data.name,
      phone: data.phone,
      message: `Appointment for ${services.find(s => s.id === selectedService)?.name} on ${data.date} at ${data.time}. ${data.message}`,
    });

    resetForm();
    setSelectedService("general");
    setIsSubmitted(true);
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-6">
            <div className="px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-blue-600 font-semibold">Easy Online Booking</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Book Your <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Appointment</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Schedule your dental visit in just a few clicks. Our team will confirm your appointment shortly.
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="max-w-2xl mx-auto mb-10 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 shadow-lg transform transition-all duration-500 animate-in slide-in-from-top">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Appointment Request Sent!</h3>
                <p className="text-gray-600">
                  We've received your booking request. Our team will contact you shortly to confirm your appointment.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-5">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Schedule Your Visit</h2>
                    <p className="text-gray-600">Fill in the details below to book your appointment</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {loading && <Loader />}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(onSubmit);
                  }}
                  className="space-y-8"
                >
                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                      Select Service
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setSelectedService(service.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            selectedService === service.id
                              ? 'border-blue-500 bg-blue-50 transform -translate-y-1 shadow-md'
                              : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                          }`}
                        >
                          <div className="text-2xl mb-2">{service.icon}</div>
                          <span className={`font-medium ${
                            selectedService === service.id ? 'text-blue-600' : 'text-gray-700'
                          }`}>
                            {service.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Patient Name */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-blue-500" />
                        Patient Information
                      </div>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={values.name}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 text-lg border-2 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all duration-300 ${
                          errors.name ? 'border-red-300' : 'border-gray-200 group-hover:border-blue-300'
                        } bg-gray-50 placeholder-gray-400`}
                      />
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2 ml-1 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-blue-500" />
                        Contact Details
                      </div>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={values.phone}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 text-lg border-2 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all duration-300 ${
                          errors.phone ? 'border-red-300' : 'border-gray-200 group-hover:border-blue-300'
                        } bg-gray-50 placeholder-gray-400`}
                      />
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2 ml-1 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Date & Time Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Date Selection */}
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                          Appointment Date
                        </div>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          value={values.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full px-6 py-4 text-lg border-2 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all duration-300 appearance-none ${
                            errors.date ? 'border-red-300' : 'border-gray-200 group-hover:border-blue-300'
                          } bg-gray-50`}
                        />
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <Calendar className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      {errors.date && (
                        <p className="text-red-500 text-sm mt-2 ml-1 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Time Selection */}
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-blue-500" />
                          Preferred Time
                        </div>
                      </label>
                      <select
                        name="time"
                        value={values.time}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 text-lg border-2 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all duration-300 appearance-none ${
                          errors.time ? 'border-red-300' : 'border-gray-200 group-hover:border-blue-300'
                        } bg-gray-50`}
                      >
                        <option value="">Select a time slot</option>
                        {availableSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="text-red-500 text-sm mt-2 ml-1 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-blue-500" />
                        Additional Information
                      </div>
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        placeholder="Any specific concerns, symptoms, or special requests?"
                        value={values.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-300 bg-gray-50 placeholder-gray-400 resize-none"
                        rows="4"
                      />
                      <div className="absolute top-4 left-5 flex items-center pointer-events-none">
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      loading={loading}
                      className="w-full py-5 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 mr-3 inline" />
                          Confirm Appointment
                        </>
                      )}
                    </Button>
                    
                    {/* Privacy Note */}
                    <p className="text-center text-gray-500 text-sm mt-6">
                      By booking, you agree to our{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Info & Doctors */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Book With Us?</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Same-day appointments available</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>No cancellation fees</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Insurance accepted</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Reminder messages sent</span>
                </li>
              </ul>
            </div>

            {/* Available Doctors */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Available Doctors</h3>
              <div className="space-y-5">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{doctor.name}</h4>
                      <p className="text-gray-600 text-sm">{doctor.specialty}</p>
                      <p className="text-gray-500 text-xs mt-1">Available at: {doctor.available.join(', ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Office Hours</h3>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Emergency Only" },
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-blue-600 font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-lg bg-blue-50">
                <p className="text-blue-700 font-medium text-sm">
                  📞 For emergency appointments, call:{" "}
                  <span className="font-bold">+1 (555) 123-4567</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;