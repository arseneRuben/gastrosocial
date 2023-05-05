import axios from 'axios';

const API = axios.create({ baseURL: `http://localhost:8000` });
/*
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});*/
export const createImage = (newImage, recipeId, userId) => API.post(`/recipes/${recipeId}/images`, newImage);

export const fetchRecipe = (id) => API.get(`/recipes/${id}`);
export const fetchRecipes = () => API.get(`/recipes`);
export const fetchRecipesByTitle = (title) => API.get(`/recipes/search?title=${title}`);
export const fetchRecipesByCreator = (name) => API.get(`/recipes/creator?name=${name}`);
export const fetchRecipesBySearch = (searchQuery) => API.get(`/recipes/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createRecipe = (newRecipe) => API.post(`/recipes`, newRecipe);
export const likeRecipe = (id) => API.patch(`/recipes/${id}/likeRecipe`);
export const comment = (value, id) => API.recipe(`/recipes/${id}/commentRecipe`, { value });
export const updateRecipe = (id, updatedRecipe) => API.patch(`/recipes/${id}`, updatedRecipe);
export const deleteRecipe = (id) => API.delete(`/recipes/${id}`);


export const fetchIngredient = (id) => API.get(`/ingredients/${id}`);
export const fetchIngredients = () => API.get(`/ingredients`);
export const fetchIngredientsByTitle = (title) => API.get(`/ingredients/search?title=${title}`);
export const createIngredient = (newIngredient) => API.post(`/ingredients`, newIngredient);
export const updateIngredient = (id, updatedIngredient) => API.patch(`/ingredients/${id}`, updatedIngredient);
export const deleteIngredient = (id) => API.delete(`/ingredients/${id}`);

export const signIn = (formData) => API.recipe('/users/signin', formData);
export const signUp = (formData) => API.recipe('/users/signup', formData);

export const upload  = (formData) =>API.post("/upload-images", formData);