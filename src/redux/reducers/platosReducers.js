import { PlatosTypes } from "../types/userTypes";


const initialState = {
  platillos: [],
};

export const platosReducers = (state = initialState, action) => {
  switch (action.type) {
      case PlatosTypes.PLATOS:
        return {
          ...state,
          platillos: action.payload.platos,
        };
    default:
      return state;
  }
};