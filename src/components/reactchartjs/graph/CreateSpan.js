import React from "react";

const Span = ({changeDay, dayName, day, activ}) => {
    return (
        <span className={activ += ' days-span '}  onClick={ e => changeDay(e, day)}>{dayName}</span> 
    )
}

export default Span;