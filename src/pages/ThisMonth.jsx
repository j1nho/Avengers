import Calendar from "../component/Calendar";
import Header from "../component/Header";
import Aside from "../component/Aside";
import './ThisMonth.css'

const ThisMonth = () => {
    return (
        <div className={"ThisMonthPage"}>
            <Header/>
            <div className={"ThisMonth_container"}>
                <Aside/>
                <Calendar/> {/* 수정 필요. */}
            </div>
        </div>
    )
}
export default ThisMonth