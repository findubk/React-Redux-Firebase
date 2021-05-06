import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignOutLinks from './SignedOutLinks'

function Navbar() {

    const profile = useSelector(state => state.firebase.profile)
    const auth = useSelector(state => state.firebase.auth)
      

        const links=auth.uid ? <SignedInLinks profile={profile}/>:<SignOutLinks/>

        return (
        <nav className="nav-wrapper grey darken-3">
           <div className='container'>
           <Link to='/' className='brand-logo'>BLOG</Link>
               {links}
           </div>
       </nav> 
        )
}

export default Navbar
