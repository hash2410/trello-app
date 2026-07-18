import { Card } from "./Card"
export function List({ listHeading }) {
    const initialCards = [
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
        },
        {
            id: "c3",
            title: "Test Authentication Flow",
            cardTag: "Backend",
            cardDate: "🕒 Jul 28"
        }
    ];
    return (
        <section className="list">
            <div className="list-header">
                <h2>{listHeading}</h2>
            </div>

            <div className="cards">
                {initialCards.map((card)=>{
                    return(
                        <Card key={card.id} title={card.title} cardTag={card.cardTag} cardDate={card.cardDate} />
                    )
                })}
            </div>
            <button className="add-card-btn">+ Add Card</button>
        </section>
    )
}