import React, { useState } from "react";
import { ChevronDown, Mail, PhoneCall, Info } from "lucide-react";
import "./helpcenter.css";

const faqs = [
  {
    question: "How do I remove background from an image?",
    answer: "Go to the Background Removal tool, upload your image, and it will automatically process it for you.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes, we offer free usage with limited credits. For extended access, view our pricing plans.",
  },
  {
    question: "What image formats are supported?",
    answer: "We support JPG, PNG, WebP, and more common image formats.",
  },
  {
    question: "How secure is my data?",
    answer: "Your data is protected and we do not store your images after processing. Read our Privacy Policy for details.",
  },
  {
    question: "Can I use this for my business?",
    answer: "Yes! We offer enterprise and developer plans for businesses. Contact us for custom integration options.",
  },
  {
    question: "Do you offer API access?",
    answer: "Yes, our API allows developers to integrate background removal into their apps or workflows.",
  },
];

export default function HelpCenter() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-16">
      <h2 className="text-4xl font-bold text-center text-[var(--primary-color)]">
        Help Center
      </h2>

      {/* FAQs */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-50 transition-all"
            >
              <span className="font-medium text-gray-800 text-lg">{faq.question}</span>
              <ChevronDown
                className={`transform transition-transform duration-300 text-[var(--primary-color)] ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-5 pb-4 text-gray-700 text-sm transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p className="pt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="rounded-xl shadow-lg bg-[var(--secondary-color)] p-6 text-white space-y-4">
        <h3 className="text-2xl font-semibold flex items-center gap-2">
          <Mail className="text-white" /> Need Further Assistance?
        </h3>
        <p className="text-sm">
          Contact our support team for technical help, billing queries, or enterprise solutions. We're here for you 24/7!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:support@yourapp.com"
            className="bg-white text-[var(--primary-color)] font-semibold px-4 py-2 rounded-md transition hover:bg-[var(--tog-color)] hover:text-white"
          >
            Email Us
          </a>
          <a
            href="tel:+1234567890"
            className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[var(--primary-color)] transition text-white font-semibold"
          >
            <PhoneCall size={16} className="inline mr-1" />
            +1 234 567 890
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition group">
          <h4 className="text-xl font-semibold text-[var(--primary-color)] mb-2">API Documentation</h4>
          <p className="text-sm text-gray-600 mb-3">Integrate our background remover in your app using our API.</p>
          <a
            href="/docs"
            className="text-[var(--ter-color)] font-semibold group-hover:underline"
          >
            View Docs →
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition group">
          <h4 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Plans & Pricing</h4>
          <p className="text-sm text-gray-600 mb-3">See our free and premium options that fit your needs.</p>
          <a
            href="/pricing"
            className="text-[var(--ter-color)] font-semibold group-hover:underline"
          >
            Explore Plans →
          </a>
        </div>
      </div>
    </section>
  );
}
