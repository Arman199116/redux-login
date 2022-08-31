import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeView from '@material-ui/lab/TreeView';
import { selectState } from './../../redux/store'
import { connect } from "react-redux";
import Tree from "./treeview/Tree";
import TreeItem from '@material-ui/lab/TreeItem';
import { createSelector } from 'reselect';

const TreeviewList = ({ state }) => {

    //let state = useSelector((state => state));
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
let getState = createSelector([ selectState ], (state) => {
    console.log('new state treeview');
    return { stateObj : state }
});
const mapStateToProps = (state) => {
    const { stateObj } = getState(state);
    return { state : stateObj }
}

export default connect(mapStateToProps)(TreeviewList)

