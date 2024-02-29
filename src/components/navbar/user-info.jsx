export const UserControls = (props) => {

    return (
        <>
        { props.user &&
            <div className="navbar-user">
                <div className="avatar" />
                <p>Hello <span className="userinfo-name">{props.user.username}</span></p>
                <div className="vdivider" />
                <a onClick={() => {props.setUser(null)}}>Logout</a>            
            </div>
        }
        </>
    )
}

export default UserControls;