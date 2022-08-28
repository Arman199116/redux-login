import "./style/dashboardStyle.css";
import React, { useMemo, useState } from "react";
import UserInfo from "./UserInfo";
import ChartJS from "./../reactchartjs/ReactChartJS";
import UsersTable from "./UsersTable";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DragDrop from "./DragDrop";
import TreeviewList from "./TreeviewList";


function Dashboard() {

    

    
    let charactersId = [
        { classN  : "container-userinfo", components : useMemo(() => <UserInfo />,[]), draggableId : 'userInfo', index : 0 }, 
        { classN  : "container-chart", components : useMemo(() => <ChartJS />,[]), draggableId : 'chartBoard', index : 1 },
        { classN  : "container-table", components : useMemo(() => <UsersTable />,[]), draggableId : 'UsersLists', index : 2 },
        { classN  : "container-state-data", components : useMemo(() => <TreeviewList/>,[] ), draggableId : 'viewTree', index : 3 }
    ];

    let [characters, setCharacters] = useState(charactersId);
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        let items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setCharacters(items)
    }

    return (

        <DragDropContext onDragEnd={handleOnDragEnd} >

            <Droppable droppableId="characters">
                {
                    (provided) => (

                        <div className="container" {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                characters.map(({classN, components, draggableId, index},i) => {
                                    return (
                                        <DragDrop key={i} classN={classN} components={components} draggableId={draggableId} index={index} />
                                    )

                                })
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </DragDropContext>
    );
}

export default Dashboard;
