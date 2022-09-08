import React from 'react';
//import TreeItem from '@material-ui/lab/TreeItem';

const Tree = ({ data }) => {

    let handleShow = (e) => {
        e.target.style.display = 'block';
    }

    const tree = (dataObj, nodeId = 0 ) => {

        return Object.keys(dataObj).map((item) => {

            if (typeof dataObj[item] === 'object' || Array.isArray(dataObj[item])) {
                return <div style={{display : 'none'}} onClick={(e) => handleShow(e)}  key={item + nodeId} >{item}
                             {tree(dataObj[item], ++nodeId)}
                       </div>
            } else {
                return <div key={item + nodeId}>{`_`.repeat(nodeId)}{`${item} - ${dataObj[item]?.toString()}`} </div>
            }
        })
    }

    return (
        <>
            { tree(data) }
        </>
    )
}

export default React.memo(Tree);