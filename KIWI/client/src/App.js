import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from "./component/partials/Header";
import HomePage from "./pages/homePage";
import CategoryPage from "./pages/Caregories/Categories";
import LoginPage from "./pages/authPage";
import ProfilePage from "./pages/profilePage";

import IngredientPage from "./pages/ingredientPage";
import NewIngredientPage from "./pages/ingredientPage/new";
import EditIngredientPage from "./pages/ingredientPage/edit";
import RecipePage from "./pages/recipePage";
import NewRecipePage from "./pages/recipePage/new";



import { useDispatch } from "react-redux";
import { useEffect , useState} from "react";
import { getRecipes } from "./actions/recipes";
import RecipeDetails from "./pages/recipePage/RecipeDetails";


function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getRecipes())
  }, [dispatch]);

  return (
    <div className="container">
      
       <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={!user ? <LoginPage /> : <ProfilePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/ingredients" element={<IngredientPage />} />
          <Route path="/ingredients/new" element={<NewIngredientPage />} />
          <Route exact path="/ingredients/edit/:id" element={<EditIngredientPage />} />


          <Route path="/recipes" element={<RecipePage    />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/new" element={<NewRecipePage    />}  />
          <Route path="/recipes/edit/:id" element={<NewRecipePage/>}  />
          <Route path="/categories" element={<CategoryPage/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
