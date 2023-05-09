import { useNavigate } from 'react-router-dom';
import { CardMedia , CardActions, Button} from '@mui/material';
import moment from 'moment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { getRecipe, deleteRecipe } from '../../actions/recipes';


const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    dispatch(getRecipe(recipe._id));
    navigate(`/recipes/${recipe._id}`);
  };
    return (
      <div className="col-md-4" key={recipe._id}>
      <div className="card mb-4 box-shadow">
        <CardMedia  image={recipe.mainImage}  title={recipe.proposed_title}    style={{ paddingTop: '56.25%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        <div className="card-body">
          <p className="card-text">{recipe.proposed_description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Button  size="small" color="primary" ><VisibilityIcon onClick={handleClick}  />  </Button>
            </div>
            <small className="text-muted">{moment(recipe.createdAt).fromNow()} </small>
            <CardActions styles={{ padding: '0 16px 8px 16px',display: 'flex',justifyContent: 'space-between',}}>
                <Button size="small" color="info"  onClick={()=> {}}>
                  <ThumbUpAltIcon fontSize='small' /> 5 Like 
                </Button>
                <Button size="small" color="secondary"  onClick={()=> dispatch(deleteRecipe(recipe._id))}>
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
