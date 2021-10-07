import "./Entry.css";
import {deleteData, putData} from "../ApiService";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types"

Entry.propTypes = {
    item: PropTypes.shape({id: PropTypes.number, description: PropTypes.string}),
    onClick: PropTypes.func,
}

export default function Entry({item, onClick}) {

    const history = useHistory();

    function handleClick() {
        let status = item.status;
        if (status !== "DONE") {
            if (status === 'OPEN') {
                status = 'IN_PROGRESS'
            } else if (status === 'IN_PROGRESS') {
                status = 'DONE'
            }
            putData(status)
                .then(onClick(item))
        } else {
            deleteData(status)
                .then(onClick(item))
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