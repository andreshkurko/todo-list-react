import React, {useState, useContext} from 'react'
import {AlertContext} from "../context/alert/alertContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            //...
            alert.show('Note was created', 'success')
            setValue('')
        } else {
            alert.show('Note not created, enter note name!')
        }
    }

    return(
    <form onSubmit={submitHandler}>
        <div className="form-group">
        <input
            type="text"
            className="form-control"
            placeholder="Enter note name ..."
            value={value}
            onChange={e => setValue(e.target.value)}
            />
        </div>
    </form>
    )
}