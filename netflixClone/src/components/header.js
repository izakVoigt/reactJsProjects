import React from "react";
import './header.css'

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://avatarfiles.alphacoders.com/103/103636.jpg" alt="usuário"/>
                </a>
            </div>
        </header>
    )
}