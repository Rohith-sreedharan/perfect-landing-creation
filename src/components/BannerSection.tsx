
import React from "react";
import { Button } from "@/components/ui/button";

const BannerSection = () => {
  return (
    <section className="py-6 px-4">
      <div className="container mx-auto">
        <div className="bg-wakeful-purple rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center p-6">
            <div className="md:w-1/2 text-white mb-4 md:mb-0">
              <h2 className="text-xl md:text-2xl font-bold mb-2">COMFORT REDEFINED</h2>
              <p className="text-sm md:text-base mb-4">Modern bedding & mattress deals</p>
              <Button className="bg-white text-wakeful-purple hover:bg-gray-100 text-sm">Shop Now</Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://via.placeholder.com/600x300" 
                alt="Mattress" 
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
