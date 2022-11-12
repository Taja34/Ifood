import { collection, getDocs } from "firebase/firestore"
import { database } from "../../firebase/firebaseConfig"
import { productTypes } from "../types/userTypes";

export const getProductsAsync = () => {
    return async (dispatch) => {
        try {
            const response = await getDocs(collection(database, "productos"));
            const temporalProducts = []
            response.forEach(element => {
                temporalProducts.push({ id: element.id, data: element.data() })
            });
            console.log(temporalProducts)
            dispatch(getProductsSync(temporalProducts));

        } catch (error) {
            console.log(error)
        }
    }
}

    const getProductsSync = (products) => {
        return {
            type: productTypes.GET_PRODUCT,
            payload: products
        }
    }