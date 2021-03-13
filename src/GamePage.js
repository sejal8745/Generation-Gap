import React from "react";

import Carousel from "react-elastic-carousel";

import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function GamePage() {
  return (
    <>

      <div className="GamePage">
        <Carousel breakPoints={breakPoints}>
           <div className="item">
               <img src="https://images-na.ssl-images-amazon.com/images/I/51qnJzfHgZL.png" alt=" "/>
            <div>
              2048 Game
            </div>
           </div>
           <div className="item">
             <img src="data:image/png;base64,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" alt=""/>
             <div>
               Sudoku
             </div>
           </div>
           <div className="item">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QnLVEC95bHycezHeSEDNc0nBSidbe-msZA&usqp=CAU" alt=" "/>
             <div>
               Chinese Checker
             </div>
           </div>
           <div className="item">
             <div>
               hello
             </div>
    
           </div>
           <div className="item">
             hii
           </div>
           <div className="item">
             hii
           </div>
        </Carousel>
      </div>
    </>
  );
}
export default GamePage;