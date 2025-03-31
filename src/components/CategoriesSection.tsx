
import React from "react";
import { ChevronRight } from "lucide-react";

const categoriesData = [
  { name: "Bedroom Furniture", image: "https://via.placeholder.com/150" },
  { name: "Living Room Furniture", image: "https://via.placeholder.com/150" },
  { name: "Kitchen Furniture", image: "https://via.placeholder.com/150" },
  { name: "Office Furniture", image: "https://via.placeholder.com/150" },
  { name: "Bathroom Furniture", image: "https://via.placeholder.com/150" },
  { name: "Office Chairs", image: "https://via.placeholder.com/150" },
  { name: "TV & Media Units", image: "https://via.placeholder.com/150" },
  { name: "Coffee Tables", image: "https://via.placeholder.com/150" },
  { name: "Bookcases & Shelves", image: "https://via.placeholder.com/150" },
  { name: "Kids Furniture", image: "https://via.placeholder.com/150" },
  { name: "Wardrobes", image: "https://via.placeholder.com/150" },
  { name: "Dining Sets", image: "https://via.placeholder.com/150" },
];

const CategoriesSection = () => {
  return (
    <section className="py-6 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shop by Categories</h2>
          <button className="text-sm flex items-center text-wakeful-purple">
            See All <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categoriesData.slice(0, 12).map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer">
              <div className="h-24 bg-gray-200 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-2 text-center">
                <h3 className="text-xs font-medium truncate">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
