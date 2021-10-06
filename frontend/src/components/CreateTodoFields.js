export default function CreateTodoFields(props) {
    return (<div className="action_fields">
        <input type="text" placeholder="Type your todo here" value={props.input} onInput={props.handleInput}/>
        <button type="submit" onClick={props.handleSubmit}>Add</button>
    </div>)

}