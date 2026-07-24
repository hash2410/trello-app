import { Draggable } from "@hello-pangea/dnd"; 

export function Card({ cardId, index, listId, title, cardTag, cardDate, handleDeleteCard }) {
    const tagClass = cardTag ? `tag-${cardTag.toLowerCase()}` : "";

    return (
        <Draggable draggableId={cardId} index={index}>
            {(provided) => (
                <article 
                    className="card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
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
            )}
        </Draggable>
    );
}