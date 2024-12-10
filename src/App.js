import './App.css';
// import Header from "./component/Header";
// import Aside from "./component/Aside";
// import Home from "./pages/Home";
// import Calendar from "./component/Calendar";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import {createUserWithEmailAndPassword, updateProfile, getAuth, signInWithEmailAndPassword,
    onAuthStateChanged, signOut, updatePassword} from 'firebase/auth'
import app from './js/firebaseApp'
import {createContext, useEffect, useState} from "react";
import ProtectedRoute from "./js/ProtectedRoute";
import Analyze from "./pages/Analyze";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import Save from "./pages/Save";
import Schedule from "./pages/Schedule";
import ThisMonth from "./pages/ThisMonth";
import Write from "./pages/Write";
import Intro from "./pages/Intro";
import SuccessModal from "./component/Modal";

export const AuthContext = createContext();

function App() {
    const auth = getAuth(app); // firebase 인증 객체
    const navigate = useNavigate()
    const [user, setUser] = useState(null) // 사용자 정보
    const [isAuthenticated, setIsAuthenticated] = useState(false); // 로그인 여부

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) { // 사용자가 로그인이 된 상태
                setIsAuthenticated(true);
                setUser(user);
                // navigate('/');
            } else { // 사용자가 로그아웃인 상태
                setIsAuthenticated(false);
                setUser(null);
                navigate('/login');
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    /* 사용자 가입
    * 이메일, 비밀번호만으로 사용자 계정 생성: createUserWithEmailAndPassword
    * 이메일, 비밀번호 외의 회원 정보를 입력: updateProfile()
    */
    const [showSuccessModal, setShowSuccessModal] = useState(false); // 모달 상태 관리

    const onJoin = async (email, password, name) => {
        try {
            if (!email || !password || !name) {
                alert('모든 값을 입력해주세요.');
                return;
            }
            // 회원가입
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
            navigate('/login')
            // 회원가입 성공 시 모달 띄우기
            setShowSuccessModal(true);
        } catch (error) {
            console.error('회원 가입 실패:', error);
            alert('회원 가입 실패: ' + error.message);
        }
    };

    const onLogin = async (email, password) => {
        try {
            // 1. 이메일 및 비밀번호로 로그인
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            // 2. 로그인 성공 시 처리
            setUser(userCredential.user)
            setIsAuthenticated(true)
            alert('로그인 성공')
            navigate('/')
        } catch (error) {
            alert('로그인 실패')
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    }
    const handleLogout = async () => {
        try {
            await signOut(auth); // Firebase 로그아웃
            setUser(null);
            setIsAuthenticated(false);
            navigate('/login');
        } catch (error) {
            alert('로그아웃 실패')
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    }

    return (
        <div className="App">
            <AuthContext.Provider value={{user, isAuthenticated}}>
                <Routes>
                    <Route path={"/intro"} element={<Intro />} />
                    <Route path={'/login'} element={<Login onLogin={onLogin}/>}/>
                    <Route path={'/join'} element={<Join onJoin={onJoin}/>}/>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/analyze'} element={<Analyze/>}/>
                    <Route path={'/category'} element={<Category/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/save'} element={<Save/>}/>
                    <Route path={'/schedule'} element={<Schedule/>}/>
                    <Route path={'/thisMonth'} element={<ThisMonth/>}/>
                    <Route path={'/write'} element={<Write/>}/>
                </Routes>
                {showSuccessModal && (
                    <SuccessModal onClose={() => {
                        setShowSuccessModal(false); // 모달 닫기
                        navigate('/login'); // 로그인 페이지로 이동
                    }} />
                )}
            </AuthContext.Provider>
        </div>
    );
}

export default App;

