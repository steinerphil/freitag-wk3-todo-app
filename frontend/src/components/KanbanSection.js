import './KanbanSection.css';
import Entry from "./Entry";

export default function KanbanSection({content}, title) {

    return (
        <div className={"kanban"}>
            <h4>{title.title}</h4>
            <hr/>
            <div>
                {
                    content.map(item => <Entry title={item.title}/>)
                }
            </div>

        </div>
    )

}