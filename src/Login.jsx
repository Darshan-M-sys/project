import React, { useEffect, useState } from 'react'
 import axios from "axios"

const Login = () => {
  const [msg,setMsg]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [profileData,setProfileData]=useState({});
const [data,setData]=useState({})
const [courseData,setCourseData]=useState([])
 const handleLogin=()=>{
  axios.post("http://localhost:5000/user/login",{email,password}, { withCredentials: true }).then((res)=>{
   setMsg(res.data.msg)
  }).catch((err)=>console.log(err))
 }

 const handleGetLogin=()=>{
  axios.get("http://localhost:5000/user/login",{withCredentials:true}).then((res)=>{
    setData(res.data.data || {})
  }).catch((err)=>console.log(err))
 }
 useEffect(()=>{
handleGetLogin()
 },[])



 const handleProfile=()=>{
  axios.get("http://localhost:5000/user/profile",{withCredentials:true}).then((res)=>{
    setProfileData(res.data.data || {})
  }).catch((err)=>console.log(err))
 }

 useEffect(()=>{
handleProfile()
 },[])


 const handleCourse=()=>{
   axios.get("http://localhost:5000/course",{withCredentials:true}).then((res)=>{
setCourseData(res.data.data)
  }).catch((err)=>console.log(err))
 }

  useEffect(()=>{
handleCourse()
 },[])


 const handleChat=()=>{
  axios.get(`http://localhost:5000/GroupChat/${"69651908845a148da6969cbd"}`,{withCredentials:true}).then((res)=>console.log(res.data.data)).catch((err)=>console.log(err))
 }

 useEffect(()=>{
   handleChat()
 },[])

  return (
    <div >
      <input  type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='enter the Email'/>
      <input type="password"onChange={(e)=>setPassword(e.target.value)}  placeholder='password'/>
      <button onClick={handleLogin}>
   login
      </button>
      <h1>{msg}</h1>
      <h1>{data.username}</h1>
      <h2>{data.email}</h2>
      <h3>{data.password}</h3>
      <h1>{data.role}</h1>

      <h1>Profile Data</h1>
      <img src={profileData.profile_Imag} alt="profile" />

      {courseData.map((item,index)=>{
        return(
          <div>
<h1>{item.title}</h1>
<h2>{item.teacherId?.username}</h2>
<h1>{item._id}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Login
