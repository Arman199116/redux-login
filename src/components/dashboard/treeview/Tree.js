import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';

const Tree = ({ data }) => {

    const tree = (dataObj, nodeId = 0 ) => {

       return Object.keys(dataObj).map((item) => {
            nodeId++;
            if (typeof dataObj[item] === 'object' || Array.isArray(dataObj[item])) {
                return <TreeItem  key={item + nodeId} nodeId={`${item + nodeId}`} label={item}>
                            {tree(dataObj[item], nodeId)}
                       </TreeItem>
            } else {
                return <TreeItem key={item + nodeId} nodeId={`${item + nodeId}`} label={`${item} - ${dataObj[item]?.toString()}`} />
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