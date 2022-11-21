import { countTypes } from "../types/userTypes";



export const countActionAdd = (numero) => {
let suma = numero + 1
    return {
      type: countTypes.ADD,
      payload: {
        count: suma,
      },
    };
  };
  
export const countActionMinnus = (numero) => {
    let resta = numero - 1
        return {
          type: countTypes.MINNUS,
          payload: {
            count: resta,
          },
        };
      };