//This object is holding our experiences data that we can later use to display

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

export default experiences;