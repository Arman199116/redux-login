import React, { useState } from "react";
import RenderForm from "./RenderForm";
import './App.css';


function App() {

	const [errMes, setErrMes] = useState([]);
	const [isSubmitted, setIsSubmitted] = useState(false);
	  
		
	const handleSubmit = (event) => {
		event.preventDefault();
	  
		let { userEmail, pass } = document.forms[0];
	  
		const userData = JSON.parse(localStorage.getItem(userEmail)); //database.find((user) => user.useremail === userEmail.value);
	  
		if (userData) {
			if (userData.password !== pass.value) {
				setErrMes('Invalid User Email or Password');
			} else {
				setIsSubmitted(true);
			}
		} else {
			localStorage.setItem(userEmail, JSON.stringify({userEmail : userEmail, password : pass}));
			setErrMes('You new successfully Registred');
		}
	};
	   
	return (
		<div className="app">
			<div className="login-form">
				<div className="title">Sign In</div>
				{isSubmitted ? <div>User is successfully logged in</div> : <RenderForm handleSubmit={handleSubmit} errMes={errMes} />}
			</div>
		</div>
	);
}
	  

export default App;
