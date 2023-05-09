import React from 'react'

const InputComponent = ({ name, label, type, onChange, value , autoFocus, labelClass, half=false}) => (
  <div className="form-group row m-2">
        <label className={labelClass} htmlFor={name}>{label}</label>

        <div className={half ? "col-md-6":  "col-md-12"}>
            {type!=='textarea' ?   <input className="form-control" name={name} type={type}  id={name} onChange={onChange} value={value}  autoFocus={autoFocus}  />: 
                <textarea className="form-control"  name={name} id={name} onChange={onChange} value={value}  autoFocus={autoFocus} rows="3"></textarea>
            }
           
        </div>
    </div>
)

export default InputComponent
