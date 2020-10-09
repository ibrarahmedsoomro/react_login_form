import React, { useState } from 'react'
import './App.css';

const App = () => {

    const [FullName, setFullName] = useState({
        FName: "",
        LName: "",
        Email: "",
        Phone: "",
        quali : "",

    });

    const InputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)

        const { value, name } = event.target

        setFullName((preValue) => {

            return {
                ...preValue,
                [name]: value,
            }

        })

    }
    const onsubmit = (event) => {
        event.preventDefault();
        alert("form is submited")
    }

    return (
        <>
            <form onSubmit={onsubmit}>
                <div>
                    <h1>Hello {FullName.FName} 
                    {FullName.LName}</h1>
                    <br />
                    <p>{FullName.Email}</p>
                    <p>{FullName.Phone}</p>
                    <p>{FullName.quali}</p>
                    <input type="text"
                        name="FName"
                        placeholder="Enter your First Name"
                        onChange={InputEvent}
                        value={FullName.FName} />

                    <input type="text"
                        placeholder="Enter your Last Name"
                        name="LName"
                        onChange={InputEvent}
                        value={FullName.LName} />

                    <input type="email"
                        placeholder="Enter your Email"
                        name="Email"
                        onChange={InputEvent}
                        value={FullName.Email} />

                    <input type="number"
                        placeholder="Enter your Number"
                        name="Phone"
                        onChange={InputEvent}
                        value={FullName.Phone} />

                    <input type="text"
                        placeholder="Enter your Qualification"
                        name="quali"
                        onChange={InputEvent}
                        value={FullName.quali} />

                    <button type="submit">Submit Here</button>
                </div>
            </form>
        </>
    )
}


export default App;