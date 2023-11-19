const formField = [
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    label:"Username",
    required:true,
    errorMessage:
    "Username should be 3-16 characters and shouldn't include any special character!",
    pattern: "^[A-Za-z0-9]{3,16}$",
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    label:"Email",
    errorMessage: "It should be valid email address!",
    required:true
  },
  {
    id:3,
    name:"password",
    type:"password",
    placeholder:"Password",
    label:"Password",
    errorMessage:
    "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
required: true,
pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,

  },
  {
    id:4,
    name:"confirmPassword",
    type:"password",
    placeholder:"Confirm Password",
    label:"Confirm Password",
    errorMessage: "Password don't match!",
            required: true,
            pattern: values.password

  }
]

export default formField