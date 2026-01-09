import { useState } from "react";
import { sendToGmail } from "../../utils/gmail";
import emailjs from "@emailjs/browser";

const WHATSAPP_NUMBER = "917876689520";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // ✅ WhatsApp bhejne ka function
  const sendToWhatsApp = (formData) => {
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  // ✅ Gmail bhejne ka function
  const sendToGmail = async (formData) => {
    return emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
  };

  // ✅ Ek hi button se dono kaam
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation check
    if (!data.name || !data.phone || !data.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      // Pehle Gmail bhejo
      await sendToGmail(data);
      console.log("✅ Email sent successfully!");
      
      // Phir WhatsApp kholo
      sendToWhatsApp(data);
      
      // Form reset
      setData({ name: "", phone: "", message: "" });
      
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="max-w-xl bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-1">Send us a message</h2>
      <p className="text-sm text-gray-500 mb-6">
        Fill out the form below and our team will get back to you as soon as possible
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="text-sm font-medium">Your Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium">Your Message</label>
          <textarea
            rows="4"
            placeholder="Tell us how we can help you..."
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
        </div>

        {/* ✅ Single Submit Button for Both */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
        >
          Send Message (Email + WhatsApp)
        </button>

        {/* ✅ Ya fir alag-alag buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => sendToWhatsApp(data)}
            className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
            disabled={!data.name || !data.phone || !data.message}
          >
            WhatsApp Only
          </button>
          
          <button
            type="button"
            onClick={async () => {
              try {
                await sendToGmail(data);
                alert("Email sent!");
              } catch (err) {
                alert("Failed to send email");
              }
            }}
            className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
            disabled={!data.name || !data.phone || !data.message}
          >
            Email Only
          </button>
        </div>
      </form>

      <div className="flex justify-between text-xs text-gray-500 mt-4">
        <span>✔ 100% secure & confidential</span>
        <span>🕒 24/7 support available</span>
      </div>
    </div>
  );
};

export default ContactForm;