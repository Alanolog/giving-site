import React from "react";
import AboutUsImage from "../atoms/AboutUsImage";
import AboutUsContent from "../molecules/AboutUsContent";
function AboutUs() {
  return (
    <section className="about-us" name="about-us">
      <AboutUsContent />
      <AboutUsImage />
    </section>
  );
}
export default AboutUs;
