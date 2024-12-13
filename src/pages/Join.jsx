import logo from '../images/logo.png'
import './Join.css'
import {useState} from "react";

const Join = ({onJoin}) => {
    /* 파이어베이스 회원 가입 */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return (
        <div className={"JoinPage"}>
            <img src={logo} className={"mfeo"} alt="logo"/>
            <div className={"Join_box"}>
                <h1>Join</h1>
                <div className={"JoinBox"}>
                    <div className={"emailBox"}>
                        <p>E-mail</p>
                        <input type={"email"} className={'email'} value={email} onChange={event => setEmail(event.target.value)}/>
                    </div>
                    <div className={"passwordBox"}>
                        <p>PassWord</p>
                        <input type={"password"} className={"password" } value={password} onChange={event => setPassword(event.target.value)}/><br/>
                        <span>비밀번호는 최소 6자리</span>
                    </div>
                    <div className={"nameBox"}>
                        <p>Name</p>
                        <input type={"text"} className={"name"} value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className={"join"}>
                        <button onClick={() => onJoin(email, password, name)}>Join</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Join