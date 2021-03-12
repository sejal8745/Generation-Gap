import { Search } from '@material-ui/icons'
import React from 'react'
import "./Card.css"
function Card({title,icon}) {
    return (
        <div className="card-container">
        <div className="icon">
           {icon}
        </div>
        <div className="card_title">
            <h2>{title}</h2>
        </div>
    </div>
    );
}

export default Card;