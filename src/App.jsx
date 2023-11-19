import { useState } from 'react'
import InputFields from './form-fields/InputFields'
// import './App.css'
// import formField from './Fields'

function App() {

  // console.log(formField);

  const [values,setValues] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const formFields = [
    {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        label: "Username",
        errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
        required: true,
        pattern: "^[A-Za-z0-9]{3,16}$",
        // autocomplete: "off",
    },
    {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        label: "Email",
        errorMessage: "It should be valid email address!",
        required: true,
        // autocomplete: "off",
    },
    {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Password",
        label: "Password",
        errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        required: true,
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        // autocomplete: "off",
    },
    {
        id: 4,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        label: "Confirm Password",
        errorMessage: "Password don't match!",
        required: true,
        pattern: values.password,
        // autocomplete: "off",
    },
];

  const onChange =(e)=>{
    console.log(e.target.value);
    setValues({...values,[e.target.name]:e.target.value})
  }

  const isFormValid = () => {
    // Check if all fields have values
    return Object.values(values).every((value) => value.trim() !== '');
  };

  const handalSubmit=(e)=>{
    e.preventDefault();
    console.log('hiiiii');
    console.log(values);
  }
  return (
    
      <form onSubmit={handalSubmit} >
        {formFields.map(field=>(
        <InputFields key={field.id} {...field} onChange={onChange} value={values[field.name]}/>

        ))}
        
        {/* {formFields.map((field) => (
                <InputFields
                    key={field.id}
                    {...field}
                   
                />
            ))} */}

      <button className={`button`} disabled={!isFormValid()} >submit</button>
      </form>
    
  )
}

export default App
