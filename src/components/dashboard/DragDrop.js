import React  from "react";
import { Draggable } from "react-beautiful-dnd";

function DragDrop({classN, components, draggableId, index}) {
    return (
        <Draggable key={index} draggableId={draggableId} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={classN}
                >
                    {components}
                </div>
            )}
        </Draggable>
    );
}

export default React.memo(DragDrop);
