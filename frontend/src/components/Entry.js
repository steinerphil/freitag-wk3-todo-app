import "./Entry.css";
import {deleteData, putData} from "../ApiService";

export default function Entry(props) {

    function handleClick() {
        let itemToUpdate = props.item;

        if(itemToUpdate.status !== "DONE") {
            if (itemToUpdate.status === 'OPEN') {
                itemToUpdate.status = 'IN_PROGRESS'
            } else if (itemToUpdate.status === 'IN_PROGRESS') {
                itemToUpdate.status = 'DONE'
            }
            putData(itemToUpdate)
                .then(props.onClick(itemToUpdate))
        }
        else{
            deleteData(itemToUpdate)
                .then(props.onClick(itemToUpdate))
        }
    }

    return(
        <div className="todo_item">
            <p>{props.item.description}</p>
            {props.item.status === "DONE" && <button onClick={handleClick}>Delete</button>}
            {props.item.status === "OPEN" && <button onClick={handleClick}>Start</button>}
            {props.item.status === "IN_PROGRESS" && <button onClick={handleClick}>Finish</button>}
        </div>


    )

}