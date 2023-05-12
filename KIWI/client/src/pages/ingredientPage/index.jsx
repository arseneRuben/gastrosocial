import { Component } from 'react';
import { Link} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


class IngredientPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            ingredients: []
        }
    }

     handleClick(e){
     
      /*  fetch('http://localhost:8000/recipes/' + e.target._id, { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
               setCurrentRecipe(responseObject)
            }) */
         

          //  console.log(e.target.id)
      };


    componentDidMount() {
        fetch('http://localhost:8000/ingredients')
            .then(response => {
                 return response.json()
            })
            .then(responseObject => {
                this.setState({ ingredients: responseObject })
               
            }).catch(error=>{
                console.log(error)
            })
    }

    render () {
        return (
            <div className="container">
            <h1 className="jumbotron-heading"> Liste des categories</h1>
            <div className="row d-flex flex-row">
                        {this.state.ingredients.map((item) => 
                            <div className="col-md-3">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" src={"http://localhost:8000/download/"+item.image} alt="Card image cap"/>
                                <div className="card-body">
                                <p className="card-text">{item.name}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                    <button type="button" onClick={this.handleClick} id={item._id} className="btn btn-sm btn-outline-secondary"> 
                                        <Link to={`/ingredients/edit/${item._id}`}  ClassName="active"><EditIcon/></Link>
                                    </button>
                                    <button type="button" onClick={this.handleClick} id={item._id} className="btn btn-sm btn-outline-secondary"> 
                                         <Link to={`/ingredients/delete/${item._id}`}  ><RemoveCircleIcon/></Link>
                                    </button>
                                    </div>
                                    <small className="text-muted">{item.unity}</small>
                                </div>
                                </div>
                            </div>
                            </div>
                        )}
            </div>
        </div>
        )
    }

  
    

    
}
export default IngredientPage;