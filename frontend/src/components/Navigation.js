import {NavLink} from "react-router-dom";
import "./Navigation.css"

export default function Navigation() {
    return(
    <>
        <hr/>
        <nav className="navbar">
            <ul>
                <li className="navitem">
                    <NavLink activeClassName='is-active' to="/" exact>Kanban</NavLink>
                </li>
                <li className="navitem">
                    <NavLink activeClassName='is-active' to="/todo/open">Open</NavLink>
                </li>
                <li className="navitem">
                    <NavLink activeClassName='is-active' to="/todo/progress">Progress</NavLink>
                </li>
                <li className="navitem">
                    <NavLink activeClassName='is-active' to="/todo/done">Done</NavLink>
                </li>
            </ul>
        </nav>
        <hr/>
    </>
    )
}