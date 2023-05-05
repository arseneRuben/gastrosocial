import React, { Component } from 'react'

import { Typography } from "@mui/material";
import InputComponent from "../../component/form/input-component";
import FilesUploadComponent from "../../component/files-upload-component";
import { Button } from "reactstrap";
import { buildHeader } from '../utils';

  // Functions to preview multiple images
  const changeMultipleFiles = (e) => {
      if (e.target.files) {
      const imageArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
      );
     // setMultipleImages((prevImages) => prevImages.concat(imageArray));
      }
};



/*const newStep = () => {
      stepNumber++
      const stepSection = document.getElementById("steps")
      let input = document.createElement("input");
      input.setAttribute('type', 'text');
      input.setAttribute('id', `step${stepNumber}`);
      input.setAttribute('class', 'form-control p-2');
      input.setAttribute('placeholder', `Etape ${stepNumber}`)
      stepSection.append(input);
     
}; */

class NewRecipePage extends Component {

    
      constructor (props) {
              super(props)
              this.state = {
                  ingredientsDb:[],
                  stepNumber:1,
                  formValues: {},
              }
              this.handleOnChange = this.handleOnChange.bind(this)
      }
     

      handleOnSave = (e) => {
            e.preventDefault()
            const method = this.state.formValues.id ? 'PUT' : 'POST'
            fetch('http://localhost:8000/recipes', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        ingredients: responseObject,
                        showForm: false
                    })
                })

                
                var formData = new FormData();
                for (const key of Object.keys(this.state.imgCollection)) {
                    formData.append('imgCollection', this.state.imgCollection[key])
                }
              

              // set ingredient list
          /*  if(ingredients.length===0){
                  fetch('http://localhost:8000/ingredients')
                  .then(resp => resp.json())
                  .then(data => setIngredients(data))
                  console.log(ingredients);
            }*/
        }
        handleOnChange (event) {
            this.setState({
                formValues: {
                    ...this.state.formValues,
                    [event.target.name]: event.target.value
                }
            })
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

              <form autoComplete="off" noValidate className=""  action={this.handleOnSave}>
                  <Typography variant="h6" className=""> Creer une recette</Typography>
                  <InputComponent name="proposed_title"  labelClass="col-md-4 col-form-label text-md-right"  label="Intitule "  value={this.state.formValues.proposed_title} onChange={this.handleOnChange} half />
                  <InputComponent name="proposed_description"  labelClass="col-md-4 col-form-label text-md-right"  label="Description " value={this.state.formValues.proposed_description} type="textarea" onChange={this.handleOnChange} half />
                  <InputComponent name="preparation_time"  labelClass="col-md-4 col-form-label text-md-right"  label="Duree de preparation " value={this.state.formValues.preparation_time}  type="number" onChange={this.handleOnChange} half />
                  <InputComponent name="cooking_time"  labelClass="col-md-4 col-form-label text-md-right"  label="Duree de cuisson " value={this.state.formValues.cooking_time}  type="number"  onChange={this.handleOnChange} half />
                  <InputComponent name="portions"  labelClass="col-md-4 col-form-label text-md-right"  label="Nombres de portions "  value={this.state.formValues.portions}  type="number"  onChange={this.handleOnChange} half />
                  <div id="steps"  className="form-group row m-2">
                        <input type="text" className='form-control p-2' label="Nouvelle etape" id="step1" placeholder='Etape 1' />
                  </div>
                  <FilesUploadComponent />

                  <div className=" d-inline">
                         <Button  color="warning" size="small" >Nouvelle etape</Button>
                  </div>
                  <div className=" d-inline">
                        <Button className="" color="primary" type="submit" >Submit</Button>
                  </div>
                  
                  <div className=" d-inline">
                         <Button  color="secondary" size="small" >Clear</Button>
                  </div>
                 
                   
              </form>
        )}

 
};
export default NewRecipePage;