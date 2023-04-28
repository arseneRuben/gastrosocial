import React from 'react'

function renderLi (recipe, onItemClick, onItemDeleteClick) {
    return (
        <div key={recipe.id} id={recipe.id} title={'ID:' + recipe.id}>
            <span onClick={onItemClick}>
                <strong>{recipe.proposedtitle}</strong> : {recipe.proposeddescription} {recipe.adoptedtitle} {recipe.adopteddescription} {'depuis ' + recipe.createdat + ' '}
            </span>
            <button onClick={onItemDeleteClick}>X</button>
        </div>
    )
}

const ListComponent = ({ recipes, onItemClick, onItemDeleteClick, onAddClick, onAddClick1 }) => (
    <div>
        <div>
            {recipes.map((recipe) => renderLi(recipe, onItemClick, onItemDeleteClick))}
        </div>
        <button onClick={onAddClick}>Ajouter une recette</button>
    </div>
)

export default ListComponent
