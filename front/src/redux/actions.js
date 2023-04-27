import {
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  FILTER,
  ORDER,
} from "./action-types";
import axios from "axios";

// export const addToFavorites = (character) => {
//   return { type: ADD_TO_FAVORITES, payload: character };
// };

export const addToFavorites = (character) => {
  const endpoint = "http://localhost:3001/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_TO_FAVORITES,
        payload: data,
      });
    });
  };
};

export const deleteFromFavorites = (id) => {
  const endpoint = "http://localhost:3001/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: DELETE_FROM_FAVORITES,
        payload: data,
      });
    });
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
