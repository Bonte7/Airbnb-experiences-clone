import React from 'react';
import star from '../images/Star.png';

//the card component is determining how and what is being displayed in the experiences section
function Card(props) {
    return (

            <div className="card">

                <img className="card-img" src={props.img} alt=""></img>

                <div className="card-review">
                    <img className="card-star" src={star} alt=""></img>
                    <span>{props.review}</span>
                    <span className="gray">({props.reviewTotal}) • </span>
                    <span className="gray">{props.region}</span>
                </div>
                <p>{props.desc}</p>
                <p><b>From ${props.price}</b> / person</p>
                
            </div>

    )
}

export default Card;