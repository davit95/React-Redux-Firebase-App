const initState = {
  
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      console.log('create project', action.project)
      return state
      case 'ADD_PROJECT_FAIL':
      console.log('error', action.err)
      return state
    default:
      return state
  }
}

export default projectReducer