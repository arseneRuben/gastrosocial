import React from 'react'

const FormComponent = ({ children, action, onSaveClick, onCancelClick }) => (
    <div>
        <form action={action}>
            {children}
        </form>

        <button onClick={onSaveClick}>Sauvegarder</button>
        <button onClick={onCancelClick}>Annuler</button>
    </div>
)

export default FormComponent
