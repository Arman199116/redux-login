import React, { useState, useEffect } from "react";
import RenderForm from "./RenderForm";
import './App.css';


function App() {

    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        let { email, password, checkbox } = document.forms[0];
        const userData = JSON.parse(localStorage.getItem(email.value)); //database.find((user) => user.useremail === userEmail.value);

        if (userData) {
            if (userData.password !== password.value) {
                setMessage('Invalid User Email or Password');
            } else {
                setMessage('');
                setIsSubmitted(true);
            }
        } else {
            checkbox.checked && localStorage.setItem(email.value, JSON.stringify({email : email.value, password : password.value}));
            setMessage('You are new Registred');
        }
        console.log('count');
    };

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                <p className="error">{message}</p>
                {isSubmitted ? <div>User is successfully logged in</div> : <RenderForm handleSubmit={handleSubmit} />}
            </div>
        </div>
    );
}

export default App;
