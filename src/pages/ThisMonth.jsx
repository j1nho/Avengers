import React, { useEffect, useState } from "react";
import Calendar from "../component/Calendar";
import Header from "../component/Header";
import Aside from "../component/Aside";
import './ThisMonth.css';

const ThisMonth = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        // 로컬 저장소에서 데이터 불러오기
        const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        setExpenses(savedExpenses);
    }, []);

    return (
        <div className="ThisMonthPage">
            <Header />
            <Aside />
            <div className="ThisMonth_container">
                <Calendar data={expenses} />
            </div>
        </div>
    );
};

export default ThisMonth;

