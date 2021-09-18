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
      .then((r) => {
        console.log(r);
        if (r.status === 400) {
          setIsPosted(false);
        } else if (r.status === 200) {
          setIsPosted(true);
        }
        return r.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
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
