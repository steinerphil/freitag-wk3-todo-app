import './App.css';
import KanbanSection from './components/KanbanSection';
import jsonResponse from './response.json';
import {useState} from "react";
import axios from "axios";

function App() {

    const [text, setText] = useState([])
    const [open, setOpen] = useState([]);
    const [progress, setProgress] = useState([]);
    const [done, setDone] = useState([]);

    const handleInput = (action) => {
        let string = action.target.value;
        setText(string);
    }

    const handleSubmit = () => {
        const newTodo = {
            "status" : "OPEN",
            "description" : text
        }
        axios.post('/api/todo', newTodo)
            .then(r => setOpen([...open, r.data]))
            .catch(console.log)
    }

    function test(){
        console.log(open)
    }

    return (
        <div className="App">
            <h1>To-Do-App</h1>
            <KanbanSection content={open} />
            <KanbanSection content={progress} />
            <KanbanSection content={done} />
            <input type="text" placeholder="Type your todo here" onInput={handleInput}/>
            <button type="submit" onClick={handleSubmit}>Add</button>
            <button type="submit" onClick={test}>test</button>
        </div>
    );
}

export default App;
