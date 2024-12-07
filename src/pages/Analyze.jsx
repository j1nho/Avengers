import Header from "../component/Header";
import Aside from "../component/Aside";
import './Analyze.css'

const Analyze = () => {
    return (
        <div>
            <Header/>
            <div className={"App_box"}>
                <Aside/>
                <div className={"analyze_container"}>
                    <div className={"title"}>
                        <h1>12월 지출 분석</h1>
                    </div>
                    <div className={"analyze_contentsBox"}>
                        <div className={"analyze_contents"}>
                            <div>
                                <h3>이번 달 총 지출</h3>
                            </div>
                            <div>
                                <h3>이번 달 예산 분석</h3>
                            </div>
                            <div>
                                <h3>최근 3개월 지출 합계</h3>
                            </div>
                        </div>
                        <div className={"analyze_contents2"}>
                            <div className={"analyze_contents3"}>
                                <div>
                                    <h3>주간별 분석</h3>
                                </div>
                                <div>
                                    <h3>이번 달 카테고리별 지출 분석</h3>
                                </div>
                            </div>
                            <div className={"analyze_contents4"}>
                                <div>
                                    <h3>12월 고정 지출</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analyze