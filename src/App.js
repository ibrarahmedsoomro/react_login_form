import React, { useState } from 'react'
import './App.css';

const App = () => {

    const [FullName, setFullName] = useState({
        FName: "",
        LName: "",
        Email : "",
        Phone : "",

    });

    const InputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)
 
        const {value, name} = event.target

        setFullName((preValue) => {
            // console.log(preValue)

            if (name === "FName") {
                return {
                    FName: value,
                    LName: preValue.lname,
                    Email: preValue.Email,
                    Phone : preValue.Phone


                };
            } else if (name === "LName") {
                return {

                    FName: preValue.FName,
                    LName: value,
                    Email: preValue.Email,
                    Phone : preValue.Phone

                };               
            }else if (name === "Emai") {
                return {
                    FName: preValue.FName,
                    LName: preValue.LName,
                    Email: value,
                    Phone : preValue.Phone,

                };               
            }else if (name === "Phone") {
                return {
                    FName: preValue.FName,
                    LName: preValue.LName,
                    Email: preValue.Email,
               Phone : value

                };               
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
                    <h1>Hello {FullName.FName}{FullName.LName}</h1>
                    <p>{FullName.Email}</p>
                    <p>{FullName.Phone}</p>
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

                    <button type="submit">Submit Here</button>
                </div>
            </form>
        </>
    )
}


export default App;