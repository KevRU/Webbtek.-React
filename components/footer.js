import React from "react";


class Footer extends React.Component{
    render(){
        return (
            <footer>
                <div className="footerContainer">
                    <div className="socialIcons">
                        <a href="https://www.facebook.com/profile.php?id=100057452050812&locale=sv_SE" target="_blank" rel="noreferrer" style={{width: 50, height: 50}}><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" style={{width: 50, height: 50}}><i className="fa-brands fa-instagram" ></i></a>
                    </div>
                    <div className="footerNav">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="products">Products</a></li>
                            <li><a href="prices">Prices</a></li>
                            <li><a href="contact">Contact</a></li>
                            <li><a href="about">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footerBottom">
                    <p>Copyright &copy;2024; <span className="designer">Designed by Kevin Ruthström</span></p>
                </div>
            </footer> 
        );
    }
}

export default Footer;