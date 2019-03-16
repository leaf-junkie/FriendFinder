// Array of people objects
let people = [
    {
        name: 'Rufus',
        photo: 'https://via.placeholder.com/250',
        scores: [
            5, 5, 5, 5, 1, 1, 1, 1, 5, 5
        ]
    },
    {
        name: 'Sebastian',
        photo: 'https://via.placeholder.com/250',
        scores: [
            3, 3, 3, 4, 4, 3, 3, 3, 4, 4
        ]
    },
    {
        name: 'Bella',
        photo: 'https://via.placeholder.com/250',
        scores: [
            2, 2, 1, 1, 2, 3, 4, 4, 5, 2
        ]
    },
    {
        name: 'Elizabeth',
        photo: 'https://via.placeholder.com/250',
        scores: [
            2, 3, 1, 3, 3, 2, 1, 1, 2, 4
        ]
    },
    {
        name: 'Toby',
        photo: 'https://via.placeholder.com/250',
        scores: [
            4, 4, 4, 4, 4, 5, 4, 5, 5, 2
        ]
    },
    {
        name: 'Ingrid',
        photo: 'https://via.placeholder.com/250',
        scores: [
            5, 5, 5, 5, 4, 4, 4, 4, 3, 3
        ]
    },
    {
        name: 'Lola',
        photo: 'https://via.placeholder.com/250',
        scores: [
            1, 2, 3, 4, 5, 5, 4, 3, 2, 1
        ]
    },
    {
        name: 'Mike',
        photo: 'https://via.placeholder.com/250',
        scores: [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3
        ]
    },
    {
        name: 'Johnnie',
        photo: 'https://via.placeholder.com/250',
        scores: [
            1, 2, 2, 2, 3, 1, 4, 5, 2, 1
        ]
    },
    {
        name: 'Rose',
        photo: 'https://via.placeholder.com/250',
        scores: [
            5, 4, 5, 4, 3, 4, 5, 3, 3, 4
        ]
    }
];

// calculate difference between scores
function compareScores(person1, person2) {
    let totalDifference = 0;
    for(p = 0; p < 10; p++) {
        let difference = Math.abs(person1.scores[p] - person2.scores[p]);
        totalDifference += difference;
        console.log(totalDifference);
    }
}

// compare scores of one person to all other people
function compareAllScores() {
    let minDifference = 0;
    let friend = people[j];
    for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < people.length; j++) {
            // prevent people from being compared to themselves
            if (i != j) {
                compareScores(people[i], people[j]);
            }
        }
        // The closest match will be the user with the least amount of difference.
        if (difference >= minDifference) {
            minDifference = this.difference;
            console.log(minDifference);
        }
    }
}

// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.