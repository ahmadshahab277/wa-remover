import React from "react";
import Hero from "../../../components/Hero";
import Works from "../../../components/Works";
import Feature from "../../../components/Feature";
import CTA from "../../../components/CTA";
import Testimonials from "../../../components/Testimonials";
import Picture from "../../../components/Picture";
import BgRemover from "../../../components/BgRemover";
import { SampleSec } from "../../../components/SampleSec";
import sampleImg from '../../../assets/Images/img-2.jpg';
import bgRemoverImg from '../../../assets/Images/img-3.jpg';
import worksImg from '../../../assets/Images/img-4.jpg';

export default function Home() {
  return (
    <div style={{ background: "var(--background-color)", minHeight: "100vh" }}>
      <section className="card" style={{ marginTop: 32 }}>
        <Hero />
      </section>
      <section className="card">
        <SampleSec image={sampleImg}/>
      </section>
      <section className="card">
        <BgRemover image={bgRemoverImg}/>
      </section>
      <section className="card">
        <Works image={worksImg}/>
      </section>
      <section className="card">
        <Feature />
      </section>
      <section className="card">
        <CTA />
      </section>
      <section className="card">
        <Picture />
      </section>
      <section className="card">
        <Testimonials />
      </section>
    </div>
  );
}
