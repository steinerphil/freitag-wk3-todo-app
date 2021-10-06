import KanbanSection from './KanbanSection';
import {Link, Route, Switch, useParams} from "react-router-dom";
import CreateTodoFields from "./CreateTodoFields";

export default function KanbanBoard({handleSetProgress, handleSetDone, handleDelete, handleInput, handleSubmit, input, open, progress, done}) {

    let {slug} = useParams()
    slug{
        
    }

    return(

        <Switch>
            <Route path="/" exact>
                <KanbanSection content={open} name="Open" onClick={handleSetProgress}/>
                <KanbanSection content={progress} name="Progress" onClick={handleSetDone}/>
                <KanbanSection content={done} name="Done" onClick={handleDelete}/>
                <CreateTodoFields
                    input={input}
                    handleInput={handleInput}
                    handleSubmit={handleSubmit}/>
            </Route>
            <Route path="/todo/open">
                {open.length === 0 && <p>No todos in status open. Create one:</p>}
                {open.length === 0 && <CreateTodoFields
                    input={input}
                    handleInput={handleInput}
                    handleSubmit={handleSubmit}
                />}
                {open.length > 0 && <KanbanSection content={open} name="Open" onClick={handleSetProgress}/>}
                {open.length > 0 && <p>Create another one:</p>}
                {open.length > 0 && <CreateTodoFields
                    input={input}
                    handleInput={handleInput}
                    handleSubmit={handleSubmit}
                />}
            </Route>
            <Route path="/todo/progress">
                {progress.length === 0 && <p>No todos in progress, <Link to="/open">grab one!</Link></p>}
                {progress.length > 0 &&
                <KanbanSection content={progress} name="Progress" onClick={handleSetDone}/>}
                {progress.length > 0 && <Link to="/open"> -> grab another one! </Link>}
            </Route>
            <Route path="/todo/done">
                {done.length === 0 &&
                <p>Nothing is done today :(<Link to="/progress"> ...finish a progress</Link></p>}
                {done.length > 0 && <KanbanSection content={done} name="Done" onClick={handleDelete}/>}
            </Route>

        </Switch>


    )

}