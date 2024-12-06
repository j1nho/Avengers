import './App.css';
import Header from "./component/Header";
import Aside from "./component/Aside";
import Profile from "./component/Profile";
import Calendar from "./component/Calendar";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={"App_box"}>
                <Aside/>
                <div className={"Main"}>
                    <Profile/>
                    <Calendar/>
                </div>
            </div>
        </div>
    );
}

export default App;
