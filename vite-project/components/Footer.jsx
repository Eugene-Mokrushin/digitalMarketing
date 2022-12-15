import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from '../data/footer'
import '../css/footer.css'

const Footer = (props) => {
    let navigate = useNavigate();
    const links = data[props.lang].links.map((link, index) => {
        return (
            <li className='link' key={link + ' ' + index}>
                <Link to={data.paths[index]} className='a'>
                    {link}
                </Link>
            </li>
        )
    })

    
    function handleClick() {
        navigate('/')
    }

    return (
        <>
            {props.children}
            <footer className='footer'>
                <div className="logoEmail">
                    <div className="logoTitle" onClick={handleClick} >
                        <img src="./logo.png" alt="logo" />
                        <div className="title">LevelUp!</div>
                    </div>
                    <div className="email"><a href="mailto:info@lvlup.com">info@lvlup.com</a></div>
                </div>
                <ul className="menu">
                    {links}
                </ul>
            </footer>
        </>
    );
}

export default Footer;
