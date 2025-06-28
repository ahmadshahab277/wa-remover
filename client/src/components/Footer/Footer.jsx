import React from "react";
import { Link } from "react-router-dom";
import { Scissors, Mail, Phone, MapPin } from "lucide-react";
import '../../index.css'

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{
        background: "var(--navbar-bg)",
        borderTop: "4px solid var(--accent-color)",
        boxShadow: "0 -2px 24px rgba(0,0,0,0.18)",
        padding: "2em 0 0 0"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-[var(--accent-color)] p-2 rounded-lg">
                <Scissors className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <span className="text-[var(--accent-color)] text-xl font-bold">BG Remover</span>
            </Link>
            <p className="text-[var(--muted-text)] text-sm">
              Professional background removal powered by AI. Transform your
              images with stunning results in seconds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=" font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[var(--accent-color)] hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#features"
                  className="text-[var(--accent-color)] hover:text-white transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                {/* <Link
                  to="/pricing"
                  className="text-[var(--accent-color)] hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link> */}
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[var(--accent-color)] hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/help-center"
                  className="text-[var(--accent-color)] hover:text-white transition-colors duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/help-center"
                  className="text-[var(--accent-color)] hover:text-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[var(--accent-color)] hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-[var(--accent-color)] hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[var(--accent-color)]" />
                <span className="text-[var(--muted-text)] text-sm">
                  support@bgremover.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[var(--accent-color)]" />
                <span className="text-[var(--muted-text)] text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[var(--accent-color)]" />
                <span className="text-[var(--muted-text)] text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--accent-color)] mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[var(--muted-text)] text-sm">
            © 2024 BG Remover. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              to="/terms"
              className="text-[var(--accent-color)] hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className="text-[var(--accent-color)] hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
