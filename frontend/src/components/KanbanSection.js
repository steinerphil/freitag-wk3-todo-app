import './KanbanSection.css';
import Entry from "./Entry";

export default function KanbanSection({content}) {

    return (
        <div className={"kanban"}>
            <h4>test</h4>
            <hr/>
            <div>
                {
                    content.map(item => <Entry title={item.description}/>)
                }
            </div>

        </div>
    )

}