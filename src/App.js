import './App.css';
// import Header from "./component/Header";
// import Aside from "./component/Aside";
// import Home from "./pages/Home";
// import Calendar from "./component/Calendar";
// import ProtectedRoute from "./js/ProtectedRoute";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import {createUserWithEmailAndPassword, updateProfile, getAuth, signInWithEmailAndPassword,
    onAuthStateChanged} from 'firebase/auth'
import app from './js/firebaseApp'
import {createContext, useEffect, useState} from "react";
import Analyze from "./pages/Analyze";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import Save from "./pages/Save";
import Schedule from "./pages/Schedule";
import ThisMonth from "./pages/ThisMonth";
import Write from "./pages/Write";

export const AuthContext = createContext('');

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
                navigate('/');
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
    const onJoin = async (email, password, name) => {
        try {
            // 1. 이메일 및 비밀번호로 회원 가입
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // 2. 사용자 프로필 업데이트 (이름 추가)
            await updateProfile(userCredential.user, {
                displayName: name,
            })

            // 3. 회원 가입 성공 후 메인으로 이동
            alert('회원 가입 성공')
            navigate('/login')

        } catch (error) {
            // alert('회원 가입 실패')
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    }
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
    // const handleLogout = async () => {
    //     try {
    //         await signOut(auth); // Firebase 로그아웃
    //         setUser(null);
    //         setIsAuthenticated(false);
    //         navigate('/login');
    //     } catch (error) {
    //         alert('로그아웃 실패')
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode, errorMessage);
    //     }
    // }

    return (
        <div className="App">
            <AuthContext.Provider value={{user, isAuthenticated}}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/join'} element={<Join onJoin={onJoin}/>}/>
                    <Route path={'/login'} element={<Login onLogin={onLogin}/>}/>
                    <Route path={'/analyze'} element={<Analyze/>}/>
                    <Route path={'/category'} element={<Category/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/save'} element={<Save/>}/>
                    <Route path={'/schedule'} element={<Schedule/>}/>
                    <Route path={'/thisMonth'} element={<ThisMonth/>}/>
                    <Route path={'/write'} element={<Write/>}/>
                </Routes>
            </AuthContext.Provider>
        </div>
    );
}

export default App;

