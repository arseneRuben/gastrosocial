import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
 
  token: null,
  recipes: [],
  categories: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
   
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  
    setRecipes: (state, action) => {
      state.recipes = action.payload.recipes;
    },
    setRecipe: (state, action) => {
        const updatedRecipes = state.recipes.map((recipe) => {
          if (recipe.id === action.payload.recipe._id) return action.payload.recipe;
          return recipe;
        });
        state.recipe = updatedRecipes;
      },
    },
   

});

export const { setMode, setLogin, setLogout, setRecipes, setRecipe } =
  authSlice.actions;
export default authSlice.reducer;