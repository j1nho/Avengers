import './Profile.css'

const Profile = () => {
    return (
        <div className={"Profile_container"}>
            <div className={"Profile"}>
                <div className={"Profile_box1"}>

                </div>
                <div className={"Profile_box2"}>
                    <h2>우리의 자산</h2>
                    <ul>
                        <li><h4>1111-22-333-4444</h4></li>
                        <li><h3>3,594,156원</h3></li>
                    </ul>
                </div>
                <div className={"Profile_box3"}>
                    <h2>예산</h2>
                    <ul>
                        <li><h3>한 달 예산을 세워볼까요?</h3></li>
                        <li><span>예산을 설정하고 계획적으로 관리해보세요.</span></li>
                    </ul>
                    <div className={"btn"}>
                        <button>예산 설정</button>
                    </div>
                </div>
            </div>
            <div className={"Profile2"}>
                <div className={"Profile_box4"}>
                    <h2>우리의 금융 일정</h2>
                </div>
                <div className={"Profile_box5"}>
                    <h2>이번 달 지출</h2>
                    <div className={"circle_box"}>
                        <div className={"circle1"}>350,000</div>
                    </div>
                </div>
                <div className={"Profile_box6"}>
                    <h2>우리가 이번 달 모은 돈</h2>
                    <div className={"circle_box"}>
                        <div className={"circle2"}>800,000</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Profile