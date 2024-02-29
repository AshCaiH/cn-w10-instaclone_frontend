import "./_style.css"
import Links from "./links";
import Logo from "./logo";
import UserControls from "./user-info";

export const Navbar = (props) => {

    return (
        <div id="navbar">
            <Logo />
            <Links />
            <UserControls user={props.user} setUser={props.setUser}/>
        </div>
    )
}

export default Navbar;