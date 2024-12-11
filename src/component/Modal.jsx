import React from 'react';
import './Modal.css'; // 스타일링을 위한 CSS 파일
import '../App'

function Modal({ title, message, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{title}</h2>
                <p>{message}</p>
                <button className={"nextPageBtn"} onClick={onClose}>확인</button>
            </div>
        </div>
    );
}

export default Modal;
