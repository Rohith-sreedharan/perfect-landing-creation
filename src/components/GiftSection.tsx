
import React from "react";
import { Button } from "@/components/ui/button";
import { GiftIcon } from "lucide-react";

const GiftSection = () => {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="bg-pink-50 rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-4 md:mb-0">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-wakeful-purple">
                Gifting with Wakeful
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Send digital gift cards to your loved ones for any occasion
              </p>
              <Button className="bg-wakeful-purple hover:bg-wakeful-dark-purple text-white">
                Shop Gift Cards
              </Button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src="https://via.placeholder.com/250"
                alt="Gift Cards"
                className="h-32 md:h-40 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-4 md:mb-0">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-wakeful-purple">
                Wakeful for Business
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Get 10% discount for bulk orders
              </p>
              <Button className="bg-wakeful-purple hover:bg-wakeful-dark-purple text-white">
                Get Started
              </Button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src="https://via.placeholder.com/250"
                alt="Business Account"
                className="h-32 md:h-40 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
