import './App.css';
import KanbanSection from './components/KanbanSection';
import jsonResponse from './response.json';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [text, setText] = useState([])


    const response = jsonResponse;

    let todo = [];
    let progress = [];
    let done = [];

    function sortResponse(input) {
        for (let i = 0; i < input.length; i++) {
            if(input[i].status === "todo"){
                todo.push(input[i])
            }
            if(input[i].status === "progress"){
                progress.push(input[i])
            }
            if(input[i].status === "done"){
                done.push(input[i])
            }
        }
    }

    const handleInput = (action) => {
        let string = action.target.value;
        setText(string);
    }

    sortResponse(response);

    // useEffect(() => {
    //     axios.post('/api/todo', text).then(r => todo.push(r) )
    // })

    const handleSubmit = () => {
        axios.post('/api/todo', text).then(r => todo.push(r) )
    }

    return (
        <div className="App">
            <h1>To-Do-App</h1>
            <KanbanSection content={todo} title="todos"/>
            <KanbanSection content={progress} title="progress"/>
            <KanbanSection content={done} title="done"/>
            <input type="text" placeholder="Type your todo here" onInput={handleInput}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default App;
