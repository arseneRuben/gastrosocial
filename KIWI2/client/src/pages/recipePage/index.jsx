import { useSelector } from 'react-redux';
import RecipeMinShow from './recipeMinShow';
import SyncIcon from '@mui/icons-material/Sync';


const RecipePage = () => {
      const  {recipes,isLoading}  = useSelector((state) => state.recipes);

      if (!recipes.length && !isLoading ) return 'Pas de recettes';
        return (
                 isLoading ? <SyncIcon /> :
                  <div className="  d-flex flex-column mb-4 box-shadow">
                         {recipes?.map((recipe) => (
                            <div key={recipe.id}>
                                <RecipeMinShow recipe={recipe}  />
                             </div>
                      ))}
                  </div> 
        )
};
export default RecipePage;