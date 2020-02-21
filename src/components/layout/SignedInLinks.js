import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/authAction'
import { NavLink } from 'react-router-dom'

function SignedInLinks(props) {
  return (
    <ul className='right'>
      <li><NavLink to='/project/create'>New Project</NavLink></li>
      <li><a href="" onClick={props.signOut} to='/logout'>Log Out</a></li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>
          { props.profile.initials }
        </NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut : () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
