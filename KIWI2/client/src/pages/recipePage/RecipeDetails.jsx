import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SyncIcon from '@mui/icons-material/Sync'

import { useParams, useNavigate } from 'react-router-dom'
import { getRecipe } from '../../actions/recipes'

const RecipeDetails = () => {

  const { recipe,  isLoading } = useSelector((state) => state.recipes);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getRecipe(id))
  }, [id])

  if (!recipe) return null


  if (isLoading) {
    return (
       <SyncIcon /> 
    )
  }

  console.log(recipe);

  return (
    <>
    
    <section className='flex items-center justify-between gap-[10rem] mx-32'>
    
      <aside className=''>
        <div className='flex gap-10 mt-10 '>
          <h2>titre </h2>
          <button className='bg-slate-400 text-white p-1 px-5 rounded-lg flex items-center gap-5'> 
        
          <p>partager</p>
          </button>
        </div>
        <div className='flex gap-7 mt-10'>
          <div className='flex flex-col'>
            <p>evaluer cette recette</p>
           
          </div>
          <p>commenter cette recette</p>
          <p>Ajouter a mes favories</p>
        </div>
        <div className='flex gap-7 mt-10'>
          <p> min de preparation</p>
          <p> min de cuisson</p>
          <p> portion</p>
        </div>
        <div className='flex gap-7 mt-10 w-[30rem]'>
          <p>.</p>
          <aside className=''>

            <div className='w-[100%] ml-32'>
              <h3>Categories de la Recette</h3>
              <ul>
                <li>categorie 1</li>
                <li>categorie 2</li>
                <li>categorie 3</li>
              </ul>
            </div>
          </aside>
        </div>
      </aside>
     
    </section>
   
     </>)
};
export default RecipeDetails;
