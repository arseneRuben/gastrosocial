import { Typography } from "@mui/material";
import InputComponent from "../../component/form/input-component";
import { useState } from "react";
import { Button } from "reactstrap";
import { createRecipe, updateRecipe } from '../../actions/recipes';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';



const NewRecipePage = () => {
      const history = useNavigate();
      const dispatch = useDispatch();

      const [postData, setPostData] = useState({
            'user_id': 1, 'proposed_title':'', 'proposed_description': '', 'portions':0, 'preparation_time':0, 'cooking_time':0
      })

      const handleSubmit = async (e) => {

            e.preventDefault();
              dispatch(createRecipe({ ...postData}, history));
              clear();
          };
        
      const clear = () => {
            setPostData({ 'proposed_title': '', 'proposed_description': '', 'portions':0,  'preparation_time':0 , 'cooking_time':0,  'user_id': 1 });
          };
        
        return (

              <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}>
                  <Typography variant="h6" className=""> Creer une recette</Typography>
                  <InputComponent name="proposed_title"  labelClass="col-md-4 col-form-label text-md-right"  label="Intitule "  value={postData.proposed_title} onChange={(e)=> setPostData({...postData, 'proposed_title':  e.target.value})} half />
                  <InputComponent name="proposed_description"  labelClass="col-md-4 col-form-label text-md-right"  label="Description " value={postData.proposed_description} type="textarea" onChange={(e)=> setPostData({...postData, 'proposed_description':  e.target.value})} half />
                  <InputComponent name="preparation_time"  labelClass="col-md-4 col-form-label text-md-right"  label="Duree de preparation " value={postData.preparation_time}  type="number" onChange={(e)=> setPostData({...postData, 'preparation_time':  e.target.value})} half />
                  <InputComponent name="cooking_time"  labelClass="col-md-4 col-form-label text-md-right"  label="Duree de cuisson " value={postData.cooking_time}  type="number"  onChange={(e)=> setPostData({...postData, 'cooking_time':  e.target.value})} half />
                  <InputComponent name="portions"  labelClass="col-md-4 col-form-label text-md-right"  label="Nombres de portions "  value={postData.portions}  type="number"  onChange={(e)=> setPostData({...postData, 'portions':  e.target.value})} half />
                  <div><FileBase type="file" multiple={true} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

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