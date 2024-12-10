import './Home.css'
import Header from "../component/Header";
import Aside from "../component/Aside";
import Calendar from "../component/Calendar";
import profileImg from "../images/profile.png"

const Home = () => {
    return (
        <div className={"Home_wrap"}>
            <Header/>
            <Aside/>
            <div className={"Home_container"}>
                <div className={"Home_wrapper"}>
                    <div className={"Home_Box"}>
                        <div className={"Home_profileBox"}>
                            <div className={"Home_profile"}>
                                <div className={"Home_profileImg"}>
                                    <img src={profileImg}/>
                                </div><br/>
                                <h3>User</h3><br/>
                                <p><span>함께 관리한지 </span>368일째❤</p><br/>
                                <h3>목표:매일 10,000원씩 모으기 !0!</h3>
                            </div>
                        </div>
                        <div className={"Home_main"}>
                            <div className={"Home_contents"}>
                                <div className={"Home_infoBox"}>
                                    <h2>우리의 자산</h2>
                                    <ul>
                                        <li><h4>1111-22-333-4444</h4></li>
                                        <li><h3>3,594,156원</h3></li>
                                    </ul>
                                </div>
                                <div className={"Home_infoBox"}>
                                    <h2>이번 달 지출</h2>
                                    <div className={"circle_box"}>
                                        <div className={"circle1"}>350,000</div>
                                    </div>
                                </div>
                            </div>
                            <div className={"Home_contents2"}>
                                <div className={"Home_infoBox2"}>
                                    <h2>우리의 금융 일정</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Calendar/>
                </div>
            </div>
        </div>
    )
}
export default Home