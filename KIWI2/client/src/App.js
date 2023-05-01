
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import AuthPage from "./pages/authPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from "./component/partials/Header";
import RecipePage from "./pages/recipePage/index";
import ProfilePage from "./pages/profilePage";


function App() {
  return (
    <div className="container">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/auth" element={<AuthPage />} />
          <Route path="/recipe/index" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
