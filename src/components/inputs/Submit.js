import React from "react";

function Submit({value, handleSubmit}) {
    return (
        <div className="button-container">
            <input type="submit" value={value} onClick={handleSubmit ? (e) => handleSubmit(e) : null} />
        </div>
    );
}

export default Submit;
