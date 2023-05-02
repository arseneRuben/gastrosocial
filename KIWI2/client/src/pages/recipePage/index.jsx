import { useSelector } from 'react-redux';



const RecipePage = () => {
      const recipes  = useSelector((state) => state.recipes);

      //console.log(recipes.length);
        return (
            <div>
                  <h1>Liste des recettes</h1>

             </div>
        )

 
};
export default RecipePage;