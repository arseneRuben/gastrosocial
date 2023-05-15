import { Link } from 'react-router-dom'
import React, { Component } from "react"
import DeleteIcon from '@mui/icons-material/Delete'
import Item from './item'
import {
    Row,
    Col,
    Form,
    ListGroup,
    Button
  } from "react-bootstrap"
import UnityOptions from '../../pages/ingredientPage/unity-options'

class IngredientInputComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            ingredients:[],
            preselectedUnity: "",
            query:"",
            selectedIngredients: [],  //List of ingredients already selected, and present in todoList
            filteredIngredients: [],  //List of ingredients present in the search results
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.onInsertIngredient = this.onInsertIngredient.bind(this)
        this.onUpdateItem = this.onUpdateItem.bind(this)
        this.onDeleteItem = this.onDeleteItem.bind(this)
        this.onCheckboxChange = this.onCheckboxChange.bind(this)
        this.onClearAllItems = this.onClearAllItems.bind(this)
    }
    componentDidMount() {
        fetch('http://localhost:8000/ingredients')
            .then(response => {
                 return response.json()
            })
            .then(responseObject => {
                this.setState({ ingredients: responseObject, filteredIngredients:responseObject })
            }).catch(error=>{
                console.log(error)
            })
    }
     
    onClearAllItems = (event) => {
        this.state.selectedIngredients.map((item) => {
            if (item.done) document.getElementById( item.name).classList.remove("bg-secondary")  
        })
        const new_items = this.state.selectedIngredients.filter((item) => {
            if (!item.done) return item
        })
        this.setState({ selectedIngredients: new_items })
        this.props.setIngredients(new_items)
    }

    onUpdateItem = (id, done) => {
        const new_items =  this.state.selectedIngredients.map((item) => {
          if (id === item.id) return { ...item, done: done }
          else return item
        });
        this.setState({ selectedIngredients: new_items })
        this.props.setIngredients(new_items)
    }

    onCheckboxChange = (event) => {
        const flag = event.target.checked;
        const new_items =  this.state.selectedIngredients.map((item) => {
          return { ...item, done: flag }
        })
        this.setState({ selectedIngredients: new_items })
        this.props.setIngredients(new_items)
    }

    onDeleteItem = (id) => {
        const selectedItem =  this.state.selectedIngredients.filter((item) => {
              if (id === item.id) return item
        })
        document.getElementById( selectedItem[0].name).classList.remove("bg-secondary")  
        const new_items =  this.state.selectedIngredients.filter((item) => {
              if (id !== item.id) return item
        })
        this.setState({ selectedIngredients: new_items })
        this.props.setIngredients(new_items)
    }

    onInsertIngredient = (event) => {
        event.preventDefault()
        const ingredientName = document.getElementById("ingredient").value;
        const unity = document.getElementById("unity").value;
      
        const qte = document.getElementById("qte").value;
        if ("" === ingredientName || qte<=0) {
          alert("Blank Input Error")
          return
        }
        const newItem = {
          id: this.state.ingredients.filter(ing => ing.name === document.getElementById("ingredient").value)[0]._id, // Id of the ingredient inserted in the ingredientName input
          name: ingredientName,
          qte: qte,
          unity: unity,
          selected: false,
          image:  this.state.ingredients.filter(ing => ing.name === document.getElementById("ingredient").value)[0].image
        }
        this.setState({ ...this.state, selectedIngredients: [newItem, ...this.state.selectedIngredients]})
        this.props.setIngredients([newItem, ...this.state.selectedIngredients])
        document.getElementById( document.getElementById("ingredient").value).classList.add("bg-secondary")  
    }

      
    handleClick(e){
        //Before the user will push a new ingredient 
        document.getElementById("ingredient").value = e.target.id
        const preselectedUnity = this.state.ingredients.filter(ing => (ing.name === e.target.id ))[0].unity
        this.setState({ ...this.state, preselectedUnity: preselectedUnity })
    }
    handleInputChange (e) {
        if(e.target.id==="ingredientQuery"){
           this.setState({
            ...this.state,
            filteredIngredients: this.state.ingredients.filter(ingredient => {
               if (e.target.value === "") {
                  //if query is empty
                  return ingredient;
                } else if ((ingredient.name.length>0) && ingredient.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                  //returns filtered array
                  return ingredient;
                } 
              })
          }) 
        }    
    }
     
   
   render() {
    const total_count = this.state.selectedIngredients.length
    const done_count = this.state.selectedIngredients.reduce((prev, current) => {
      return current.done ? prev + 1 : prev
    }, 0)
      return (
        <>
            {/* List  */}
             <ListGroup variant="flush"  className=" m-1">
              {this.state.selectedIngredients.map((item) => {
                return (
                  <Item
                    key={item.id}
                    {...item}
                    onUpdateItem={this.onUpdateItem}
                    onDeleteItem={this.onDeleteItem}
                  />
                );
              })}
            </ListGroup>
             {/* End: List */}
             {/* Footer  */}
             <Row className="justify-content-md-center m-2">
              <Col xs={4} >
                <Form.Check
                  inline
                  checked={
                    done_count === total_count && total_count > 0
                      ? "checked"
                      : ""
                  }
                  onChange={this.onCheckboxChange}
                />
              </Col>
              <Col xs={5}>
                {done_count} / {total_count}
              </Col>
              <Col>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={this.onClearAllItems}
                >
                 <DeleteIcon/>
                </Button>
              </Col>
            </Row>
            {/* End: Footer  */}
            {/* Search Box */}
            <div className="form-group row p-4 d-flex">
                      <div className=' col-2 mb-1'>
                          <input className="form-control " id="ingredientQuery" onChange={this.handleInputChange} type="text"  placeholder="Search "/>
                      </div>
                      <div className=' col-2 mb-1'>
                          <input className="form-control " id="ingredient" type="text"  placeholder="Ingredients "/>
                      </div>
                      <div className=' col-3  mb-1'>
                        <input className="form-control " id="qte" onChange={this.handleInputChange} type="number"  placeholder="Qte "/>
                      </div>
                      <div className=' col-3  mb-1'>
                      <select name="unity"  id="unity" className=" form-control custom-select">
                           <UnityOptions preselectedUnity={this.state.preselectedUnity}/>
                      </select>
                      </div>
                      <div className=' col-2  mb-1'>
                            <button className='btn btn-secondary' id="pushBtn" onClick={this.onInsertIngredient}>Push</button>
                      </div>
                      {
                        this.state.filteredIngredients.map((item, index) => 
                        <div className='col-md-2  border-secondary m-3' key={index}>
                            <h5 id={item.name} onClick={this.handleClick}>{item.name}</h5>
                        </div>)
                      } 
                    {(this.state.filteredIngredients.length===0) && <Link  className="btn btn-primary btn-sm"to="/ingredients/new">Nouvelle ingredient?</Link>}
            </div>
             {/* End Search Box */}
            </>
                
       );
      }
}

export default IngredientInputComponent;