import React from 'react'

function renderLi (recipe, onItemClick, onItemDeleteClick) {
    return (
        <li key={recipe.id} id={recipe.id} title={'ID:' + recipe.id}>
            <span onClick={onItemClick}>
                <strong>{recipe.proposedtitle}</strong> : {recipe.proposeddescription} {recipe.adoptedtitle} {recipe.adopteddescription} {'depuis ' + recipe.createdat + ' '}
            </span>
            <button onClick={onItemDeleteClick}>X</button>
        </li>
    )
}

const ListComponent = ({ recipes, onItemClick, onItemDeleteClick, onAddClick }) => (
    <div>
        <ul>
            {recipes.map((recipe) => renderLi(recipe, onItemClick, onItemDeleteClick))}
        </ul>
        <button onClick={onAddClick}>Ajouter une recette</button>
    </div>
)

export default ListComponent
