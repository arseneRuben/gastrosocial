import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect} from 'react';
import { getRecipes } from "./actions/recipes";
import { useDispatch } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./component/partials/Header";
import HomePage from "./pages/homePage";
import IngredientPage from "./pages/ingredientPage";
import ProfilePage from "./pages/profilePage";
import AuthPage from "./pages/authPage";
import RecipePage from './pages/recipePage';
import NewRecipePage from './pages/recipePage/new';
import RecipeDetails from "./pages/recipePage/RecipeDetails";



const App = () => {
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(getRecipes());
    
  }, [dispatch])
  
  return (
    <div className="container">
       <Header/>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ingredients/index" element={<IngredientPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recipes/index" element={<RecipePage />} />
          <Route path="/recipes/:id"  element={<RecipeDetails/>} />

          <Route path="/recipes/new" element={<NewRecipePage />} />
          <Route path="/auth" element={<AuthPage />} />

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
