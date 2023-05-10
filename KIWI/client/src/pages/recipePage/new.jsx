import React, { useEffect } from 'react'
import { Typography } from "@mui/material";
import InputComponent from "../../component/form/input-component";
import { useState } from "react";
import { Button } from "reactstrap";
import { createRecipe, updateRecipe } from '../../actions/recipes';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import StepInputComponent from '../../component/form/step-input-component';



const NewRecipePage = ({currentRecipeId, setCurrentRecipeId}) => {

      const [stepsList, setStepsList] = useState([]);
      const addStepInputs = () => {
        
        setStepsList(stepsList.concat(<StepInputComponent stepNumber={stepsList.length}   />));
      
      }
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const [postData, setPostData] = useState({
            'proposedTitle':'', 'proposedDescription': '', 'portions':0, 'preparationTime':0, 'cookingTime':0,'mainImage':'',  'proposedImages': [] 
      })
    
    const handleSubmit = async (e) => {
            e.preventDefault();
            const steps = []
           //Buils de step object
           for(let i=0; i<stepsList.length; i++){
                  steps.push(
                        {"stepId": document.getElementById(`text-step-${i}`).value, "imageId": document.getElementById(`image-step-${i}`).value.split('\\')[2]}
                  )
           }
           // Add the step object in the postData 
           setPostData({ ...postData, 'steps': steps })
           // Create the recipe object
           dispatch(createRecipe({ ...postData}, navigate))
               
    }
    const clear = () => {
        setPostData({ 'proposedTitle': '', 'proposedDescription': '', 'portions':0,  'preparationTime':0 , 'cookingTime':0,   'proposedImages': []  });
    };
 

        return (
              <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}  >
                  <Typography variant="h6" className="text-center"> Creer une recette</Typography>
                  <fieldset className="form-group border p-3">
                  <legend className="w-auto px-2">Presentation generale</legend>
                  <div className='row'>
                    <div className='col-6'>
                             <InputComponent name="proposedTitle"  labelClass="col-md-4 col-form-label text-md-right"  label="Intitule "  value={postData.proposedTitle} onChange={(e)=> setPostData({...postData, 'proposedTitle':  e.target.value})}  />
                    </div>
                    <div className='col-6'>
                         <InputComponent name="proposedDescription"  labelClass="col-md-4 col-form-label text-md-right"  label="Description " value={postData.proposedDescription} type="textarea" onChange={(e)=> setPostData({...postData, 'proposedDescription':  e.target.value})}  />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                         <InputComponent name="preparationTime"  labelClass="col-md-4 col-form-label text-md-right"  label="Preparion (en min)" value={postData.preparationTime}  type="number" onChange={(e)=> setPostData({...postData, 'preparationTime':  e.target.value})}  />
                    </div>
                    <div className='col-6'>
                         <InputComponent name="cookingTime"  labelClass="col-md-4 col-form-label text-md-right"  label="Cuisson (en min)  " value={postData.cookingTime}  type="number"  onChange={(e)=> setPostData({...postData, 'cookingTime':  e.target.value})}  />
                    </div>
                   
                  </div>
                  <div className='row'>
                        <div className='col-2'>
                            <InputComponent name="portions"  labelClass="col-md-4 col-form-label text-md-right"  label="Portions "  value={postData.portions}  type="number"  onChange={(e)=> setPostData({...postData, 'portions':  e.target.value})}  />
                        </div>
                        <div className='col-6 mt-4'>
                            <FileBase type="file" label="Image principale" placeHolder="Image principale" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, 'mainImage': base64 })} />
                        </div>
                        <div className='col-4'>
                           <InputComponent name="steps"  labelClass="col-md-4 col-form-label text-md-right"  label="Nombres d'etapes "  type="number"  onChange={addStepInputs}  />

                        </div>
                  </div>
                  </fieldset>
                  <fieldset className="form-group border p-3" id="steps_section">
                  <legend className="w-auto px-2">Etapes</legend>
                         {stepsList}
                 </fieldset>
                
                 
                  
                 <div className=" d-inline">
                        <Button onClick={addStepInputs} color="warning" >Ajouter une etape</Button>
                  </div>
                                    
                  <div className=" d-inline">
                        <Button className="" color="primary" type="submit" >Submit</Button>
                  </div>
                  <div className=" d-inline">
                         <Button  color="secondary" size="small" onClick={clear} >Clear</Button>
                  </div>
                   
              </form>
        )

 
};
export default NewRecipePage;