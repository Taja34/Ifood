
import { countTypes } from "../types/userTypes";



const initialState = {
    contador: 1,
  };
  
  export const countReducers = (state = initialState, action) => {

  
    switch (action.type) {
        case countTypes.ADD:
          return {
            ...state,
            contador: action.payload.count,
          };
          case countTypes.MINNUS:
            return {
              ...state,
              contador: action.payload.count,
            };
      default:
        return state;
    }
  };