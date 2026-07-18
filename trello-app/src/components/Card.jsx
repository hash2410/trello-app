export function Card({title , cardTag , cardDate}) {
    return (
        <article className="card">
            <span className="card-tag tag-frontend">{cardTag}</span>
            <h3>{title}</h3>
            <div className="card-footer">
                <span className="card-date">{cardDate}</span>
            </div>
        </article>
    )
}