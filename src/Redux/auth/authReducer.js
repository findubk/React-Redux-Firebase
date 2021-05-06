

const initialState={
    authError:null
}


const authReducer=(state=initialState,action)=>{
  switch (action.type) {
      case 'LOGIN_ERROR':
          return {
              ...state,
              authError:'Login Failed'
          }   
          break;
  case 'LOGIN_SUCCESS':
//console.log('login success')
      return{
          authError:null
      }
      break;
      case 'SIGNOUT_SUCCESS':
         // console.log('signout success')
      return state

      case 'SIGNUP_SUCCESS':
      //console.log('signup success')
      return {
        ...state,
        authError: null
      }

    case 'SIGNUP_ERROR':
     // console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }

      default:
          return state
          break;
  }
}

export default authReducer