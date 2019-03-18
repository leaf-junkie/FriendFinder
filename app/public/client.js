$(document).ready(function(){
    // Once you've found the current user's most compatible 
    // friend, display the result as a modal pop-up.

    $('#submitButton').on('click', function(event) {
        $('#bestMatch').addClass('is-active');
    });

    // The modal should display both the name and picture 
    // of the closest match.


// Tally up responses from survey
// function computeScore() {
//     let score = 0;
//     for (q = 0; q = 10; q++) {
//         if ($('.opt1').click()) {
//             score += 1;
//         } else if ($('.opt2').click()) {
//             score +=2;
//         } else if ($('.opt3').click()) {
//             score += 3;
//         } else if ($('.opt4').click()) {
//             score += 4;
//         } else ($('.opt5').click()) {
//             score += 5;
//         }
//     }
//     console.log(`Your score: ${score}`);
// }
// computeScore();


});                