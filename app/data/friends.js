$(document).ready(function() {

// Array of people objects
let people = [
    {
        name: 'Rufus',
        photo: 'https://www.menshairstylestoday.com/wp-content/uploads/2016/08/Surfer-Hairstyles.jpg',
        scores: [
            5, 5, 5, 5, 1, 1, 1, 1, 5, 5
        ],
        bio: 'Would you rather spend the rest of your life with a sailboat as your home or an RV as your home?'
    },
    {
        name: 'Sebastian',
        photo: 'https://menhairstylist.com/wp-content/uploads/2018/09/dreads-surfer-hair-for-men.jpg',
        scores: [
            3, 3, 3, 4, 4, 3, 3, 3, 4, 4
        ],
        bio: 'You should message me if you’re looking for something serious. I’ve done the short-term dating thing and no knock on it, but it’s not for me. I’m looking for a genuine connection with someone that thinks it’s okay to (occasionally) eat dinner after midnight. Open to dinner suggestions. Wait...this is a dating site, right?'
    },
    {
        name: 'Bella',
        photo: 'https://scontent-ort2-1.cdninstagram.com/vp/685bb7d97659da8f3e9a663d67ab093a/5CC257CF/t51.2885-15/e35/s480x480/46675564_279580189407880_382711991474218886_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com',
        scores: [
            2, 2, 1, 1, 2, 3, 4, 4, 5, 2
        ],
        bio: 'My patronus is a black and white cat. I was hoping for something noble like a lion or stag. Heck, a llama, even. Nope. I got a housecat. If you take the Pottermore quiz and get a dog or a mouse or something like that, feel free to message me. J.K. Rowling is trying to tell us something.'
    },
    {
        name: 'Elizabeth',
        photo: 'https://i.barkpost.com/wp-content/uploads/2015/02/backpack-best-friends-cute-dog-Favim.jpg?q=70&fit=crop&crop=entropy&w=808&h=808',
        scores: [
            2, 3, 1, 3, 3, 2, 1, 1, 2, 4
        ],
        bio: 'Just your friendly neighborhood dog-loving, marathon running, accountant here. That’s me by day, anyway. By nighttime I’m tearing up the dancefloor at your local disco club. (Fair warning: I’m not a good dancer, just full of blind confidence.) You: Prepared to go on spontaneous adventures and luxurious vacations. Must love mountaintops and warm beaches. Sleep is for the weak.'
    },
    {
        name: 'Toby',
        photo: 'https://i.redd.it/nt2y7yso9r511.jpg',
        scores: [
            4, 4, 4, 4, 4, 5, 4, 5, 5, 2
        ],
        bio: 'I could probably beat you at naming Nicolas Cage movies off the top of my head. When I was in 11th grade, I decided I would watch every movie that he’s been in. I did. Mom wasn’t impressed. Message me if you are!'
    },
    {
        name: 'Ingrid',
        photo: 'http://res.cloudinary.com/culturemap-com/image/upload/ar_1:1,c_fill,g_faces:center,w_1200/v1550726940/photos/158851_original.jpg',
        scores: [
            5, 5, 5, 5, 4, 4, 4, 4, 3, 3
        ],
        bio: 'I like offensive jokes and whiskey. I revel in the world’s absurdity. Soundtracks are the fastest way to my little black heart. Voilà, self-summary. The mind reels.'
    },
    {
        name: 'Lola',
        photo: 'https://pixfeeds.com/images/dance/hip-hop/1280-494913736-breakdancer.jpg',
        scores: [
            1, 2, 3, 4, 5, 5, 4, 3, 2, 1
        ],
        bio: 'I haven’t broken a bone in my body. For normal people, that’s a wow. I’m an ex-gymnast and I dance hip-hop, so for me, it’s a miracle. Let’s hope it stays that way *fingers crossed*'
    },
    {
        name: 'Mike',
        photo: 'https://destinyman.com/wp-content/uploads/2018/10/Black-man-office-work-laptop-coffee-millennial-e1475594765295.jpg',
        scores: [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3
        ],
        bio: 'I’m working to be a doctor. As you’ve probably heard, it’s…hard, and I don’t have that much time to commit to friendships right now. That said I’ll be able to save your life one day, so that’s got to be worth something, right?'
    },
    {
        name: 'Johnnie',
        photo: 'https://em.wattpad.com/08419695100b77cccc6a8f47dc044becdf89993d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f30314175367051513734455579673d3d2d34332e313534636262663035663338646239653438313938343834323630372e6a7067?s=fit&w=720&h=720',
        scores: [
            1, 2, 2, 2, 3, 1, 4, 5, 2, 1
        ],
        bio: 'Ladies, if you’re looking for a REAL MAN who will value you for your heart and not your body, your knight in shining armor awaits.'
    },
    {
        name: 'Akiko',
        photo: 'https://i.dawn.com/users/352.jpg?170707124354',
        scores: [
            5, 4, 5, 4, 3, 4, 5, 3, 3, 4
        ],
        bio: 'Fun-loving, funny, passionate and horribly addicted to my guacamole. Seriously. I’ll put avocado on anything. That said I’ll also share it with you, if you’re nice. Weekends are for binging BoJack Horseman reruns, improv, and picnics in the park. Mimosas anyone?'
    },
    {
        name: 'Evan',
        photo: 'data:image/jpeg;base64,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',
        scores: [
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5
        ],
        bio: 'I spend a lot of time thinking about the universe and how small we are in it. I could watch space documentaries for weeks on end—that and listen to Neil Degrasse Tyson’s voice. I feel like I’m smarter listening to anything he narrates. Cosmos and chill?'
    },
    {
        name: 'Rose',
        photo: 'https://i.pinimg.com/originals/c2/88/3c/c2883c53a682dd4fc6201d2f4e4ddc69.jpg',
        scores: [
            5, 5, 5, 5, 5, 4, 4, 4, 4, 4
        ],
        bio: 'The first week after I got my puppy Balto we went to the dog park for the first time. He ran in circles for 10 minutes before tuckering himself out and passing out in my lap belly up. We spent the rest of the day munching on doggie treats and popcorn watching anime. It’s been three years and he’s still my bff, but we’re open to making new friends.'
    }, 
    {
        name: 'Joe',
        photo: 'https://farm1.static.flickr.com/944/42042702411_982456bbff_b.jpg',
        scores: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ],
        bio: 'I offend your morals, yet you still laugh at my jokes, which only serves to fuel your own self-loathing.'
    },
    {
        name: 'Cindi',
        photo: 'https://scontent-lga3-1.cdninstagram.com/vp/f6da95f7541bbaccf9507635c464a317/5CD5AC4B/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/44489550_361870477918928_5652338982243894546_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com',
        scores: [
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2
        ],
        bio: 'Most likely to laugh at inappropriate times. Least likely to pet a dog.'
    },
    {
        name: 'Hassan',
        photo: 'https://static1.squarespace.com/static/5494869be4b0f360e1b79f89/t/558c872de4b0b067ef50dd65/1435273007607/',
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

// Tally up responses from survey
function computeScore() {
    let score = 0;
    for (q = 0; q = 10; q++) {
        if ($('.opt1').click()) {
            score += 1;
        } else if ($('.opt2').click()) {
            score +=2;
        } else if ($('.opt3').click()) {
            score += 3;
        } else if ($('.opt4').click()) {
            score += 4;
        } else ($('.opt5').click()) {
            score += 5;
        }
    }
    console.log(`Your score: ${score}`);
}
computeScore();

$('#submitButton').on('click', function(event) {
    $('#bestMatch').addClass('is-active');
});

module.exports = {
    people: people,
    compareScores: compareScores,
    compareAllScores: compareAllScores
};

});