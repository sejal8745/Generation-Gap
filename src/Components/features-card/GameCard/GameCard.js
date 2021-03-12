import React from 'react'
import "./GameCard.css"
function GameCard({imageUrl,name, description}) {
    return (
        <div class="card">

        <img src={imageUrl} alt=" " />

        <div class="container">
          <h4><b>{name}</b></h4> 
          <p>{description}</p> 
        </div>
      </div>
    )
}

export default GameCard;
