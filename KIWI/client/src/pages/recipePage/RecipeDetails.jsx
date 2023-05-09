import {  useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//Used Icons
import SyncIcon from '@mui/icons-material/Sync'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { CardMedia } from '@mui/material'

const RecipeDetails = () => {
    const  {recipe ,recipes,isLoading}  = useSelector((state) => state.recipes);
    console.log(recipe)
    //const  recipe  = recipes.find((r) => r._id === id);
    const params = useParams(), id = params.id
    // find the recipe to detail by his id
   /* fetch(`http://localhost:8000/recipes/${id}`)
    .then(response => {
         return response.json()
    })
    .then(responseObject => {
        recipe= responseObject 
    }).catch(error=>{
        console.log(error)
    })*/
    
    //const navigate = useNavigate()
    const handleAddOnGroceryList = async (e) => {
    //navigate(`/recipes/${recipe.id}`);
    };

 
    return (
        
          
             <>
                {/* Recipe section */}
                <section className="py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
                            <div className="col-md-6">
                                <div className="small mb-1">{recipe.proposedTitle}</div>
                                <h1 className="display-5 fw-bolder">{recipe.proposedTitle}</h1>
                            
                                <div className="fs-5 mb-5">
                                    <span className="text-decoration"> <FavoriteIcon /> 20</span>
                                    <div className="ratings-widget">
                                        <div   className="title">
                                            {recipe.preparationTime} mintutes
                                        </div>
                                        <div>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarBorderIcon />
                                                <StarBorderIcon />
                                        </div>
                                    </div>
                                </div>
                                <p className="lead">{recipe.proposedDescription}</p>
                                <div className="d-flex">
                                    <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1"   onChange={this.handleAddOnGroceryList}/>
                                    <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                        <i className="bi-cart-fill me-1"></i>
                                        Ajouter 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                 {/* Related recipes section */}
                 <section className="py-5 bg-light">
                    <div className="container px-4 px-lg-5 mt-5">
                        <h2 className="fw-bolder mb-4">Related recipes</h2>
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/*  Recipe image */}
                                    <CardMedia className="card-img-top" image={recipe.mainImage}  title={recipe.proposedTitle}/>
                                    {/*  Recipe details */}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                        {/*  Recipe name */}
                                            <h5 className="fw-bolder">Fancy Recipe</h5>
                                        {/*  Recipe likes */}
                                        
                                        </div>
                                    </div>
                                    {/*  Recipe actions */}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/*  Recipe image */}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    
                                    {/*  Recipe details */}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                        {/*  Recipe name */}
                                            <h5 className="fw-bolder">Fancy Recipe</h5>
                                        {/*  Recipe likes */}
                                        
                                        </div>
                                    </div>
                                    {/*  Recipe actions */}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/*  Recipe image */}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    
                                    {/*  Recipe details */}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                        {/*  Recipe name */}
                                            <h5 className="fw-bolder">Fancy Recipe</h5>
                                        {/*  Recipe likes */}
                                        
                                        </div>
                                    </div>
                                    {/*  Recipe actions */}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/*  Recipe image */}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    
                                    {/*  Recipe details */}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                        {/*  Recipe name */}
                                            <h5 className="fw-bolder">Fancy Recipe</h5>
                                        {/*  Recipe likes */}
                                        
                                        </div>
                                    </div>
                                    {/*  Recipe actions */}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </section>
            </>

        );



 
}
export default RecipeDetails;
