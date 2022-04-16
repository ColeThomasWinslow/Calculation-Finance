import React from "react";
import CalculatorPreviews from "./CalculatorPreviews";
import Hero from "./Hero";
import InfoSection from "./InfoSection";

function HomePage() {
  return (
    <div>
      <Hero />
      <CalculatorPreviews />
      <InfoSection />
    </div>
  );
}

export default HomePage;
