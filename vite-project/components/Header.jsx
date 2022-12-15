import React, { useState, useEffect } from 'react';
import '../css/header.css';
import data from '../data/header'
import { Link, useNavigate } from 'react-router-dom';


const Header = (props) => {
    let navigate = useNavigate();
    const [btnBG, setBtnBG] = useState(false)
    const pages = data[props.lang].pages.map((page, index) => {
        return (
            <li className="page" key={page + ' ' + index}>
                <Link to={data.paths[index]} className='a'>
                    <span>{page}</span>
                </Link>
            </li>
        )
    })
    const handleScroll = (e) => {
        if (e.deltaY === 100) {
            if (window.location.href.split('/').at(-1) === 'wip' || window.location.href.split('/').at(-1) === 'contacts' || window.location.href.split('/').at(-1) === 'projects' || window.location.href.split('/').at(-1).split('?')[0] === 'projects') {
                return
            }
            document.querySelector('.header').classList.add('hidden')

        } else {
            document.querySelector('.header').classList.remove('hidden')
        }

    }

    function handleClick() {
        navigate('/')
    }

    useEffect(() => {
        window.addEventListener('wheel', (e) => {
            handleScroll(e)
        })
    })

    const mouseLeave = () => {
        setBtnBG(false)
    }
    const mouseEnter = () => {
        setBtnBG(true)
    }
    const languagesElements = data.languagesList.map(lang => {
        return lang !== props.lang ?
            <li
                key={lang}
                className="dropdownContent"
                onClick={(e) => props.languageSetter(e.target.innerText)}
            >
                {lang}
            </li> :
            null
    })

    return (
        <>
            <header className='header'>
                <div className="logo-title" onClick={handleClick}>
                    <div className="logo">
                        <img src="./logo.png" alt="logo" />
                    </div>
                    <h1 className="title">{data[props.lang].title}</h1>
                </div>

                <ul className="pages">
                    {pages}
                </ul>
                <ul className='languageDropdown'>
                    <li
                        className='currentLanguage'
                        onClick={(e) => props.languageSetter(e.target.innerText)}
                        style={{ backgroundColor: btnBG ? "#306EF7" : "#306EF7" }}
                    >
                        {props.lang}
                    </li>
                    <ul className="langWrapper" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        {languagesElements}
                    </ul>
                </ul>
            </header>
            {props.children}
        </>
    );
}

export default Header;
