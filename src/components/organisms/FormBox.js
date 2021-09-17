import React from "react";
import Form from "../molecules/Form";
import Footer from "../molecules/Footer";
function FormBox() {
  return (
    <div className="form-background">
      <section className="form-container" name="Contact">
        <Form />
      </section>
      <Footer />
    </div>
  );
}
export default FormBox;
