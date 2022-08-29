import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';

const Tree = ({data}) => {

    const tree = (dataObj) => {
       return Object.keys(dataObj).map((item, i) => {
            if (typeof dataObj[item] === 'object' || Array.isArray(dataObj[item])) {
                return <TreeItem key={i} nodeId={`${Math.random()}`} label={item}>
                            {tree(dataObj[item])}
                       </TreeItem>
            } else {
                return <TreeItem key={i} nodeId={`${Math.random()}`} label={`${item} - ${dataObj[item]?.toString()}`} />
            }
        })
    }

    return (
        <>
            {tree(data)}
        </>
    )

}

export default React.memo(Tree);