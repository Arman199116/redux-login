import React  from "react";

function DragDrop({classN, components}) {
    return (
        
                <div className={classN} >
                    {components}
                </div>
    
    );
}
export default React.memo(DragDrop);
