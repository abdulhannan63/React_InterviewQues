// Create a toggle switch component between "On" and "Off" states

import React, { useState } from 'react';

const Togglebutton = () => {
      const [text, setText] = useState(true);
  return (
    <div className='main'>
    <button onClick={() => setText(!text)}>
      {text ? "OFF" : "ON"}
    </button>
  </div>
  )
}

export default Togglebutton