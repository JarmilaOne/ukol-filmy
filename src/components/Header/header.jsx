import React from "react";
import './style.css';


const Header = ({camera,title}) => { return (
    
    <header className="header">
       
        <h1 className="header__title">
            <img className="logo" src={camera} alt="Logo" />
            {title}
        </h1>
    </header>

    )
};

export default Header;