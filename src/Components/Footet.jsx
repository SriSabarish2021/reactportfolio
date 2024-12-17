import React from 'react'
import { NavLink } from "react-router"
import '../Styles/Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useParams } from "react-router"

const Footet = () => {
    const {name}=useParams()
    let strin=String(name)
    console.log(strin);

  return (
    <div className='footitems' style={{display:strin.includes("login")?'none':'flex'}}>
            <div className='footer'>
                    <NavLink className='footh1' to='/'>
                        <h1>Prog</h1>
                    </NavLink>
                    <div className='footcont'>
                        <div className='resources'>
                            <p>Resourses</p>
                            <ul >
                                <NavLink className='footli' to='/'>Home</NavLink> 
                                <NavLink className='footli'  to='/about' >About</NavLink>
                            </ul>
                        </div>
                        <div className='followup'>
                            <p>Follow me on</p>
                            <ul>
                                <NavLink className='footli' to='/contact'>Contact</NavLink>
                                <NavLink className='footli' to='/github'>Github</NavLink>
                            </ul>
                        </div>
                        <div className='legal'>
                            <p>Legal</p>
                            <ul>
                                <NavLink className='footli' to='/'>Privacy Policy</NavLink>
                                <NavLink className='footli' to='/'>Terms & Conditions</NavLink>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className='rights'>
                <p>SriSabarish. Allrightsreserved</p>
                <ul>
                    <a target='_blank' href="https://www.facebook.com/srisabarish003/"><FaFacebookF></FaFacebookF></a>
                    <a target='_blank' href="https://www.linkedin.com/in/sri-sabarish-b922222a5/"><FaLinkedinIn></FaLinkedinIn></a>
                    <a target='_blank' href="https://github.com/SriSabarish2021"><FaGithub/></a>
                    <a target='_blank' href="https://x.com/SriSabarish2003"><FaXTwitter/></a>
                </ul>
            </div>
    </div>
    
  )
}

export default Footet

