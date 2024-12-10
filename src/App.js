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
import Modal from "./component/Modal";
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
    const [joinSuccessModal, setJoinSuccessModal] = useState(false); // 모달 상태 관리

    const onJoin = async (email, password, name) => {
        try {
            if (!email || !password || !name) {
                setJoinSuccessModal({ title: '회원가입 실패', message: '모든 값을 입력해주세요.' });
                return;
            }

            // 회원가입 처리
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
            navigate('/login')

            // 회원가입 성공 시 모달 표시
            setJoinSuccessModal({ title: '회원가입 성공 !', message: '로그인 화면으로 이동합니다.' });
            } catch (error) {
            console.error(error);
            setJoinSuccessModal({ title: '회원가입 실패', message: '회원 가입에 실패했습니다.' });
        }
    };

    const [loginModal, setLoginModal] = useState(false);

    const onLogin = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            // 로그인 성공 시 모달 표시
            setLoginModal({ title: '로그인 성공', message: '메인화면으로 이동합니다.' });
            setUser(userCredential.user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
            setLoginModal({ title: '로그인 실패', message: '다시 시도해 주세요.' });
        }
    };

    const [logoutModal, setLogoutModal] = useState(false);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setIsAuthenticated(false);
            navigate('/login');
        } catch (error) {
            console.error(error);
            setLogoutModal({ title: '오류', message: '로그아웃에 실패했습니다.' });
        }
    };

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
                {joinSuccessModal && (
                    <Modal
                        title={joinSuccessModal.title}
                        message={joinSuccessModal.message}
                        onClose={() => {
                            setJoinSuccessModal(false);
                            if (joinSuccessModal.title === '회원가입 성공') {
                                navigate('/login'); // 성공 시 로그인 페이지로 이동
                            }
                        }}
                    />
                )}
                {loginModal && (
                    <Modal
                        title={loginModal.title}
                        message={loginModal.message}
                        onClose={() => {
                            setLoginModal(false);
                            if (loginModal.title === '로그인 성공') {
                                navigate('/'); // 성공 시 메인 페이지로 이동
                            }
                        }}
                    />
                )}
                {logoutModal && (
                    <Modal
                        title={logoutModal.title}
                        message={logoutModal.message}
                        onClose={() => setLogoutModal(false)}
                    />
                )}


            </AuthContext.Provider>
        </div>
    );
}

export default App;

