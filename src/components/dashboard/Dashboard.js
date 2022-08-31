import "./style/dashboardStyle.css";
import React, { useMemo, useState ,useRef} from "react";
import UserInfo from "./UserInfo";
import ChartJS from "./../reactchartjs/ReactChartJS";
import UsersTable from "./UsersTable";
import DragDrop from "./DragDrop";
import TreeviewList from "./TreeviewList";


function Dashboard() {

    let cardList = [
        { classN  : "container-userinfo", components : useMemo(() => <UserInfo />,[]), id : 1, order : 3 }, 
        { classN  : "container-chart", components : useMemo(() => <ChartJS />,[]), id : 2, order : 1 },
        { classN  : "container-table", components : useMemo(() => <UsersTable />,[]), id : 3, order : 2 },
        { classN  : "container-state-data", components : useMemo(() => <TreeviewList />,[] ), id : 4, order : 4 }
    ];

    let [cards, setCard] = useState(cardList);
    let currentCard = useRef(null);

    const dragStartHandler = (e, card) => {
       
        currentCard.current = card;
        console.log('start ', currentCard);
    }
    const dragEndHandler = (e) => {
        //e.target.style.background = 'white';
    }

    const dragOverHandler = (e) => {
        e.preventDefault();
    }
    const dropHandler = (e, card) => {
        
        
        setCard(cards.map((c) => {
            if (c.id === card.id) {
                return {...c, order : currentCard.current.order};
            }
             if (c.id === currentCard.current.id) {
                return {...c, order : card.order};
            }
            if (c.id !== card.id) {return c; };
        }));
        e.preventDefault();


    }
    const sortCard = (a, b) => {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    }

    
    return (

        <div className="container" >
            {
                cards.sort(sortCard).map((card, i) => {
                    return (
                        <div
                            onDragStart={(e) => dragStartHandler(e, card)}
                            onDragLeave={(e) => dragEndHandler(e) }
                            onDragEnd={(e) => dragEndHandler(e) }
                            onDrop={(e) => dragOverHandler(e)}
                            onDragOver={(e) => dropHandler(e, card) }
                            draggable={true}
                            key={i}
                            className={card.classN}
                        >
                            {card.components}  
                        </div>
                    )
                })
            }

        </div>
    );
}

export default React.memo(Dashboard);
