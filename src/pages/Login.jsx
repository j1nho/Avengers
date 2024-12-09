import logo from '../images/logo.png'
import './Login.css'
import {useState} from "react";

const Login = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={"LoginPage"}>
            <img src={logo} className={"mfeo"} alt="logo"/>
            <div className={"Login_box"}>
                <h1>Log In</h1>
                <div className={"LoginBox"}>
                    <div className={"emailBox"}>
                        <p>E-mail</p>
                        <input type={"text"} className={'email'} onChange={event => setEmail(event.target.value)}/>
                    </div>
                    <div className={"passwordBox"}>
                        <p>PassWord</p>
                        <input type={"text"} className={"password"} onChange={event => setPassword(event.target.value)}/>
                    </div>
                    <div className={"login"}>
                        <button onClick={() => onLogin(email, password)}>Log In</button>
                    </div>
                    <div className={"join"}>
                        <button>Join</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login