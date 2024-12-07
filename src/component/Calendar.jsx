import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './Calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

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

    // 날짜별 데이터
    const dateData = {
        '2024-12-25': { text: '-750,000', color: '#ff6b6b' },
        '2024-12-26': { text: '-250,000', color: '#ff6b6b' },
        '2024-12-31': { text: '+1,000,000', color: '#4dabf7' }
    };

    const renderDays = () => {
        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateKey = `2024-12-${day}`;
            const dayData = dateData[dateKey];
            const isWeekend = new Date(2024, 11, day).getDay() === 0;

            days.push(
                <div key={day} className="calendar-day">
                    <span className={`day-number ${isWeekend ? 'sunday' : ''}`}>{day}</span>
                    {dayData && (
                        <span
                            className="day-data"
                            style={{ color: dayData.color }}
                        >
              {dayData.text}
            </span>
                    )}
                </div>
            );
        }

        return days;
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={handlePrevMonth}>
                    <IoIosArrowBack />
                </button>
                <h2>December 2024</h2>
                <button onClick={handleNextMonth}>
                    <IoIosArrowForward />
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
    );
};

export default Calendar;