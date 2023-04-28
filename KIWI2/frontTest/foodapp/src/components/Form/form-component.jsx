import React from 'react'

const FormComponent = ({ children, action, onSaveClick, onCancelClick }) => (
    <div>
        <form action={action}>
            {children}
      

        <button  className='bg-slate-400 text-white p-1 px-5 rounded-lg flex items-center gap-5' onClick={onSaveClick}>Sauvegarder</button>
        <button   className='bg-slate-400 text-red p-1 px-5 rounded-lg flex items-center gap-5' onClick={onCancelClick}>Annuler</button>
        </form>
    </div>
)

export default FormComponent
