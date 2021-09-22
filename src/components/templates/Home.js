import React from "react";
import Hero from "../organisms/Hero";
import InfoCards from "../organisms/InfoCards";
import ReturnItems from "../molecules/ReturnItems";
import AboutUs from "../organisms/AboutUs";
import HelpInfo from "../organisms/HelpInfo";
import FormBox from "../organisms/FormBox";
function Home({ user, setUser }) {
  return (
    <>
      <Hero user={user} setUser={setUser} />
      <InfoCards />
      <ReturnItems />
      <AboutUs />
      <HelpInfo />
      <FormBox />
    </>
  );
}
export default Home;
