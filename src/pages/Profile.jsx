import Header from "../component/Header";
import './Profile.css'
import Aside from "../component/Aside";
import {PhotoCamera} from "@mui/icons-material";

const Profile = () => {

    const popup = () => {
        alert('추후 제작 예정입니다.')
    }

    return (
        <div className="ProfilePage">
            <Header/>
            <Aside/>
            <div className={"Profile_container"}>
                <div className={"Profile_contents"}>
                    <div className={"Profile_title"}>
                        <h1>프로필 설정</h1>
                    </div>
                    <div className={"Profile_setting"}>
                        <div className={"Profile_img"}>
                            <div className={"ProfileClick"} onClick={popup}>
                                <PhotoCamera style={{fontSize: '60px', color: '#E87D7D'}}/>
                                <p>프로필 사진을 추가해보세요.</p>
                            </div>
                            <h2>User</h2>
                            <p>mfeo1234@gmail.com</p>
                            <button className={"update"}>업데이트</button>
                        </div>
                        <div className={"Profile_text"}>
                            <div className={"text"}>
                                <p>닉네임</p>
                                <div className={'add'}>
                                    <input type={"text"}/>
                                    <button>변경</button>
                                </div>
                            </div>
                            <div className={"text"}>
                                <p>한줄 목표</p>
                                <div className={'add'}>
                                    <input type={"text"}/>
                                    <button>변경</button>
                                </div>
                            </div>
                            <div className={"text"}>
                                <p>관리한지</p>
                                <div className={'add'}>
                                    <input type={"date"}/>
                                    <button>변경</button>
                                </div>
                            </div>
                            <div className={"text"}>
                                <p>비밀번호 변경</p>
                                <div className={'add'}>
                                    <input type={"text"}/>
                                    <button>변경</button>
                                </div>
                            </div>
                            <div className={"text"}>
                                <p>연애 시작일❤</p>
                                <p>22.11.06</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;