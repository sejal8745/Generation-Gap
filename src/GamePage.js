// import React from 'react'
// import "./GamePage.css"
// import Slider from "react-slick";
// //9import "slick-carousel/slick/slick.css";
// //import "slick-carousel/slick/slick-theme.css";
// import GameCard from './Components/features-card/GameCard/GameCard';
// function GamePage() {
//     var settings={
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         variableWidth: 25 ,
//         slidesToScroll: 1,
//     }
//     return(
//     <div>
//         <Slider {...settings}>
//             <div>
//                 <GameCard imageUrl="https://static.billboard.com/files/media/humpty-dumpty-song-vid-still-2017-billboard-1548-compressed.jpg" description=" Hello
//                 " name="abc"/>
//             </div>
//             <div>
//                 <GameCard imageUrl="https://static.billboard.com/files/media/humpty-dumpty-song-vid-still-2017-billboard-1548-compressed.jpg" description=" Hello
//                 "name="abc"/>
//             </div>
//             <div>
//                 <GameCard imageUrl="https://static.billboard.com/files/media/humpty-dumpty-song-vid-still-2017-billboard-1548-compressed.jpg" description=" Hello
//                 "name="abc"/>
//             </div>
//             <div>
//                 <GameCard imageUrl="https://static.billboard.com/files/media/humpty-dumpty-song-vid-still-2017-billboard-1548-compressed.jpg" description=" Hello
//                 "name="abc"/>
//             </div>
//             <div>
//                 <GameCard imageUrl="https://static.billboard.com/files/media/humpty-dumpty-song-vid-still-2017-billboard-1548-compressed.jpg" description="hello
//                 "name="abc"/>
//             </div>
//             <div>
//                 <GameCard imageUrl="https://static.billboard.com/files/media/humpty-dumpty-song-vid-still-2017-billboard-1548-compressed.jpg" description=" Hello
//                 "name="abc"/>
//             </div>
//             <div>
//                 <GameCard imageUrl="https://static.billboard.com/files/media/humpty-dumpty-song-vid-still-2017-billboard-1548-compressed.jpg" description=" Hello
//                 "name="abc"/>
//             </div>
//             <div>
//                 <GameCard imageUrl="https://static.billboard.com/files/media/humpty-dumpty-song-vid-still-2017-billboard-1548-compressed.jpg" description=" Hello  " name="abc"/>
//             </div>
//             <div>
//                 <GameCard imageUrl="https://static.billboard.com/files/media/humpty-dumpty-song-vid-still-2017-billboard-1548-compressed.jpg" description=" Hello   " name="abc"/>
//             </div>
//         </Slider>
//     </div>
//     )
// }

import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function GamePage() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="GamePage">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </>
  );
}
export default GamePage;