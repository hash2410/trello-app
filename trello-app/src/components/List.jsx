import { Card } from "./Card";
import { useState } from "react";
import { CardPopUp } from "./CardPopUp";
import { Droppable } from "@hello-pangea/dnd"; 
import "./List.css";

export function List({ listHeading, cards, listId, handleCardData, handleDeleteCard }) {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    return (
        <section className="list">
            <div className="list-header">
                <h2>{listHeading}</h2>
            </div>

            <Droppable droppableId={listId}>
                {(provided) => (
                    <div 
                        className="cards"
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                    >
                        {cards.map((card, index) => { 
                            return (
                                <Card 
                                    key={card.id} 
                                    cardId={card.id} 
                                    index={index}       
                                    listId={listId} 
                                    title={card.title} 
                                    cardTag={card.cardTag} 
                                    cardDate={card.cardDate} 
                                    handleDeleteCard={handleDeleteCard} 
                                />
                            );
                        })}
                        {provided.placeholder} 
                    </div>
                )}
            </Droppable>

            <button className="add-card-btn" onClick={() => setIsPopUpOpen(true)}>
                + Add Card
            </button>
            
            {isPopUpOpen && (
                <CardPopUp 
                    onClose={() => setIsPopUpOpen(false)} 
                    handleCardData={handleCardData} 
                    listId={listId}
                />
            )}
        </section>
    );
}