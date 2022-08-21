import React from "react";

function Message({show,message}) {
    return <p>{show && message}</p>;
}

export default (Message);
