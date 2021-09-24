import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
async function storeGiveItemsFormData(userData) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...userData,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export default storeGiveItemsFormData;
