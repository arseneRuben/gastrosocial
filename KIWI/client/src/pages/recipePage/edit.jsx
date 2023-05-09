import React, { useEffect } from 'react'
import { Typography } from "@mui/material";
import InputComponent from "../../component/form/input-component";
import { useState } from "react";
import { Button } from "reactstrap";
import { createRecipe, updateRecipe } from '../../actions/recipes';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import FormUploadComponent from '../../component/form/form-upload-component';



const EditRecipePage = ({currentRecipeId}) => {
       const params = useParams(), id = params.id

      const dispatch = useDispatch();
      const [images, setImages] = useState([]);
      const  {recipes,isLoading}  = useSelector((state) => state.recipes);
       const  recipe  = recipes.find((r) => r._id === id);

      const [postData, setPostData] = useState({
            'proposedTitle':'', 'proposedDescription': '', 'portions':0, 'preparationTime':0, 'cookingTime':0,'mainImage':'',  'proposedImages': [] 
      })
    
    const handleSubmit = async (e) => {
            e.preventDefault();
           
            dispatch(updateRecipe(id, postData))
           
    }
    const clear = () => {
        setPostData({ 'proposedTitle': '', 'proposedDescription': '', 'portions':0,  'preparationTime':0 , 'cookingTime':0,   'proposedImages': []  });
    };
    useEffect(() => {
        if (!recipe?.proposedImages) clear();
        if (recipe) setPostData(recipe);
      }, [recipe]);
        return (
              <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}  >
                  <Typography variant="h6" className="text-center">{currentRecipeId!==null ? `Modifier  ${recipe?.proposedTitle}` : 'Creer une recette'}</Typography>
                  <InputComponent name="proposedTitle"  labelClass="col-md-4 col-form-label text-md-right"  label="Intitule "  value={postData.proposedTitle} onChange={(e)=> setPostData({...postData, 'proposedTitle':  e.target.value})}  />
                  <InputComponent name="proposedDescription"  labelClass="col-md-4 col-form-label text-md-right"  label="Description " value={postData.proposedDescription} type="textarea" onChange={(e)=> setPostData({...postData, 'proposedDescription':  e.target.value})}  />
                  <InputComponent name="preparationTime"  labelClass="col-md-4 col-form-label text-md-right"  label="Duree de preparation " value={postData.preparationTime}  type="number" onChange={(e)=> setPostData({...postData, 'preparationTime':  e.target.value})}  />
                  <InputComponent name="cookingTime"  labelClass="col-md-4 col-form-label text-md-right"  label="Duree de cuisson " value={postData.cookingTime}  type="number"  onChange={(e)=> setPostData({...postData, 'cookingTime':  e.target.value})}  />
                  <InputComponent name="portions"  labelClass="col-md-4 col-form-label text-md-right"  label="Nombres de portions "  value={postData.portions}  type="number"  onChange={(e)=> setPostData({...postData, 'portions':  e.target.value})}  />
                  <FileBase type="file" placeHolder="Image principage" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, 'mainImage': base64 })} />
                  <FormUploadComponent images={[]}  onChange={(e)=> setPostData({...postData, 'proposedImages':  e.target.images})} />
                  <div className=" d-inline">
                        <Button className="" color="primary" type="submit" >Submit</Button>
                  </div>
                  <div className=" d-inline">
                         <Button  color="secondary" size="small" onClick={clear} >Clear</Button>
                  </div>
                   
              </form>
        )

 
};
export default EditRecipePage;