import { START_LOADING, END_LOADING, FETCH_ALL_INGREDIENTS, FETCH_INGREDIENT, FETCH_INGREDIENT_BY_SEARCH, 
    CREATE_INGREDIENT, UPDATE_INGREDIENT, DELETE_INGREDIENT } from '../constants/actionTypes';
import * as api from '../api';

// ACTION CREATORS
export const getIngredient = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchIngredient(id);
    dispatch({ type: FETCH_INGREDIENT, payload: { recipe: data } });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error);
  }
};

export const getIngredients = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {data}  = await api.fetchIngredients();
    dispatch({ type: FETCH_ALL_INGREDIENTS, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const getRecipesByTitle = (title) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchIngredientsByTitle(title);
    dispatch({ type: FETCH_INGREDIENT_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const createIngredient = (ingredient, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createRecipe(ingredient);
    dispatch({ type: CREATE_INGREDIENT, payload: {data} });
    dispatch({ type: END_LOADING });
    history.push(`/ingredients/${data.id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateIngredient = (id, ingredient) => async (dispatch) => {
  try {
    const { data } = await api.updateRecipe(id, ingredient);
    dispatch({ type: UPDATE_INGREDIENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

