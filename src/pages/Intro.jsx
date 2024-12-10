import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트
import AOS from "aos";
import "aos/dist/aos.css"; // AOS 스타일 불러오기
import Header from "../component/Header";
import './Intro.css';
import logo from '../images/logo.png';
import Intro_1 from '../images/Intro_1.png';
import Intro_2 from '../images/Intro_2.png';
import Intro_3 from '../images/Intro_3.png';
import Intro_4 from '../images/Intro_4.png';
import Intro_5 from '../images/Intro_5.png';
import Intro_6 from '../images/Intro_6.png';
import Intro_7 from '../images/Intro_7.png';

const Intro = () => {
    const navigate = useNavigate(); // useNavigate 훅 호출
    // AOS 초기화
    useEffect(() => {
        AOS.init({
            duration: 1000, // 애니메이션 지속 시간
            offset: 120, // 애니메이션 시작 지점
            easing: "ease-in-out", // 애니메이션 이징 효과
            once: true, // 스크롤 한 번만 애니메이션 실행
        });
    }, []);
    // 시작하기 버튼 클릭 이벤트 핸들러
    const handleStartClick = () => {
        console.log('Button clicked, navigating to /login');
        navigate('/login');
    };
    return (
        <div className={"IntroPage"}>
            <Header/>
            <div className={"IntroContainer"}>
                <div className="IntroContent_1" data-aos="fade-up">
                    <div>
                        <h1>커플을 위한 가계부,</h1>
                        <p>함께 만드는 행복한 소비 계획 !</p>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <img src={Intro_1} alt="intro" />
                    </div>
                </div>
                <div className="IntroContent_2" data-aos="fade-down">
                    <div>
                        <h1>각자의 이름이나 별명을 입력하고,<br/>
                            함께 사용할 비밀번호를 정해보세요!</h1>
                        <p>두 분 모두 동일한 계정으로 로그인해 데이터를 공유할 수 있어요.</p>
                    </div>
                </div>
                <div className={"IntroContent_3"}>
                    <div data-aos="fade-up-right">
                        <img src={Intro_2} alt="intro"/>
                    </div>
                    <div data-aos="fade-up-left">
                        <img src={Intro_3} alt="intro"/>
                    </div>
                </div>
                <div className={"IntroContent_4"}>
                    <div data-aos="zoom-in">
                        <h1>커플의 모든 소비를 투명하게! 🛒</h1>
                    </div>
                </div>
                <div className={"IntroContent_5"}>
                    <div>
                        <img src={Intro_4} alt="intro" data-aos="flip-up"/>
                    </div>
                    <div data-aos="fade-left">
                        <h1>‘분석’ 탭에서 소비 내역을<br/>
                            한눈에 확인할 수 있어요.</h1>
                        <h2>바 차트로 쉽게 이해할 수 있답니다. </h2>
                        <p>💡 팁: 지난달과 비교하며 소비 패턴을 확인해보세요!</p>
                    </div>
                </div>
                <div className={"IntroContent_6"}>
                    <div>
                        <img src={Intro_5} alt="intro" data-aos="zoom-in" />
                    </div>
                </div>
                <div className={"IntroContent_7"}>
                    <div data-aos="fade-up">
                        <h1>캘린더로 지출/수입 내역을<br/>
                            한 눈에 확인해보세요 !</h1>
                    </div>
                </div>
                <div className={"IntroContent_8"}>
                    <div data-aos="fade-up-right">
                        <h1>매달 빠져나가는 고정비,<br/>
                            챙기기 귀찮으셨죠? 📌</h1>
                        <p>이제 고정 지출을 따로 등록해보세요.<br/>
                            매달 자동 기록됩니다.</p>
                    </div>
                    <div>
                        <img src={Intro_6} alt="intro" data-aos="flip-right"/>
                    </div>
                </div>
                <div className={"IntroContent_9"}>
                    <div data-aos="zoom-in-down">
                        <h1>하루 1분만 투자! 💡</h1>
                        <h2>더 이상 복잡한 엑셀은 안녕~ 👋</h2>
                        <p>'가계부 작성' 버튼을 눌러 금액, 카테고리, 날짜를<br/>
                            입력해 오늘 쓴 돈을 기록하세요.</p>
                    </div>
                </div>
                <div className={"IntroContent_10"}>
                    <div>
                        <img src={Intro_7} alt="intro" data-aos="zoom-out" />
                    </div>
                </div>
                <div className={"IntroContent_11"}>
                    <div>
                        <h1 data-aos="fade-down">두 분의 행복한 소비와 저축 여정을 시작해 보세요. 🚀</h1>
                    </div>
                </div>
                <div className={"IntroContent_12"}>
                    <div className={"IntroButton"}>
                    <button onClick={handleStartClick}>시작하기</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Intro;