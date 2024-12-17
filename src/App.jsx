import { useEffect, useContext } from 'react'
import './App.css'
import Cont from './Components/Cont'
import Footet from './Components/Footet'
import Header from './Components/Header'
import { Routes,Route,useLocation } from "react-router"
import Login from './Components/Login'
import {  AnimatePresence } from "framer-motion";
import Itemcontext from './Context/Itemcontext'
import { useNavigate } from "react-router"

function App() {
  let navigaet=useNavigate()
  let returnhome=()=>{
    navigaet('/')
  }
  const {git,setgit}=useContext(Itemcontext)
  const location = useLocation();
  let username='SriSabarish2021'
  const logitem=location.pathname==="/login"

  let getlogin=()=>{
    console.log('helllo');
    
  }


  useEffect(() => {
     
    let fetchingdata=async()=>{
      let getingdata=await fetch(`https://api.github.com/users/${username}`)
      let jsondata=await getingdata.json()
      console.log(jsondata);
      setgit(jsondata)
      console.log(git);
    }
    fetchingdata()
    return () => {
      setgit({})
    }
  }, [])
  

  return (
        <div className='app'>
          <AnimatePresence mode="wait"  location={location} key={location.pathname}>
            {!logitem && <Header getlogin={getlogin}/>}
            <Routes >
              <Route path='/login' element={<Login returnhome={returnhome}/>}></Route>
              <Route path='/' element={<Cont/>} ></Route>
              <Route path='/:name' element={<Cont returnhome={returnhome}/>} ></Route>
            </Routes>
            {!logitem && <Footet/>}
          </AnimatePresence>
        </div>
  )
}

export default App
