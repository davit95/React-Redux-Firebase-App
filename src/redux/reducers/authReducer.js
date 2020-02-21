const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success')
      return {
        ...state,
        authError: null
      }
    case 'LOGIN_ERROR':
      console.log('error', action.err)
      return {
        ...state,
        authError: 'Login Failed'
      }
    case 'SIGN_OUT_SUCCESS':
      console.log('signout success')
      return state
    case 'SIGN_OUT_ERROR':
      console.log('signout error')
      return state
    case 'SIGNUP_SUCCESS':
      console.log('SIGNUP_SUCCESS')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('sign up error')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer