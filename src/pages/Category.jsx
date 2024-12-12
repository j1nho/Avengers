import React, { useState, useEffect } from 'react';
import Header from "../component/Header";
import Aside from "../component/Aside";
import './Category.css';
import { Link } from "react-router-dom";

const Category = () => {
    const [expenses, setExpenses] = useState([]); // 가계부 데이터를 저장할 상태
    const [selectedExpenses, setSelectedExpenses] = useState([]); // 선택된 항목을 추적할 상태

    // 로컬 저장소에서 데이터를 가져와서 상태에 저장
    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        setExpenses(savedExpenses);
    }, []);

    // 체크박스 상태 변경 처리 함수
    const handleCheckboxChange = (id) => {
        setSelectedExpenses((prevSelected) => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter((expenseId) => expenseId !== id); // 체크 해제
            } else {
                return [...prevSelected, id]; // 체크
            }
        });
    };

    return (
        <div className={"CategoryPage"}>
            <Header />
            <Aside />
            <div className="Category_container">
                <div className={"Category_contents"}>
                    <div className={"Category_title"}>
                        <h1>카테고리 별 내역</h1>
                        <button className={"Category_btn"}>
                            <Link to={'/write'}>가계부 작성 📝</Link>
                        </button>
                    </div>
                    {/* 가계부 항목 목록 표시 */}
                    <ul>
                        <li><input type={"checkbox"} /> 분류</li>
                        <li>날짜</li>
                        <li>결제수단</li>
                        <li>거래처</li>
                        <li>금액</li>
                        <li>메모</li>
                    </ul>

                    {/* 저장된 가계부 데이터 표시 */}
                    <div className="expense-list">
                        <ul>
                            {expenses.length > 0 ? (
                                expenses.map((expense) => (
                                    <li key={expense.id}>
                                        <input
                                            type="checkbox"
                                            checked={selectedExpenses.includes(expense.id)}
                                            onChange={() => handleCheckboxChange(expense.id)}
                                        />
                                        <div className="expense-details">
                                            <span className={`expense-type ${expense.type === "지출" ? "expense-expense" : "expense-income"}`} />
                                            <span>{expense.type}</span>
                                        </div>
                                        <span>{expense.date}</span> {/* 날짜 */}
                                        <span>{expense.paymentMethod}</span> {/* 결제수단 */}
                                        <span>{expense.merchant}</span> {/* 거래처 */}
                                        <span>{expense.amount}원</span> {/* 금액 */}
                                        <span>{expense.memo}</span> {/* 메모 */}
                                    </li>
                                ))
                            ) : (
                                <p>저장된 가계부 항목이 없습니다.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;

