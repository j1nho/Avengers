import './Modal.css'

function SuccessModal({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>회원 가입 성공 !</h2>
                <p>로그인 페이지로 이동 합니다.</p>
                <button onClick={onClose}>확인</button>
            </div>
        </div>
    );
}

export default SuccessModal;
