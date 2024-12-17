import React, { useContext } from 'react'
import '../Styles/Cont.css'
import { useParams } from "react-router"
import { motion } from "framer-motion";
import { FaGooglePlay } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import Itemcontext from '../Context/Itemcontext';

const Cont = ({returnhome}) => {
    const {name}=useParams()
    console.log(name)
    const {git}=useContext(Itemcontext)
  return (
    <motion.div
      key={name} // Unique key ensures re-render on param change
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}>
        <div className='content'>
          {typeof(name)=== "string"&&name.includes('about')?(<><div className='contimg'>
              <img className='contimgfile' src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image1" />
            </div>
            <div className='parenthome'>
              <div className='homecont'>
                  <h1>Lorem, ipsum dolor sit amet consectetur.</h1>
                  <p className='homep' style={{textAlign:'center',fontSize:'14px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum nobis aliquid tenetur ducimus eligendi obcaecati est. Tempore accusamus eos corrupti perspiciatis facere perferendis quibusdam animi nobis, debitis sed? Aspernatur provident recusandae illo explicabo dolorem repudiandae nemo alias porro! Omnis reiciendis alias natus mollitia, temporibus praesentium obcaecati sed maiores blanditiis?</p>
              </div>
            </div></>): typeof(name)=== "string"&&name.includes('github')?(<>
            <div className='contactimg'>
              <img className='contimgfile' style={{maxHeight:'300px',borderRadius:'10px'}} src={`${git.avatar_url}`} alt="image1" />
            </div>
            <div className='contform'>
              <p style={{fontSize:'28px'}}>{git.name}</p>
              <p style={{fontSize:'20px',color:`rgb(52, 52, 52)`}} >Followers: <span style={{color:`rgb(255, 75, 75)`}}>{git.followers}</span></p>
              <p style={{fontSize:'20px',color:`rgb(52, 52, 52)`}}>Following: <span style={{color:`rgb(255, 75, 75)`}}>{git.following}</span></p>
              <p style={{fontSize:'20px',color:`rgb(52, 52, 52)`}}>Location: <span style={{color:`rgb(255, 75, 75)`}}>{git.location}</span></p>
              <p style={{fontSize:'20px',color:`rgb(52, 52, 52)`}}>Company: <span style={{color:`rgb(255, 75, 75)`}}>{git.company}</span></p>
              <button className='contactbtn' onClick={returnhome} style={{cursor:'pointer'}}><GiReturnArrow/></button>
            </div></>):typeof(name)=== "string"&&name.includes('contact')?(<>
            <div className='contactimg'>
              <img className='contimgfile' style={{maxHeight:'300px'}} src="./public/rb_63486.png" alt="image1" />
            </div>
            <div className='contform'>
              <p>Contact</p>
              <form className='form' action="submit">
                <input className='contactinp' type="text" placeholder='Name' />
                <input className='contactinp' type="email" placeholder='Email' />
                <textarea className='contactinp' name="" id="" cols="30" rows="10" placeholder='Your Comment'></textarea>
              </form>
              <button className='contactbtn' type='submit'>Submit</button>
            </div></>):(<><div className='contimg'>
              <img className='contimgfile' src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
            </div>
            <div className='parenthome'>
              <div className='homecont'>
                  <h1>Download Now</h1>
                  <p className='homep'>Lorem ipsum </p>
                  <div className='homebtn'>
                    <button><FaGooglePlay></FaGooglePlay>Download</button>
                  </div>
              </div>
            </div></>)}
            
            
        </div>
    </motion.div>
    
  )
}

export default Cont
