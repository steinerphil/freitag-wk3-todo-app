import "./Entry.css";
import axios from "axios";

export default function Entry(props) {

    function handleClick() {
        let itemToUpdate = props.item;

        if(itemToUpdate.status !== "DONE") {
            if (itemToUpdate.status === 'OPEN') {
                itemToUpdate.status = 'IN_PROGRESS'
            } else if (itemToUpdate.status === 'IN_PROGRESS') {
                itemToUpdate.status = 'DONE'
            }
            axios.put('/api/todo/' + itemToUpdate.id, itemToUpdate).then(
                props.onClick(itemToUpdate)

            )
        }
        else{
            axios.delete('/api/todo/' + itemToUpdate.id)
                .then(props.onClick(itemToUpdate))
            // console.log(`Item with title ${itemToUpdate.description} deleted`)
        }
    }

    return(
        <div className="todo_item">
            <p>{props.item.description}</p>
            <button onClick={handleClick}>Click me</button>
        </div>


    )

}