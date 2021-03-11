import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import OP from "../../Assets/OP.png";


const Home = () => {
    return (
        <div className="Home">
            <div className="HomeCard">
                <div className="CardHeader">
                    <div className="HomeHeader">

                        <div className="Navbar">
                            <div className="Navbarleft">
                                <Link to='/home' activeStyle>
                                    <img className="Logo" alt="/" />
                                </Link>
                                <Link to='/home' activeStyle>
                                    <h3>Generation Gap</h3>
                                </Link>
                            </div>
                            <div className="Navbarright">

                                <Link to='/home' activeStyle>
                                    Home
                            </Link>
                                <Link to='/about' activeStyle>
                                    About Us
                            </Link>
                                <Link to='/theme' activeStyle>
                                    Theme
                            </Link>
                                <Link to='/language' activeStyle>
                                    Language
                             </Link>
                            </div>

                        </div>
                    </div>
                    <div className="HomeBody">
                        <div className="Contentleft">
                            <p>Every Generation needs Regeneration!</p>
                        </div>
                        <div className="Image">
                            <img className="Img" src={OP} alt="OP" />
                        </div>
                        <div className="Contentright">
                            <p>Technical ability is also important.<br></br> How technology affects the generation gap<br></br> is impacted by how well older people <br></br>can learn and
                    use new technology. This tends to be
                    written by Millennials <br></br>for the younger generation,<br></br> so many older people can become <br></br>left behind when things move too fast.</p>
                        </div>
                    </div>
                </div>
                <div className="CardFooter">
                    <div className="HomeFooter">
                        <p>dsjhudhgidkhsmnkefnnnnnnnnnn</p>
                        <p>dsjhudhgidkhsmnkefnnnnnnnnnn</p>
                        <p>dsjhudhgidkhsmnkefnnnnnnnnnn</p>
                        <p>dsjhudhgidkhsmnkefnnnnnnnnnn</p>
                        <p>dsjhudhgidkhsmnkefnnnnnnnnnn</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;

