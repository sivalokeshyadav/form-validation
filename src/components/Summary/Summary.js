import React from 'react'

const Summary = () => {
  return (
    <div className='summary-container'>
        <div className='text'>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming</p>
        </div>
        <div className='summary-main-container'>
            <div className='items-container'>
                <h1>Arcade</h1>
                <p>$9/mo</p>
            </div>
            <div className='items-container'>
                <h1>Online service</h1>
                <p>$1/mo</p>
            </div>
            <div className='items-container'>
                <h1>Local storage</h1>
                <p>$2/mo</p>
            </div>

        </div>
        <div className='total-amount'>
            <h1>Total <span>(per month)</span></h1>
            <p>$12/mo</p>
        </div>

        <div className='buttons-container'>
            <button type="button">GO Back</button>
            <button type="button">Confirm</button>
        </div>
    </div>
  )
}

export default Summary