import React, { useState } from 'react'

const ModalComp = () => {
    const [isopen, setIsopen] = useState(false);
    const [isclose, setIsclose] = useState(false);
    // const [isopen,setIsopen] = useState(false);
    return (
        <>
            <button onClick={() => setIsopen(true)}>Open Modal</button>
            {
                isopen &&
                <div>
                    <button onClick={() => setIsopen(false)} >close</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti voluptas repellat, expedita magnam ullam aliquam ratione eaque modi magni laboriosam illum ipsum aliquid, accusamus quam adipisci. Quasi, commodi quam.</p>
                </div>
            }
        </>
    )
}

export default ModalComp