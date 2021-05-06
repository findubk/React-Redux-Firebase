import React,{useState,useEffect} from 'react'
import { signIn } from '../../Redux/auth/authActions'
import { useDispatch,useSelector } from 'react-redux'
import { Redirect } from 'react-router'
 


function SignIn  (props) {

  const authError = useSelector(state => state.auth.authError)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [creds, setcreds] = useState([])
  
  useEffect(() => {
    setcreds({
      Email:email,
      Password:password
     })
  }, [email,password])
    
  
  
    const dispatch = useDispatch()
    
  const  handleChange = (e) => {
    if(e.target.id=='email'){
        setemail(e.target.value)
    }else{
      setpassword(e.target.value)
    }
      }
    const  handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(creds)) 

      }


      const auth = useSelector(state => state.firebase.auth)
  
      if(auth.uid) return <Redirect to='/'/>

        return (
            <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
          <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
        </form>
      </div>
        )
    
}

export default SignIn
