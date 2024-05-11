import React from "react";
import {Helmet} from "react-helmet";
import Config from "../config.json";

const TITLE = "Prices | " + Config.SITE_TITLE;
const DESCRIPTION = "A description of my products.";

class Prices extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <meta name="description" content={DESCRIPTION}/>
                    <meta name="theme-color" content={Config.THEME_COLOR}/>
                </Helmet>

                <div className="maintext">
                    <h1>Priser</h1>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Fugiat ratione vero ipsa praesentium facilis exercitationem molestiae voluptate, modi ad perferendis 
                    provident cum dolore tempora veniam placeat harum at maxime delectus? Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    </p>

                    <h2>Massage</h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Fugiat ratione vero ipsa praesentium facilis exercitationem molestiae voluptate, modi ad perferendis 
                    provident cum dolore tempora veniam placeat harum at maxime delectus? Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Nostrum mollitia eum, perferendis harum voluptates labore reiciendis 
                    minima sequi distinctio provident, id rem corporis esse, praesentium ut quod nisi facilis consequatur.

                    <table className="massagepricetable">
                        <thead>
                            <tr>
                                <th colspan="4">Taktilsimulering</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tid</td>
                                <td>30 min</td>
                                <td>45 min</td>
                                <td>60 min</td>
                            </tr>
                            <tr>
                                <td>Pris</td>
                                <td>500 kr</td>
                                <td>690 kr</td>
                                <td>740 kr</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th colspan="4">Klassisk Massage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tid</td>
                                <td>30 min</td>
                                <td>45 min</td>
                                <td>60 min</td>
                            </tr>
                            <tr>
                                <td>Pris</td>
                                <td>500 kr</td>
                                <td>690 kr</td>
                                <td>740 kr</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th colspan="4">Avancerad Massage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tid</td>
                                <td>30 min</td>
                                <td>45 min</td>
                                <td>60 min</td>
                            </tr>
                            <tr>
                                <td>Pris</td>
                                <td>730 kr</td>
                                <td>940 kr</td>
                                <td>1100 kr</td>
                            </tr>
                        </tbody>
                    </table>
            
                    <h2 className="newpage">Personlig Träning</h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Fugiat ratione vero ipsa praesentium facilis exercitationem molestiae voluptate, modi ad perferendis 
                    provident cum dolore tempora veniam placeat harum at maxime delectus? Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Nostrum mollitia eum, perferendis harum voluptates labore reiciendis 
                    minima sequi distinctio provident, id rem corporis esse, praesentium ut quod nisi facilis consequatur.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.

                    <table className="massagepricetable">
                        <thead>
                            <tr>
                                <th colspan="4">Coaching</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tid</td>
                                <td>30 min</td>
                                <td>45 min</td>
                                <td>60 min</td>
                            </tr>
                            <tr>
                                <td>Pris</td>
                                <td>500 kr</td>
                                <td>750 kr</td>
                                <td>1000 kr</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        )
    }
}

export default Prices;