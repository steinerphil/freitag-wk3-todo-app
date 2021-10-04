import "./Entry.css";

export default function Entry(title) {

    return(
        <div className="todo_item">
            <p>{title.title}</p>
            <button>Click me</button>
        </div>


    )

}