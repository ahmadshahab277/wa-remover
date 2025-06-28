"use client";

import { useState } from "react";
import {
  Check,
  X,
  HelpCircle,
  Zap,
  Shield,
  Download,
  Star,
} from "lucide-react";
import "./pricing.css";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for occasional use and trying out the service",
      price: {
        monthly: 0,
        yearly: 0,
      },
      features: [
        { name: "5 images per day", included: true },
        { name: "Standard quality", included: true },
        { name: "Basic background removal", included: true },
        { name: "JPG downloads", included: true },
        { name: "Email support", included: false },
        { name: "Batch processing", included: false },
        { name: "Transparent PNG downloads", included: false },
        { name: "API access", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description: "For professionals and content creators",
      price: {
        monthly: 12,
        yearly: 9,
      },
      features: [
        { name: "Unlimited images", included: true },
        { name: "HD quality", included: true },
        { name: "Advanced AI processing", included: true },
        { name: "All file formats", included: true },
        { name: "Priority email support", included: true },
        { name: "Batch processing", included: true },
        { name: "Transparent PNG downloads", included: true },
        { name: "API access", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For businesses with high-volume needs",
      price: {
        monthly: 29,
        yearly: 24,
      },
      features: [
        { name: "Unlimited images", included: true },
        { name: "Ultra HD quality", included: true },
        { name: "Advanced AI processing", included: true },
        { name: "All file formats", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Batch processing", included: true },
        { name: "Transparent PNG downloads", included: true },
        { name: "API access", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How does the background removal work?",
      answer:
        "Our AI-powered technology analyzes your image to identify the subject and separate it from the background. The process is fully automated and takes just seconds to complete.",
    },
    {
      question: "Can I try before I buy?",
      answer:
        "Yes! Our Free plan allows you to process up to 5 images per day. You can also start a 7-day free trial of our Pro plan with no credit card required.",
    },
    {
      question: "What file formats are supported?",
      answer:
        "We support JPG, PNG, and WebP formats for uploads. Depending on your plan, you can download your processed images in various formats including PNG with transparency.",
    },
    {
      question: "Is there a limit to image size?",
      answer:
        "Free users can upload images up to 5MB in size. Pro and Enterprise users can upload images up to 25MB with no resolution limits.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your plan until the end of your billing period.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <main className=" mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center max-w-7xl mx-auto mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-[var(--secondary-color)] mb-8">
            Choose the perfect plan for your background removal needs. No hidden
            fees.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span
              className={`text-sm ${
                !isYearly
                  ? "text-[var(--primary-color)] font-medium"
                  : "text-[var(--secondary-color)]"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-12 mx-3 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[var(--ter-color)] transition-colors duration-200 ease-in-out focus:outline-none"
              role="switch"
              aria-checked={isYearly}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm ${
                isYearly
                  ? "text-[var(--primary-color)] font-medium"
                  : "text-[var(--secondary-color)]"
              }`}
            >
              Yearly{" "}
              <span className="text-green-600 font-medium">(Save 25%)</span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, ) => (
              <div
                key={plan.name}
                className={`pricing-card bg-white rounded-xl shadow-sm border ${
                  plan.popular
                    ? "border-[var(--tog-color)] popular-plan"
                    : "border-[var(--ter-color)]"
                } overflow-hidden`}
              >
                {plan.popular && (
                  <div className="bg-[var(--primary-color)] text-white text-xs font-bold uppercase tracking-wider py-1 popular-badge">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--primary-color)]">
                    {plan.name}
                  </h3>
                  <p className="text-[var(--secondary-color)] h-12 mt-1">
                    {plan.description}
                  </p>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold text-[var(--primary-color)]">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-[var(--secondary-color)] ml-1">
                      {plan.price.monthly > 0 ? "/month" : ""}
                    </span>
                    {isYearly && plan.price.yearly > 0 && (
                      <div className="text-green-600 text-sm font-medium mt-1">
                        Billed annually
                      </div>
                    )}
                  </div>

                  <button
                    className={`w-full py-2 px-4 rounded-md font-medium transition-colors cursor-pointer ${
                      plan.popular
                        ? "bg-[var(--primary-color)] hover:bg-[var(--tog-color)] text-white pulse-animation"
                        : "bg-[var(--ter-color)] hover:bg-[var(--secondary-color)] text-[var(--primary-color)] hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                <div className="border-t border-[var(--ter-color)] p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                        )}
                        <span
                          className={
                            feature.included
                              ? "text-[var(--primary-color)]"
                              : "text-[var(--secondary-color)]/70"
                          }
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Comparison */}
        <section className="max-w-7xl mx-auto mb-16 fade-in animation-delay-300">
          <h2 className="text-3xl font-bold text-[var(--primary-color)] text-center mb-8">
            Compare All Features
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--ter-color)]">
                  <th className="py-4 px-6 text-left text-[var(--primary-color)] font-medium">
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`py-4 px-6 text-center ${
                        plan.popular
                          ? "text-[var(--tog-color)] font-bold"
                          : "text-[var(--primary-color)] font-medium"
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--ter-color)]">
                  <td className="py-4 px-6 text-[var(--primary-color)] font-medium">
                    Images per month
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    150 (5/day)
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)] bg-[var(--ter-color)]/50">
                    Unlimited
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    Unlimited
                  </td>
                </tr>
                <tr className="border-b border-[var(--ter-color)]">
                  <td className="py-4 px-6 text-[var(--primary-color)] font-medium">
                    Max file size
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    5MB
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)] bg-[var(--ter-color)]/50">
                    15MB
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    25MB
                  </td>
                </tr>
                <tr className="border-b border-[var(--ter-color)]">
                  <td className="py-4 px-6 text-[var(--primary-color)] font-medium">
                    Output quality
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    Standard
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)] bg-[var(--ter-color)]/50">
                    HD
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    Ultra HD
                  </td>
                </tr>
                <tr className="border-b border-[var(--ter-color)]">
                  <td className="py-4 px-6 text-[var(--primary-color)] font-medium">
                    Transparent background
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)] bg-[var(--ter-color)]/50">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-[var(--ter-color)]">
                  <td className="py-4 px-6 text-[var(--primary-color)] font-medium">
                    Batch processing
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)] bg-[var(--ter-color)]/50">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-[var(--ter-color)]">
                  <td className="py-4 px-6 text-[var(--primary-color)] font-medium">
                    API access
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)] bg-[var(--ter-color)]/50">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-[var(--ter-color)]">
                  <td className="py-4 px-6 text-[var(--primary-color)] font-medium">
                    Customer support
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    Email
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)] bg-[var(--ter-color)]/50">
                    Priority Email
                  </td>
                  <td className="py-4 px-6 text-center text-[var(--secondary-color)]">
                    24/7 Priority
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto mb-16  fade-in animation-delay-500">
          <h2 className="text-3xl font-bold text-[var(--primary-color)] text-center mb-12">
            Why Choose Our Service?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-6 rounded-xl shadow-sm border border-[var(--ter-color)]">
              <div className="w-12 h-12 bg-[var(--ter-color)] rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="font-bold text-[var(--primary-color)] mb-2">
                Lightning Fast
              </h3>
              <p className="text-[var(--secondary-color)]">
                Our AI processes your images in seconds, not minutes. Get your
                background-free images instantly.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-xl shadow-sm border border-[var(--ter-color)]">
              <div className="w-12 h-12 bg-[var(--ter-color)] rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2">
                Privacy First
              </h3>
              <p className="text-[var(--secondary-color)]">
                Your images are processed securely and deleted automatically. We
                never share your data.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-xl shadow-sm border border-[var(--ter-color)]">
              <div className="w-12 h-12 bg-[var(--ter-color)] rounded-lg flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2">
                HD Quality
              </h3>
              <p className="text-[var(--secondary-color)]">
                Download your images in high definition with perfect edge
                detection and no quality loss.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto mb-16 fade-in animation-delay-700">
          <h2 className="text-3xl font-bold text-[var(--primary-color)] text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-white rounded-lg shadow-sm border border-[var(--ter-color)] overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h4 className="font-medium text-[var(--primary-color)]">
                      {faq.question}
                    </h4>
                    <div className="faq-icon">
                      <HelpCircle className="h-5 w-5 text-[var(--primary-color)]" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-[var(--secondary-color)]">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
