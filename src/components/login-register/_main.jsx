import Login from "./login";
import Register from "./register";

import "./_style.css";

export const LoginRegister = (props) => {

    return (
        <div id="login-register">
            <Login setUser={props.setUser} />
            <div className="vdivider"></div>
            <Register />
        </div>
    )

}

export default LoginRegister;