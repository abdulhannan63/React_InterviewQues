// Create a multi-step form where users can navigate between different steps of the form.
import React, { use, useState } from 'react'

const First = ({ next }) => (
    <>
        <h1>First</h1>
        <button onClick={next}>nx</button>
    </>
)

const Second = ({ next, prev }) => {
    return (
        <>
            <h1>Second</h1>
            <button onClick={prev} >prv</button>
            <button onClick={next} >nx</button>
        </>
    )
}
const Third = ({ prev, sub }) => {
    return (
        <>
            <h1>Third</h1>
            <button onClick={prev}>prv</button>
            <button onClick={sub}>Submit</button>
        </>
    )
}

function Multi_Step_Form() {
    const [page, setPage] = useState(1);

    const nextPage = () => {
        setPage(page + 1);
    }
    const prevPage = () => {
        setPage(page - 1);
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }

    return (
        <div>
            <h1>Form</h1>
            <form action="">
                {page === 1 && <First next={nextPage} />}
                {page === 2 && <Second next={nextPage} prev={prevPage} />}
                {page === 3 && <Third prev={prevPage} sub={handleForm} />}
            </form>
        </div>
    )
}

export default Multi_Step_Form