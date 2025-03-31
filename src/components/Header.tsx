
import React from "react";
import { Search, ShoppingCart, User, Heart, ChevronDown, Menu, Phone, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar with location, offers, etc */}
      <div className="bg-wakeful-dark-purple text-white text-xs py-1 px-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone size={12} className="mr-1" />
              <span>Contact: +1 800 123 4567</span>
            </span>
            <span>|</span>
            <span className="flex items-center">
              <HelpCircle size={12} className="mr-1" />
              <span>Help Center</span>
            </span>
            <span>|</span>
            <span>Free shipping over $35</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Track Order</span>
            <span>|</span>
            <span>Login</span>
            <span>|</span>
            <span>EN</span>
          </div>
        </div>
      </div>

      {/* Main header with logo, search, and cart */}
      <div className="bg-wakeful-purple text-white py-3 px-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold mr-8">
              <span className="text-white">wake</span>
              <span className="text-yellow-300">ful</span>
            </Link>
            <Button variant="ghost" className="text-white p-2 mr-2 md:hidden">
              <Menu size={20} />
            </Button>
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-white rounded-full text-black pl-4 pr-10 py-1.5 w-64 lg:w-96 text-sm"
              />
              <Button className="absolute right-0 top-0 rounded-l-none rounded-r-full bg-gray-200 hover:bg-gray-300 text-gray-700 h-full px-3">
                <Search size={18} />
              </Button>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6 text-sm mx-4">
            <a href="#" className="flex items-center">
              Home <ChevronDown size={16} />
            </a>
            <a href="#" className="flex items-center">
              Shop <ChevronDown size={16} />
            </a>
            <a href="#" className="flex items-center">
              Sale <ChevronDown size={16} />
            </a>
            <a href="#" className="flex items-center">
              Deals <ChevronDown size={16} />
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-white p-1">
              <Search className="md:hidden" size={20} />
            </Button>
            <Button variant="ghost" className="text-white p-1 relative">
              <Heart size={20} />
              <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-red-500 text-[10px]">2</Badge>
            </Button>
            <Button variant="ghost" className="text-white p-1">
              <User size={20} />
            </Button>
            <Button variant="ghost" className="text-white p-1 relative">
              <ShoppingCart size={20} />
              <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-red-500 text-[10px]">3</Badge>
            </Button>
          </div>
        </div>
      </div>

      {/* Category navigation bar */}
      <div className="bg-wakeful-dark-purple text-white py-2 px-4 hidden md:block">
        <div className="container flex justify-between items-center">
          <nav className="flex space-x-6 text-xs">
            <a href="#" className="hover:text-yellow-300">Bedroom</a>
            <a href="#" className="hover:text-yellow-300">Living Room</a>
            <a href="#" className="hover:text-yellow-300">Dining</a>
            <a href="#" className="hover:text-yellow-300">Office</a>
            <a href="#" className="hover:text-yellow-300">Kitchen</a>
            <a href="#" className="hover:text-yellow-300">Bathroom</a>
            <a href="#" className="hover:text-yellow-300">Kids Room</a>
            <a href="#" className="hover:text-yellow-300">Outdoor</a>
            <a href="#" className="hover:text-yellow-300">Decor</a>
            <a href="#" className="hover:text-yellow-300">Lighting</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
