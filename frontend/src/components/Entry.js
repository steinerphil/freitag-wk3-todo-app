import "./Entry.css";

export default function Entry(props) {

    // function handleClick() {
    //
    //
    // }

    return(
        <div className="todo_item">
            <p>{props.item.description}</p>
            <button>Click me</button>
        </div>


    )

}