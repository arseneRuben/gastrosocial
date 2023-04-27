import React from 'react'

const InputComponent = ({ name, label, type, onChange, value }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} id={name} onChange={onChange} value={value} />
    </div>
)

export default InputComponent
