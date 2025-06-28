import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UploadPage from "./UploadPage";
import About from "./About";
import Pricing from "./Pricing";
import Bgremoval from "./Bgremoval";
import Contact from "./Contact";
import BgBlurr from "./BgBlurr";
import BgCustom from "./BgCustom";
import Ecommerce from "./Ecommerce";
import Photographer from "./Photographer";
import AppDeveloper from "./AppDeveloper";
import HelpCenter from "./HelpCenter";
export default function Frontend() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="upload" element={<UploadPage />} />
      <Route path="about" element={<About />} />
      // <Route path="pricing" element={<Pricing />} />
      <Route path="background-removal" element={<Bgremoval />} />
      <Route path="blur-background" element={<BgBlurr />} />
      <Route path="custom-background" element={<BgCustom />} />
      <Route path="ecommerce" element={<Ecommerce />} />
      <Route path="photographer" element={<Photographer />} />
      <Route path="app-developer" element={<AppDeveloper />} />
      <Route path="contact" element={<Contact />} />
      <Route path="help-center" element={<HelpCenter />} />
    </Routes>
  );
}
