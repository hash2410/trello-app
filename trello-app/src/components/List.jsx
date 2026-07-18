import { Card } from "./Card"
export function List({listHeading}) {
    const title = "Hello" , cardTag = "Mock End" ,  cardDate = "🕒 July 420"
    return (
        <section className="list">
            <div className="list-header">
                <h2>{listHeading}</h2>
            </div>

            <div className="cards">
                <Card title={title} cardTag={cardTag} cardDate={cardDate} />
            </div>
            <button className="add-card-btn">+ Add Card</button>
        </section>
    )
}