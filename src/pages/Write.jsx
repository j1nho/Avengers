import Header from "../component/Header";
import Aside from "../component/Aside";
import './Write.css'

const Write = () => {
    return (
        <div>
            <Header/>
            <div className="App_box">
                <Aside/>
                <div className={"Write_container"}>
                    <div className={"title"}>
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
                    <div className={"Write_content"}>
                        <select>
                            <option value="text">선택</option>
                            <option value="text">지출</option>
                            <option value="text">수입</option>
                        </select>
                        <label><input type="date"/></label>
                        <select>
                            <option value="text">선택</option>
                            <option value="text">식비🍔</option>
                            <option value="text">카페/간식☕</option>
                            <option value="text">숙박/여행🗼</option>
                            <option value="text">교통🚗</option>
                            <option value="text">쇼핑🛒</option>
                            <option value="text">기타🎸</option>
                        </select>
                        <select>
                            <option value="선택">선택</option>
                            <option value="선택">카드</option>
                            <option value="선택">현금</option>
                            <option value="선택">이체</option>
                        </select>
                        <input type={"text"}/>
                        <input type={"text"}/>
                        <input type={"text"}/>
                        <button>추가</button>
                        <button>X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Write