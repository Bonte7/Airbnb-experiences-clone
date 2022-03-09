import React from 'react';
import Card from './Card';
import experiences from './experienceData';

/*this is the experiences section that holds all the card components 
in a row and displays the props of each card component*/

function Experiences() {



    return (
        <div className="experiences">
            {experiences.map(experience => 
            <Card 
                key={experience.id}
                experience={experience}
            />)}
        </div>
    );
}

export default Experiences;