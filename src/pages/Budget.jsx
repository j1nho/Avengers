import Header from "../component/Header";
import Aside from "../component/Aside";
import './Budget.css'

const Budget = () => {
    return (
        <div>
            <Header/>
            <div className={"App_box"}>
                <Aside/>
                <div className={"Budget_Page"}>
                    <div className={"title"}>
                        <div className={"Budget_box"}>
                            <span><h1>예산</h1><br/>
                                <p>예산을 설정하고 계획적으로 관리해보세요.</p></span>
                        </div>
                    </div>
                    <div className={"btn"}>
                        <button className={"budget_btn"}>예산 작성 📝</button>
                    </div>
                    <div className={"budget_container"}>
                        <div className={"budget_contents"}>
                            <div>
                                <h3>이번 달 지출</h3>
                            </div>
                            <div>
                                <h3>우리가 이번 달 모은돈</h3>
                            </div>
                            <div>
                                <h3>예산</h3>
                            </div>
                        </div>
                        <div className={"budget_contents2"}>
                            <div>
                                <h3>12월 예산</h3>
                            </div>
                            <div>
                                <h3>지난 달 예산 분석</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Budget;