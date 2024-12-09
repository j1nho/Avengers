import Header from "../component/Header";
import Aside from "../component/Aside";
import './Budget.css'

const Budget = () => {
    return (<div className="BudgetPage">
        <Header/>
        <Aside/>
        <div className={"Budget_container"}>
            <div className={"Budget_contents"}>
                <div className={"Budget_title"}>
                    <h1>예산</h1>
                    <p>예산을 설정하고 계획적으로 관리해보세요.</p>
                </div>
                <div className={"Budget_btnBox"}>
                    <button className={"Budget_btn"}>예산 작성 📝</button>
                </div>
                <div className={"Budget_infoBox"}>
                    <div className={"Budget_info"}>
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
                    <div className={"Budget_info2"}>
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
    </div>)
}
export default Budget;