import './App.css';
import KanbanSection from './components/KanbanSection';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [input, setInput] = useState([])
    const [open, setOpen] = useState([]);
    const [progress, setProgress] = useState([]);
    const [done, setDone] = useState([]);
    const [allItems, setAllItems] = useState([])

    const handleInput = (action) => {
        let string = action.target.value;
        setInput(string);
    }

    const handleSubmit = () => {
        const newTodo = {
            "status" : "OPEN",
            "description" : input
        }
        axios.post('/api/todo', newTodo)
            .then(r => setOpen([...open, r.data]))
            .catch(console.log)
    }

    useEffect(() => {
        axios.get('/api/todo').then(response => setAllItems(response.data))
    }, [])

    useEffect(() => {
        for (let i = 0; i < allItems.length ; i++) {
            console.log(allItems[i].status)
            if(allItems[i].status === "OPEN"){
                open.push(allItems[i]);
            }
            if(allItems[i].status === "IN_PROGRESS"){
                progress.push(allItems[i])
            }
            if(allItems[i].status === "DONE"){
                done.push(allItems[i])
            }
        }
    }, [allItems])



    function test(){
        console.log(open)
        console.log(progress)
        console.log(done)
        console.log(allItems)
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
