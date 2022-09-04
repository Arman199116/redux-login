import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeView from '@material-ui/lab/TreeView';
import { createSelector } from 'reselect';
import { selectState } from '../../../redux/store'
import { connect } from "react-redux";
import Tree from "./Tree";

const TreeviewList = ({ state }) => {

    //let state = useSelector((state => state));
    return (
        <>
            <h3>State data</h3>
            <TreeView style={{ height: 200, maxWidth: 400, flexGrow: 1, marginLeft : '10px' }}
                defaultExpandIcon={<ChevronRightIcon />}
                defaultCollapseIcon={<ExpandMoreIcon />}
                expandtoselected={'false'}
            >
                <Tree data={{'State' :  state}} />
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

