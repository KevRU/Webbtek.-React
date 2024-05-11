import React from "react";
import {Helmet} from "react-helmet";
import Config from "../config.json";
import RandomQuote from "../components/RandomQuote/RandomQuote";

const TITLE = "Home | " + Config.SITE_TITLE;
const DESCRIPTION = "A professional website.";

class Home extends React.Component{
    render() {
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <meta name="description" content={DESCRIPTION}/>
                    <meta name="theme-color" content={Config.THEME_COLOR}/>
                </Helmet>
                <article className="maintext">
                    <h1>Välkommen!</h1>
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
            
                    <h2>Hälsan är viktig!</h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Fugiat ratione vero ipsa praesentium facilis exercitationem molestiae voluptate, modi ad perferendis 
                    provident cum dolore tempora veniam placeat harum at maxime delectus? Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Nostrum mollitia eum, perferendis harum voluptates labore reiciendis 
                    minima sequi distinctio provident, id rem corporis esse, praesentium ut quod nisi facilis consequatur.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sit distinctio, 
                    velit voluptate facere facilis quae dolorem ullam impedit quidem at beatae laudantium 
                    veniam perspiciatis provident mollitia atque, alias voluptas.

                    <h2>Forskning</h2>
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
                </article>
        
                <div className="wrapper">
                    <header className="columnHeader">
                        <h2>Quick links</h2>
                    </header>
                    <section className="columns">
                        <div className="column" onclick = "location.href='products.html';" onmouseover="mOver(this)" onmouseout="mOut(this)">
                            <h3>Products</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae a omnis aut nulla ex. 
                            Pariatur animi commodi minima! Illo quae qui dolores sit repellendus vero natus tempore distinctio temporibus nulla. . . </p>
                        </div>

                        <div className="column" onclick = "location.href='prices.html';" onmouseover="mOver(this)" onmouseout="mOut(this)">
                            <h3>Prices</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae a omnis aut nulla ex. 
                            Pariatur animi commodi minima! Illo quae qui dolores sit repellendus vero natus tempore distinctio temporibus nulla. . . </p>
                        </div>

                        <div className="column" onclick = "location.href='contact.html';" onmouseover="mOver(this)" onmouseout="mOut(this)">
                            <h3>Contact</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae a omnis aut nulla ex. 
                            Pariatur animi commodi minima! Illo quae qui dolores sit repellendus vero natus tempore distinctio temporibus nulla. . . </p>
                        </div>
                    </section>
                </div>
                <div className="QuoteDivBox">
                    <div>
                        <RandomQuote/>
                    </div>

                </div>
            </main> 
        );
    }
}

export default Home;