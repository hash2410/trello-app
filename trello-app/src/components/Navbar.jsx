import { useState } from "react";
import { ListPopUp } from "./ListPopUp";
import "./Navbar.css"

export function Navbar({handleListData}) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <header className="navbar">
            <h1 className="logo">Trello Clone</h1>

            <nav>
                <button
                    className="add-list-btn"
                    onClick={() => setIsEditing(true)}
                >
                    + Add List
                </button>

                {
                    isEditing &&
                    <ListPopUp
                        handleAddList={handleListData}
                        onClose={() => setIsEditing(false)}
                    />
                }
            </nav>
        </header>
    )
}