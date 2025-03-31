
import React from "react";
import { Search, Heart, ShoppingCart, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top offer banner */}
      <div className="bg-[#0E0122] text-white py-2 text-center text-sm">
        <span>Use code <span className="text-red-500 font-bold">PAYDAY</span> (till 3rd Apr) to Get upto 65% off + Additional 10% off with bank offers.</span>
      </div>
      
      {/* Main header with logo, search, and cart */}
      <div className="bg-wakeful-purple text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Menu and Logo */}
            <div className="flex items-center">
              <button className="mr-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </button>
              <Link to="/" className="flex items-center">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="none" fill="#ffffff"><path d="M21 14.25V15a2.25 2.25 0 0 1-2.25 2.25h-1.5V14.5A1.5 1.5 0 0 0 15.75 13h-1.5a1.5 1.5 0 0 0-1.5 1.5v2.75h-1.5A2.25 2.25 0 0 1 9 15v-3.5a2 2 0 0 1 .59-1.42l3-3a2 2 0 0 1 2.82 0l3 3A2 2 0 0 1 19 11.5v.75A2.25 2.25 0 0 0 21 14.25Z"/><path d="M10.5 17.25V15a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 15v2.25H3A2.25 2.25 0 0 1 .75 15v-3.5a2 2 0 0 1 .59-1.42l3-3a2 2 0 0 1 2.82 0l3 3A2 2 0 0 1 10.5 11.5Z"/></svg>
                <span className="ml-1 text-xl font-bold">
                  <span className="text-white">wake</span>
                  <span className="text-yellow-300">fit</span>
                </span>
              </Link>
            </div>
            
            {/* Search Bar */}
            <div className="relative hidden md:block max-w-md w-full">
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <Input 
                  type="text" 
                  placeholder="Search for" 
                  className="pl-10 pr-4 py-2 bg-white text-black rounded-md w-full h-9 border-0" 
                />
              </div>
            </div>
          </div>

          {/* Right Side: Become Dealer, Stores, Orders, etc */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm hidden md:block hover:text-yellow-300">Become Dealer</a>
            <a href="#" className="text-sm hidden md:block hover:text-yellow-300">Stores</a>
            <a href="#" className="text-sm hidden md:block hover:text-yellow-300">Bulk Orders</a>
            <a href="#" className="text-sm hidden md:block hover:text-yellow-300">
              <Phone size={18} />
            </a>
            <Button variant="ghost" className="text-white p-1 relative hidden md:flex">
              <Heart size={20} />
            </Button>
            <Button variant="ghost" className="text-white p-1 hidden md:flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7v4a2 2 0 0 1-2 2H7m11-8H6a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M12 4v9"/></svg>
            </Button>
            <Button variant="ghost" className="text-white p-1 relative">
              <ShoppingCart size={20} />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-orange-400 text-[10px]">10</Badge>
            </Button>
          </div>
        </div>
      </div>

      {/* Category navigation bar */}
      <div className="bg-wakeful-purple text-white py-1 border-t border-wakeful-dark-purple/30 hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Zense</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Mattress</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Bedroom</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Living</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Dining</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Study</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Furnishing</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Kitchen</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Decor</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Essentials</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Kids</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Plus Series</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Refer</a>
            <a href="#" className="text-sm py-2 px-3 hover:text-yellow-300">Offers</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
