import { useState } from "react";
import "./PopUp.css"; 

export function ListPopUp({ handleAddList, onClose }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim()) return;

        handleAddList(title.trim());
        setTitle("");
        onClose();
    };

    return (
        <div className="popUp-overlay">
            <form className="popUp-content" onSubmit={handleSubmit}>
                <h3>Add New List</h3>

                <input
                    type="text"
                    className="popUp-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter list title..."
                />

                <div className="popUp-actions">
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>

                    <button
                        type="button"
                        className="close-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}