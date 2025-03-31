
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-white py-0">
      <div className="w-full">
        <Carousel className="w-full relative">
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-full h-80 md:h-[400px]">
                <img 
                  src="/lovable-uploads/f6d7613a-73ea-4aa2-a151-610c4c363ed9.png" 
                  alt="Store front view" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    "Be Spirited Away<br />by Comfort"
                  </h2>
                  <p className="text-xl mb-4">Your Neighbour Wakefit</p>
                  <Button className="bg-white text-purple-900 hover:bg-gray-100 rounded-3xl px-8">
                    Visit Us
                  </Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5">
            <span className="w-2 h-2 bg-white rounded-full opacity-100"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
          </div>
          
          <Button variant="default" className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/40 p-0 flex items-center justify-center">
            <span className="sr-only">Previous</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </Button>
          
          <Button variant="default" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/40 p-0 flex items-center justify-center">
            <span className="sr-only">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Button>
        </Carousel>
      </div>
      
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 border rounded-lg p-4 flex items-center">
            <div className="w-1/5">
              <img 
                src="https://via.placeholder.com/80x80" 
                alt="Sale" 
                className="w-16 h-16 object-cover" 
              />
            </div>
            <div className="w-4/5">
              <p className="text-gray-700 font-medium">Sale Ends In:</p>
              <div className="flex gap-1 text-xl font-bold text-red-600">
                <div>03</div>
                <div>:</div>
                <div>16</div>
                <div>:</div>
                <div>28</div>
                <div>:</div>
                <div>50</div>
              </div>
              <div className="flex gap-1 text-xs text-gray-600">
                <div className="w-6 text-center">Days</div>
                <div className="w-2"></div>
                <div className="w-6 text-center">Hrs</div>
                <div className="w-2"></div>
                <div className="w-6 text-center">Mins</div>
                <div className="w-2"></div>
                <div className="w-6 text-center">Secs</div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 border rounded-lg p-4 flex">
            <div className="flex gap-6 w-full">
              <div className="text-center flex-1">
                <div className="w-10 h-10 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-1">
                  <span className="text-purple-600 text-xl">😊</span>
                </div>
                <p className="text-xs">25 Lakhs+ Customers</p>
              </div>
              
              <div className="text-center flex-1">
                <div className="w-10 h-10 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-1">
                  <span className="text-purple-600">🚚</span>
                </div>
                <p className="text-xs">Free Shipping</p>
              </div>
              
              <div className="text-center flex-1">
                <div className="w-10 h-10 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-1">
                  <span className="text-purple-600">🔧</span>
                </div>
                <p className="text-xs">Free Installation</p>
              </div>
              
              <div className="text-center flex-1">
                <div className="w-10 h-10 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-1">
                  <span className="text-purple-600">🛡️</span>
                </div>
                <p className="text-xs">Best Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
