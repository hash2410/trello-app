import { useState } from 'react';
import './TrelloBoard.css';
import { List } from './components/List';
import { Navbar } from "./components/Navbar"

export function TrelloBoard() {
    const [boardData, setBoardData] = useState([
        {
            id: "l1",
            listHeading: "To Do",
            cards: [
                {
                    id: "c1",
                    title: "Learn React Context API & Hooks",
                    cardTag: "Frontend",
                    cardDate: "🕒 Jul 22"
                },
                {
                    id: "c2",
                    title: "Build Weather App Wireframes",
                    cardTag: "Design",
                    cardDate: "🕒 Jul 25"
                }
            ]
        },
        {
            id: "l2",
            listHeading: "Doing",
            cards: [
                {
                    id: "c3",
                    title: "Create Trello Clone UI Elements",
                    cardTag: "Frontend",
                    cardDate: "🕒 Jul 19"
                }
            ]
        },
        {
            id: "l3",
            listHeading: "Done",
            cards: [
                {
                    id: "c4",
                    title: "Learn JavaScript ES6+ Features",
                    cardTag: "Backend",
                    cardDate: "✓ Completed"
                }
            ]
        }
    ])
    const handleCardData = (targetListId, newCard) => {
        const updatedBoardData = boardData.map((list) => {
            if (list.id === targetListId) {
                return {
                    ...list,
                    cards: [...list.cards, newCard]
                }
            }
            return list;
        });
        setBoardData(updatedBoardData);
    };

    const handleListData = (title) => {
        const newList = {
            id: crypto.randomUUID(),
            listHeading: title,
            cards: []
        };

        setBoardData([...boardData, newList]);
    }
    
    const handleDeleteCard = (targetListId, targetCardId)=>{
        const updatedBoardData = boardData.map((list)=>{
            if(list.id === targetListId){
                return{
                    ...list,
                    cards : list.cards.filter((card)=> { return card.id !== targetCardId})
                }
            };
            return list;    
        })
        setBoardData(updatedBoardData);
    };

    return (
        <>
            <Navbar handleListData={handleListData} />
            <main className="board">
                {boardData.map((list) => {
                    return (
                        <List
                            key={list.id}
                            listId={list.id}
                            listHeading={list.listHeading}
                            cards={list.cards}
                            handleCardData={handleCardData}
                            handleDeleteCard={handleDeleteCard}
                        />
                    )
                })}

            </main>
        </>
    )
}