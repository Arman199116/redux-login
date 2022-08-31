import React from "react";

function Message({show,message}) {
    return <p className="message-component">{show && message}</p>;
}

export default (Message);
