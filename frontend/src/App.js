import './App.css';
import {useEffect, useState} from "react";
import {getData, postData} from "./ApiService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import KanbanBoard from "./components/KanbanBoard";

function App() {

    //hooks

    const [input, setInput] = useState([])
    const [open, setOpen] = useState([]);
    const [progress, setProgress] = useState([]);
    const [done, setDone] = useState([]);

    useEffect(() => {
        getData().then(data => {
            sortItems(data);
        })
    }, [])


    function sortItems(allItems) {
        let openA = [];
        let progressA = [];
        let doneA = [];
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].status === "OPEN") {
                openA.push(allItems[i]);
            }
            if (allItems[i].status === "IN_PROGRESS") {
                progressA.push(allItems[i])
            }
            if (allItems[i].status === "DONE") {
                doneA.push(allItems[i])
            }
        }
        setOpen(openA);
        setProgress(progressA);
        setDone(doneA);
    }


    //action handler

    function handleSetProgress(newValue) {
        setProgress([...progress, newValue]);
        let openA = open;
        for (let i = 0; i < openA.length; i++) {
            if (openA[i].id === newValue.id) {
                openA.splice(i, 1);
            }
        }
        setOpen(openA)
    }

    function handleSetDone(newValue) {
        setDone([...done, newValue]);
        let progressA = progress;
        for (let i = 0; i < progressA.length; i++) {
            if (progressA[i].id === newValue.id) {
                progressA.splice(i, 1);
            }
        }
        setProgress(progressA)
    }

    const handleInput = (action) => {
        let string = action.target.value;
        setInput(string);
    }

    const handleSubmit = () => {
        postData(input).then(data => setOpen([...open, data]))
        setInput([])
    }

    function handleDelete(item) {
        setDone(done.filter(entry => entry.id !== item.id))
    }

    //visual section

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
