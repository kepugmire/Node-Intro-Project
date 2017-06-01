var user = {
    name: 'Kellen',
    location: 'Provo',
    occupations: ["Hot-dog Eating Champion", "Penny Collector"],
    hobbies: [
        {
            name: 'Netflix',
            type: 'always'
        },
        {
            name: 'Xbox',
            type: 'sometimes'
        },
        {
            name: 'Sleeping',
            type: 'when possible'
        }
    ],
    family: [
        {
            name: 'Annie',
            relation: 'wife',
            gender: 'female'
        },
        {
            name: 'Sloan',
            relation: 'daughter',
            gender: 'female'
        }, {
            name: 'Penny',
            relation: 'dog',
            gender: 'female'
        }
    ],
    restaurants: [
        {
            name: 'Five Guys',
            type: 'burgers',
            rating: 9
        },
        {
            name: 'Chinese Gourmet, Delux Buffet',
            type: 'buffet',
            rating: 3
        },
        {
            name: 'Betos',
            type: 'Mexican',
            rating: 7
        }
    ]
};
module.exports = user;
