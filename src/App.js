import React, { useState } from 'react'
import './App.css';

const App = () => {

    const [name, setName] = useState("");
    const [fullname, setfullName] = useState();
    const [nametwo, setnameTwo] = useState();
    const [lastname , setLastName] = useState('');

    const InputEvent = (event) => {
        console.log(event.target.value)
        setName(event.target.value);
    }

    const onsubmit = (event) => {
        event.preventDefault();
        setfullName(name)
        setLastName(nametwo)
        
    }

    const InputEventTwo = (event) => {
        setnameTwo(event.target.value)

    }

    return (
        <>
            <form onSubmit={onsubmit}>
                <div>
                    <h1>Hello {fullname} {lastname}</h1>
                    <input type="text"
                        placeholder="Enter your First Name"
                        onChange={InputEvent}
                        value={name} />

                    <input type="text"
                        placeholder="Enter your Last Name"
                        onChange={InputEventTwo}
                        value={nametwo} />
                    <button type="submit">Submit Here</button>
                </div>
            </form>
        </>
    )
}

export default App;