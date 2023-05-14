
import { Component } from 'react'

//Used Icons
import StarIcon from '@mui/icons-material/Star'
import SyncIcon from '@mui/icons-material/Sync';

import StarBorderIcon from '@mui/icons-material/StarBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { CardMedia } from '@mui/material'
import withRouter from '../withRouter'
import StepItemComponent from './StepItemComponent'
import IngredientItemComponent from './IngredientItemComponent';

class RecipeDetails extends Component{
    constructor (props) {
        super(props)
        this.state = {
            recipe: {},
            categories:{},
            ingredients:{}
        }
      }
    componentDidMount() {
        //Fetch the recipe
        fetch(`http://localhost:8000/recipes/${this.props.params.id}`)
            .then(response => {
                 return response.json()
            })
            .then(response => {
                this.setState({ recipe: response })
            }).catch(error=>{
                console.log(error)
            })
        //Fetch his categories
        fetch(`http://localhost:8000/recipes/${this.props.params.id}/categories`)
            .then(response => {
                 return response.json()
            })
            .then(response => {
                this.setState({ categories: response })
            }).catch(error=>{
                console.log(error)
            })
      
    }
   
    render(){
        console.log(this.state.recipe)
        if(this.state.recipe.steps==null ) return <SyncIcon/>
    return (
             <>
                {/* Recipe section */}
                <section className="py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-md-6">        <CardMedia  image={this.state.recipe.mainImage}  title={this.state.recipe.proposed_title}   style={{ paddingTop: '56.25%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} /></div>
                            <div className="col-md-6">
                                <div className="small mb-1">{this.state.recipe.proposedTitle}</div>
                                <h1 className="display-5 fw-bolder">{this.state.recipe.proposedTitle}</h1>
                            
                                <div className="fs-5 mb-5">
                                    <span className="text-decoration"> <FavoriteIcon /> 20</span>
                                    <div className="ratings-widget">
                                        <div   className="title">
                                            {this.state.recipe.preparationTime} mintutes
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
                                <p className="lead">{this.state.recipe.proposedDescription}</p>
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
                {/* Steps description */}
                <section className='py-5'>
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-4 col-lg-4">
                                <h6 className="text-muted">Ingredients</h6> 
                                {this.state.ingredients.length > 0 &&
                                <ul className="list-group">
                                     {
                                        this.state.ingredients.map((ingredient, index) => (
                                            this.state.recipe.ingredients.map((id, name, qte,selected, index) => (
                                                (name===ingredient.name)&&
                                                     <IngredientItemComponent qte={qte} ingredient={ingredient} key={index}  />
                                                ))))
                                    }
                                </ul>
                                }
                            </div>
                            <div className="col-sm-4 col-lg-4">
                                <h6 className="text-muted">Differentes etapes de preparation et de cuisson</h6> 
                                <ul className="list-group">
                                    {
                                        this.state.recipe.steps.map((step, index) => (
                                            <StepItemComponent image={"http://localhost:8000/download/"+step.imageId} description={step.stepId} key={index}  />
                                         ))
                                    }
                                </ul>
                            </div>
                            <div className="col-sm-4 col-lg-4">
                                <h6 className="text-muted">Differentes categories</h6> 
                                {this.state.categories.length > 0 &&
                                <ul className="list-group">
                                    {
                                        this.state.categories.map((item) => <h3>{item.name}</h3> )
                                    }
                                </ul>
                                }
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
                                    <CardMedia className="card-img-top" image={this.state.recipe.mainImage}  title={this.state.recipe.proposedTitle}/>
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


 
}
export default withRouter(RecipeDetails);
