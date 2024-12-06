import './Aside.css'
import LogoutIcon from '@mui/icons-material/Logout';
import {MdEditSquare} from "react-icons/md";
import {BarChart} from "@mui/icons-material";
import {Paid} from "@mui/icons-material";
import {CreditCard} from "@mui/icons-material";
import {CalendarMonth} from "@mui/icons-material";
import {Settings} from "@mui/icons-material";
import {Home} from "@mui/icons-material";
import {useEffect, useRef, useState} from "react";


const Aside = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [height, setHeight] = useState(0);
    const submenuRef = useRef(null);

    useEffect(() => {
        if (submenuRef.current) {
            setHeight(isHovered ? submenuRef.current.scrollHeight : 0);
        }
    }, [isHovered]);

    return (
        <div className={"menu_container"}>
            <ul className={"menu"}>
                <li><Home style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><a href={"#"}>홈</a></li>
                <li><MdEditSquare style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><a href={"#"}>가계부
                    작성</a></li>
                <li><BarChart style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><a href={"#"}>주간별/월간별
                    분석</a></li>
                <li><Paid style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><a href={"#"}>예산</a></li>
                <li
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div><CreditCard style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><a
                        href={"#"}>내역</a></div>
                    <ul
                        ref={submenuRef}
                        className="submenu"
                        style={{
                            overflow: 'hidden',
                            transition: 'height 0.3s ease',
                            height: `${height}px`
                        }}
                    >
                        <li><a href={"#"}>이번 달 내역</a></li>
                        <li><a href={"#"}>카테고리별 내역</a></li>
                    </ul>
                </li>
                <li><CalendarMonth style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><a href={"#"}>금융
                    일정</a></li>
                <li><Settings style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><a href={"#"}>프로필
                    설정</a></li>
            </ul>
            <div className={"logout"}>
                <LogoutIcon style={{color: '#E87D7D', marginRight: "10px"}}/><a href={"#"}>로그아웃</a>
            </div>
        </div>
    )
}
export default Aside