import "./CardPopUp.css";

export function CardPopUp({onClose}) {
    return (
        <div className="popUp-overlay">
            <div className="popUp-content">
                <h3>Add New Card</h3>

                <input
                    type="text"
                    placeholder="Enter card title..."
                    className="popUp-input"
                />

                <div className="popUp-actions">
                    <button className="submit-btn">Add Card</button>
                    <button className="close-btn" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    )
}