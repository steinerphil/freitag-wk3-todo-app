import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Navigation";
import KanbanBoard from "./components/KanbanBoard";
import useTodos from "./Hooks/UseTodos";

function App() {

    const {handleSetProgress, handleSubmit, handleInput, handleDelete, handleSetDone, input, open, progress, done} = useTodos()

    return (
        <Router>
            <div className="app">
                <h1>To-Do-App</h1>
                <Navigation/>
                <KanbanBoard
                    handleSetProgress={handleSetProgress}
                    handleSetDone={handleSetDone}
                    handleDelete={handleDelete}
                    handleInput={handleInput}
                    handleSubmit={handleSubmit}
                    input={input}
                    open={open}
                    progress={progress}
                    done={done}

                />
            </div>
        </Router>
    );
}

export default App;
