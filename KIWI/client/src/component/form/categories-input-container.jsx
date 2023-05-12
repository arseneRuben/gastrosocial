import { Link } from 'react-router-dom';
import React, { Component } from "react";

const toggleElement = (arr, val) =>
  arr.includes(val) ? arr.filter(el => el !== val) : [...arr, val];

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
             selectedCategoryIds: toggleElement(this.state.selectedCategoryIds,e.target.id)
          })     
          document.getElementById(e.target.id).classList.toggle("bg-secondary")  
          document.getElementById(e.target.id).classList.toggle("text-white")
          this.props.setCategories(this.state.selectedCategoryIds)
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
          
           <div className="form-group row p-4 d-flex">
                      <input className="form-control mb-2 " onChange={this.handleInputChange} type="text"  placeholder="Dans quelles categories positionner votre recette ?"/>
                      {this.state.filteredCategories.map((item) => 
                        <div className='col-md-2 m-3 ' key={item._id}>
                                <h6  id={item._id} onClick={this.handleClick}>{item.name}</h6>
                        </div>  
                      )} 
                    {(this.state.filteredCategories.length===0)&& <Link  className="btn btn-primary btn-sm"to="/categories">Nouvelle categorie?</Link>}
            </div>
                
       );
      }
}

export default CategoriesInputConainer;