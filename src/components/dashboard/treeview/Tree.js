import React, {useState} from 'react';
import './Tree.css'

const Tree = ({data, level}) => {
    const [show, setShow] = useState(false)

    const toggleView = () => {
        setShow(!show);
    }
    const tree = [];
    const margin = 20;
let a = (data, level,tree ) => {
    if (typeof data === 'object') {
        for (let obj in data) {
            // if(data[obj] === null) {
            //     return <div className="Tree" style={{marginLeft: String((level + 1) * margin) + "px"}} key={obj}>{node.name}</div>
            // }
            a(data[obj], level + 1, tree )
        }
    } else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            a(data[i], level + 1, tree )
        }
    } else {
        tree.push(<div className="Tree" style={{marginLeft: String((level + 1) * margin) + "px"}} key={Date.now()}>{ data   }</div>)
    }
}
a(data, 0, tree)
    console.log(tree);
    const sign = show ? " \u2212 " : " + "

    return (
        <>
            <div className="Tree" style={{marginLeft: String(level * margin) + "px"}} onClick={e => toggleView()}>
                <span className="Sign">{sign}</span>{'root'}
            </div>
            {show && tree}
        </>
    )

}
/*<Tree
            key={key}
            name={node}
            data={node}
            level={level + 1}
            tree={tree}
          />*
          
*/
export default Tree;