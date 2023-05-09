import { useSelector } from 'react-redux';
import SyncIcon from '@mui/icons-material/Sync';
import RecipeItem from './RecipeItem';



const RecipePage = () => {
      const  {recipes,isLoading}  = useSelector((state) => state.recipes);

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
                                              <RecipeItem recipe={recipe}  />
                              ))}
                        </div> 
                  }

         </>
      )
};
export default RecipePage;