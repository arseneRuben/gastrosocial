import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_RECIPE, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE, COMMENT, FETCH_BY_CREATOR } from '../constants/actionTypes';
import * as api from '../api';
import { createImage } from './images';
import { create } from '@mui/material/styles/createTransitions';
// ACTION CREATORS
export const getRecipe = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchRecipe(id);
    dispatch({ type: FETCH_RECIPE, payload: { recipe: data } });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error);
  }
};

export const getRecipes = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {  data}  = await api.fetchRecipes();
    dispatch({ type: FETCH_ALL, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getRecipesByCreator = (name) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchRecipesByCreator(name);
    dispatch({ type: FETCH_BY_CREATOR, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getRecipesBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchRecipesBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createRecipe = (recipe, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createRecipe(recipe);
    const { images } =  await api.createImage(recipe.selectedFile, recipe.id, 1);
    dispatch({ type: CREATE, payload: {data,images} });
    history.push(`/recipes/${data.id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateRecipe = (id, recipe) => async (dispatch) => {
  try {
    const { data } = await api.updateRecipe(id, recipe);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likeRecipe = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  try {
    const { data } = await api.likeRecipe(id, user?.token);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentRecipe = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);
    dispatch({ type: COMMENT, payload: data });
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const deleteRecipe = (id) => async (dispatch) => {
  try {
    await await api.deleteRecipe(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};