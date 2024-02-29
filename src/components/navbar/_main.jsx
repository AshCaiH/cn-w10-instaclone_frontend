import { Link } from "react-router-dom";
import "./_style.css"
import Links from "./links";
import Logo from "./logo";
import UserControls from "./user-info";

export const Navbar = (props) => {
    console.log(props.routes);

    return (
        <div id="navbar">
            <Logo />
            {props.routes.map((item, index) => {
                return <Link key={props.key} to={item.path}>{item.title}</Link>
            })}
            <UserControls user={props.user} setUser={props.setUser}/>
        </div>
    )
}

export default Navbar;