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
    const [selectedType, setSelectedType] = useState('All'); // 선택된 유형 상태

    // 로컬 저장소에서 데이터 가져오기
    const fetchExpenses = () => {
        const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        const sortedExpenses = savedExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
        setExpenses(sortedExpenses);
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    // 카테고리 아이콘 매핑
    const categoryIcons = {
        식비: "🍔",
        "카페/간식": "☕",
        숙박: "🗼",
        교통: "🚗",
        쇼핑: "🛒",
        기타: "🎸",
    };

    // 새 항목 저장하기
    const handleSaveExpenses = () => {
        const incomplete = newExpenses.some(expense => !expense.type || !expense.date || !expense.category || !expense.paymentMethod || !expense.merchant || !expense.amount);
        if (incomplete) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        setIsLoading(true);

        try {
            const newExpensesWithId = newExpenses.map((expense) => ({
                ...expense,
                id: Date.now(),
            }));

            const updatedExpenses = [...newExpensesWithId, ...expenses];
            const sortedUpdatedExpenses = updatedExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
            localStorage.setItem("expenses", JSON.stringify(sortedUpdatedExpenses));
            setExpenses(sortedUpdatedExpenses);
            setNewExpenses([{ type: "", date: "", category: "", paymentMethod: "", merchant: "", amount: "", memo: "" }]);
        } catch (error) {
            console.error("Error saving documents: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    // 데이터 삭제하기
    const handleDeleteExpense = (id) => {
        try {
            const updatedExpenses = expenses.filter(expense => expense.id !== id);
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
            setExpenses(updatedExpenses);
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    // 필터링된 가계부 항목
    const filteredExpenses = selectedType === 'All'
        ? expenses
        : expenses.filter(expense => expense.type === selectedType);

    return (
        <div className="WritePage">
            <Header />
            <Aside />
            <div className="Write_container">
                <div className="Write_contents">
                    <div className="Write_title">
                        <div>
                            <h1>가계부 작성</h1>
                            {/* 유형 선택 드롭다운 추가 */}
                            <div className={"Write_setting"}>
                                <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
                                    <option value="All">전체</option>
                                    <option value="지출">지출</option>
                                    <option value="수입">수입</option>
                                </select>
                            </div>
                        </div>
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
                            <select value={expense.type} onChange={(e) => {
                                const updatedExpenses = [...newExpenses];
                                updatedExpenses[index].type = e.target.value;
                                setNewExpenses(updatedExpenses);
                            }}>
                                <option value="">선택</option>
                                <option value="지출">지출</option>
                                <option value="수입">수입</option>
                            </select>
                            <label>
                                <input type="date" value={expense.date} onChange={(e) => {
                                    const updatedExpenses = [...newExpenses];
                                    updatedExpenses[index].date = e.target.value;
                                    setNewExpenses(updatedExpenses);
                                }} />
                            </label>
                            <select value={expense.category} onChange={(e) => {
                                const updatedExpenses = [...newExpenses];
                                updatedExpenses[index].category = e.target.value;
                                setNewExpenses(updatedExpenses);
                            }}>
                                <option value="">선택</option>
                                {/* 카테고리 옵션 추가 */}
                                {Object.keys(categoryIcons).map(category => (
                                    <option key={category} value={category}>{category}{categoryIcons[category]}</option>
                                ))}
                            </select>
                            <select value={expense.paymentMethod} onChange={(e) => {
                                const updatedExpenses = [...newExpenses];
                                updatedExpenses[index].paymentMethod = e.target.value;
                                setNewExpenses(updatedExpenses);
                            }}>
                                <option value="">선택</option>
                                <option value="카드">카드</option>
                                <option value="현금">현금</option>
                                <option value="이체">이체</option>
                            </select>
                            <input type="text" placeholder="거래처" value={expense.merchant} onChange={(e) => {
                                const updatedExpenses = [...newExpenses];
                                updatedExpenses[index].merchant = e.target.value;
                                setNewExpenses(updatedExpenses);
                            }} />
                            <input type="number" placeholder="금액" value={expense.amount} onChange={(e) => {
                                const updatedExpenses = [...newExpenses];
                                updatedExpenses[index].amount = e.target.value;
                                setNewExpenses(updatedExpenses);
                            }} />
                            <input type="text" placeholder="메모" value={expense.memo} onChange={(e) => {
                                const updatedExpenses = [...newExpenses];
                                updatedExpenses[index].memo = e.target.value;
                                setNewExpenses(updatedExpenses);
                            }} />
                            <button className="add_btn" onClick={handleSaveExpenses} disabled={isLoading}>
                                {isLoading ? "저장 중..." : "추가"}
                            </button>
                        </div>
                    ))}

                    {/* 필터링된 가계부 항목 표시 */}
                    <div className="expense_list">
                        <ul>
                            {filteredExpenses.map(expense => (
                                <li key={expense.id} className="expense-item">
                                    {/* 지출/수입 앞에 색깔 점 추가 */}
                                    <span className={`expense-type ${expense.type === "지출" ? "expense-expense" : "expense-income"}`}></span>
                                    {/* 점과 텍스트를 한 줄에 배치 */}
                                    <span className="expense-details">{expense.type === "지출" ? "지출" : "수입"}</span>
                                    <span>{expense.date}</span>
                                    <span>{expense.category} {categoryIcons[expense.category] || "📦"}</span> {/* 카테고리에 해당하는 아이콘 표시 */}
                                    <span>{expense.paymentMethod}</span>
                                    <span>{expense.merchant}</span>
                                    <span>{expense.amount}원</span>
                                    <span>{expense.memo}</span>
                                    {/* 삭제 버튼 */}
                                    <button className="delete_btn" onClick={() => handleDeleteExpense(expense.id)}> X </button>
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
