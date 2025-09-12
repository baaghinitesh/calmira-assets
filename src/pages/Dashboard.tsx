import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroLeft from "@/components/dashboard/HeroLeft";
import HeroRight from "@/components/dashboard/HeroRight";
import ServicesSection from "@/components/dashboard/ServicesSection";
import RevealTextSection from "@/components/dashboard/RevealTextSection";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 bg-gradient-to-br from-[#07043d] via-[#550e6b] to-[#80505c]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f0664]/50 to-[#896072]/30"></div>
      </div>
      
      {/* Animated Reveal Text Section */}
      <div className="relative z-10">
        <RevealTextSection />
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      <main className="relative z-10 pt-28 pb-16 px-4 md:px-8 flex-1">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <HeroLeft />
            <HeroRight />
          </div>

          {/* Services Section */}
          <ServicesSection />
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
