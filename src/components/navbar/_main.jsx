import { Link } from "react-router-dom";
import "./_style.css"
import UserControls from "./user-info";
import logo from "../../assets/logo.png";

export const Navbar = (props) => {
    console.log(props.routes);

    return (
        <div id="navbar">
            {props.routes.map((item, index) => {
                return <Link key={props.key} to={item.path}>{item.title}</Link>
            })}
            <Link to="/"><img id="logo" src={logo}/></Link>
            <UserControls user={props.user} setUser={props.setUser}/>
        </div>
    )
}

export default Navbar;