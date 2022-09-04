import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';

const Tree = ({ data }) => {

    const tree = (dataObj) => {
       return Object.keys(dataObj).map((item) => {
            if (typeof dataObj[item] === 'object' || Array.isArray(dataObj[item])) {
                return <TreeItem  expandtoselected={'false'}  key={item} nodeId={`${item}`} label={item}>
                            {tree(dataObj[item])}
                       </TreeItem>
            } else {
                return <TreeItem  expandtoselected={'false'} key={item} nodeId={`${item}`} label={`${item} - ${dataObj[item]?.toString()}`} />
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