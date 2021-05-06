import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { signUp } from '../../Redux/auth/authActions'

 function SignUp (props){
 
        const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
        const [firstName, setfirstName] = useState('')
        const [lastName, setlastName] = useState('')
        const [UserInfo, setUserInfo] = useState([])
       
        useEffect(() => {
          setUserInfo({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
          })
          
        }, [email,password,firstName,lastName])

      const auth = useSelector(state => state.firebase.auth)
      const authError = useSelector(state => state.auth.authError)
      const dispatch = useDispatch()
      
    const  handleChange = (e) => {
        if(e.target.id=='email'){
            setemail(e.target.value)
        }else if(e.target.id=='password'){
          setpassword(e.target.value)
        }else if(e.target.id=='firstName'){
          setfirstName(e.target.value)
        }else{
          setlastName(e.target.value)
        }
      }
    const  handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(UserInfo))
      }

      


      if(auth.uid) return <Redirect to='/'/>
        return (
          <div className="container">
            <form className="white" onSubmit={handleSubmit}>
              <h5 className="grey-text text-darken-3">Sign Up</h5>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' onChange={handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id='lastName' onChange={handleChange} />
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
              </div>
              <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
            </form>
          </div>
        )
      }


export default SignUp
