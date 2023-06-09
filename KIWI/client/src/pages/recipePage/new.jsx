import React, { useEffect } from 'react'
import { Typography } from "@mui/material";
import InputComponent from "../../component/form/input-component";
import { useState } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom"
import SyncIcon from '@mui/icons-material/Sync';
import { createRecipe, updateRecipe } from '../../actions/recipes';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import StepInputComponent from '../../component/form/step-input-component';
import CategoriesInputContainer from '../../component/form/categories-input-container';
import IngredientInputComponent from '../../component/form/ingredient-input-component';



const NewRecipePage = () => {

      // Get the edited recipe if editing mode
      const  {recipes,isLoading}  = useSelector((state) => state.recipes);
      const params = useParams(), id = params.id
      const  recipe  = (id!=null)?  recipes.find((r) => r._id === id): null;  // current recipe if editing,
     
      const [categories, setCategories] = useState([]);
      const [stepsList, setStepsList] = useState([]);
      const [ingredients, setIngredients] = useState([]);
      //Callback function to add Step inputs in the recipe form
      const addStepInputs = () => {
        setStepsList(stepsList.concat(<StepInputComponent stepNumber={stepsList.length} key={stepsList.length}  />));
      }
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const [postData, setPostData] = useState({
            'proposedTitle':'', 'proposedDescription': '', 'portions':0, 'preparationTime':0, 'cookingTime':0,'mainImage':''
      })
    
      const handleSubmit = async (e) => {
            e.preventDefault()
            const steps = []
            let  imageData=new FormData()
            for(let i=0; i<stepsList.length; i++){
                  // Send each image to the server 
                  imageData.append("file",  document.getElementById(`image-step-${i}`).files[0])
                  fetch("http://localhost:8000/upload_file", {
                        method: 'POST',
                        body: imageData,
                    }).then((res) => console.log(res))
                    .catch((err)=> ("Erreur de transfer", err))
                    //Build  step object
                    steps.push(
                        {"stepId": document.getElementById(`text-step-${i}`).value, "imageId": document.getElementById(`image-step-${i}`).value.split('\\')[2]}
                  )
                  imageData=new FormData()
           }
           // Save in the local storage
           localStorage.setItem('postData', postData);
          
            if(!recipe?._id){
                        // Dispach the creation of recipe 
                        dispatch(createRecipe({ ...postData, 'steps': steps, 'categories': categories , 'ingredients': ingredients }, navigate))     
                        clear()
                  } else {
                        dispatch(updateRecipe(recipe?._id, { ...postData, 'steps': steps, 'categories': categories , 'ingredients': ingredients }, navigate));
                        clear()
                  }
             }
      const clear = () => {
            setPostData({ 'proposedTitle': '', 'proposedDescription': '', 'portions':0,  'preparationTime':0 ,'mainImage':'',  'cookingTime':0 });
      };

      useEffect(() => {
                  if (!recipe?.mainImage) clear();
                  if (recipe) { // If the recipe exist, we set the PostData
                        setPostData(recipe);
                        setCategories(recipe.categories)
                        setIngredients(recipe.ingredients)
                        //setStepsList(recipe.steps)
                  }
            }, [recipe]);
      
    if(isLoading ) return <SyncIcon/>
  
        return (
              <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}  >
                   {/* Header */}
                   <Typography variant="h6" className="text-center">{recipe ? `Modifier  ${recipe?.proposedTitle}` : 'Creer une recette'}</Typography>
                  <fieldset className="form-group border p-1">
                  {/* First part */}
                  <legend className="w-auto px-2">Presentation generale</legend>
                  <div className='row bg-light'>
                    <div className='col-6'>
                             <InputComponent name="proposedTitle"  labelClass="col-md-4 col-form-label text-md-right"  label="Intitule "          type="text"  value={postData.proposedTitle} onChange={(e)=> setPostData({...postData, 'proposedTitle':  e.target.value})}  />
                    </div>
                    <div className='col-6'>
                            <InputComponent name="proposedDescription"  labelClass="col-md-4 col-form-label text-md-right"  label="Description "  type="textarea"   value={postData.proposedDescription} onChange={(e)=> setPostData({...postData, 'proposedDescription':  e.target.value})}  />
                    </div>
                  </div>
                  <div className='row bg-light'>
                    <div className='col-6'>
                         <InputComponent name="preparationTime"  labelClass="col-md-4 col-form-label text-md-right"  label="Preparation (en min)" type="number"    value={postData.preparationTime}       onChange={(e)=> setPostData({...postData, 'preparationTime':  e.target.value})}  />
                    </div>
                    <div className='col-6'>
                         <InputComponent name="cookingTime"  labelClass="col-md-4 col-form-label text-md-right"  label="Cuisson (en min)"         type="number"            value={postData.cookingTime}       onChange={(e)=> setPostData({...postData, 'cookingTime':  e.target.value})}  />
                    </div>
                  </div>
                  <div className='row bg-light'>
                        <div className='col-3'>
                            <InputComponent name="portions"  labelClass="col-md-4 col-form-label text-md-right"  label="Portions "  value={postData.portions}  type="number"  onChange={(e)=> setPostData({...postData, 'portions':  e.target.value})}  />
                        </div>
                        <div className='col-5 mt-4'>
                            <label>Image principale</label>
                            <FileBase type="file"  multiple={false} onDone={({ base64 }) => setPostData({ ...postData, 'mainImage': base64 })} />
                        </div>
                        <div className='col-4'>
                           <InputComponent name="steps"  labelClass="col-md-4 col-form-label text-md-right"  label="Nombre d'etapes "  type="number"  onChange={addStepInputs}    />
                        </div>
                  </div>
                  </fieldset>
                  <fieldset className="form-group border p-1 bg-light" id="steps_section">
                         {/* Steps section */}
                         <legend className="w-auto px-1">Etapes de preparation et de cuisson</legend>
                        {
                               stepsList
                        }
                   </fieldset>
                  <div className=' p-2 bg-light'>
                        <fieldset className="form-group border p-1 " id="steps_section">
                              <legend className="w-auto ">Ingredients</legend>
                              {recipe ? <IngredientInputComponent setIngredients={setIngredients} selectedIngredients={recipe.ingredients}/> : <IngredientInputComponent setIngredients={setIngredients} selectedIngredients={[]} />}
                              
                        </fieldset>
                       
                  </div>
                  <div className=' p-2 bg-light'>
                        <fieldset className="form-group border p-1 " id="steps_section">
                              <legend className="w-auto ">Categories</legend>
                              <CategoriesInputContainer setCategories={setCategories}/>
                        </fieldset>
                  </div>
                   <fieldset className="form-group border p-1" id="submission_section">
                        <div className='d-flex justify-content-around'>
                              <div className=" d-inline">
                                    <Button onClick={addStepInputs} color="warning" >Ajouter une etape</Button>
                              </div>
                              <div className=" d-inline">
                                    <Button className="" color="primary" type="submit" >Submit</Button>
                              </div>
                              <div className=" d-inline">
                                    <Button  color="secondary" size="small" onClick={clear} >Clear</Button>
                              </div>
                        </div>
                  </fieldset>
              </form>
        )

 
};
export default NewRecipePage;