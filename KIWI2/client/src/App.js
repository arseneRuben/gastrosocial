import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./component/partials/Header";
import HomePage from "./pages/homePage";
import IngredientPage from "./pages/ingredientPage";
import ProfilePage from "./pages/profilePage";
import RecipePage from "./pages/recipePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {getRecipes} from './actions/recipes'

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
          <Route path="/recipes/index" element={<RecipePage />} />
          <Route path="/ingredients/index" element={<IngredientPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;