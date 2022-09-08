import React, {useState, useEffect} from "react";
import { createSelector } from 'reselect';
import { selectState } from '../../../redux/store'
import { connect } from "react-redux";
import Tree from "./Tree";

const TreeviewList = ({ state }) => {


    let [trees, setTrees] = useState([])
    let handleShow = (e) => {
        e.target.style.display = 'block';
    }
    

    
    return (
        <>
            <h3>State data</h3>
            <button onClick={(e) => handleShow(e)} >State</button>
            <Tree data ={state} />
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

