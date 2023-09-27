import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import authService from "./appwrite/auth"
import { logout,login } from './store/authSlice'
import {Footer,Header} from './components'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout());
      }
    })
    .finally(()=>setLoading(false))
  },[])
  return !loading?(
    <div className='bg-gray-400'>
      <div>
        <Header/>
        <Footer/>
      </div>
    </div>

  ):null
}

export default App
