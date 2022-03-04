import React from 'react';
import Card from './Card';

function Experiences() {

    const experiences = [
        {
            id: Math.random().toString(),
            imageURL: require('../images/Katie.png'),
            description: "Life lessons with Katie Zaferes",
            price: "136",
            reviewStars: "5.0",
            reviewsTotal: "6",
            region: "USA"
        },
        {
            id: Math.random().toString(),
            imageURL: require('../images/wedding-photography.png'),
            description: "Learn wedding photography",
            price: "125",
            reviewStars: "5.0",
            reviewsTotal: "30",
            region: "USA"
        },
        {
            id: Math.random().toString(),
            imageURL: require('../images/mountain-bike.png'),
            description: "Group Mountain Biking",
            price: "50",
            reviewStars: "4.8",
            reviewsTotal: "2",
            region: "USA"
        }
    ];

    return (
        <div className="experiences">
            {experiences.map(experience => 
            <Card 
                key={experience.id}
                img={experience.imageURL}
                review={experience.reviewStars}
                reviewTotal={experience.reviewsTotal}
                region={experience.region}
                desc={experience.description}
                price={experience.price}
            />)}
        </div>
    );
}

export default Experiences;