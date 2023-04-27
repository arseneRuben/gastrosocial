import React from 'react'

function renderLi (user, onItemClick, onItemDeleteClick) {
    return (
        <li key={user.id} id={user.id} title={'ID:' + user.id}>
            <span onClick={onItemClick}>
                <strong>{user.userName}</strong> : {user.firstName} {user.lastName}
            </span>
            <button onClick={onItemDeleteClick}>X</button>
        </li>
    )
}

const ListComponent = ({ users, onItemClick, onItemDeleteClick, onAddClick }) => (
    <div>
        <ul>
            {users.map((user) => renderLi(user, onItemClick, onItemDeleteClick))}
        </ul>
        <button onClick={onAddClick}>Ajouter un usager</button>
    </div>
)

export default ListComponent
