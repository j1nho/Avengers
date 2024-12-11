import Header from "../component/Header";
import Aside from "../component/Aside";
import { useState, useEffect } from 'react';
import './Schedule.css'

const Schedule = () => {
    const [date, setDate] = useState('');
    const [type, setType] = useState('지출');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [fixedSchedules, setFixedSchedules] = useState([]);
    const [monthlySchedules, setMonthlySchedules] = useState([]);

    useEffect(() => {
        const savedFixed = localStorage.getItem('fixedSchedules');
        const savedMonthly = localStorage.getItem('monthlySchedules');

        if (savedFixed) setFixedSchedules(JSON.parse(savedFixed));
        if (savedMonthly) setMonthlySchedules(JSON.parse(savedMonthly));
    }, []);

    const popup = () => {
        alert('추후 제작 예정입니다.')
    }

    const handleFixedSubmit = () => {
        if (!date || !title || !amount) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        const newSchedule = {
            id: Date.now(),
            date,
            type,
            title,
            amount: amount === '0' ? '변동' : Number(amount)
        };

        const updatedSchedules = [...fixedSchedules, newSchedule];
        setFixedSchedules(updatedSchedules);
        localStorage.setItem('fixedSchedules', JSON.stringify(updatedSchedules));
        resetForm();
    };

    const handleMonthlySubmit = () => {
        if (!date || !title || !amount) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        const newSchedule = {
            id: Date.now(),
            date,
            type,
            title,
            amount: amount === '0' ? '변동' : Number(amount)
        };

        const updatedSchedules = [...monthlySchedules, newSchedule];
        setMonthlySchedules(updatedSchedules);
        localStorage.setItem('monthlySchedules', JSON.stringify(updatedSchedules));
        resetForm();
    };

    const deleteFixedSchedule = (id) => {
        const updatedSchedules = fixedSchedules.filter(schedule => schedule.id !== id);
        setFixedSchedules(updatedSchedules);
        localStorage.setItem('fixedSchedules', JSON.stringify(updatedSchedules));
    };

    const deleteMonthlySchedule = (id) => {
        const updatedSchedules = monthlySchedules.filter(schedule => schedule.id !== id);
        setMonthlySchedules(updatedSchedules);
        localStorage.setItem('monthlySchedules', JSON.stringify(updatedSchedules));
    };

    const resetForm = () => {
        setDate('');
        setType('지출');
        setTitle('');
        setAmount('');
    };

    return (
        <div className={"SchedulePage"}>
            <Header/>
            <Aside/>
            <div className={"Schedule_container"}>
                <div className={"Schedule_contents"}>
                    <div className={"Schedule_title"}>
                        <h1>금융 일정 관리</h1>
                        <p>지출 · 수입을 기록하여, 정기적으로 관리해보세요 !</p>
                    </div>
                    <ul className={"Schedule_menu"}>
                        <li>금융 일정 추가</li>
                        <li onClick={popup}>금융 일정 수정</li>
                    </ul>
                    <div className={"contents_box"}>
                        <div className={"box"}>
                            <h3>날짜</h3>
                            <input
                                type={"date"}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <h3>분류</h3>
                            <div className={"schedule_btn1"}>
                                <button
                                    className={`schedule_btn01 ${type === '지출' ? 'active' : ''}`}
                                    onClick={() => setType('지출')}
                                >
                                    지출
                                </button>
                                <button
                                    className={`schedule_btn01 ${type === '수입' ? 'active' : ''}`}
                                    onClick={() => setType('수입')}
                                >
                                    수입
                                </button>
                            </div>
                            <h3>일정 이름</h3>
                            <input
                                type={"text"}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <h3>금액</h3>
                            <input
                                type={"text"}
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <p>*0원을 입력하시면 '변동'이라는 값으로 들어갑니다.</p>
                            <div className={"schedule_btn1"}>
                                <button
                                    className={"schedule_btn02"}
                                    onClick={handleFixedSubmit}
                                >
                                    고정 지출 / <br/>수입 일정 추가
                                </button>
                                <button
                                    className={"schedule_btn02"}
                                    onClick={handleMonthlySubmit}
                                >
                                    금융 일정 추가
                                </button>
                            </div>
                        </div>
                        <div className={"box"}>
                            <h3>고정 지출 / 수입 일정</h3>
                            {fixedSchedules.map((schedule) => (
                                <div key={schedule.id} className="schedule-item">
                                    <div>
                                        <p>{schedule.date} - {schedule.type}</p>
                                        <p>{schedule.title}: {schedule.amount}원</p>
                                    </div>
                                    <button className={"delete-btn"}
                                            onClick={() => deleteFixedSchedule(schedule.id)}>삭제</button>
                                </div>
                            ))}
                        </div>
                        <div className={"box"}>
                            <h3>이번 달 금융 일정</h3>
                            {monthlySchedules.map((schedule) => (
                                <div key={schedule.id} className="schedule-item">
                                    <div className={"schedule-content"}>
                                        <p>{schedule.date} - {schedule.type}</p>
                                        <p>{schedule.title}: {schedule.amount}원</p>
                                    </div>
                                    <button className={"delete-btn"}
                                            onClick={() => deleteMonthlySchedule(schedule.id)}>삭제</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule