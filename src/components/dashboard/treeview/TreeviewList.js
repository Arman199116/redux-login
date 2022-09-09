import React, {useState } from "react";
import { createSelector } from 'reselect';
import { selectState } from '../../../redux/store'
import { connect } from "react-redux";
import Tree from "./Tree";

const TreeviewList = ({ state }) => {


    let [show, setShow] = useState(false);

    return (
        <>
            <h3>State data</h3>
            <div onClick={(e) => setShow(!show)} >State</div>
            <Tree data ={state} defaultShow={show} nodeId={0}/>
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

