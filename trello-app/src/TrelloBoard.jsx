import './TrelloBoard.css';
import { List } from './components/List';
import { Navbar } from "./components/Navbar"

export function TrelloBoard() {
    const boardData = [
        {
            id: "l1",
            listHeading: "To Do",
            cards: [
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
                }
            ]
        },
        {
            id: "l2",
            listHeading: "Doing",
            cards: [
                {
                    id: "c3",
                    title: "Create Trello Clone UI Elements",
                    cardTag: "Frontend",
                    cardDate: "🕒 Jul 19"
                    // Note: You can conditionally add a CSS class like `card-date-urgent` in your Card component later based on dates!
                }
            ]
        },
        {
            id: "l3",
            listHeading: "Done",
            cards: [
                {
                    id: "c4",
                    title: "Learn JavaScript ES6+ Features",
                    cardTag: "Backend",
                    cardDate: "✓ Completed"
                }
            ]
        }
    ];
    return (
        <>
            <Navbar />
            <main className="board">
                {boardData.map((list) => {
                    return (
                        <List key={list.id} listHeading={list.listHeading} cards={list.cards} />
                    )
                })}

            </main>
        </>
    )
}