import {
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  FILTER,
  ORDER,
} from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };
    case DELETE_FROM_FAVORITES:
      return { ...state, myFavorites: payload };
    case FILTER:
      const allCharsFiltered = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: allCharsFiltered,
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default reducer;
