export const Login = (props) => {

    const login = () => {}
    const setPassword = () => {}
    const setUsername = () => {}

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