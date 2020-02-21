import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

const PrivateRoute = ({ component, ...rest }) => {
  const auth = useSelector(state => state.firebase.auth)
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard}></PrivateRoute>
          <PrivateRoute path='/project/create' component={CreateProject}></PrivateRoute>
          <PrivateRoute path='/project/:id' component={ProjectDetails}></PrivateRoute>
          <Route path='/login' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App
