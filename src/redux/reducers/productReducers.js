import { productTypes } from "../types/userTypes";

const initialState = {
  productos: [],
};

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case productTypes.PALETAS_GET:
      return {
        ...state,
        productos: action.payload.paletas,
          };
      case productTypes.PALETAS_ADD:
          return {
              ...state,
              paletas: [
                  ...state.paletas,
                  action.payload
              ]
          }
          case productTypes.PALETAS_FILTERED:
      return {
        ...state,
        productos: action.payload.paletas,
      };
 
    default:
      return state;
  }
};