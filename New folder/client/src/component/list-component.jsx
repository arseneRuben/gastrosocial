import React from 'react'

function renderLi (recipe, onItemClick, onItemDeleteClick) {
    return (
        <div style={{ height: '80px', width: '300px', display: 'inline-block', border: '2px solid black', margin: '3px', textAlign: 'center', borderRadius: '5px' }} key={recipe.id} id={recipe.id} title={'ID:' + recipe.id}>
            <span onClick={onItemClick}>
                <strong>{recipe.proposed_title}</strong> : {recipe.proposed_description} {recipe.adopted_title} {recipe.adopted_description} {'depuis ' + recipe.created_at + ' '}
            </span>
            <button onClick={onItemDeleteClick}>X</button>
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
