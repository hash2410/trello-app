import { useState } from "react";
import "./CardPopUp.css";

export function CardPopUp({ onClose, listId, handleCardData }) {
    const [ title, setTitle ] = useState("");
    const [ tag, setTag ] = useState("Frontend");
    const [ date, setDate ] = useState("");

        const handleSubmit = (event)=>{
            event.preventDefault();
            if (!title.trim()) return;
            const newCard = {
                id: crypto.randomUUID(),
                title: title.trim(),
                cardTag : tag,
                cardDate: date ? `🕒 ${date}` : "No due date"
            };
            handleCardData(listId,newCard);
            onClose();
        };
    return (
        <div className="popUp-overlay">
            <form className="popUp-content" onSubmit={handleSubmit}>
                <h3>Add New Card</h3>

                <input
                    type="text"
                    placeholder="Enter card title..."
                    className="popUp-input"
                    value={title}
                    onChange={(event)=>{setTitle(event.target.value)}}
                />

                <select className="popUp-input popUp-select" value={tag} onChange={(event)=>{setTag(event.target.value)}}>
                    <option value="" disabled selected hidden>Select Tag...</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="design">Design</option>
                </select>

                <input
                    type="date"
                    className="popUp-input"
                    value={date}
                    onChange={(event)=>{setDate(event.target.value)}}
                />

                <div className="popUp-actions">
                    <button type="submit" className="submit-btn">Submit</button>
                    <button type="button" className="close-btn" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
};