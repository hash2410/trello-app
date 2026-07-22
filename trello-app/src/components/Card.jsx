export function Card({ cardId, listId, title, cardTag, cardDate, handleDeleteCard }) {
    const tagClass = cardTag ? `tag-${cardTag.toLowerCase()}` : "";

    return (
        <article className="card">
            <div className="card-header">
                <span className={`card-tag ${tagClass}`}>{cardTag}</span>
                <button 
                    className="delete-card-btn" 
                    onClick={() => handleDeleteCard(listId, cardId)}
                    title="Delete Card"
                >
                    ✕
                </button>
            </div>
            <h3>{title}</h3>
            <div className="card-footer">
                <span className="card-date">{cardDate}</span>
            </div>
        </article>
    );
}