import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./component/partials/Header";
import HomePage from "./pages/homePage";
import IngredientPage from "./pages/ingredientPage";
import ProfilePage from "./pages/profilePage";
import Footer from "./component/Footer";



const App = () => {

 
  
  return (
    <div className="container">
       <Header/>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ingredients/index" element={<IngredientPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          

        </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;