import "./style/dashboardStyle.css";
import React, { useMemo, useState, useRef} from "react";
import UserInfo from "./UserInfo";
import ChartJS from "./../reactchartjs/ReactChartJS";
import UsersTable from "./UsersTable";
import TreeviewList from "./treeview/TreeviewList";

function Dashboard() {

    let cardList = [
        { classN : "container-userinfo", components : useMemo(() => <UserInfo />,[]), id : 1, order : 1 }, 
        { classN : "container-chart", components : useMemo(() => <ChartJS />,[]), id : 2, order : 2 },
        { classN : "container-table", components : useMemo(() => <UsersTable />,[]), id : 3, order : 3 },
        { classN : "container-state-data", components : useMemo(() => <TreeviewList />,[]), id : 4, order : 4 }
    ];

    let [cards, setCard] = useState(cardList);
    let currentCard = useRef(null);

    const dragStartHandler = (e, card) => {
        currentCard.current = card;
    }

    const dragOverHandler = (e) => {
        e.preventDefault();
    }
    const dropHandler = (e, card) => {
        e.preventDefault();
        setCard(cards.map((c) => {
            if (c.id === card.id) {
                return {...c, order : currentCard.current.order};
            }
            if (c.id === currentCard.current.id) {
                return {...c, order : card.order};
            }
            return c;
        }).sort(sortCard));
    }
    const sortCard = (a, b) => {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    }

    return (

        <div className="container">
            {
                cards.map((card) => {
                    return (
                        <div
                            onDragStart={(e) => dragStartHandler(e, card)}
                            onDragOver={(e) => dragOverHandler(e) }
                            onDrop={(e) => dropHandler(e, card)}
                            draggable={true}
                            key={card.id}
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
