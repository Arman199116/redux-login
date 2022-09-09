import React from 'react';

const Tree = ({ data, toRigth }) => {

    let handleOpen = (e) => {
        e.target.parentElement.querySelector(".nested").classList.toggle("active");
        e.target.classList.toggle("caret-down");
    }
    toRigth++;
    return (
        <>
        {Object.keys(data).map((item) => {

            if (typeof data[item] === 'object' || Array.isArray(data[item])) {
                return <li key={Math.random() + toRigth} >
                            {'. '.repeat(toRigth)}
                            <span className="caret" onClick={ (e) => handleOpen(e)}>{item}</span>
                            <ul className="nested">
                                <Tree data={data[item]} toRigth={toRigth} />
                            </ul>
                        </li>
            } else {
                return <li key={Math.random() + toRigth}>{'. '.repeat(toRigth)}{`${item} : ${data[item]?.toString()}`}</li>
            }

        })}
        </>
    )
}

export default React.memo(Tree);