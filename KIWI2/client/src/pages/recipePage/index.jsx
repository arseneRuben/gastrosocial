
import SyncIcon from '@mui/icons-material/Sync';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Component } from 'react';
import { Link } from 'react-router-dom';

      class RecipePage extends Component {
        constructor (props) {
          super(props)
          this.state = {
              recipes: []
          }
      }

      

        componentDidMount() {
            fetch('http://localhost:8000/recipes')
                .then(response => {
                    console.log(response)
                    return response.json()
                })
                .then(responseObject => {
                    this.setState({ recipes: responseObject })
                }).catch(error=>{
                    console.log(error)
                })
        }

        render(){
        return (
          <div>
                  <div className="  d-flex flex-wrap  mb-4 box-shadow">
                         {this.state.recipes?.map((recipe) => (
                          <div className="card" key={recipe.id}>
                            <div className="card-body">
                              <h5 className="card-title">{recipe.proposed_title}</h5>
                             
                              <p className="card-text">{recipe.proposed_description}</p>
                              <Link to={`recipes/${recipe.id}`} className="btn btn-primary"><VisibilityIcon  id={recipe.id}/></Link>

                               
                              
                            </div>
                          </div>
                      ))}
                      
                  </div> 
          </div>
        )
     }
      
};
export default RecipePage;