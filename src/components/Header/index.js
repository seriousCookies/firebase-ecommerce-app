import React from 'react'
import './styles.scss';
import logo  from '../../assests/check.png'
const Header = () => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt="Check Logo"/>
                </div>
            </div>
        </header>
    )
}

export default Header;
