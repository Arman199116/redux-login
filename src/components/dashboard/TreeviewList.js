import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeView from '@material-ui/lab/TreeView';
import { useSelector, shallowEqual } from "react-redux";
import Tree from "./treeview/Tree";
import TreeItem from '@material-ui/lab/TreeItem';

const TreeviewList = () => {

    let state = useSelector((state => state), shallowEqual);
    
    return (
        <>
            <h3>State data</h3>
            <TreeView style={{ height: 200, maxWidth: 400, flexGrow: 1, marginLeft : '10px' }}
                defaultExpandIcon={<ChevronRightIcon />}
                defaultCollapseIcon={<ExpandMoreIcon />}
            >
                <TreeItem  nodeId={`0`} label={'State'}>
                    <Tree data={state} />
                </TreeItem>
            </TreeView>

        </>
    )

}

export default React.memo(TreeviewList);
