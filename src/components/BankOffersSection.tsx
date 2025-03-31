
import React from "react";
import { ChevronRight, CreditCard, Tag, Percent } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const offersData = [
  {
    id: 1,
    title: "10% Instant Discount",
    description: "On Axis Bank Credit Card purchases above $499",
    icon: <CreditCard className="text-wakeful-purple" />,
  },
  {
    id: 2,
    title: "No-Cost EMI",
    description: "Available on select bank cards starting at $83/month",
    icon: <Tag className="text-wakeful-purple" />,
  },
  {
    id: 3,
    title: "5% Cashback",
    description: "On all Wakeful Pay Later transactions",
    icon: <Percent className="text-wakeful-purple" />,
  },
];

const BankOffersSection = () => {
  return (
    <section className="py-6 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Bank Offers</h2>
          <button className="text-sm flex items-center text-wakeful-purple">
            View All Offers <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {offersData.map((offer) => (
            <Card key={offer.id} className="border border-gray-200 hover:border-wakeful-purple transition-colors">
              <CardContent className="p-4 flex items-start">
                <div className="bg-wakeful-light-purple p-3 rounded-full mr-3">
                  {offer.icon}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{offer.title}</h3>
                  <p className="text-sm text-gray-600">{offer.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 bg-wakeful-light-purple rounded-lg p-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-lg">Wakeful Credit Card</h3>
              <p className="text-sm">Apply now and get $200 off on your first purchase + 5% unlimited cashback</p>
            </div>
            <button className="bg-wakeful-purple text-white px-4 py-2 rounded-md hover:bg-wakeful-dark-purple transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankOffersSection;
