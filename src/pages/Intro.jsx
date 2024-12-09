import React, { useEffect } from "react";
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
    // AOS 초기화
    useEffect(() => {
        AOS.init({
            duration: 1000, // 애니메이션 지속 시간
            offset: 120, // 애니메이션 시작 지점
            easing: "ease-in-out", // 애니메이션 이징 효과
            once: true, // 스크롤 한 번만 애니메이션 실행
        });
    }, []);
    return (
        <div className={"IntroPage"}>
            <Header/>
            <div className={"IntroContainer"}>
                <div className="IntroContent_1" data-aos="fade-up">
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
                        <h1 data-aos="fade-down">각자의 이름이나 별명을 입력하고,<br/>
                            함께 사용할 비밀번호를 정해보세요!</h1>
                        <p data-aos="fade-down">두 분 모두 동일한 계정으로 로그인해 데이터를 공유할 수 있어요.</p>
                    </div>
                </div>
                <div className={"IntroContent_3"}>
                    <div data-aos="fade-up">
                        <img src={Intro_2} alt="intro"/>
                    </div>
                    <div data-aos="fade-up">
                        <img src={Intro_3} alt="intro"/>
                    </div>
                </div>
                <div className={"IntroContent_4"}>
                    <div data-aos="zoom-in">
                        <h1>수입과 지출 관리는 이렇게 !</h1>
                    </div>
                </div>
                <div className={"IntroContent_5"}>
                    <div>
                        <h1  data-aos="fade-up-right">더 스마트한 예산 관리 하기 💸</h1>
                    </div>
                    <div>
                        <img src={Intro_4} alt="intro" data-aos="fade-up-left" />
                    </div>
                </div>
                <div className={"IntroContent_6"}>
                    <div>
                        <img src={Intro_5} alt="intro" data-aos="fade-down-right" />
                    </div>
                    <div data-aos="fade-down-left">
                        <h1>한 달 예산 목표를 입력해볼까요? 🎯</h1>
                        <p> 예산을 설정하면 소비를<br/>
                            효과적으로 관리할 수 있어요.</p>
                    </div>
                </div>
                <div className={"IntroContent_7"}>
                    <div  data-aos="zoom-in-down">
                        <h1>커플의 모든 소비를 투명하게! 🛒</h1>
                    </div>
                </div>
                <div className={"IntroContent_8"}>
                    <div>
                        <img src={Intro_6} alt="intro" data-aos="zoom-in"/>
                    </div>
                    <div>
                        <p>바 차트와 원형 그래프로<br/>
                            쉽게 이해할 수 있답니다. </p>
                    </div>
                </div>
                <div className="IntroContent_9" data-aos="zoom-out">
                    <div>
                        <h1>하루 1분만 투자! 💡</h1>
                        <h2>더 이상 복잡한 엑셀은 안녕~ 👋</h2>
                        <p>'가계부 작성' 버튼을 눌러 금액, 카테고리, 날짜를<br/>
                            입력해 오늘 쓴 돈을 기록하세요.</p>
                    </div>
                </div>
                <div className={"IntroContent_10"}>
                    <div>
                        <img src={Intro_7} alt="intro" data-aos="zoom-in" />
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