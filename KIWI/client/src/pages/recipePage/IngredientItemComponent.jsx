const IngredientItemComponent = ({  qte, name,  unity,image }) => (
   
     <li className="list-group-item d-flex justify-content-between align-items-center">  
     <p> {name} ( {qte} {unity})</p>
     <div className="image-parent">
         <img src={ image ? "http://localhost:8000/download/"+image : "http://localhost:8000/download/download.jpg"} className="img-fluid rounded-circle" height="300" width="200" alt={image}/>
         </div>
     </li>
  )

  export default IngredientItemComponent