
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CategoriesSection from "@/components/CategoriesSection";
import BankOffersSection from "@/components/BankOffersSection";
import StoresSection from "@/components/StoresSection";
import BannerSection from "@/components/BannerSection";
import ProductsSection from "@/components/ProductsSection";
import GiftSection from "@/components/GiftSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

// Mock data for products
const topSellingProducts = [
  {
    id: 1,
    name: "Modern Sofa Set",
    price: 899,
    originalPrice: 1299,
    image: "https://via.placeholder.com/150",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Wooden Coffee Table",
    price: 249,
    originalPrice: 399,
    image: "https://via.placeholder.com/150",
    rating: 4.0,
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 189,
    originalPrice: 299,
    image: "https://via.placeholder.com/150",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Queen Size Bed Frame",
    price: 499,
    originalPrice: 699,
    image: "https://via.placeholder.com/150",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Dining Table Set",
    price: 699,
    originalPrice: 999,
    image: "https://via.placeholder.com/150",
    rating: 4.6,
  },
];

const newLaunchProducts = [
  {
    id: 6,
    name: "Modern Bookshelf",
    price: 199,
    image: "https://via.placeholder.com/150",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Accent Chair",
    price: 159,
    image: "https://via.placeholder.com/150",
    rating: 4.2,
  },
  {
    id: 8,
    name: "Standing Desk",
    price: 349,
    image: "https://via.placeholder.com/150",
    rating: 4.7,
  },
  {
    id: 9,
    name: "Floor Lamp",
    price: 89,
    image: "https://via.placeholder.com/150",
    rating: 4.0,
  },
  {
    id: 10,
    name: "Wall Shelf Set",
    price: 79,
    image: "https://via.placeholder.com/150",
    rating: 4.3,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CategoriesSection />
        <BankOffersSection />
        <BannerSection />
        <ProductsSection title="Top Selling Products" products={topSellingProducts} />
        <ProductsSection title="New Launches" products={newLaunchProducts} />
        <StoresSection />
        <GiftSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
