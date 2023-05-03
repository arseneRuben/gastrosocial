import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import RecipeItem from './RecipeItem';
import SyncIcon from '@mui/icons-material/Sync';
import VisibilityIcon from '@mui/icons-material/Visibility';

const RecipePage = () => {
      const  {recipes,isLoading}  = useSelector((state) => state.recipes);
      const navigate = useNavigate();

      const handleClick = async (e) => {
        navigate(`/recipes/${e.target.id}`);
      };


      if (!recipes.length && !isLoading ) return 'Pas de recettes';
        return (
          <>
                <div className="jumbotron">
                    <div className="container">
                      <h1 className="display-3">Catalogue des recettes</h1>
                    
                    </div>
              </div>
  
                 {isLoading ? <SyncIcon /> :
                  <div className="  d-flex flex-wrap  mb-4 box-shadow">
                     

                         {recipes?.map((recipe) => (
                          <div className="card" key={recipe.id}>
                            <div className="card-body">
                              <h5 className="card-title">{recipe.proposed_title}</h5>
                             
                              <p className="card-text">{recipe.proposed_description}</p>
                             <VisibilityIcon  id={recipe.id} onClick={handleClick}/>
                              
                            </div>
                          </div>
                           
                      ))}
                      
                  </div> }
                  </>
        )
};
export default RecipePage;