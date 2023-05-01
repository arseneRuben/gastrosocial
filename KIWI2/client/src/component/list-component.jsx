import React from 'react'

function renderLi (recipe, onItemClick, onItemDeleteClick) {
    return (
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
        
          <h3 class="mb-0">
            <a class="text-dark" href="#">{recipe.proposed_title}</a>
          </h3>
          <div class="mb-1 text-muted"> {'depuis ' + recipe.created_at + ' '}</div>
          <p class="card-text mb-auto"> {recipe.proposed_description} </p>
          <a href="/recipe/detail">Continue reading</a>
        </div>
        <img class="card-img-right flex-auto d-none d-md-block" src="images/recipes/img1.jpg" alt="Card image cap"/>
      </div>
         
    )
}

const ListComponent = ({ recipes, onItemClick, onItemDeleteClick, onAddClick, onAddClick1 }) => (
    <div style={{ width: '100%', textAlign: 'center' }}>

        {recipes.map((recipe) => renderLi(recipe, onItemClick, onItemDeleteClick))}
        <div>
            <button onClick={onAddClick}>Ajouter une recette</button>
        </div>

    </div>
)

export default ListComponent
