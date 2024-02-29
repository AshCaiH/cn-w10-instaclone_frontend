import Login from "./login";
import Register from "./register";

import "./_style.css";
import { useEffect, useState } from "react";

export const LoginRegister = (props) => {
    const [feedback, setFeedback] = useState(null);
    const [message, setMessage] = useState(null);
    const [msgType, setMsgType] = useState("message");

    useEffect(() => {
        if (!feedback) return;
        const string = JSON.stringify(feedback);

        if (string.includes("SequelizeUniqueConstraintError")) {
            setMessage("Username or email already in use.");
            setMsgType("error");
        }
        else if (feedback.error) {
            setMessage(feedback.error);
            setMsgType("error");
        }
        else {
            setMessage(feedback.message);
            setMsgType("message");
        }


    }, [feedback]);

    return (
        <div className="section">
        <div id="login-register">
            <Login 
                setUser={props.setUser} 
                setFeedback={setFeedback}/>

            <div className="vdivider"></div>

            <Register 
                setFeedback={setFeedback}/>
        </div>
        { message && <div className={`feedbackMessage ${msgType}`}>{message}</div>}
        </div>
    )

}

export default LoginRegister;