
import React from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const storesData = [
  {
    id: 1,
    name: "Wakeful Downtown",
    address: "123 Main Street, Downtown",
    city: "New York, NY 10001",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Wakeful Uptown",
    address: "456 Park Avenue, Uptown",
    city: "New York, NY 10022",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Wakeful West Side",
    address: "789 Broadway, West Side",
    city: "New York, NY 10023",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Wakeful Brooklyn",
    address: "321 Atlantic Avenue",
    city: "Brooklyn, NY 11217",
    image: "https://via.placeholder.com/300x200",
  },
];

const StoresSection = () => {
  return (
    <section className="py-6 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Wakeful Stores</h2>
          <button className="text-sm flex items-center text-wakeful-purple">
            See All Stores <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {storesData.map((store) => (
            <div key={store.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover-scale">
              <div className="h-40 bg-gray-200">
                <img
                  src={store.image}
                  alt={store.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold mb-2">{store.name}</h3>
                <div className="flex items-start text-sm text-gray-600 mb-3">
                  <MapPin size={16} className="mr-1 mt-0.5 shrink-0" />
                  <div>
                    <p>{store.address}</p>
                    <p>{store.city}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-wakeful-purple text-wakeful-purple hover:bg-wakeful-light-purple">
                  View Store
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoresSection;
