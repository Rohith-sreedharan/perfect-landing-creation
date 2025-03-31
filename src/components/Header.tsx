
import React from "react";
import { Search, ShoppingCart, User, Heart, ChevronDown, Menu } from "lucide-react";
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
            <span>Select your location</span>
            <span>|</span>
            <span>Special offers</span>
            <span>|</span>
            <span>Download app</span>
            <span>|</span>
            <span>Track order</span>
            <span>|</span>
            <span>Loyalty</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Help</span>
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
            <Button variant="ghost" className="text-white p-2 mr-2">
              <Menu size={20} />
            </Button>
            <nav className="hidden md:flex space-x-4 text-sm">
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
              <a href="#" className="flex items-center">
                New <ChevronDown size={16} />
              </a>
              <a href="#" className="flex items-center">
                Brands <ChevronDown size={16} />
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-white rounded-full text-black pl-4 pr-10 py-1.5 w-48 lg:w-64 text-sm"
              />
              <Search className="absolute right-3 top-1.5 text-gray-500" size={18} />
            </div>
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
    </header>
  );
};

export default Header;
