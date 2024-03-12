import React from 'react'
import complete from '../assets/images/icon-complete.svg'

const ThankYou = ({setConfirmed}) => {
  return (
    <>
       <div className="complete">
                <img src={complete} />
                <h1>Thank you!</h1>
                <p>  We've added your card details</p>
                <div className='btn'>
                    <button onClick={()=> setConfirmed(false)}>Continue</button>
                </div>
        </div>
    </>
  )
}

export default ThankYou
