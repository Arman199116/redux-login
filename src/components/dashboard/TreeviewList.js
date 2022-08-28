import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeView from '@material-ui/lab/TreeView';
import { useSelector } from "react-redux";
import Tree from "./treeview/Tree";

const TreeviewList = () => {

    let state = useSelector((state => state));
    return (
        <>
            <h3>State data</h3>
            <TreeView style={{ height: 200, maxWidth: 400, flexGrow: 1, marginLeft : '10px' }}
                defaultExpandIcon={<ChevronRightIcon />}
                defaultCollapseIcon={<ExpandMoreIcon />}
            >
                <Tree data={state} />
            </TreeView>

        </>
    )

}

export default React.memo(TreeviewList);
