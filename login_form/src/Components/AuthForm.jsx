import React, { useState } from 'react'
import './AuthForm.css'

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
        <div className='form-container'>
            <div className='form-toggle'>
                  <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
            <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Signup</button>
            </div>
          <div>
            {isLogin ? <>
            <div>
                <h2>Login Form</h2>
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />
                <a href="#">Forgot password?</a>
                
            </div>
            </>: ''}
          </div>
            
        </div>

    </div>
  )
}

export default AuthForm