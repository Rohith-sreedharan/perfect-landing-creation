
import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wakeful-footer-purple text-white">
      <div className="container mx-auto pt-8 px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Delivery Information</a></li>
              <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
              <li><a href="#" className="hover:underline">How to Order</a></li>
              <li><a href="#" className="hover:underline">How to Track</a></li>
              <li><a href="#" className="hover:underline">Size Guide</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Corporate Responsibility</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Bedroom Furniture</a></li>
              <li><a href="#" className="hover:underline">Living Room Furniture</a></li>
              <li><a href="#" className="hover:underline">Office Furniture</a></li>
              <li><a href="#" className="hover:underline">Kitchen & Dining</a></li>
              <li><a href="#" className="hover:underline">Bathroom Furniture</a></li>
              <li><a href="#" className="hover:underline">Outdoor Furniture</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
            <p className="text-sm mb-4">Get the latest updates on new products and upcoming sales</p>
            <div className="flex mb-4">
              <input type="email" placeholder="Your email address" className="px-3 py-2 bg-white text-black text-sm rounded-l-md w-full" />
              <button className="bg-wakeful-purple px-4 py-2 text-white text-sm rounded-r-md">Subscribe</button>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-wakeful-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-wakeful-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-wakeful-purple">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-wakeful-purple">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Secondary footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">support@wakeful.co</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 md:items-end">
              <div className="flex space-x-2">
                <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6" />
                <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6" />
                <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6" />
                <img src="https://via.placeholder.com/40x25" alt="Apple Pay" className="h-6" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright footer */}
        <div className="border-t border-gray-700 py-4 text-xs text-center text-gray-400">
          <p>© 2023 Wakeful Co. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
