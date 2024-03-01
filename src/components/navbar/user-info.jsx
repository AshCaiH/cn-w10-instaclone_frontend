import { Link } from "react-router-dom";

export const UserControls = (props) => {

    return (
        <>
        { props.user &&
            <div className="navbar-user">
                <div className="avatar" />
                <p>Hello <span className="userinfo-name">{props.user.username}</span></p>
                <div className="vdivider" />
                <Link to="/" onClick={() => {props.setUser(null)}}>Logout</Link>
            </div>
        }
        </>
    )
}

export default UserControls;