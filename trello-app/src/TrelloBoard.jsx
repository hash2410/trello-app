import './TrelloBoard.css';
import { List } from './components/List';
import { Navbar } from "./components/Navbar"

export function TrelloBoard() {
    const listHeading = "Negga";
    return (
        <>
            <Navbar />
            <main className="board">

                <List listHeading={listHeading} />

                {/* --- TO DO LIST --- */}
                <section className="list">
                    <div className="list-header">
                        <h2>To Do</h2>
                    </div>

                    <div className="cards">
                        <article className="card">
                            <span className="card-tag tag-frontend">Frontend</span>
                            <h3>Learn React Context API & Hooks</h3>
                            <div className="card-footer">
                                <span className="card-date">🕒 Jul 22</span>
                            </div>
                        </article>

                        <article className="card">
                            <span className="card-tag tag-design">Design</span>
                            <h3>Build Weather App Wireframes</h3>
                            <div className="card-footer">
                                <span className="card-date">🕒 Jul 25</span>
                            </div>
                        </article>
                    </div>
                    <button className="add-card-btn">+ Add Card</button>
                </section>

                {/* --- DOING LIST --- */}
                <section className="list">
                    <div className="list-header">
                        <h2>Doing</h2>
                    </div>

                    <div className="cards">
                        <article className="card">
                            <span className="card-tag tag-frontend">Frontend</span>
                            <h3>Create Trello Clone UI Elements</h3>
                            <div className="card-footer">
                                <span className="card-date card-date-urgent">🕒 Jul 19</span>
                            </div>
                        </article>
                    </div>
                    <button className="add-card-btn">+ Add Card</button>
                </section>

                {/* --- DONE LIST --- */}
                <section className="list">
                    <div className="list-header">
                        <h2>Done</h2>
                    </div>

                    <div className="cards">
                        <article className="card">
                            <span className="card-tag tag-backend">Backend</span>
                            <h3>Learn JavaScript ES6+ Features</h3>
                            <div className="card-footer">
                                <span className="card-date-done">✓ Completed</span>
                            </div>
                        </article>
                    </div>
                    <button className="add-card-btn">+ Add Card</button>
                </section>

            </main>
        </>
    )
}