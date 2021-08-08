import React, { useState } from 'react'
import PropTypes from 'prop-types';
export default function AddToDo({onCreate}) {
    const [value, setValue] = useState('')
    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            onCreate(value)
        }
    }
    return (
        <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <button>Add todo</button>
        </form>
    )
}
AddToDo.propTypes = {
    onCreate: PropTypes.func.isRequired
}