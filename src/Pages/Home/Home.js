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
                        <p>dbfhdjfjsq</p>
                    </div>
                    <div className="HomeBody">
                        <img className="Img" src={OP} alt="OP" />
                    </div>
                </div>
                <div className="CardFooter">
                    <div className="HomeFooter">
                        <p>dsjhudhgidkhsmnkefnnnnnnnnnn</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;

