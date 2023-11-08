import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./personalInfo.css"

const PersonalInfo = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [phoneNumber,setPhoneNumber]=useState("")
    const handleUsername=(event)=>{
        setUsername(event.target.value)

    }
    const handleEmailAddress=(event)=>{
        setEmail(event.target.value)

    }
    const handlePhoneNumber=(event)=>{
        setPhoneNumber(event.target.value)

    }
  return (
    <div className='container'>
        

        <div className='personal-info'>
            <div className='text'>
                <h1>Personal info</h1>
                <p>Please provide your name,email,address, and phone number</p>
            </div>

            <form>
                <div className='name-container'>
                    <label for="name">Name</label>
                    <input type="text" id="name" onChange={handleUsername} value={username} placeholder='stephen king' />
                </div>
                <div className='email-container'>
                    <label for="email">Email Address</label>
                    <input type="email" id="email" onChange={handleEmailAddress} value={email} placeholder='stephen@gmail.com' />
                </div>
                <div className='phone-container'>
                    <label for="phone">Phone Number</label>
                    <input type="phone" id="phone" onChange={handlePhoneNumber} value={phoneNumber} placeholder='+91 1234567890' />
                </div>
                
            </form>
            <div className='button'>
                <Link to="/2">
                    <button type="submit" className='next-btn' >NextStep</button>
                </Link>
            </div>
        </div>
    
    </div>
    
  )
}

export default PersonalInfo