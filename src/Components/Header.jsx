import React from 'react'
import '../Styles/Header.css'
import { NavLink } from "react-router"
import { useParams } from "react-router"

const Header = ({getlogin}) => {
  const loginer='login'
  return (
    <div className='headerdiv' >
      <NavLink to='/' className={({ isActive}) =>isActive ? "active" : ""}>
        <div className='profileimg'>
          <img src="./public/edit.jpeg" alt="Sri Sabarish IMG" />
        </div>
      </NavLink>
      <div className='navigator'>
        <ul>
          <NavLink  style={{textDecoration:'none'}} to='/' id='li' className={({ isActive}) =>isActive ? "active" : ""}>Home</NavLink> 
          <NavLink style={{textDecoration:'none'}} to='/about'  id='li' className={({ isActive }) =>isActive ? "active" : ""}  >About</NavLink>
          <NavLink  className={({ isActive}) =>isActive ? "active" : ""}  id='li'  style={{textDecoration:'none'}}  to='/contact'>Contact</NavLink>
          <NavLink className={({ isActive}) =>isActive ? "active" : ""}  id='li'  style={{textDecoration:'none'}} to='/github'>Github</NavLink>
        </ul>
      </div>
      <div className='login'>
        <NavLink className='p' to='/login' onClick={getlogin} style={{display:loginer.includes('login')?'flex':'none'}}>Login</NavLink>
        <button><NavLink to='/login' style={{textDecoration:'none',color:'white'}}>Get Started</NavLink></button>
      </div>
    </div>
  )
}

export default Header
