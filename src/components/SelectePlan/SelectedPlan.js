import React from 'react'
import "./SelectedPlan.css"

const SelectedPlan = () => {
  return (
    <div className='selected-plan-container'>
        <div>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
        </div>
        <div className='selection'>
            <div className='items-container'>
                <div className='container-selection'>
                    <img src="" alt="tye" />
                    <h1>Arcade</h1>
                    <p>$9/mo</p>
                </div>
                <div className='container-selection'>
                    <img src="" alt="game" />
                    <h1>Advanced</h1>
                    <p>$12/mo</p>
                </div>
                <div className='container-selection'>
                    <img src="" alt="progame" />
                    <h1>Pro</h1>
                    <p>$15/mo</p>
                </div>
                
            </div>
            <div className='checking'>
                <h5>Monthly</h5>
                <button></button>
                <h5>Yearly</h5>
            </div>
            
        </div>
        <div className='buttons-container'>
            <button type='button'>Go Back</button>
            <button type='button'>Next Step</button>
        </div>
    </div>
  )
}

export default SelectedPlan