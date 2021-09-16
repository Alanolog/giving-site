import React from "react";
import DecorationLine from "../atoms/DecorationLine";
import signatureImg from "../../assets/Signature.svg";
function AboutUsContent() {
  return (
    <div className="about-us-content">
      <h1>O nas</h1>
      <DecorationLine />
      <p>
        Nori grape silver beet broccoli kombu beet greens fava bean potato
        quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
        turnip greens parsnip.
      </p>
      <img src={signatureImg} alt="signature" />
    </div>
  );
}
export default AboutUsContent;
