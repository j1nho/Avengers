import React, { useState, useEffect } from 'react';
import Header from "../component/Header";
import Aside from "../component/Aside";
import './Write.css';

const Write = () => {
    const [expenses, setExpenses] = useState([]); // 로컬 저장소에 저장된 가계부 데이터
    const [newExpenses, setNewExpenses] = useState([{
        type: "",
        date: "",
        category: "",
        paymentMethod: "",
        merchant: "",
        amount: "",
        memo: "",
    }]); // 추가할 새 항목 리스트
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태

    // 로컬 저장소에서 데이터 가져오기
    const fetchExpenses = () => {
        const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

        // 날짜를 기준으로 내림차순 정렬
        const sortedExpenses = savedExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
        setExpenses(sortedExpenses);
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    // 카테고리 아이콘 매핑
    const categoryIcons = {
        식비: "🍔", // 식비 아이콘
        "카페/간식": "☕", // 카페/간식 아이콘
        숙박: "🗼", // 숙박/여행 아이콘
        교통: "🚗", // 교통 아이콘
        쇼핑: "🛒", // 쇼핑 아이콘
        기타: "🎸", // 기타 아이콘
    };

    // 새 항목 저장하기
    const handleSaveExpenses = () => {
        // 입력 필드 확인
        const incomplete = newExpenses.some(expense =>
            !expense.type || !expense.date || !expense.category || !expense.paymentMethod || !expense.merchant || !expense.amount
        );
        if (incomplete) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        setIsLoading(true); // 로딩 시작

        try {
            // 새로운 항목에 고유 ID 추가
            const newExpensesWithId = newExpenses.map((expense) => ({
                ...expense,
                id: Date.now(), // 고유 ID를 시간으로 생성
            }));

            // 로컬 저장소에 업데이트된 데이터 저장
            const updatedExpenses = [...newExpensesWithId, ...expenses];

            // 날짜를 기준으로 내림차순 정렬
            const sortedUpdatedExpenses = updatedExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));

            localStorage.setItem("expenses", JSON.stringify(sortedUpdatedExpenses));

            // 상태 업데이트
            setExpenses(sortedUpdatedExpenses);

            // 새 항목 입력 필드 초기화
            setNewExpenses([{
                type: "",
                date: "",
                category: "",
                paymentMethod: "",
                merchant: "",
                amount: "",
                memo: "",
            }]);
        } catch (error) {
            console.error("Error saving documents: ", error);
        } finally {
            setIsLoading(false); // 로딩 종료
        }
    };

    // 데이터 삭제하기
    const handleDeleteExpense = (id) => {
        try {
            // 삭제할 항목 제외하고 새로운 배열 만들기
            const updatedExpenses = expenses.filter(expense => expense.id !== id);

            // 로컬 저장소에 삭제된 데이터 반영
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

            // 상태 업데이트
            setExpenses(updatedExpenses);
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    return (
        <div className="WritePage">
            <Header />
            <Aside />
            <div className="Write_container">
                <div className="Write_contents">
                    <div className="Write_title">
                        <h1>가계부 작성</h1>
                    </div>
                    <ul>
                        <li>분류</li>
                        <li>날짜</li>
                        <li>카테고리</li>
                        <li>결제수단</li>
                        <li>거래처</li>
                        <li>금액</li>
                        <li>메모</li>
                    </ul>

                    {newExpenses.map((expense, index) => (
                        <div key={index} className="Write_info">
                            <select
                                value={expense.type}
                                onChange={(e) => {
                                    const updatedExpenses = [...newExpenses];
                                    updatedExpenses[index].type = e.target.value;
                                    setNewExpenses(updatedExpenses);
                                }}
                            >
                                <option value="">선택</option>
                                <option value="지출">지출</option>
                                <option value="수입">수입</option>
                            </select>
                            <label>
                                <input
                                    type="date"
                                    value={expense.date}
                                    onChange={(e) => {
                                        const updatedExpenses = [...newExpenses];
                                        updatedExpenses[index].date = e.target.value;
                                        setNewExpenses(updatedExpenses);
                                    }}
                                />
                            </label>
                            <select
                                value={expense.category}
                                onChange={(e) => {
                                    const updatedExpenses = [...newExpenses];
                                    updatedExpenses[index].category = e.target.value;
                                    setNewExpenses(updatedExpenses);
                                }}
                            >
                                <option value="">선택</option>
                                <option value="식비">식비🍔</option>
                                <option value="카페/간식">카페/간식☕</option>
                                <option value="숙박/여행">숙박/여행🗼</option>
                                <option value="교통">교통🚗</option>
                                <option value="쇼핑">쇼핑🛒</option>
                                <option value="기타">기타🎸</option>
                            </select>
                            <select
                                value={expense.paymentMethod}
                                onChange={(e) => {
                                    const updatedExpenses = [...newExpenses];
                                    updatedExpenses[index].paymentMethod = e.target.value;
                                    setNewExpenses(updatedExpenses);
                                }}
                            >
                                <option value="">선택</option>
                                <option value="카드">카드</option>
                                <option value="현금">현금</option>
                                <option value="이체">이체</option>
                            </select>
                            <input
                                type="text"
                                placeholder="거래처"
                                value={expense.merchant}
                                onChange={(e) => {
                                    const updatedExpenses = [...newExpenses];
                                    updatedExpenses[index].merchant = e.target.value;
                                    setNewExpenses(updatedExpenses);
                                }}
                            />
                            <input
                                type="number"
                                placeholder="금액"
                                value={expense.amount}
                                onChange={(e) => {
                                    const updatedExpenses = [...newExpenses];
                                    updatedExpenses[index].amount = e.target.value;
                                    setNewExpenses(updatedExpenses);
                                }}
                            />
                            <input
                                type="text"
                                placeholder="메모"
                                value={expense.memo}
                                onChange={(e) => {
                                    const updatedExpenses = [...newExpenses];
                                    updatedExpenses[index].memo = e.target.value;
                                    setNewExpenses(updatedExpenses);
                                }}
                            />
                            <button className="add_btn" onClick={handleSaveExpenses} disabled={isLoading}>
                                {isLoading ? "저장 중..." : "추가"}
                            </button>
                        </div>
                    ))}

                    <div className="expense_list">
                        <ul>
                            {expenses.map(expense => (
                                <li key={expense.id} className="expense-item">
                                    {/*<span></span>*/}
                                    {/* 지출/수입 앞에 색깔 점 추가 */}
                                    <span className={`expense-type ${expense.type === "지출" ? "expense-expense" : "expense-income"}`}></span>
                                    {/* 점과 텍스트를 한 줄에 배치 */}
                                    <span className="expense-details">
                                        {expense.type === "지출" ? "지출" : "수입"} {/* 지출/수입 텍스트 */}
                                    </span>
                                    <span>{expense.date}</span>
                                    <span>
                                        {expense.category} {/* 카테고리 텍스트 */}
                                        {categoryIcons[expense.category] || "📦"}
                                    </span>{/* 카테고리에 해당하는 아이콘 표시 */}
                                    <span>{expense.paymentMethod}</span>
                                    <span>{expense.merchant}</span>
                                    <span>{expense.amount}원</span>
                                    <span>{expense.memo}</span>
                                    <button className="delete_btn" onClick={() => handleDeleteExpense(expense.id)}>
                                        X
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;