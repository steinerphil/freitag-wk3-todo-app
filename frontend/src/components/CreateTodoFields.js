export default function CreateTodoFields(props) {

    return (
        <form className="action_fields" onSubmit={props.handleSubmit}>
            <input type="text" placeholder="Type your todo here" value={props.input} onInput={props.handleInput}/>
            <button type="submit">Add</button>
        </form>
    )

}