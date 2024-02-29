import { useState } from "react";
import { postRequest } from "../../common/requests";

export const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        const query = JSON.stringify({
            username:   username,
            password:   password,
        });

        const response = await postRequest("http://localhost:5001/user/login", query);

        console.log(response);
    }

    return (
        <div id="login-form" className="section">
            <h2>Login</h2>
            <div className="form-item">Username
                <input id="login-username" onChange={(e) => setUsername(e.target.value)}></input></div>
            <div className="form-item">Password
                <input id="login-password" onChange={(e) => setPassword(e.target.value)}></input></div>
            <div className="spacer" />
            <button className="green" onClick={login}>Log In</button>
        </div>
    )
}

export default Login;