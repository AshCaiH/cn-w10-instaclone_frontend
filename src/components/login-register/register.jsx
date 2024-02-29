import { useState } from "react";
import { postRequest } from "../../common/requests";

export const Register = (props) => {
    const [username, setUsername]   = useState("");
    const [password, setPassword]   = useState("");
    const [email, setEmail]         = useState("");

    const register = async () => {
        const query = JSON.stringify({
            username:   username,
            password:   password,
            email:      email,
        });

        const response = await postRequest("http://localhost:5001/user/register", query);

        console.log(response);
    }

    return (
        <form id="register-form" className="section" onSubmit={(e) => e.preventDefault()}>
            <h2>Register</h2>
            <div className="form-item">Username
                <input id="login-username" onChange={(e) => setUsername(e.target.value)}></input></div>
            <div className="form-item">Email
                <input id="login-username" onChange={(e) => setEmail(e.target.value)}></input></div>
            <div className="form-item">Password
                <input id="login-password" onChange={(e) => setPassword(e.target.value)}></input></div>                
            <div className="spacer" />
            <button className="green" onClick={register}>Register</button>
        </form>
    )
}

export default Register;