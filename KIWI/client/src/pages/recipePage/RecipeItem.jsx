import { useNavigate } from 'react-router-dom';
import { CardMedia , CardActions, Button} from '@mui/material';
import moment from 'moment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { getRecipe, deleteRecipe, updateRecipe, likeRecipe } from '../../actions/recipes';


const RecipeItem = ({ recipe, setCurrentId }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
 

  const handleShowDetails = (e) => {
     navigate(`/recipes/${recipe._id}`);
   }
   const handleDeleteRecipe = (e) => {
    dispatch(deleteRecipe(recipe._id, navigate))
    
   }
  const handleUpdate = (e) => {
    navigate(`/recipes/edit/${recipe._id}`);
  }
 
    return (
      <div className="col-md-6" key={recipe._id}>
      <div className="card mb-4 box-shadow">
        <CardMedia  image={recipe.mainImage}  title={recipe.proposed_title} onClick={handleShowDetails}   style={{ paddingTop: '56.25%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        <div className="card-body">
          <p className="card-text">{recipe.proposed_description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Button  size="small" color="primary" ><EditIcon onClick={handleUpdate}  />  </Button>
            </div>
            <small className="text-muted">{moment(recipe.createdAt).fromNow()} </small>
            <CardActions styles={{ padding: '0 16px 8px 16px',display: 'flex',justifyContent: 'space-between',}}>
                <Button size="small" color="info" onClick={()=> dispatch(likeRecipe(recipe._id))}>
                  <ThumbUpAltIcon fontSize='small' /> 5
                </Button>
                <Button size="small" color="secondary"  onClick={handleDeleteRecipe}>
                  <DeleteForeverIcon fontSize='small' /> 
                </Button>
            </CardActions>
          </div>
        </div>
      </div>
    </div>
    )
}   

export default RecipeItem;
