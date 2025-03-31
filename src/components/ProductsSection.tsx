
import React from "react";
import { ChevronRight, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductsSectionProps {
  title: string;
  products: Array<{
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
  }>;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ title, products }) => {
  // Update the product image URLs with proper dimensions
  const updatedProducts = products.map(product => ({
    ...product,
    image: "https://via.placeholder.com/250x200"
  }));

  return (
    <section className="py-6 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button className="text-sm flex items-center text-wakeful-purple">
            See All <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {updatedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden relative group hover-scale">
              <div className="absolute top-2 right-2 z-10">
                <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-wakeful-purple">
                  <Heart size={16} />
                </button>
              </div>
              
              <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 w-auto object-contain"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button className="bg-wakeful-purple hover:bg-wakeful-dark-purple text-white text-xs py-1 px-2">
                    Add to Cart
                  </Button>
                </div>
              </div>
              
              <div className="p-3">
                <h3 className="text-sm font-medium mb-1 truncate">{product.name}</h3>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({Math.floor(Math.random() * 100) + 1})</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-bold text-wakeful-purple">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="text-xs font-semibold text-green-600 ml-2">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
