const IngredientItemComponent = ({  qte, ingredient }) => (
    <div class="col-12 col-sm-6 col-lg-4">
    <div class="single-small-receipe-area d-flex">
        {/* Receipe Thumb */}
        <div class="receipe-thumb">
            <img src={"http://localhost:8000/download/"+ingredient.image} alt={ingredient.image}/>
        </div>
        {/*  Receipe Content */}
        <div class="receipe-content">
            
            <a href="receipe-post.html">
                    <h5>{ingredient.name}</h5>
            </a>
            <div class="ratings">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>qte {ingredient.unity}</p>
        </div>
    </div>
</div>
  )

  export default IngredientItemComponent