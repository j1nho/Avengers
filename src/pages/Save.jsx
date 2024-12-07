import Header from "../component/Header";
import Aside from "../component/Aside";
import './Save.css'

const Save = () => {
    return (
        <div className={"SavePage"}>
            <Header/>
            <div className={"Save_container"}>
                <Aside/>
                <div className={"Save_contents"}>
                    <div className={"Save_title"}>
                        <h1>이번 달 모은 돈</h1>
                    </div>
                    <p>추후 제작 예정입니다.</p>
                </div>
            </div>
        </div>

    )
}

export default Save;