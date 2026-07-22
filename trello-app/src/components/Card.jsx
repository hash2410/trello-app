export function Card({ title, cardTag, cardDate }) {
    const tagClass = cardTag ? `tag-${cardTag.toLowerCase()}` : "";

    return (
        <article className="card">
            <span className={`card-tag ${tagClass}`}>{cardTag}</span>
            <h3>{title}</h3>
            <div className="card-footer">
                <span className="card-date">{cardDate}</span>
            </div>
        </article>
    );
}