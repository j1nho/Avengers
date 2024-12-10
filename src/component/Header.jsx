import './Header.css'
import {Person3Outlined} from "@mui/icons-material";
import {NotificationsActiveOutlined} from "@mui/icons-material";
import logo from '../images/logo.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <div className={"logo"}>
                <h1><Link to="/"><img src={logo} alt="Logo"/></Link></h1>
            </div>
            <div className={"icon_container"}>
                <ul className={"icon"}>
                    <li><a href="#"><NotificationsActiveOutlined style={{fontSize:'25px'}}/></a></li>
                    <li><Link to={"/profile"}><Person3Outlined style={{fontSize:'25px'}}/></Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;