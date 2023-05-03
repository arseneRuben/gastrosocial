import { useSelector } from 'react-redux';
import RecipeItem from './RecipeItem';
import SyncIcon from '@mui/icons-material/Sync';

const RecipePage = ({recipe}) => {
      const  {recipes,isLoading}  = useSelector((state) => state.recipes);

     

      if (!recipes.length && !isLoading ) return 'Pas de recettes';
        return (
                 isLoading ? <SyncIcon /> :
                  <div className="  d-flex flex-column mb-4 box-shadow">
                         {recipes?.map((recipe) => (
                            <div  className="d-flex justify-content-around" key={recipe.id}>
                                <RecipeItem recipe={recipe}  />
                                
                             </div>
                      ))}
                  </div> 
        )
};
export default RecipePage;