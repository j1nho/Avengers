import './Home.css'
import Header from "../component/Header";
import Aside from "../component/Aside";
import Calendar from "../component/Calendar";
import profileImg from "../images/profile.png"
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import {KeyboardArrowRight} from '@mui/icons-material'
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

// Chart.js 등록
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const Home = () => {
    const [monthlySchedules, setMonthlySchedules] = useState([]);

    useEffect(() => {
        const savedMonthlySchedules = localStorage.getItem('monthlySchedules');
        if (savedMonthlySchedules) {
            const parsedSchedules = JSON.parse(savedMonthlySchedules);
            setMonthlySchedules(parsedSchedules);
        }
    }, []);

    // 차트 데이터 설정
    const data = {
        datasets: [{
            data: [350000, 650000],
            backgroundColor: [
                '#E87D7D',
                '#ccc'
            ],
            borderWidth: 0,
            cutout: '75%',
            hoverOffset: 4
        }]
    };

    // 차트 옵션 설정
    const options = {
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        return context.raw.toLocaleString() + '원';
                    }
                }
            },
            legend: {
                display: false
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div className={"Home_wrap"}>
            <Header/>
            <Aside/>
            <div className={"Home_container"}>
                <div className={"Home_wrapper"}>
                    <div className={"Home_Box"}>
                        <div className={"Home_profileBox"}>
                            <div className={"Home_profile"}>
                                <div className={"Home_profileImg"}>
                                    <img src={profileImg} alt={'profileImg'}/>
                                </div><br/>
                                <h3>User</h3><br/>
                                <p><span>함께 관리한지 </span>368일째❤</p><br/>
                                <h3>목표:매일 10,000원씩 모으기 !0!</h3>
                            </div>
                        </div>
                        <div className={"Home_main"}>
                            <div className={"Home_contents"}>
                                <div className={"Home_infoBox"}>
                                    <h2>우리의 자산</h2>
                                    <ul>
                                        <li><h4>1111-22-333-4444</h4></li>
                                        <li><h3>3,594,156원</h3></li>
                                    </ul>
                                </div>
                                <div className={"Home_infoBox"}>
                                    <div className={"thisMonthTitle"}>
                                        <h2>이번 달 지출</h2>
                                        <div className={"more"}>
                                            <Link to={'/thisMonth'}>더보기</Link><KeyboardArrowRight/>
                                        </div>
                                    </div>
                                    <div className={"circle_box"}>
                                        <div style={{position: 'relative', width: '150px', height: '150px'}}>
                                            <Doughnut data={data} options={options}/>
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                350,000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"Home_contents2"}>
                                <div className={"Home_infoBox2"}>
                                    <h2>우리의 금융 일정</h2>
                                    <div className={'Home_Schedule'}>
                                        {monthlySchedules.length > 0 ? (
                                            monthlySchedules.map((schedule, index) => (
                                                <div key={index} className="schedule-item">
                                                <span className="schedule-date">{schedule.date}</span>
                                                    <span className="schedule-title">{schedule.title}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="no-schedule-message">현재 등록된 금융 일정이 없습니다.</p>
                                        )}
                                    </div>
                                    <div className={'ScheduleMove'}>
                                        <Link to={'/schedule'}>금융 일정 작성하러 가기</Link><KeyboardArrowRight/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Calendar/>
                </div>
            </div>
        </div>
    )
}
export default Home