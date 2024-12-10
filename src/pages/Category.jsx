import Header from "../component/Header";
import Aside from "../component/Aside";
import './Category.css'
import {Link} from "react-router-dom";

const Category = () => {
    return (
        <div className={"CategoryPage"}>
            <Header/>
            <Aside/>
            <div className="Category_container">
                <div className={"Category_contents"}>
                    <div className={"Category_title"}>
                        <h1>카테고리별 내역</h1>
                        <button className={"Category_btn"}><Link to={'/write'}>가계부 작성 📝</Link></button>
                    </div>
                    <ul>
                        <li><input type={"checkbox"}/>분류</li>
                        <li>날짜</li>
                        <li>결제수단</li>
                        <li>거래처</li>
                        <li>금액</li>
                        <li>메모</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Category