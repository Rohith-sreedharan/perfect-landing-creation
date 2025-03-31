
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-wakeful-light-purple py-4 px-4">
      <div className="container mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="bg-gradient-to-r from-wakeful-purple to-wakeful-dark-purple rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="p-6 md:p-10 text-white md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      <span className="text-white">Salary Sale</span>
                    </h1>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl md:text-3xl font-bold text-white">UP TO </span>
                      <span className="text-3xl md:text-5xl font-bold text-yellow-300 mx-2">65% OFF</span>
                    </div>
                    <p className="text-lg mb-6">on Furniture & Mattresses</p>
                    <Button className="bg-white text-wakeful-purple hover:bg-gray-100">Shop Now</Button>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="/lovable-uploads/89839d97-0e25-4811-a5ea-ec92e397491f.png" 
                      alt="Man with furniture" 
                      className="object-contain h-48 md:h-72 mx-auto"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-2 h-2 bg-wakeful-purple rounded-full opacity-100"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full opacity-50"></span>
          </div>
          <CarouselPrevious className="left-2 bg-white/80" />
          <CarouselNext className="right-2 bg-white/80" />
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
