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

   function handleSetProgress(newValue){
      setProgress([...progress, newValue]);
      let openA = open;
       for (let i = 0; i < openA.length ; i++) {
           if(openA[i].id === newValue.id){
               openA.splice(i, 1);
           }
       }
      setOpen(openA)
   }

   function handleSetDone(newValue) {
        setDone([...done, newValue]);
       let progressA = progress;
       for (let i = 0; i < progressA.length ; i++) {
           if(progressA[i].id === newValue.id){
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
        const newTodo = {
            "status" : "OPEN",
            "description" : input
        }
        axios.post('/api/todo', newTodo)
            .then(r => setOpen([...open, r.data]))
            .catch(console.log)
        setInput([])
    }

    useEffect(() => {
        axios.get('/api/todo').then(response =>{
            setAllItems(response.data)
            sortItems(response.data)
        } )

    }, [])


    function sortItems(allItems) {
        let openA = [];
        let progressA = [];
        let doneA = [];
        for (let i = 0; i < allItems.length ; i++) {
            if(allItems[i].status === "OPEN"){
                openA.push(allItems[i]);
            }
            if(allItems[i].status === "IN_PROGRESS"){
                progressA.push(allItems[i])
            }
            if(allItems[i].status === "DONE"){
                doneA.push(allItems[i])
            }
        }
        setOpen(openA);
        setProgress(progressA);
        setDone(doneA);
    }

    function handleDelete(item) {
        setDone(done.filter(entry => entry.id !== item.id))
    }

    return (
        <div className="app">
            <h1>To-Do-App</h1>
            <KanbanSection content={open} name="Open" onClick={handleSetProgress}/>
            <KanbanSection content={progress} name="Progress" onClick={handleSetDone}/>
            <KanbanSection content={done} name="Done" onClick={handleDelete}/>
            <div className="action_fields">
                <input type="text" placeholder="Type your todo here" value={input} onInput={handleInput}/>
                <button type="submit" onClick={handleSubmit}>Add</button>
            </div>
        </div>
    );
}

export default App;
