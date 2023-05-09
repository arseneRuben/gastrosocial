import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./component/partials/Header";
import HomePage from "./pages/homePage";
import CategoryPage from "./pages/Caregories/Categories";
import LoginPage from "./pages/authPage";
import IngredientPage from "./pages/ingredientPage";
import NewIngredientPage from "./pages/ingredientPage/new";
import EditIngredientPage from "./pages/ingredientPage/edit";
import RecipePage from "./pages/recipePage";

import { useDispatch } from "react-redux";
import { useEffect , useState} from "react";
import { getRecipe, getRecipes } from "./actions/recipes";


function App() {
  const dispatch = useDispatch();
  //const [currentRecipeId , setCurrentRecipeId] = useState(null)
  useEffect(() => {
   dispatch(getRecipes())
  }, [dispatch]);

  return (
    <div className="container">
      
       <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/ingredients" element={<IngredientPage />} />
          <Route path="/ingredients/new" element={<NewIngredientPage />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/ingredients/new" element={<NewIngredientPage />} />
          <Route exact path="/ingredients/edit/:id" element={<EditIngredientPage />} />
          <Route path="/categories" element={<CategoryPage/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
