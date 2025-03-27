// Create a simple counter component that increases or decreases the count when clicking buttons.

import React, { useState } from 'react'

const Counter = () => {
    
    const [c, setc] = useState(0);
    return (
        <div className='main'>
            <button onClick={() => {
                setc(c + 1)
            }}>+</button>
            <p>{c}</p>
            <button onClick={() => {
                setc(c - 1)
            }}>-</button>
        </div>
    )
}

export default Counter