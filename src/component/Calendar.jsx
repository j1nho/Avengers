import React, {useState, useEffect} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import './Calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [transactions, setTransactions] = useState(() => {
        const savedTransactions = localStorage.getItem('transactions');
        return savedTransactions ? JSON.parse(savedTransactions) : {};
    });
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    // 날짜 데이터 계산 함수
    const calculateDayTotal = (date) => {
        if (!transactions[date]) return null;

        const income = transactions[date]
            .filter(t => t.amount > 0)
            .reduce((sum, t) => sum + t.amount, 0);

        const expense = transactions[date]
            .filter(t => t.amount < 0)
            .reduce((sum, t) => sum + t.amount, 0);

        return {
            income: income > 0 ? `+${income.toLocaleString()}` : null,
            expense: expense < 0 ? expense.toLocaleString() : null
        };
    };


    const handleDateClick = (day) => {
        const clickedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        setSelectedDate(clickedDate);
    };

    const addTransaction = (date, amount, description, category) => {
        const finalAmount = category === '💰' ? Math.abs(amount) : -Math.abs(amount);

        setTransactions(prev => {
            const newTransactions = {
                ...prev,
                [date]: [...(prev[date] || []), {
                    amount: finalAmount,
                    description: description,
                    category: category
                }]
            };
            localStorage.setItem('transactions', JSON.stringify(newTransactions));
            return newTransactions;
        });
    };

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const deleteTransaction = (date, index) => {
        setTransactions(prev => {
            const newTransactions = { ...prev };
            newTransactions[date] = [
                ...newTransactions[date].slice(0, index),
                ...newTransactions[date].slice(index + 1)
            ];

            // 해당 날짜의 거래 내역이 비어있으면 날짜 키 자체를 삭제
            if (newTransactions[date].length === 0) {
                delete newTransactions[date];
            }

            // localStorage 업데이트
            localStorage.setItem('transactions', JSON.stringify(newTransactions));
            return newTransactions;
        });
    };

    const getMonthName = (date) => {
        return months[date.getMonth()];
    };

    const getSolarHolidays = (year) => {
        return {
            [`${year}-01-01`]: "신정",
            [`${year}-03-01`]: "삼일절",
            [`${year}-05-05`]: "어린이날",
            [`${year}-06-06`]: "현충일",
            [`${year}-08-15`]: "광복절",
            [`${year}-10-03`]: "개천절",
            [`${year}-10-09`]: "한글날",
            [`${year}-12-25`]: "크리스마스"
        };
    };

    const isHoliday = (date) => {
        const year = date.getFullYear();
        const formattedDate = `${year}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        const solarHolidays = getSolarHolidays(year);

        // 양력 공휴일 체크
        if (solarHolidays[formattedDate]) return true;

        // 일요일 체크
        return date.getDay() === 0;
    };


    const renderDays = () => {
        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateKey = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            const currentDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isRedDay = isHoliday(currentDayDate);
            const dayData = calculateDayTotal(dateKey);

            days.push(
                <div
                    key={day}
                    className={`calendar-day ${selectedDate === dateKey ? 'selected' : ''}`}
                    onClick={() => handleDateClick(day)}
                >
                <span className={`day-number ${isRedDay ? 'holiday' : ''}`}>
                    {day}
                </span>
                    {dayData && (
                        <div className="day-data">
                            {dayData.income && (
                                <span style={{ color: '#4dabf7' }}>{dayData.income}</span>
                            )}
                            {dayData.expense && (
                                <span style={{ color: '#ff6b6b' }}>{dayData.expense}</span>
                            )}
                        </div>
                    )}
                </div>
            );
        }
        return days;
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <div className={"calendar-month"}>
                    <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
                        <IoIosArrowBack/>
                    </button>
                    <div className={"calendar_title"}>
                        <h3>{currentDate.getFullYear()}</h3>
                        <h2>{getMonthName(currentDate)}</h2>
                    </div>
                    <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
                        <IoIosArrowForward/>
                    </button>
                </div>
                <div className="calendar-weekdays">
                    <div className="sunday">Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className="calendar-days">
                    {renderDays()}
                </div>
            </div>
            {selectedDate && (
                <div className="transaction-form">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const amount = Math.abs(Number(e.target.amount.value)); // 절대값으로 변환
                        const description = e.target.description.value;
                        const category = e.target.category.value;

                        addTransaction(selectedDate, amount, description, category);
                        e.target.reset();
                    }}>
                        <select name="category" required>
                            <option value="선택">선택</option>
                            <option value="쇼핑">🛒쇼핑</option>
                            <option value="교통">✈교통</option>
                            <option value="식비">🍙식비</option>
                            <option value="입금">💎입금</option>
                        </select>
                        <input
                            type="number"
                            name="amount"
                            placeholder="금액 입력"
                            required
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="설명 입력"
                            required
                        />
                        <button type="submit">추가</button>
                    </form>
                    <div className="transaction-list">
                        <h3>{selectedDate} 내역</h3>
                        {transactions[selectedDate]?.map((transaction, index) => (
                            <div key={index} className="transaction-item">
                                <span>{transaction.category}</span>
                                <span>{transaction.amount.toLocaleString()}원</span>
                                <span>{transaction.description}</span>
                                <button
                                    className="delete-btn"
                                    onClick={() => deleteTransaction(selectedDate, index)}
                                >
                                    삭제
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;