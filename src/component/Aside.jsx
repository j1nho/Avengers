import './Aside.css'
import LogoutIcon from '@mui/icons-material/Logout';
import {MdEditSquare} from "react-icons/md";
import {BarChart} from "@mui/icons-material";
import {CreditCard} from "@mui/icons-material";
import {CalendarMonth} from "@mui/icons-material";
import {Settings} from "@mui/icons-material";
import {Home} from "@mui/icons-material";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";


const Aside = ({handleLogout}) => {
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
                <li><Home style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><Link to="/home">홈</Link></li>
                <li><MdEditSquare style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><Link to="/write">가계부
                    작성</Link></li>
                <li><BarChart style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><Link to="/analyze">주간별/월간별
                    분석</Link></li>
                <li
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div><CreditCard style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><span>내역</span>
                    </div>
                    <ul
                        ref={submenuRef}
                        className="submenu"
                        style={{
                            overflow: 'hidden',
                            transition: 'height 0.3s ease',
                            height: `${height}px`
                        }}
                    >
                        <li><Link to="/thisMonth">이번 달 내역</Link></li>
                        <li><Link to="/category">카테고리별 내역</Link></li>
                    </ul>
                </li>
                <li><CalendarMonth style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><Link
                    to="/schedule">금융 일정</Link></li>
                <li><Settings style={{fontSize: '25px', color: '#F3E1E1', marginRight: "10px"}}/><Link to="/profile">프로필
                    설정</Link></li>
            </ul>
            <div className={"logout"} onClick={handleLogout}>
                <LogoutIcon style={{color: '#E87D7D', marginRight: "10px"}}/><Link to="/login">로그아웃</Link>
            </div>
        </div>
    )
}
export default Aside