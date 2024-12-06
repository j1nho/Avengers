import Calendar from "../component/Calendar";
import Header from "../component/Header";
import Aside from "../component/Aside";

const ThisMonth = () => {
    return (
        <div>
            <Header/>
            <div className={"App_box"}>
                <Aside/>
                <Calendar/>
            </div>
        </div>
    )
}
export default ThisMonth