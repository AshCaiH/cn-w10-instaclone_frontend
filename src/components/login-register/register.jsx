export const Register = (props) => {

    const register = () => {}
    const setUsername = () => {}
    const setEmail = () => {}
    const setPassword = () => {}

    return (
        <div id="register-form" className="section">
            <h2>Register</h2>
            <div className="form-item">Username
                <input id="login-username" onChange={(e) => setUsername(e.target.value)}></input></div>
            <div className="form-item">Email
                <input id="login-username" onChange={(e) => setEmail(e.target.value)}></input></div>
            <div className="form-item">Password
                <input id="login-password" onChange={(e) => setPassword(e.target.value)}></input></div>                
            <div className="spacer" />
            <button className="green" onClick={register}>Register</button>
        </div>
    )
}

export default Register;