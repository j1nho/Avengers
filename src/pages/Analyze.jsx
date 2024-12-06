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
                    <h1>12월 지출 분석</h1>
                    <div className={"analyze_contentsBox"}>
                        <div className={"analyze_contents"}>
                            <p>이번달 총 지출</p>
                        </div>
                        <div className={"analyze_contents"}>
                            <p>이번 달 예산 분석</p>
                        </div>
                        <div className={"analyze_contents"}>
                            <p>최근 3개월 지출 합계</p>
                            <span>이번 달에는 지난 2개월 보다 덜 쓰셨어요 !</span>
                        </div>
                    </div>
                    <div className={"analyze_contentBox2nd"}>
                        <div className={"analyze_leftBox"}>
                            <div className={"analyze_left"}>
                                <p>주간별 분석</p>
                            </div>
                            <div className={"analyze_left"}>
                                <p>이번 달 카테고리 별 지출 분석</p>
                            </div>
                        </div>
                        <div className={"analyze_right"}>
                            <div className={"analyze_rightContents"}>
                                <p>12월 고정 지출</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
)
}

export default Analyze