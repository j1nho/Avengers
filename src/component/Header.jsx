import './Header.css'
import {Person} from "@mui/icons-material";
import Notifications from "@mui/icons-material/Notifications";

const Header = () => {
    return (
        <div className="Header">
            <div className={"logo"}>
                <h1><a href="#">로고</a></h1>
            </div>
            <div className={"icon_container"}>
                <ul className={"icon"}>
                    <li><a href="#"><Notifications style={{fontSize:'25px'}}/></a></li>
                    <li><a href="#"><Person style={{fontSize:'25px'}}/></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;