import { Card } from "./Card"
import { useState } from "react";
import { CardPopUp } from "./CardPopUp";
export function List({ listHeading , cards , listId , handleCardData }) {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    return (
        <section className="list">
            <div className="list-header">
                <h2>{listHeading}</h2>
            </div>

            <div className="cards">
                {cards.map((card)=>{
                    return(
                    <Card key={card.id} title={card.title} cardTag={card.cardTag} cardDate={card.cardDate} />
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