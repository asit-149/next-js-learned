'use client'
import { useState } from "react"

const AddNewUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const newUser = async()=>{
      // console.log(name,email,age)
     let response = await fetch("api/users",{
        method: 'POST',
        body: JSON.stringify({name,email,age})
      })
      response = await response.json()
      if(response.ok){
        alert('User Successfully Login')
      }else{
        alert('Error found')
      }
    }
  return (
    <div>
      <input className="ml-3 mr-4 mt-5"  type="text" onChange={e => setName(e.target.value)} placeholder="Enter Your name"/>
      <br/>
      <input className="ml-3 mr-4 mt-5" type="text" onChange={e => setEmail(e.target.value)} placeholder="Enter Your Email"/>
      <br/>
      <input  className="ml-3 mr-4 mt-5" type="number" onChange={e => setAge(e.target.value)} placeholder="Enter Your age"/>
       <br/>
      <button className="bg-black text-white border p-2 ml-3 mt-4" onClick={newUser}>Add New User</button>
    </div>
  )
}

export default AddNewUser
