
import React from "react";
import { Truck, CreditCard, Package, CheckCircle, Clock, BadgePercent, Headphones } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    { icon: <Truck size={24} />, text: "Free Delivery" },
    { icon: <CreditCard size={24} />, text: "Easy Payment" },
    { icon: <Package size={24} />, text: "7 Days Return" },
    { icon: <CheckCircle size={24} />, text: "Quality Products" },
    { icon: <Clock size={24} />, text: "24/7 Support" },
    { icon: <BadgePercent size={24} />, text: "Best Offers" },
    { icon: <Headphones size={24} />, text: "Customer Care" }
  ];

  return (
    <section className="py-6 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex overflow-x-auto scrollbar-none pb-2 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center min-w-[90px] text-center">
              <div className="w-12 h-12 rounded-full bg-wakeful-light-purple flex items-center justify-center text-wakeful-purple mb-2">
                {feature.icon}
              </div>
              <span className="text-xs font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
