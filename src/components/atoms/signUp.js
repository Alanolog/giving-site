import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import validateEmail from "./validateEmail";
function signUp(email, password, setUser) {
  if (!validateEmail(email) || password > 6) {
    return;
  }
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      setUser(user);
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        alert("Podany email jest już używany przez kogoś innego!");
      } else {
        console.log(error);
        alert(error.code, error.message);
      }
    });
}
export default signUp;
