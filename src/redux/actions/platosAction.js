import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { PlatosTypes } from "../types/userTypes";

const collectionName1 = "platos";
const pactionFilterPaletasSync = (paletas) => {
    console.log(paletas)
    return {
      type: PlatosTypes.PLATOS,
      payload: {
        platos: paletas,
      },
    };
  };
  
  
  export const pactionFilterAsync = (searchParam) => {
    return async (dispatch) => {
      const paletasCollection = collection(dataBase, collectionName1);
      const querySnapshot = await getDocs(paletasCollection);
      const paletas = [];
      try {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          paletas.push({
            id: doc.id,
            ...doc.data(),
          });
          //   console.log(doc.id, " => ", doc.data());
        });
    console.log(paletas)
    console.log(searchParam)
        const filterdPaletas = paletas.filter((item) =>
          item.restaurante.toLowerCase().includes(searchParam.toLowerCase())
        );
        dispatch(pactionFilterPaletasSync(filterdPaletas));
      } catch (error) {
        console.error(error);
        dispatch(pactionFilterPaletasSync([]));
      }
    };
  };
  export const actionFilterPlatosAsync = (searchParam, searchValue) => {
    console.log(searchValue)
    
    console.log(searchParam)
    return async (dispatch) => {
      const paletasCollection = collection(dataBase, collectionName1);
      const q = query(paletasCollection, where(searchParam, "==", searchValue));
      const paletas = [];
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          paletas.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(pactionFilterPaletasSync(paletas));
      }
    };
  };