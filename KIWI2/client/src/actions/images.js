import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_RECIPE, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE, COMMENT, FETCH_BY_CREATOR } from '../constants/actionTypes';
import * as api from '../api';

// ACTION CREATORS

export const createImage = (recipe) => async () => {
  try {
         await api.createImage(recipe.selectedFile, recipe.id, 1);
  } catch (error) {
    console.log(error);
  }
};
