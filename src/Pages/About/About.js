import React from "react";
import "./About.css";
import sakshi from "../../Assets/sakshi.jpeg";
import github from "../../Assets/github.png";
import gmail from "../../Assets/gmail.png";
import linkedin from "../../Assets/linkedin.png";

function About() {
  return (
    <div className="about">
      <div className="about_header">
        <span className="about_head">About us</span>
      </div>
      <div className="about_desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div className="about_dev">
        <div className="about_title">Meet the Developers behind the idea</div>
        <div className="about_cards">
          <div className="about_profile">
            <img className="profile" src={sakshi} alt="sakshi" />
            <h2 classname="about_info">SEJAL GOYAL <br></br> 2nd Year Student</h2>
            <div className="aboutCard_foot">
              <a href="https://www.linkedin.com/in/sejal-goyal-437015194/">
                {" "}
                <img className="social_icon" src={linkedin} alt="linkedin" />
              </a>
              <a href="https://mail.google.com/mail/u/?authuser=sejalgoyal16@gmail.com">
                {" "}
                <img className="social_icon" src={gmail} alt="gmail" />
              </a>
              <a href="https://github.com/sejal8745">
                {" "}
                <img className="social_icon" src={github} alt="github" />
              </a>
            </div>
          </div>
          <div className="about_profile">
            <img className="profile" src={sakshi} alt="sakshi" />
            <h2 classname="about_info">SAKSHI DHAMIJA <br></br> 2nd Year Student</h2>
            <div className="aboutCard_foot">
              <a href="https://www.linkedin.com/in/s15/">
                {" "}
                <img className="social_icon" src={linkedin} alt="linkedin" />
              </a>
              <a href="https://mail.google.com/mail/u/?authuser=sakshidhamija15@gmail.com">
                {" "}
                <img className="social_icon" src={gmail} alt="gmail" />
              </a>
              <a href="https://github.com/secrashi">
                {" "}
                <img className="social_icon" src={github} alt="github" />
              </a>
            </div>
          </div>
        <div className="about_profile">
          <img className="profile" src={sakshi} alt="sakshi" />
          <h2 classname="about_info">PARUL SURANA <br></br> 2nd Year Student</h2>
          <div className="aboutCard_foot">
            <a href="https://www.linkedin.com/in/parul-surana-ab0044194/">
              {" "}
              <img className="social_icon" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://mail.google.com/mail/u/?authuser=parulsurana28@gmail.com">
              {" "}
              <img className="social_icon" src={gmail} alt="gmail" />
            </a>
            <a href="https://github.com/parulsurana">
              {" "}
              <img className="social_icon" src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default About;
