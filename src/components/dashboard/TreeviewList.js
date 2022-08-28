import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';


const TreeviewList = ({list}) => {

    const renderTree = (list) => {


                    
                
           

    }


    return (
        <>
            <TreeView style={{
                height: 240,
                maxWidth: 400,
                flexGrow: 1,
            }}
                defaultExpandIcon={<ChevronRightIcon />}
                defaultCollapseIcon={<ExpandMoreIcon />}
            >



                 <TreeItem nodeId="0" label="States">
                    <TreeItem nodeId="1" label="Madhya Pradesh" />
                    <TreeItem nodeId="2" label="Goa" />
                    <TreeItem nodeId="3" label="Delhi" />
                <TreeItem nodeId="1" label="States">
                    <TreeItem nodeId="8" label="Madhya Pradesh" />
                    <TreeItem nodeId="9" label="Goa" />
                    <TreeItem nodeId="10" label="Delhi" />
                    <TreeItem nodeId="11" label="Mumbai, etc" />
                </TreeItem>
                    <TreeItem nodeId="4" label="Mumbai, etc" />
                </TreeItem>
            </TreeView>

        </>
    )

}

export default TreeviewList;
