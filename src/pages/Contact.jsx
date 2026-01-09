import { useState } from "react";
import { sendToGmail } from "../utils/gmail";
import { sendToWhatsApp } from "../utils/whatsapp";
import { 
  UserCircle, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle,
  Loader2,
  Mail,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      sendToWhatsApp(formData);
      await sendToGmail(formData);

      setSuccess(true);
      setFormData({ name: "", phone: "", message: "" });

      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-100 to-blue-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp Message</h4>
                    <p className="text-blue-100 text-sm">Instant messaging support</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Support</h4>
                    <p className="text-blue-100 text-sm">Detailed inquiries</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                  <p className="text-sm">
                    💡 <span className="font-semibold">Tip:</span> Both WhatsApp and Email will receive your message simultaneously for faster response.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Fast Response</h4>
                <p className="text-sm text-gray-600">Usually within 1 hour</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Dual Channel</h4>
                <p className="text-sm text-gray-600">WhatsApp & Email</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Send Message</h2>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {success && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-fade-in">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                    <p className="text-green-600 text-sm">We'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <UserCircle className="inline w-4 h-4 mr-1" />
                    Full Name
                  </label>
                  <div className={`relative transition-all duration-300 ${activeField === 'name' ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <UserCircle className={`w-5 h-5 ${activeField === 'name' ? 'text-blue-500' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline w-4 h-4 mr-1" />
                    Phone Number
                  </label>
                  <div className={`relative transition-all duration-300 ${activeField === 'phone' ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Phone className={`w-5 h-5 ${activeField === 'phone' ? 'text-blue-500' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setActiveField('phone')}
                      onBlur={() => setActiveField(null)}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-1" />
                    Your Message
                  </label>
                  <div className={`relative transition-all duration-300 ${activeField === 'message' ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
                    <div className="absolute left-4 top-4">
                      <MessageSquare className={`w-5 h-5 ${activeField === 'message' ? 'text-blue-500' : 'text-gray-400'}`} />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Character Counter */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{formData.message.length}/500 characters</span>
                  <span className={`${formData.message.length > 400 ? 'text-amber-600 font-semibold' : ''}`}>
                    {formData.message.length > 400 ? 'Approaching limit' : ''}
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md group"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                      Send Message via WhatsApp & Email
                    </div>
                  )}
                </button>

                {/* Disclaimer */}
                <p className="text-center text-xs text-gray-500 pt-4 border-t border-gray-100">
                  By submitting, you agree to receive a WhatsApp message and email confirmation
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>📧 We typically respond within 1-2 business hours</p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;