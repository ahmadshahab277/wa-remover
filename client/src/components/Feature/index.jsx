import React from "react";
import { Zap, Sparkles, Download, Shield, Clock, ImageIcon } from "lucide-react";
import './feature.css'

export default function Feature() {
  return (
    <section id="features" className="w-full py-8 md:py-12 lg:py-16 relative bg-[#F3F4F6]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-[var(--primary-color)] bg-[var(--ter-color)] animate-bounce-gentle">
              Feature
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[var(--primary-color)]">
              Why Choose Our BG Remover?
            </h2>
            <p className="max-w-[900px] text-[var(--secondary-color)] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Advanced AI technology meets user-friendly design for professional results every time.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {[
            {
              icon: <Zap className="h-6 w-6 text-[var(--primary-color)] group-hover:animate-pulse" />,
              title: "Lightning Fast",
              desc: "Remove backgrounds in under 5 seconds with our advanced AI processing."
            },
            {
              icon: <Sparkles className="h-6 w-6 text-[var(--primary-color)] group-hover:animate-spin" />,
              title: "AI Precision",
              desc: "State-of-the-art machine learning ensures pixel-perfect edge detection."
            },
            {
              icon: <Download className="h-6 w-6 text-[var(--primary-color)] group-hover:animate-bounce" />,
              title: "HD Downloads",
              desc: "Download your images in full resolution with transparent backgrounds."
            },
            {
              icon: <Shield className="h-6 w-6 text-[var(--primary-color)] group-hover:animate-pulse" />,
              title: "Privacy First",
              desc: "Your images are processed securely and deleted automatically after 24 hours."
            },
            {
              icon: <Clock className="h-6 w-6 text-[var(--primary-color)] group-hover:animate-spin" />,
              title: "Batch Processing",
              desc: "Process multiple images at once to save time on large projects."
            },
            {
              icon: <ImageIcon className="h-6 w-6 text-[var(--primary-color)] group-hover:animate-pulse" />,
              title: "All Formats",
              desc: "Support for JPG, PNG, WebP, and more. Export as PNG with transparency."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`border border-[var(--ter-color)] rounded-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up group p-6 bg-white`}
              style={{ animationDelay: `${300 + index * 200}ms` }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-[var(--ter-color)] rounded-lg flex items-center justify-center  transition-colors duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--primary-color)] text-center">{feature.title}</h3>
                <p className="text-center text-[var(--secondary-color)]">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
