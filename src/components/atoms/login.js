import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import validateEmail from "./validateEmail";

function login(email, password, setUser, setIsLogged) {
  if (!validateEmail(email) || password > 6) {
    return;
  }

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUser(user);
      setIsLogged(true);
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        setIsLogged(false);
        alert("Nie znaleziono użytkownika z takim emailem!");
      } else if (error.code === "auth/wrong-password") {
        setIsLogged(false);
        alert("Podałeś złe hasło!");
      } else {
        console.log(error);
        setIsLogged(false);
        alert(error.code, error.message);
      }
    });
}
export default login;
