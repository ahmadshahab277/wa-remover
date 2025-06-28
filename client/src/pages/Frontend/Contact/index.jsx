import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Zap,
  Shield,
  Clock,
  MessageCircle,
} from "lucide-react";
import "./contact.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!\nWe'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[color:var(--ter-color)]/10 to-[color:var(--secondary-color)]/5">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--tog-color)] bg-clip-text text-transparent animate-fade-in-up">
              Let's Talk
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your images with our AI-powered background removal technology.
              Get in touch and let's create something amazing together.
            </p>
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl flex items-center justify-center animate-pulse-icon">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Quick Response</p>
                <p className="text-gray-600 text-sm">Usually within 2 hours</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg grid grid-cols-2 gap-6">
              <Feature icon={<Zap className="w-6 h-6" style={{ color: "var(--primary-color)" }} />} title="Fast Processing" desc="Instant results" />
              <Feature icon={<Shield className="w-6 h-6" style={{ color: "var(--secondary-color)" }} />} title="Secure" desc="Privacy protected" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-3 gap-10 animate-fade-in-delay">
        <div className="lg:col-span-2 bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Send className="w-6 h-6 mr-3" style={{ color: "var(--primary-color)" }} />
            Send Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField id="name" label="Full Name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
              <InputField id="email" type="email" label="Email Address" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
            </div>
            <InputField id="subject" label="Subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" />
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:border-[var(--ter-color)]"
                placeholder="Tell us about your project or question..."
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer h-14 bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--tog-color)] text-white font-bold text-lg rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <ContactCard icon={<Mail className="w-6 h-6" style={{ color: "var(--primary-color)" }} />} title="Email" desc="support@bgremover.ai" />
          <ContactCard icon={<Phone className="w-6 h-6" style={{ color: "var(--secondary-color)" }} />} title="Phone" desc="+1 (555) 123-4567" />
          <ContactCard icon={<MapPin className="w-6 h-6" style={{ color: "var(--tog-color)" }} />} title="Address" desc="123 AI Street, Tech City" />

          <QuickFeature color="primary-color" Icon={Zap} title="Lightning Fast" desc="Process images in seconds" />
          <QuickFeature color="secondary-color" Icon={Shield} title="Secure & Private" desc="We respect your privacy" />
          <QuickFeature color="tog-color" Icon={Clock} title="24/7 Support" desc="We’re always here to help" />
        </div>
      </section>
    </div>
  );
};

const InputField = ({ id, label, value, onChange, placeholder, type = "text" }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      required
      className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[var(--primary-color)]"
      placeholder={placeholder}
    />
  </div>
);

const Feature = ({ icon, title, desc }) => (
  <div className="text-center">
    <div className="w-14 h-14 bg-[color:var(--ter-color)]/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="font-bold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const ContactCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
    <div className="w-12 h-12 bg-[color:var(--primary-color)]/10 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="font-bold text-gray-800">{title}</p>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

const QuickFeature = ({ Icon, title, desc, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `var(--${color})` }}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="font-bold text-gray-800 text-lg">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

export default Contact;