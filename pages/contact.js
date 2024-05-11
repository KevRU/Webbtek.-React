import React from "react";
import {Helmet} from "react-helmet";
import Config from "../config.json";

import ReCAPTCHA from "react-google-recaptcha";

const TITLE = "Contact | " + Config.SITE_TITLE;
const DESCRIPTION = "A page for contacting me.";

const onChange = () => {};

class Contact extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <meta name="description" content={DESCRIPTION}/>
                    <meta name="theme-color" content={Config.THEME_COLOR}/>
                </Helmet>

            <article className="maintext">
                <h1>Kontakt</h1>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Fugiat ratione vero ipsa praesentium facilis exercitationem molestiae voluptate, modi ad perferendis 
                provident cum dolore tempora veniam placeat harum at maxime delectus? Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Nostrum mollitia eum, perferendis harum voluptates labore reiciendis 
                minima sequi distinctio provident, id rem corporis esse, praesentium ut quod nisi facilis consequatur.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sit distinctio, 
                velit voluptate facere facilis quae dolorem ullam impedit quidem at beatae laudantium 
                veniam perspiciatis provident mollitia atque, alias voluptas.
                </p>
            </article>
            
            <div className="hero">
                <form>
                    <div className="row">
                        <div class="input-group">
                            <input type="text" onfocus="myFocus(this)" onblur="myBlur(this)" id="name" required />
                            <label for="name"><i class="fas fa-user"></i> Your Name</label>
                        </div>
                        <div className="input-group">
                            <input type="text" onfocus="myFocus(this)" onblur="myBlur(this)" id="number" required />
                            <label for="name"><i class="fas fa-phone-square-alt"></i> Number</label>
                        </div>
                    </div>
                    <div className="input-group">
                        <input type="text" onfocus="myFocus(this)" onblur="myBlur(this)" id="email" required />
                        <label for="name"><i class="fas fa-envelope"></i> Email</label>
                    </div>
                    <div className="input-group">
                        <textarea id="message" onfocus="myFocus(this)" onblur="myBlur(this)" required rows="10"></textarea>
                        <label for="message"><i class="fas fa-comments"></i> Your Message</label>
                    </div>
                    <button type="submit"><i class="fas fa-paper-plane"></i> SUBMIT</button>
                </form>
            </div>
            <div className="CAPTCHA">
                    <ReCAPTCHA sitekey="6Lez0dcpAAAAAF1c2cRjZcKqMbthyVBcOS1iznT1" 
                    onChange={onChange}/>
                </div>
        </main>
        )
    }
}

export default Contact;