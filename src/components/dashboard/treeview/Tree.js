import React, { useRef, useState} from 'react';
//import TreeItem from '@material-ui/lab/TreeItem';

const Tree = ({ data, defaultShow, nodeId }) => {

    let [show, setShow] = useState(false);
    let divRef = useRef(false);


    // const tree = (dataObj, defaultShow, nodeId = 0 ) => {
    //     nodeId++;
    //     console.log(defaultShow);
        
    // }
    nodeId++
    return (
        <>
        {
            
            Object.keys(data).map((item) => {

                if (typeof data[item] === 'object' || Array.isArray(data[item])) {
                    return <div style={{display : defaultShow ? 'block' : 'none'}} 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShow(!show);
                                    divRef.current = !divRef.current;
                                }}
                                key={item + nodeId}
                        >
                                {' .'.repeat(nodeId)}{item}
                                <Tree data={data[item]} defaultShow={divRef.current} nodeId={nodeId} />
                        </div>
                } else {
                    return <div style={{display : defaultShow ? 'block' : 'none'}} key={item + nodeId}>{' .'.repeat(nodeId)}{`${item} - ${data[item]?.toString()}`}</div>
                }
                
            })
        }
        </>
    )
}

export default React.memo(Tree);