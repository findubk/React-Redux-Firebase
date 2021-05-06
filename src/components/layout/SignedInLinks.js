import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../Redux/auth/authActions'

function SignedInLinks({profile}) {
    const dispatch = useDispatch()


    return (
        <ul className="right">
            <li> <NavLink to='/create'>New Project</NavLink> </li>
            <li> <a onClick={()=>dispatch(signOut())}>Log Out</a> </li>
            <li> <NavLink to='/' className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink> </li>
        </ul>
    )
}

export default SignedInLinks
