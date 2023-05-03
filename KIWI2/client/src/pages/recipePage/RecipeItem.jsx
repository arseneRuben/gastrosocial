import { useNavigate } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    navigate(`/recipes/${recipe.id}`);
  };
    return (
        <div className="card-body d-flex flex-column align-items-start">
        
          <h3 className="mb-0" onClick={handleClick}>{recipe.adopted_title}</h3>
          <div className="mb-1 text-muted">
          <p className="card-text mb-auto">{recipe.adopted_description} 
          </p></div>
        </div>
    )
}   

export default RecipeItem;
