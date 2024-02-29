import "./_style.css"
import Links from "./links";
import Logo from "./logo";
import UserInfo from "./user-info";

export const Navbar = (props) => {

    return (
        <div id="navbar">
            <Logo />
            <Links />
            <UserInfo />
        </div>
    )
}

export default Navbar;