import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SyncIcon from '@mui/icons-material/Sync';
import RecipeItem from './RecipeItem';
import RecipeDetails from './RecipeDetails';
import { useState } from 'react';


const RecipePage = () => {
      const  {recipes,isLoading}  = useSelector((state) => state.recipes);
      const navigate = useNavigate();
      const [isSingleRecipe, setIsSingleRecipe] = useState(false)
      const [currentRecipe, setCurrentRecipe] = useState(false)

      const handleClick = async (e) => {
        setIsSingleRecipe(true)
      /*  fetch('http://localhost:8000/recipes/' + e.target._id, { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
               setCurrentRecipe(responseObject)
            }) */
            console.log(e.target.id)
      };

     

        return (
          <>
              <div className="jumbotron">
                    <div className="container">
                      <h1 className="display-3"> { !recipes.length && !isLoading ? 'Pas de recettes' : ' Catalogue des recettes '}</h1>     
                    </div>
              </div>
  
                 {isLoading ? <SyncIcon /> :
                
                    isSingleRecipe ? 
                        <div className="row  d-flex flex-wrap  mb-4 box-shadow" >
                              {recipes?.map((recipe) => (
                                              <RecipeItem recipe={recipe}  onClick={handleClick}  id={recipe._id}/>
                              ))}
                            
                        </div> 
                  : 
                        <RecipeDetails currentRecipeId={currentRecipe._id}/>
                }

                  </>
        )
};
export default RecipePage;