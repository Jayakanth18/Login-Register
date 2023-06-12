import React from 'react'
import './register.css'
const Register = () => {
  return (
    <div className="container">
    <h2 className="title">Sigh UP</h2>
    <form action="">
    <label htmlFor="n">Name</label>
      <input type="text" name="" id="n" />
      <label htmlFor="e">Email</label>
      <input type="email" name="" id="e" />
      <label htmlFor="p">Password</label>
      <input type="password" name="" id="p" />
      <label htmlFor="cp">Conform Password</label>
      <input type="password" name="" id="cp" />
      <div className="button">
        <button type="submit">Login</button>
      </div>
      <div className="registerbox">
        <p>Alredy having an account.⬇️</p>
        <button>Login</button>
      </div>
    </form>
  </div>
  )
}

export default Register