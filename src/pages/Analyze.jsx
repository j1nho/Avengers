import Header from "../component/Header";
import Aside from "../component/Aside";
import './Analyze.css'

const Analyze = () => {
    return (
        <div className={"Analyze_wrap"}>
            <Header/>
            <Aside/>
            <div className={"Analyze_container"}>
                <div className={"Analyze_contents"}>
                    <div className={"Analyze_title"}>
                        <h1>12월 지출 분석</h1>
                    </div>
                    <div className={"Analyze_info"}>
                        <div className={"Analyze_infoContents"}>
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
                        <div className={"Analyze_infoContents2"}>
                            <div className={"Analyze_contents01"}>
                                <div>
                                    <h3>주간별 분석</h3>
                                </div>
                                <div>
                                    <h3>이번 달 카테고리별 지출 분석</h3>
                                </div>
                            </div>
                            <div className={"Analyze_contents02"}>
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