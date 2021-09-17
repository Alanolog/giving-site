import React, { useState, useEffect } from "react";
import FormButton from "../atoms/FormButton";
import validateName from "../atoms/validateName";
import validateEmail from "../atoms/validateEmail";
import validateMessage from "../atoms/validateMessage";
import validationFormVisualPart from "../atoms/validationFormVisualPart";
function FormBody() {
  const [name, setName] = useState(" ");
  const [nameCorrectness, setNameCorrectness] = useState(false);
  const [email, setEmail] = useState(" ");
  const [emailCorrectness, setEmailCorrectness] = useState(false);
  const [message, setMessage] = useState(" ");
  const [messageCorrectness, setMessageCorrectness] = useState(false);
  const [isPosted, setIsPosted] = useState("");
  useEffect(() => {
    setNameCorrectness(validateName(name));
    setEmailCorrectness(validateEmail(name));
    setMessageCorrectness(validateMessage(message));
  }, [name, email, message]);
  useEffect(() => {
    validationFormVisualPart(
      nameCorrectness,
      emailCorrectness,
      messageCorrectness,
      isPosted
    );
  }, [nameCorrectness, emailCorrectness, messageCorrectness, isPosted]);
  return (
    <>
      <h2 id="succesMessage" className="hidden">
        Wiadomość została wysłana! <br /> Wkrótce się skontaktujemy.
      </h2>
      <div className="form-box">
        <label htmlFor="name" className="form-item">
          Wpisz swoje imię
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Krzysztof"
          />
          <p id="falseName" className="hidden">
            Podane imię jest nieprawidłowe!
          </p>
        </label>
        <label htmlFor="email" className="form-item" id="email">
          Wpisz swój email
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="abc@xyz.pl"
          />
          <p id="falseEmail" className="hidden">
            Podany email jest nieprawidłowy!
          </p>
        </label>
      </div>
      <label htmlFor="message" className="form-item-message" id="message">
        Wpisz swoją wiadomość
        <textarea
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          cols="43"
          rows="7"
        />
        <p id="falseMessage" className="hidden">
          Wiadomość musi mieć conajmniej 120 znaków!
        </p>
      </label>
      <FormButton
        data={{ name: name, email: email, message: message }}
        setIsPosted={setIsPosted}
      />
    </>
  );
}
export default FormBody;
