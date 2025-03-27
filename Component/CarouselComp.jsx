import React, { useState } from 'react'

const CarouselComp = () => {
    const [num,setNum] = useState(0);
    const arr = [
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s"
    ]
  return (
    <>
        <div className=''>
            <button onClick={()=>{
                setNum((num + 1) % arr.length)
            }} >prev</button>
            <img src={arr[num]} width={600} alt="" />
            <button onClick={()=>{
                setNum((num - 1 + arr.length) % arr.length)
            }}>next</button>
        </div>
    </>
  )
}

export default CarouselComp