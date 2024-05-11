import React from "react";

import cinasss from "./cinasss.png";

class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <a href="/"><img src={cinasss} alt="LOGGA" style={{width: 250, height: 75}}/></a>

                <input type="checkbox" id="check"/>
                <label for="check" className="icons">
                    <i className="bx bx-menu" id="menu-icon"></i>
                    <i className="bx bx-x" id="close-icon"></i>
                </label>
        
                <nav className="navbar">
                    <a href="/" style={{"--i":"0"}}>Home</a>
                    <a href="products" style={{"--i":"1"}}>Products</a>
                    <a href="prices" style={{"--i":"2"}}>Prices</a>
                    <a href="contact" style={{"--i":"3"}}>Contact</a>
                    <a href="about" style={{"--i":"4"}}>About me</a>
                </nav>
            </header> 
        );
    }
}

export default Header;