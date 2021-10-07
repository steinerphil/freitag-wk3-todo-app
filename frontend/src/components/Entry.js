import "./Entry.css";
import {deleteData, putData} from "../ApiService";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types"
import {useState} from "react";

Entry.propTypes = {
    item: PropTypes.shape({id: PropTypes.number, description: PropTypes.string}),
    onClick: PropTypes.func,
}

export default function Entry({item, onClick}) {

    const history = useHistory();

    function handleClick() {
        let moveItem = item;
        if (moveItem.status !== "DONE") {
            if (moveItem.status === 'OPEN') {
                moveItem.status = 'IN_PROGRESS'
            } else if (moveItem.status === 'IN_PROGRESS') {
                moveItem.status = 'DONE'
            }
            putData(moveItem)
                .then(onClick(moveItem))
        } else {
            deleteData(moveItem)
                .then(onClick(moveItem))
        }
    }

    return (
        <div className="todo_item">
            <p>{item.description}</p>
            {item.status === "DONE" && <button onClick={handleClick}>Delete</button>}
            {item.status === "OPEN" && <button onClick={handleClick}>Start</button>}
            {item.status === "IN_PROGRESS" && <button onClick={handleClick}>Finish</button>}
            <button onClick={() => history.push(`/details/${item.id}`)}>Details</button>
        </div>
    )

}