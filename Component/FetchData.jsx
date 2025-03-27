import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setdata] = useState({})
    const [Loding, setLoding] = useState(false);

    useEffect(() => {
        fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then(response => response.json())
            .then(data => {
                setdata(data);
                setLoding(false);
            })
    }, [])
    console.log(data);

    // ID Nation: "01000US",
    // Nation: "United States",
    // ID Year: 2023,
    // Year: "2023",
    // Population: 332387540,
    // Slug Nation: "united-states
    return (
        <div className='' style={{}}>
            {
                data.map((e, i) => (
                    <>
                        <div key={i}>
                            <h1>e.Nation</h1>
                            <p>e.Year</p>
                        </div>
                        <hr />
                    </>
                ))
            }

        </div>
    )
}

export default FetchData