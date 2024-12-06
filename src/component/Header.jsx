import './Header.css'
import {Person3Outlined} from "@mui/icons-material";
import {NotificationsActiveOutlined} from "@mui/icons-material";
import logo from '../images/logo.png'

const Header = () => {
    return (
        <div className="Header">
            <div className={"logo"}>
                <h1><a href="#"><img src={logo} alt="Logo"/></a></h1>
            </div>
            <div className={"icon_container"}>
                <ul className={"icon"}>
                    <li><a href="#"><NotificationsActiveOutlined style={{fontSize:'25px'}}/></a></li>
                    <li><a href="#"><Person3Outlined style={{fontSize:'25px'}}/></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;