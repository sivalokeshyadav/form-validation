import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./LeftBar.css"

const LeftBar = () => {
    const [item, setItem] = useState({first:true,second:false,third:false,fourth:false})

    

  return (
    <div className='app-container'>
            <div className='steps-container'>
                <Link to="/1">
                    <button type="button" onClick={()=>setItem({first:true,second:false,third:false,fourth:false})} >1</button>
                
                    <div className='step-text'>
                        <p>STEP 1</p>
                        <h1>YOUR INFO</h1>
                    </div>
                </Link>
            </div>
            <div className='steps-container'>
                <Link to="/2">
                    <button type="button" onClick={()=>setItem({first:false,second:true,third:false,fourth:false})}>2</button>
                
                    <div className='step-text'>
                        <p>STEP 2</p>
                        <h1>SELECT PLAN</h1>
                    </div>
                </Link>
            </div>
            <div className='steps-container'>
                <Link to="/3">
                    <button type="button" onClick={()=>setItem({first:false,second:false,third:true,fourth:false})}>3</button>
                
                    <div className='step-text'>
                        <p>STEP 3</p>
                        <h1>ADD-ONS</h1>
                    </div>
                </Link>
            </div>
            <div className='steps-container'>
                <Link to="/4">
                    <button type="button" onClick={()=>setItem({first:false,second:false,third:false,fourth:true})}>4</button>
                
                    <div className='step-text'>
                        <p>STEP 4</p>
                        <h1>SUMMARY</h1>
                    </div>
                </Link>
            </div>
        </div>
  )
}

export default LeftBar