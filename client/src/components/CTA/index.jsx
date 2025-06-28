import React from "react";
import { Upload } from "lucide-react";
import {useNavigate} from 'react-router-dom'
import {useLoading} from '../../contexts/LoaderContext'
import "./cta.css";


export default function CTA() {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--primary-color)] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/50 via-transparent to-[var(--primary-color)]/50 animate-gradient-x"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-white/20 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-white/40 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-white/10 rounded-full animate-float animation-delay-3000"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white animate-gradient-text">
              Ready to Remove Backgrounds?
            </h2>
            <p className="mx-auto max-w-[600px] text-[var(--ter-color)] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Start removing backgrounds from your images today. No signup
              required for your first image.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 animate-fade-in-up animation-delay-500">
            <button className="button2 flex items-center justify-center gap-2" onClick={()=>{navigate("/upload") ; setLoading(true)}}>
              <Upload className="h-5 w-5 bounce-icon" />
              Upload Your First Image
            </button>
            <p className="text-xs text-[var(--ter-color)] animate-pulse">
              Free to try • No credit card required • HD quality downloads
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
