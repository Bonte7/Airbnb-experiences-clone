import React from 'react';
import star from '../images/Star.png';

//the card component is determining how and what is being displayed in the experiences section
function Card(props) {

    let badgeText;
    let badge;
    if (props.experience.openSpots === 0) {
        badgeText = "SOLD OUT";
        badge = <div className="card-badge">{badgeText}</div>
    } else if(props.experience.region === "Online") {
        badgeText = "ONLINE";
        badge = <div className="card-badge">{badgeText}</div>
    }

    return (

            <div className="card">
                
                <img className="card-img" src={props.experience.imageURL} alt=""></img>
                {badge}
                <div className="card-review">
                    <img className="card-star" src={star} alt=""></img>
                    <span>{props.experience.reviewStars}</span>
                    <span className="gray">({props.experience.reviewsTotal}) • </span>
                    <span className="gray">{props.experience.region}</span>
                </div>
                <p>{props.experience.description}</p>
                <p><b>From ${props.experience.price}</b> / person</p>
                
            </div>

    )
}

export default Card;