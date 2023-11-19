import React, {useState} from 'react'
import "./style.css"
const InputFields =({label,onChange,errorMessage,...otherProps}) =>{

    const [focused, setFocused] = useState(false);

  return (
    <div className='inputField'>
        <label>{label}</label>
        <input 
            {...otherProps} 
            onChange={onChange} 
            onBlur={() => setFocused(true)}
            focused={focused.toString()}
            onFocus={() =>
                otherProps.name === "confirmPassword" && setFocused(true)
            }
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default InputFields