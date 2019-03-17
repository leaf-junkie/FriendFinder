// Array of people objects
let people = [
    {
        name: 'Rufus',
        photo: 'https://via.placeholder.com/250',
        scores: [
            5, 5, 5, 5, 1, 1, 1, 1, 5, 5
        ],
        bio: 'Would you rather spend the rest of your life with a sailboat as your home or an RV as your home?'
    },
    {
        name: 'Sebastian',
        photo: 'https://via.placeholder.com/250',
        scores: [
            3, 3, 3, 4, 4, 3, 3, 3, 4, 4
        ],
        bio: 'You should message me if you’re looking for something serious. I’ve done the short-term dating thing and no knock on it, but it’s not for me. I’m looking for a genuine connection with someone that thinks it’s okay to (occasionally) eat dinner after midnight. Open to dinner suggestions. Wait...this is a dating site, right?'
    },
    {
        name: 'Bella',
        photo: 'https://via.placeholder.com/250',
        scores: [
            2, 2, 1, 1, 2, 3, 4, 4, 5, 2
        ],
        bio: 'My patronus is a black and white cat. I was hoping for something noble like a lion or stag. Heck, a llama, even. Nope. I got a housecat. If you take the Pottermore quiz and get a dog or a mouse or something like that, feel free to message me. J.K. Rowling is trying to tell us something.'
    },
    {
        name: 'Elizabeth',
        photo: 'https://via.placeholder.com/250',
        scores: [
            2, 3, 1, 3, 3, 2, 1, 1, 2, 4
        ],
        bio: 'Just your friendly neighborhood dog-loving, marathon running, accountant here. That’s me by day, anyway. By nighttime I’m tearing up the dancefloor at your local disco club. (Fair warning: I’m not a good dancer, just full of blind confidence.) You: Prepared to go on spontaneous adventures and luxurious vacations. Must love mountaintops and warm beaches. Sleep is for the weak.'
    },
    {
        name: 'Toby',
        photo: 'https://via.placeholder.com/250',
        scores: [
            4, 4, 4, 4, 4, 5, 4, 5, 5, 2
        ],
        bio: 'I could probably beat you at naming Nicolas Cage movies off the top of my head. When I was in 11th grade, I decided I would watch every movie that he’s been in. I did. Mom wasn’t impressed. Message me if you are!'
    },
    {
        name: 'Ingrid',
        photo: 'https://via.placeholder.com/250',
        scores: [
            5, 5, 5, 5, 4, 4, 4, 4, 3, 3
        ],
        bio: 'I like offensive jokes and whiskey. I revel in the world’s absurdity. Soundtracks are the fastest way to my little black heart. Voilà, self-summary. The mind reels.'
    },
    {
        name: 'Lola',
        photo: 'https://via.placeholder.com/250',
        scores: [
            1, 2, 3, 4, 5, 5, 4, 3, 2, 1
        ],
        bio: 'I haven’t broken a bone in my body. For normal people, that’s a wow. I’m an ex-gymnast and I dance hip-hop, so for me, it’s a miracle. Let’s hope it stays that way *fingers crossed*'
    },
    {
        name: 'Mike',
        photo: 'https://via.placeholder.com/250',
        scores: [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3
        ],
        bio: 'I’m working to be a doctor. As you’ve probably heard, it’s…hard, and I don’t have that much time to commit to friendships right now. That said I’ll be able to save your life one day, so that’s got to be worth something, right?'
    },
    {
        name: 'Johnnie',
        photo: 'https://via.placeholder.com/250',
        scores: [
            1, 2, 2, 2, 3, 1, 4, 5, 2, 1
        ],
        bio: 'Ladies, if you’re looking for a REAL MAN who will value you for your heart and not your body, your knight in shining armor awaits.'
    },
    {
        name: 'Rose',
        photo: 'https://via.placeholder.com/250',
        scores: [
            5, 4, 5, 4, 3, 4, 5, 3, 3, 4
        ],
        bio: 'Fun-loving, funny, passionate and horribly addicted to my guacamole. Seriously. I’ll put avocado on anything. That said I’ll also share it with you, if you’re nice. Weekends are for binging BoJack Horseman reruns, improv, and picnics in the park. Mimosas anyone?'
    },
    {
        name: 'Evan',
        photo: '',
        scores: [
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5
        ],
        bio: 'I spend a lot of time thinking about the universe and how small we are in it. I could watch space documentaries for weeks on end—that and listen to Neil Degrasse Tyson’s voice. I feel like I’m smarter listening to anything he narrates. Cosmos and chill?'
    },
    {
        name: 'Akiko',
        photo: '',
        scores: [
            5, 5, 5, 5, 5, 4, 4, 4, 4, 4
        ],
        bio: 'The first week after I got my puppy Balto we went to the dog park for the first time. He ran in circles for 10 minutes before tuckering himself out and passing out in my lap belly up. We spent the rest of the day munching on doggie treats and popcorn watching anime. It’s been three years and he’s still my bff, but we’re open to making new friends.'
    }, 
    {
        name: 'Joe',
        photo: 'I offend your morals, yet you still laugh at my jokes, which only serves to fuel your own self-loathing.',
        scores: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ],
        bio: ''
    },
    {
        name: 'Cindi',
        photo: '',
        scores: [
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2
        ],
        bio: 'Most likely to laugh at inappropriate times. Least likely to pet a dog.'
    },
    {
        name: 'Hassan',
        photo: '',
        scores: [
            4, 3, 4, 3, 4, 5, 3, 2, 1, 1
        ],
        bio: 'Lost my watch at a party once. Saw a guy stepping on it while sexually harassing a girl. I walked up to the dude, punched him straight in the nose. No one does that to a girl, not on my watch.'
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

// Initialize mobile collapse button
$(document).ready(function(){
    $('.sidenav').sidenav();
});

// Initialize modal
$(document).ready(function(){
    $('.modal').modal();
});
      

module.exports = {
    people: people,
    compareScores: compareScores,
    compareAllScores: compareAllScores
};