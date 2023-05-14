import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_RECIPE, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE, COMMENT, FETCH_BY_CREATOR } from '../constants/actionTypes';
import * as api from '../api';

// ACTION CREATORS
export const getRecipe = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const  data  = await api.fetchRecipe(id);
   
    dispatch({ type: FETCH_RECIPE, payload: { recipe: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getRecipes = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const   data  = await api.fetchRecipes();
    dispatch({ type: FETCH_ALL, payload: { data } });
    
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createRecipe = (recipe, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const data  = await api.createRecipe(recipe);
    dispatch({ type: CREATE, payload: {data} });
    navigate('/recipes')
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const updateRecipe = (id, recipe) => async (dispatch) => {
  try {
    const  data  = await api.updateRecipe(id, recipe);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRecipe = (id,navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
     await api.deleteRecipe(id);
    dispatch({ type: DELETE, payload: id });
    navigate('/recipes')
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};



export const likeRecipe = (id) => async (dispatch) => {
  //const user = JSON.parse(localStorage.getItem('profile'));
  try {
    const { data } = await api.likeRecipe(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


/*
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
export const getRecipesByTitle = (title) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchRecipesByTitle(title);
    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
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
};*/