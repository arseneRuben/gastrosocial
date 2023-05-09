import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SyncIcon from '@mui/icons-material/Sync';
import RecipeItem from './RecipeItem';
import RecipeDetails from './RecipeDetails';
import { useState } from 'react';


const RecipePage = () => {
      const  {recipes,isLoading}  = useSelector((state) => state.recipes);
      const navigate = useNavigate();
    

      const handleClick = async (e) => {
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
                
                  
                        <div className="row  d-flex flex-wrap  mb-4 box-shadow" >
                              {recipes?.map((recipe) => (
                                              <RecipeItem recipe={recipe}  onClick={handleClick}  id={recipe._id}/>
                              ))}
                            
                        </div> 
                 
                }

                  </>
        )
};
export default RecipePage;