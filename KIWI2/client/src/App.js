import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./component/partials/Header";
import HomePage from "./pages/homePage";
import IngredientPage from "./pages/ingredientPage";
import RecipePage from './pages/recipePage';
import Footer from "./component/Footer";
import NewRecipePage from './pages/recipePage/new';



const App = () => {

 
  
  return (
    <div className="container">
       <Header/>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ingredients/index" element={<IngredientPage />} />
          <Route path="/recipes/index" element={<RecipePage />} />
          <Route path="/recipes/new" element={<NewRecipePage />} />
                    

        </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;