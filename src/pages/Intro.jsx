import Header from "../component/Header";
import './Intro.css'
import logo from '../images/logo.png'
import Intro_1 from '../images/Intro_1.png'
import Intro_2 from '../images/Intro_2.png'
import Intro_3 from '../images/Intro_3.png'
import Intro_4 from '../images/Intro_4.png'
import Intro_5 from '../images/Intro_5.png'
import Intro_6 from '../images/Intro_6.png'
import Intro_7 from '../images/Intro_7.png'

const Intro = () => {
    return (
        <div className={"IntroPage"}>
            <Header/>
            <div className={"IntroContainer"}>
                <div className={"IntroContent_1"}>
                    <div>
                        <h1>커플을 위한 가계부,</h1>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <img src={Intro_1} alt="intro" />
                    </div>
                </div>
                <div className={"IntroContent_2"}>
                    <div>
                        <h1>각자의 이름이나 별명을 입력하고,<br/>
                            함께 사용할 비밀번호를 정해보세요!</h1>
                        <p>두 분 모두 동일한 계정으로 로그인해 데이터를 공유할 수 있어요.</p>
                    </div>
                </div>
                <div className={"IntroContent_3"}>
                    <div>
                        <img src={Intro_2} alt="intro" />
                    </div>
                    <div>
                        <img src={Intro_3} alt="intro"/>
                    </div>
                </div>
                <div className={"IntroContent_4"}>
                    <div>
                        <h1>수입과 지출 관리는 이렇게 !</h1>
                    </div>
                </div>
                <div className={"IntroContent_5"}>
                    <div>
                        <h1>더 스마트한 예산 관리 하기 💸</h1>
                    </div>
                    <div>
                        <img src={Intro_4} alt="intro" />
                    </div>
                </div>
                <div className={"IntroContent_6"}>
                    <div>
                        <img src={Intro_5} alt="intro" />
                    </div>
                    <div>
                        <h1>한 달 예산 목표를 입력해볼까요? 🎯</h1>
                        <p> 예산을 설정하면 소비를<br/>
                            효과적으로 관리할 수 있어요.</p>
                    </div>
                </div>
                <div className={"IntroContent_7"}>
                    <div>
                        <h1>커플의 모든 소비를 투명하게! 🛒</h1>
                    </div>
                </div>
                <div className={"IntroContent_8"}>
                    <div>
                        <img src={Intro_6} alt="intro" />
                    </div>
                    <div>
                        <p>바 차트와 원형 그래프로<br/>
                            쉽게 이해할 수 있답니다. </p>
                    </div>
                </div>
                <div className={"IntroContent_9"}>
                    <div>
                        <h1>하루 1분만 투자! 💡</h1>
                        <h2>더 이상 복잡한 엑셀은 안녕~ 👋</h2>
                        <p>'가계부 작성' 버튼을 눌러 금액, 카테고리, 날짜를<br/>
                            입력해 오늘 쓴 돈을 기록하세요.</p>
                    </div>
                </div>
                <div className={"IntroContent_10"}>
                    <div>
                        <img src={Intro_7} alt="intro" />
                    </div>
                </div>
                <div className={"IntroContent_11"}>
                    <div className={"IntroButton"}>
                        <button>시작하기</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Intro;