import React from 'react'
import '../Styles/Login.css'
import { GiReturnArrow } from "react-icons/gi";

const Login = ({returnhome}) => {
    const nameitem=location.pathname==="/about"
    if(nameitem){
        console.log(' say hello');
        
      }else{
        console.log(nameitem);
        
      }

  return (
    <div className='logincomp'>
        <div className='logcont'>
            <div className='inplog'>
                <p className='inpp'>Login</p>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Password' className='pass'/>
                <div className='chckbox'>
                    <input type="checkbox" className='checkboxx' checked={true} />
                </div>
                <button className='loginbtn'>Login</button>
            </div>
            <div className='orlogin'>
                <p>or login with</p>
                <div className='orloginbtn'>
                    <button className='btn fb'><img src="./public/facebook.png" alt="" style={{height:'15px',width:'15px'}}/>Facebook</button>
                    <button className='btn'><img src="./public/search.png" alt="" style={{height:'15px',width:'15px'}}/>Google</button>
                </div>
            </div>
        </div>   
        <button className='returnbtn' onClick={returnhome}><GiReturnArrow/></button>  
    </div>
  )
}

export default Login
