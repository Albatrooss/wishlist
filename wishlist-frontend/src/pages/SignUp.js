import React from 'react';
import InputNotched from '../components/forms/InputNotched';
import Button from '../components/buttons/Button';
import { Link } from 'react-router-dom';

const SignUp = ({ setUser, errors, setErrors }) => {

  const signUp = async (e) => {
    e.preventDefault();
    const newUser = {
      email: e.currentTarget.email.value,
      fName: e.currentTarget.fName.value,
      lName: e.currentTarget.lName.value,
      password: e.currentTarget.password.value,
      'password-confirm': e.currentTarget['password-confirm'].value
    }
    const postUser = await fetch('/users/sign-up', {
      method: "post",
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const body = await postUser.json();
    if (body.err) {
      if (body.err.length) {
        const updatedErrors = [...errors, ...body.err];
        setErrors(updatedErrors)
      } else {
        const updatedErrors = [...errors, body.err];
        setErrors(updatedErrors)
      }
    } else if (body.email) {
      setErrors([])
      setUser(body);
      localStorage.setItem('user', JSON.stringify(body));
    }
  }

  return(
    <div className="sign-in-up-wrap">
      <div>
        <h1>Welcome to Wishlist</h1>
        <p>A tool for creating, organizing, and sharing wish lists for the Holidays, birthdays, and more!</p>
        <form onSubmit={signUp}>
          <InputNotched
            name="email"
            type="email"
            label="Email"
            required={true}
          />
          <InputNotched
            name="fName"
            type="text"
            label="First Name"
            className="span-6"
            required={true}
          />
          <InputNotched
            name="lName"
            type="text"
            label="Last Name"
            className="span-6"
            required={true}
          />
          <InputNotched
            name="password"
            type="password"
            label="Password"
            required={true}
          />
          <InputNotched
            name="password-confirm"
            type="password"
            label="Confirm Password"
            required={true}
          />
          <Button
            className="secondary w-1-2"
            text="Sign Up"
            type="submit"
          />
          <div>Have an account? <Link to='/'>Sign In.</Link></div>
        </form>
      </div> 
    </div>
  )
}

export default SignUp;