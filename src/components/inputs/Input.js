import React from "react";

function Input({ name, type}) {
    return (
        <div className="input-container">
            <label>{name}</label>
            <input type={type} name={name.toLowerCase()}  required />
        </div>
    );
}

export default Input;
