import { Card } from "./Card"
import { useState } from "react";
import { CardPopUp } from "./CardPopUp";
export function List({ listHeading , cards , listId , handleCardData , handleDeleteCard }) {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    return (
        <section className="list">
            <div className="list-header">
                <h2>{listHeading}</h2>
            </div>

            <div className="cards">
                {cards.map((card)=>{
                    return(
                    <Card key={card.id} cardId={card.id} listId={listId} title={card.title} cardTag={card.cardTag} cardDate={card.cardDate} handleDeleteCard={handleDeleteCard} />
                    );
                })}
            </div>
            <button className="add-card-btn" onClick={()=>{
                setIsPopUpOpen(true);
            }}>+ Add Card</button>
            {isPopUpOpen && <CardPopUp onClose={() => setIsPopUpOpen(false)} handleCardData={handleCardData} listId={listId}/>}
        </section>
    )
}