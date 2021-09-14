import React from "react";
import Hero from "../organisms/Hero";
import InfoCards from "../organisms/InfoCards";
import ReturnItems from "../molecules/ReturnItems";
import AboutUs from "../organisms/AboutUs";
import HelpInfo from "../organisms/HelpInfo";
import FormBox from "../organisms/FormBox";
import Footer from "../organisms/Footer";
function Home() {
  return (
    <>
      <Hero />
      <InfoCards />
      <ReturnItems />
      <AboutUs />
      <HelpInfo />
      <FormBox />
      <Footer />
    </>
  );
}
export default Home;
