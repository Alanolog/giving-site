import React, { useState } from "react";
import FormButton from "../atoms/FormButton";
function FormBody() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="form-box">
        <label htmlFor="name" className="form-item">
          Wpisz swoje imię
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target)}
            placeholder="Krzysztof"
          />
        </label>
        <label htmlFor="email" className="form-item">
          Wpisz swój email
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target)}
            placeholder="abc@xyz.pl"
          />
        </label>
      </div>
      <label htmlFor="message" className="form-item-message">
        Wpisz swoją wiadomość
        <textarea
          name="message"
          onChange={(e) => setMessage(e.target)}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          cols="43"
          rows="7"
        />
      </label>
      <FormButton />
    </>
  );
}
export default FormBody;
