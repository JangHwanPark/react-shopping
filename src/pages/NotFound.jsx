import React from 'react';
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <div className="error-page">
            <div className="error-content">
                <h1 className="error-code">404</h1>
                <p className="error-message">Error: 요청하신 페이지를 찾을 수 없습니다.</p>
                <Link to="/" className="home-link">Return to Home</Link>
            </div>
        </div>
    );
}