import React,{ useState,useEffect } from 'react'
import './App.css';

function LoginForm() {
  const initialValues = {username: "", email: "", password: ""};
  const [formValues, setFormValues]=useState(initialValues);
  const [formErrors, setFormErrors]=useState({});
  const [isSubmit, setIsSubmit]=useState(false);
  
  const handleChange=(e)=>{
      // console.log(e.target);
      const { name, value } = e.target;
      setFormValues({...formValues, [name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formErrors);
    }
  },[formErrors]);
  const validate=(values)=>{
    const errors={};
    const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if(!values.username){
      errors.username="Username is required";
    }
    if(!values.email){
      errors.email="Email is required";
    }else if (!regexEmail.test(values.email)){
      errors.email="This is not a valid Email";
    }
    if(!values.password){
      errors.password="Password is required";
    }else if (!regexPassword.test(values.password)){
      errors.password="This is not a valid Password, A password must contain lowercase and uppercase letters, symbols and numbers";
    }
    return errors;
  }

  return (
    < >

      {Object.keys(formErrors).length === 0 && isSubmit ? (
      <div>Sign In successfully</div>) : (
        <pre>{JSON.stringify(formValues,undefined,2)}</pre>
      )};
     
      <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div className='ui divider'></div>
            <div className='ui form'>
              <p>{formErrors.username}</p>
                <div className='fields'>
                    <label>Username</label>  <br/>
                    <input type="text" name='username' placeholder='Username' value={formValues.username} onChange={handleChange} />
                </div>
                <p>{formErrors.email}</p>
                <div className='fields'>
                    <label>Email</label>  <br/>
                    <input type="email" name='email' placeholder='Email' value={formValues.email} onChange={handleChange} />
                </div>
                <p>{formErrors.password}</p>
                <div className='fields'>
                    <label>Password</label>  <br/>
                    <input type="password" name='password' placeholder='Password' value={formValues.Password} onChange={handleChange} />
                </div>
                <button className='fluid ui button blue-btn' type='submit'>Submit</button>
            </div>
      </form>
    </ >
  )
}

export default LoginForm;