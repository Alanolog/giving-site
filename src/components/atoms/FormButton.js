import React from "react";
function FormButton({ data, setIsPosted }) {
  function postData() {
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setIsPosted(true);
      })
      .catch((error) => {
        console.log(error);
        setIsPosted(false);
      });
  }
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        postData();
      }}
    >
      Wyślij
    </button>
  );
}
export default FormButton;
