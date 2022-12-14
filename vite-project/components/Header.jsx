import React from 'react';
import '../css/header.css';
import data from '../data/header'

const Header = (props) => {

    const pages = data[props.lang].pages.map(page => {
        return (
            <li className="page">
                <a href="">
                    <span>{page}</span>
                </a>
            </li>
        )
    })

    return (
        <>
            <header className='header'>
                <div className="logo">
                    <img src="./logo.png" alt="logo" />
                </div>
                <h1 className="title">{data[props.lang].title}</h1>
                <ul className="pages">
                    {pages}
                </ul>
                <div className="lang-wrapper">
                    <div className="lang">EN</div>
                    <div className="lang">DE</div>
                </div>
            </header>
            {props.children}
        </>
    );
}

export default Header;
