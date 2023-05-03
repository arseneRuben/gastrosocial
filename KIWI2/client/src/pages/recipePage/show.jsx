import React from 'react';
import { BsShare } from 'react-icons/bs';
import Rating from '../../component/Rating';

const RecipeDetails = ({recipe}) => {

  return (
    <>
    
    <section className='flex items-center justify-between gap-[10rem] mx-32'>
    
      <aside className=''>
        <div className='flex gap-10 mt-10 '>
          <h2>{recipe.adopted_title}</h2>
          <button className='bg-slate-400 text-white p-1 px-5 rounded-lg flex items-center gap-5'> 
          <BsShare />
          <p>partager</p>
          </button>
        </div>
        <div className='flex gap-7 mt-10'>
          <div className='flex flex-col'>
            <p>evaluer cette recette</p>
            <Rating rating={0} />
          </div>
          <p>commenter cette recette</p>
          <p>Ajouter a mes favories</p>
        </div>
        <div className='flex gap-7 mt-10'>
          <p>{recipe.preparation_time} min de preparation</p>
          <p> {recipe.cooking_time} min de cuisson</p>
          <p>{recipe.portions} portion</p>
        </div>
        <div className='flex gap-7 mt-10 w-[30rem]'>
          <p>{recipe.adopted_description}.</p>
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

document.addEventListener("DOMContentLoaded", function(){
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
  
    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        // after dropdown is hidden, then find all submenus
          this.querySelectorAll('.submenu').forEach(function(everysubmenu){
            // hide every submenu as well
            everysubmenu.style.display = 'none';
          });
      })
    });
  
    document.querySelectorAll('.dropdown-menu a').forEach(function(element){
      element.addEventListener('click', function (e) {
          let nextEl = this.nextElementSibling;
          if(nextEl && nextEl.classList.contains('submenu')) {	
            // prevent opening link if link needs to open dropdown
            e.preventDefault();
            if(nextEl.style.display == 'block'){
              nextEl.style.display = 'none';
            } else {
              nextEl.style.display = 'block';
            }
  
          }
      });
    })
  }
  // end if innerWidth
  }); 
  // DOMContentLoaded  end