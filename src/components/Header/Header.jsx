import React from 'react';
import models from "../../data/models.json";

import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import {useTab} from "../../context/TabContext";
import {handleSignOut} from "../../utils/fbInstance";

export default function Header() {
    const {user} = useAuth();
    const {currentTab} = useTab();

    return (
        <header className={'header'}>
            <div className={'inner_header flex-space-between'}>
                <Link to={'/'} className={'logo'}>
                    <img src="/img/logo_lexus@2x.png" alt="Lexus Korea Logo"/>
                </Link>
                <div className={'glb_wrap'}>
                    <nav className={'glb_navigation'}>
                        <ul className={'item_list'}>
                            <li className={'item'}>
                                <Link to={`/models/${models[currentTab].name}`}>MODEL</Link>
                            </li>
                            <li className={'item'}>
                                <Link to={`/model/${models[currentTab].name}/model-configuration`}>내 차 만들기</Link>
                            </li>
                            <li className={'item'}>
                                <Link to={`/test-drive/${models[currentTab].name}`}>시승신청</Link>
                            </li>
                            <li className={'item'}>
                                <Link to={user ? `/lexus-lounge` : '/login'}>
                                    LEXUS LOUNGE
                                </Link>
                            </li>
                            <li className={'item'}>
                                <Link to={user ? `/user/account/${user.displayName}/my-car` : '/login'}>
                                    MY ACCOUNT
                                </Link>
                            </li>
                            {/*<li className={'item'}>
                                <Link to="/login">{user ? "LOGOUT" : "LOGIN"}</Link>
                            </li>*/}
                            <li className={'item'}>
                                <button onClick={handleSignOut}>
                                    LOGOUT
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}