import React from "react";

function Input({ name, type, value }) {
    return (
        <div className="input-container">
            <label>{name}</label>
            <input type={type} name={name.toLowerCase()} value={value ? value : ''}  />
        </div>
    );
}

export default Input;
