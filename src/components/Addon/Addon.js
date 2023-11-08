import React from 'react'

const Addon = () => {
  return (
    <div className='addon-container'>
        <div className='text'>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>

        </div>
        <div className='addon-items'>
            <div className='items'>
                <input type='checkbox' />
                <div className='text-container'>
                    <h1>Online service</h1>
                    <p>Access to multiple games</p>
                </div>
                <p>+$1/mo</p>
            </div>
            <div className='items'>
                <input type='checkbox' />
                <div className='text-container'>
                    <h1>Large storage</h1>
                    <p>Extra 1TB of cloud save</p>
                </div>
                <p>+$2/mo</p>
            </div>
            <div className='items'>
                <input type='checkbox' />
                <div className='text-container'>
                    <h1>Customizable Profitable</h1>
                    <p>Custom theme on your profile</p>
                </div>
                <p>+$2/mo</p>
            </div>
            
        </div>
    </div>
  )
}

export default Addon