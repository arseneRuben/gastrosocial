
import React, { Component } from "react";
import SyncIcon from '@mui/icons-material/Sync'

class CategoriesInputConainer extends Component {
    constructor (props) {
       
        super(props)
        this.state = {
            categories: [],
            query:"",
            selectedCategoryIds: [],
            filteredCategories: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
      }

      handleClick(e){
      
        this.setState({
            ...this.state,
             selectedCategoryIds: this.state.selectedCategoryIds.concat(e.target.id)
          })     
      }
      handleInputChange (e) {
           this.setState({
            ...this.state,
            filteredCategories: this.state.categories.filter(category => {
               if (e.target.value === "") {
                  //if query is empty
                  return category;
                } else if ((category.name.length>0) && category.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                  //returns filtered array
                  return category;
                } 
              })
          })     
      }
      componentDidMount() {
        fetch('http://localhost:8000/categories')
            .then(response => {
                 return response.json()
            })
            .then(responseObject => {
                this.setState({ categories: responseObject, filteredCategories:responseObject })
              
            }).catch(error=>{
                console.log(error)
            })
       }
   
   render() {
 
      return (
          
           <div className="form-group row p-4">
                      <input className="form-control" onChange={this.handleInputChange} type="text"  placeholder="Dans quelles categories positionner votre recette ?"/>
                      {this.state.filteredCategories.map((item) => 
                        <div className='card col-md-2 p-6' key={item._id}>
                                <h5  id={item._id} onClick={this.handleClick}>{item.name}</h5>
                        </div>  
                      )} 
            </div>
                
       );
      }
}

export default CategoriesInputConainer;