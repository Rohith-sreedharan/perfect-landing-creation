
import React from "react";
import { Button } from "@/components/ui/button";

const BannerSection = () => {
  return (
    <section className="py-6 px-4">
      <div className="container mx-auto">
        <div className="bg-wakeful-purple rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center p-6">
            <div className="md:w-1/2 text-white mb-4 md:mb-0">
              <div className="flex flex-col">
                <span className="text-sm mb-1">Best Offer of the Month</span>
                <h2 className="text-xl md:text-3xl font-bold mb-1">₹4,469</h2>
                <div className="flex items-center mb-3">
                  <span className="text-sm line-through text-gray-300 mr-2">₹5,279</span>
                  <span className="text-xs bg-green-500 text-white px-1.5 py-0.5 rounded">15% OFF</span>
                </div>
                <p className="text-sm md:text-base mb-4">Modern bedding & mattress deals</p>
                <Button className="bg-white text-wakeful-purple hover:bg-gray-100 text-sm max-w-[120px]">Shop Now</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/6919d0ef-b48b-4941-95c5-fe17f99c8c5b.png" 
                alt="Mattress Offer" 
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
