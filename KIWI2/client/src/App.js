import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import NewIngredientPage from './pages/ingredientPage/new';

import RecipeDetails from "./pages/recipePage/RecipeDetails";



const App = () => {
 
  
  return (
    <div className="container">
       <Header/>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ingredients/index" element={<IngredientPage />} />
          <Route path="/ingredients/new" element={<NewIngredientPage />} />


          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recipes/index" element={<RecipePage />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/recipes/index/recipes/:id"  element={<RecipeDetails/>} />
          <Route path="/recipes/new" element={<NewRecipePage />} />
          <Route path="/auth" element={<AuthPage />} />

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
