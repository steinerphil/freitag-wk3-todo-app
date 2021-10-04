import './KanbanSection.css';
import Entry from "./Entry";

export default function KanbanSection(props) {

    return (
        <div className={"kanban"}>
            <h4>{props.name}</h4>
            <hr/>
            <div>
                {
                    props.content.map(item => <Entry item={item} />)
                }
            </div>

        </div>
    )

}