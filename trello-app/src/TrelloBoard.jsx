import { useState } from 'react';
import './TrelloBoard.css';
import { List } from './components/List';
import { Navbar } from "./components/Navbar";
import { DragDropContext } from '@hello-pangea/dnd'; 

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
                    cardDate: "🕒 2026-07-22"
                },
                {
                    id: "c2",
                    title: "Build Weather App Wireframes",
                    cardTag: "Design",
                    cardDate: "🕒 2026-07-25"
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
                    cardDate: "🕒 2026-07-19"
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
    ]);

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
    };
    
    const handleDeleteCard = (targetListId, targetCardId) => {
        const updatedBoardData = boardData.map((list) => {
            if (list.id === targetListId) {
                return {
                    ...list,
                    cards: list.cards.filter((card) => card.id !== targetCardId)
                };
            }
            return list;    
        });
        setBoardData(updatedBoardData);
    };

    const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
    ) {
        return;
    }

    const newBoardData = structuredClone(boardData);

    const sourceList = newBoardData.find((list) => list.id === source.droppableId);
    const destinationList = newBoardData.find((list) => list.id === destination.droppableId);

    const [movedCard] = sourceList.cards.splice(source.index, 1);

    if (destinationList.listHeading.toLowerCase() === "done") {
        movedCard.cardDate = "✓ Completed";
    }

    destinationList.cards.splice(destination.index, 0, movedCard);

    setBoardData(newBoardData);
};

    return (
        <>
            <Navbar handleListData={handleListData} />
            
            <DragDropContext onDragEnd={handleOnDragEnd}>
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
            </DragDropContext>
        </>
    );
}