import React from "react";
import {Helmet} from "react-helmet";
import Config from "../config.json";

const TITLE = "Products | " + Config.SITE_TITLE;
const DESCRIPTION = "A description of my products.";

class Products extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <meta name="description" content={DESCRIPTION}/>
                    <meta name="theme-color" content={Config.THEME_COLOR}/>
                </Helmet>

                <div className="maintext">
                    <h1>Tjänster</h1>
                    <p className="textBox">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Fugiat ratione vero ipsa praesentium facilis exercitationem molestiae voluptate, modi ad perferendis 
                    provident cum dolore tempora veniam placeat harum at maxime delectus? Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Nostrum mollitia eum, perferendis harum voluptates labore reiciendis 
                    minima sequi distinctio provident, id rem corporis esse, praesentium ut quod nisi facilis consequatur.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sit distinctio, 
                    velit voluptate facere facilis quae dolorem ullam impedit quidem at beatae laudantium 
                    veniam perspiciatis provident mollitia atque, alias voluptas.
                    </p>

        
                    <h2>Klassisk Massage</h2>
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


                    <h2>Advancerad Massage</h2>
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

                    <h2 className="newpage">Personlig Träning</h2>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Fugiat ratione vero ipsa praesentium facilis exercitationem molestiae voluptate, modi ad perferendis 
                    provident cum dolore tempora veniam placeat harum at maxime delectus? Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Nostrum mollitia eum, perferendis harum voluptates labore reiciendis 
                    minima sequi distinctio provident, id rem corporis esse, praesentium ut quod nisi facilis consequatur.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sit distinctio, 
                    velit voluptate facere facilis quae dolorem ullam impedit quidem at beatae laudantium 
                    veniam perspiciatis provident mollitia atque, alias voluptas.

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Fugiat ratione vero ipsa praesentium facilis exercitationem molestiae voluptate, modi ad perferendis 
                    provident cum dolore tempora veniam placeat harum at maxime delectus? Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Nostrum mollitia eum, perferendis harum voluptates labore reiciendis 
                    minima sequi distinctio provident, id rem corporis esse, praesentium ut quod nisi facilis consequatur.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sit distinctio, 
                    velit voluptate facere facilis quae dolorem ullam impedit quidem at beatae laudantium 
                    veniam perspiciatis provident mollitia atque, alias voluptas.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    </p>
                </div>
            </main>
        )
    }
}

export default Products;