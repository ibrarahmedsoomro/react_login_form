import React, { useState } from 'react'
import './App.css';

const App = () => {

    const [name, setName] = useState("");
    const [fullname, setfullName] = useState();

    const InputEvent = (event) => {
        console.log(event.target.value)
        setName(event.target.value);
    }

    const  onsubmit = () => {
        setfullName(name)
    }

    return (
        <>
        <div>
            <h1>Hello {fullname}</h1>
            <input  type="text"
             placeholder="Enter your name" 
             onChange={InputEvent}
             value={name} />
            <button onClick={onsubmit}>Click Here</button>
        </div>
 </>
    )
}

export default App;