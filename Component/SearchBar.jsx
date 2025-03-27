import React, { useState } from 'react'

const SearchBar = () => {
    const [val, setVal] = useState('');

    const data = [
        "apple",
        "banana",
        "lemon",
        "guava",
        "cheery"
    ]
    const filterData = data.filter(item => item.toLowerCase().includes(val.toLowerCase()))
    return (
        <div>
            <input type="text" onChange={(e) => setVal(e.target.value)} placeholder='Enter the text ' value={val} />
            <ul>
                {
                    filterData.map((e, i) => (
                        <li key={i}>
                            {e}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchBar
