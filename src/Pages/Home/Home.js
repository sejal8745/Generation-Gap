import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import OP1 from "../../Assets/OP1.png"; 
import Card from "../../Components/features-card/Card"
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import NoteIcon from '@material-ui/icons/Note';
import TvIcon from '@material-ui/icons/Tv';
import Button from "../../Components/Button/Button";
import { auth, provider } from '../../firebase';

const Home = () => {
    const login= ()=>{
        auth.signInWithPopup(provider).catch((e)=>{alert(e.message)});
      };
    return (
        <div className="Home">
        <p>theme</p>
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
                                <Link to='/blog' activeStyle>
                                    Blogs
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
                            <Button 
                                buttonName="tour"
                                label="Take a Tour"
                            />
                            <div  onClick={login}>
                            <Button 
                                buttonName="tour"
                                label="SignIn"
                            />
                            </div>
                           
                        </div>
                        <div className="Image">
                            <img className="Img" src={OP1} alt="OP" />
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
                        <Card 
                         icon={< PhoneInTalkIcon/>}
                          title="Talk To Your Friend"
                        />
                        <Card 
                        icon={< NoteIcon/>}
                          title="Note Down"
                        />
                        <Card 
                        icon={< GTranslateIcon/>}
                          title="Find Word"
                        />
                        <Card 
                        icon={< SportsEsportsIcon/>}
                          title="Games"
                        />
                        <Card 
                        icon={< TvIcon/>}
                          title="News"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;

