import React from "react";
import { createSelector } from 'reselect';
import { selectState } from '../../../redux/store'
import { connect } from "react-redux";
import Tree from "./Tree";
import './tree.css';

const TreeviewList = ({ state }) => {

    return (
        <>
            <h3>State data</h3>
            <ul id="myUL">
                <Tree data = {{State : state}} toRight={0}/>
            </ul>
        </>
    )
}
let getState = createSelector([ selectState ], (state) => {
    return { stateObj : state }
});
const mapStateToProps = (state) => {
    const { stateObj } = getState(state);
    return { state : stateObj }
}

export default connect(mapStateToProps)(TreeviewList)

