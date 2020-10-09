import React, { useState } from 'react'
import './App.css';

const App = () => {

    const [FullName, setFullName] =useState({
        FName : "",
        LName : "",

    });

    const InputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)

        const value = event.target.value
        const name = event.target.name

        setFullName((preValue)=>{
            // console.log(preValue)

            if (name ===  "FName") {
                return {
                    FName : value,
                    LName : preValue.lname
                }; 
            } else if (name ===  "LName") {
                return {
                    FName : preValue.FName,
                    LName : value
                }
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
                        <input type="text"
                        name="FName"
                        placeholder="Enter your First Name"
                        onChange={InputEvent}
                        value={FullName.fname} />

                        <input type="text"
                        placeholder="Enter your Last Name"
                        name ="LName"
                        onChange={InputEvent}                   
                        value={FullName.Lname} />

                    <button type="submit">Submit Here</button>
                </div>
            </form>
        </>
    )
}


export default App;