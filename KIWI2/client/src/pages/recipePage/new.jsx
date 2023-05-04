import { Typography } from "@mui/material";
import InputComponent from "../../component/form/input-component";
import { useState } from "react";
import { Button } from "reactstrap";
import { createRecipe, updateRecipe } from '../../actions/recipes';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';



const NewRecipePage = () => {
      const history = useNavigate();
      const dispatch = useDispatch();
      const [multipleImages, setMultipleImages] = useState([]);

      // Functions to preview multiple images
      const changeMultipleFiles = (e) => {
            if (e.target.files) {
            const imageArray = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file)
            );
            setMultipleImages((prevImages) => prevImages.concat(imageArray));
            }
      };
      const renderImages = (data) => {
            return data.map((image) => {
              return <img className="image" src={image} alt="" key={image} />;
            });
      };

      const [postData, setPostData] = useState({
            'user_id': 1, 'proposed_title':'', 'proposed_description': '', 'portions':0, 'preparation_time':0, 'cooking_time':0,  'selectedFile': '' 
      })
      const {
            register,
            
            handleSubmit,
            formState,
            formState: { errors },
          } = useForm();

      const onSubmit1 = async ( data) => {
              // Once we click on submit, the action of creation is dispatch
              dispatch(createRecipe({ ...postData}, history))
              //files
              const formData = new FormData();
              for (const key of Object.keys(multipleImages)) {
                formData.append('file', data.file[key]);
              }
            fetch('http://localhost:8000/files', {
                method: 'POST',
                body: formData,
              }).then((res) => console.log(res));
              setMultipleImages([]);

              clear();
          };
        
      const clear = () => {
            setPostData({ 'proposed_title': '', 'proposed_description': '', 'portions':0,  'preparation_time':0 , 'cooking_time':0,  'user_id': 1,  'selectedFile': ''  });
          };
        
        return (

              <form autoComplete="off" noValidate className="" onSubmit={handleSubmit(onSubmit1)}>
                  <Typography variant="h6" className=""> Creer une recette</Typography>
                  <InputComponent name="proposed_title"  labelClass="col-md-4 col-form-label text-md-right"  label="Intitule "  value={postData.proposed_title} onChange={(e)=> setPostData({...postData, 'proposed_title':  e.target.value})} half />
                  <InputComponent name="proposed_description"  labelClass="col-md-4 col-form-label text-md-right"  label="Description " value={postData.proposed_description} type="textarea" onChange={(e)=> setPostData({...postData, 'proposed_description':  e.target.value})} half />
                  <InputComponent name="preparation_time"  labelClass="col-md-4 col-form-label text-md-right"  label="Duree de preparation " value={postData.preparation_time}  type="number" onChange={(e)=> setPostData({...postData, 'preparation_time':  e.target.value})} half />
                  <InputComponent name="cooking_time"  labelClass="col-md-4 col-form-label text-md-right"  label="Duree de cuisson " value={postData.cooking_time}  type="number"  onChange={(e)=> setPostData({...postData, 'cooking_time':  e.target.value})} half />
                  <InputComponent name="portions"  labelClass="col-md-4 col-form-label text-md-right"  label="Nombres de portions "  value={postData.portions}  type="number"  onChange={(e)=> setPostData({...postData, 'portions':  e.target.value})} half />
                  <input
                        type="file"
                        name="file1"
                        multiple
                        {...register('file', { required: true })}
                        onChange={changeMultipleFiles}
                        />
                        {/* error handling with React Hook Form */}
                        {errors.file && <p className="error">Please select an image</p>}
                        
                        {/* The render function with the multiple image state */}
                        {renderImages(multipleImages)}
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