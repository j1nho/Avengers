import './Aside.css'
import LogoutIcon from '@mui/icons-material/Logout';
import {MdEditSquare} from "react-icons/md";
import {BarChart} from "@mui/icons-material";
import {Paid} from "@mui/icons-material";
import {CreditCard} from "@mui/icons-material";
import {CalendarMonth} from "@mui/icons-material";
import {Settings} from "@mui/icons-material";


const Aside = () => {
    return (
        <div className={"menu_container"}>
            <ul className={"menu"}>
                <li><MdEditSquare style={{fontSize: '25px'}}/><a href={"#"}>가계부 작성</a></li>
                <li><BarChart style={{fontSize: '25px'}}/><a href={"#"}>주간별/월간별 분석</a></li>
                <li><Paid style={{fontSize: '25px'}}/><a href={"#"}>예산</a></li>
                <li><div><CreditCard style={{fontSize: '25px'}}/><a href={"#"}>내역</a></div>
                    <ul className={"submenu"}>
                        <li><a href={"#"}>이번 달 내역</a></li>
                        <li><a href={"#"}>카테고리별 내역</a></li>
                    </ul>
                </li>
                <li><CalendarMonth style={{fontSize: '25px'}}/><a href={"#"}>일정</a></li>
                <li><Settings style={{fontSize: '25px'}}/><a href={"#"}>설정</a></li>
            </ul>
            <div className={"logout"}>
                <LogoutIcon/><a href={"#"}>로그아웃</a>
            </div>
        </div>
    )
}
export default Aside