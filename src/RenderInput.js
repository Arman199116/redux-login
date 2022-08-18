import React from "react";


const RenderInput = ({ className, label, name, required}) => {

    return (
        <div className={className}>
            <label>{label}</label>
            <input type={name} name={name} required={required} />
        </div>
    )
}
export default RenderInput;