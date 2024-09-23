import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-start bg-gray-100">
      <Header title="Car Service Blockchain" />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
