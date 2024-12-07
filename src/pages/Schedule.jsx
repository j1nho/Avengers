        import Header from "../component/Header";
import Aside from "../component/Aside";
import './Schedule.css'

const Schedule = () => {
    return (
        <div>
            <Header/>
            <div className={"App_box"}>
                <Aside/>
                <div className={"Main"}>
                    <div className={"title"}>
                        <div className={"Schedule_box"}>
                            <span><h1>금융 일정 관리</h1><br/>
                                <p>지출 · 수입을 기록하여, 정기적으로 관리해보세요 !</p></span>
                        </div>
                    </div>
                    <ul className={"Schedule_menu"}>
                        <li>금융 일정 추가</li>
                        <li>금융 일정 수정</li>
                    </ul>
                    <div className={"contents_box"}>
                        <div className={"box"}>
                            <h3>날짜</h3>
                            <input type={"date"}/>
                            <h3>분류</h3>
                            <div className={"schedule_btn1"}>
                                <button className={"schedule_btn01"}>지출</button>
                                <button className={"schedule_btn01"}>수입</button>
                            </div>
                            <h3>일정 이름</h3>
                            <input type={"text"}/>
                            <h3>금액</h3>
                            <input type={"text"}/>
                            <p>*0원을 입력하시면 ‘변동’이라는 값으로 들어갑니다.</p>
                            <div className={"schedule_btn1"}>
                                <button className={"schedule_btn03"}>고정 지출 / <br/>수입 일정 추가</button>
                                <button className={"schedule_btn04"}>금융 일정 추가</button>
                            </div>
                        </div>
                        <div className={"box"}>
                            <h3>고정 지출 / 수입 일정</h3>
                        </div>
                        <div className={"box"}>
                            <h3>이번 달 금융 일정</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Schedule