import React from "react";
import {Helmet} from "react-helmet";
import Config from "../config.json";

const TITLE = "About | " + Config.SITE_TITLE;
const DESCRIPTION = "A page about me and who I am.";

class About extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <meta name="description" content={DESCRIPTION}/>
                    <meta name="theme-color" content={Config.THEME_COLOR}/>
                </Helmet>

            <div className="maintext">
                <h1>Om mig</h1>
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
                <br />
                
                <h2>Utbildning</h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Fugiat ratione vero ipsa praesentium facilis exercitationem molestiae voluptate, modi ad perferendis 
                provident cum dolore tempora veniam placeat harum at maxime delectus? Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Nostrum mollitia eum, perferendis harum voluptates labore reiciendis 
                minima sequi distinctio provident, id rem corporis esse, praesentium ut quod nisi facilis consequatur.
                <br />
    
                <h2>VM-Guldet</h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Fugiat ratione vero ipsa praesentium facilis exercitationem molestiae voluptate, modi ad perferendis 
                provident cum dolore tempora veniam placeat harum at maxime delectus? Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Nostrum mollitia eum, perferendis harum voluptates labore reiciendis 
                minima sequi distinctio provident, id rem corporis esse, praesentium ut quod nisi facilis consequatur.

                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Fugiat ratione vero ipsa praesentium facilis exercitationem molestiae voluptate, modi ad perferendis 
                provident cum dolore tempora veniam placeat harum at maxime delectus? Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Nostrum mollitia eum, perferendis harum voluptates labore reiciendis 
                minima sequi distinctio provident, id rem corporis esse, praesentium ut quod nisi facilis consequatur.
            </div>
            <div className="googleMaps">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d822.2093987540776!2d18.720349251695506!3d63.291158959034995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467b57f6a7d04a21%3A0x51d82aa12e25c2de!2sCina&#39;s%20H%C3%A4lsocenter!5e0!3m2!1ssv!2sfi!4v1715337005981!5m2!1ssv!2sfi" 
            title="GOOGLEMAPS"
            width="600" 
            height="450" 
            style={{ border: "0"}} 
            allowfullscreen="" 
            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </main>
        )
    }
}

export default About;