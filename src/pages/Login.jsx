import logo from '../images/logo.png'
import './Login.css'

const Login = () => {
    return (
        <div className={"LoginPage"}>
            <img src={logo} className={"mfeo"} alt="logo"/>
            <div className={"Login_box"}>
                <h1>Log In</h1>
                <div className={"LoginBox"}>
                    <div className={"emailBox"}>
                        <p>E-mail</p>
                        <input type={"text"} className={"email"}/>
                    </div>
                    <div className={"passwordBox"}>
                        <p>PassWord</p>
                        <input type={"text"} className={"password"}/>
                    </div>
                    <button className={"login"}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login