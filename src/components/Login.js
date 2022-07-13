import React, { useRef } from 'react'
import HomePage from './HomePage'
import "./Login.css"
function Login() {
    const username = useRef()
    const password = useRef()
    const getUsername = localStorage.getItem("usernameData")
    const getPassword = localStorage.getItem("passwordData")
    const handleSubmit= () => {
        if(username.current.value=="petarangelevski25@gmail.com"&&password.current.value=="admin12345"){
            localStorage.setItem("usernameData","petarangelevski25@gmail.com")
            localStorage.setItem("passwordData","admin12345")

        }
    }


  return (
    <>{ getUsername && getPassword ? <HomePage/> :
    <><div className='login__page'>
              <><div className='login__page__heading'>
                  <p className='login__heading1'>Join our stock community!</p>
                  <p className='login__heading2'>Download free photos and videos powered by the best photographers</p>
              </div><form onSubmit={handleSubmit} className='login__page__form'>
                      <div className='login__form__username'>
                          <label htmlFor="text">Username</label>
                          <input type="text" ref={username} />
                      </div>
                      <div className='login__form__password'>
                          <label htmlFor="password">Password</label>
                          <input type="password" ref={password} />
                      </div>
                      <button className='login__page__form__button'>
                          <span className='button__text'>Log in</span>
                      </button>
                  </form></>
          </div><footer className='login__page__footer'>
                  <div className="footer__image" />
              </footer></>
                }
                  </>
  )
}

export default Login