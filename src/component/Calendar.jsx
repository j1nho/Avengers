import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './Calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [transactions, setTransactions] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedType, setSelectedType] = useState('전체');

    // 가계부 데이터를 로컬 저장소에서 가져오기
    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        const groupedTransactions = savedExpenses.reduce((acc, expense) => {
            const { date } = expense; // 날짜 기반으로 그룹화
            acc[date] = acc[date] ? [...acc[date], expense] : [expense];
            return acc;
        }, {});
        setTransactions(groupedTransactions);
    }, []);

    const getFilteredTransactions = (date) => {
        if (!transactions[date]) return [];
        if (selectedType === '전체') return transactions[date];
        return transactions[date].filter(transaction => transaction.type === selectedType);
    };

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const handleDateClick = (day) => {
        const clickedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        setSelectedDate(clickedDate);
    };

    // 날짜별 수입/지출 금액 계산
    const calculateDayTotal = (date) => {
        if (!transactions[date]) return null;

        const income = transactions[date]
            .filter(t => t.type === "수입")
            .reduce((sum, t) => sum + Number(t.amount), 0);

        const expense = transactions[date]
            .filter(t => t.type === "지출")
            .reduce((sum, t) => sum - Number(t.amount), 0); // 마이너스로 변환

        return {
            income: income > 0 ? `${income.toLocaleString()}` : null,
            expense: expense < 0 ? `-${expense.toLocaleString()}` : null
        };
    };

    const renderDays = () => {
        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateKey = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            const dayTotal = calculateDayTotal(dateKey);

            days.push(
                <div
                    key={day}
                    className={`calendar-day ${selectedDate === dateKey ? 'selected' : ''}`}
                    onClick={() => handleDateClick(day)}
                >
                    <span className="day-number">{day}</span>
                    {dayTotal && (
                        <div className="day-data">
                            {dayTotal.income && (
                                <span style={{ color: '#388BCF' }}>
                                +{dayTotal.income.toLocaleString()}
                            </span>
                            )}
                            {dayTotal.expense && (
                                <span style={{ color: '#E87D7D' }}>
                                {dayTotal.expense.toLocaleString()}
                            </span>
                            )}
                        </div>
                    )}
                </div>
            );
        }

        return days;
    };

    const getMonthName = (date) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months[date.getMonth()];
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <div className="calendar-month">
                    <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
                        <IoIosArrowBack />
                    </button>
                    <div className="calendar-title">
                        <h3>{currentDate.getFullYear()}</h3>
                        <h2>{getMonthName(currentDate)}</h2>
                    </div>
                    <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
                        <IoIosArrowForward />
                    </button>
                </div>
                <div className="calendar-weekdays">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className="calendar-days">{renderDays()}</div>
            </div>
            {selectedDate ? (
                <div className="transaction-details">
                    <h3>{selectedDate} 내역</h3>
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        <option>전체</option>
                        <option>수입</option>
                        <option>지출</option>
                    </select>
                    <div>
                        {getFilteredTransactions(selectedDate).map((transaction, index) => (
                            <div key={index} className="transaction-item">
                                <span>{transaction.type}</span>
                                <span>
                        {transaction.type === "수입" ? `+${Number(transaction.amount).toLocaleString()}`
                            : `-${Number(transaction.amount).toLocaleString()}`}원
                    </span>
                                <span>{transaction.merchant || "N/A"}</span>
                                <span>{transaction.memo || "메모 없음"}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="transaction-empty">날짜를 선택하세요.</div>
            )}

        </div>
    );
};

export default Calendar;
