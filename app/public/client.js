$(document).ready(function(){
    // Once you've found the current user's most compatible friend, display the result as a modal pop-up.
    // The modal should display both the name and picture of the closest match.
    
    $('#submitButton').on('click', function(event) {
        event.preventDefault();

        $('#bestMatch').addClass('is-active');
        $(function() {
            // Set up an event listener for the contact form
            $(form).submit(function(event) {
    
                // Get the form
                var form = $('#form');
                var formData = form.serialize();
            
                // Submit the form using AJAX
                $.ajax({
                    type: 'POST',
                    url: `/api/friends?${formData}`
                }).done(function(response) {
                    // Server should respond with best match
                    console.log(response);
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                
                    // Set the message text.
                    $(formMessages).text(response);
                
                    // Clear the form.
                    $('.opt1').val('');
                    $('.opt2').val('');
                    $('.opt3.').val('');
                    $('.opt4').val('');
                    $('.opt5.').val('');
                });
            });
        });
    });

    $('.closeModal').on('click', function(event) {
        $('#bestMatch').removeClass('is-active');
    });

    // Tally up responses from survey
    function computeScore() {
        let score = 0;
        for (q = 0; q = 10; q++) {
            switch(score) {
                case $('.opt1'):
                    score += 1;
                    break;
                case $('.opt2'):
                    score += 2;
                    break
                case $('.opt3'):
                    score += 3;
                    break;
                case $('.opt4'):
                    score += 4;
                    break;
                case $('.opt5'):
                    score += 5;
                    break;
            }
        console.log(`Your score: ${score}`);
        }
    }
    computeScore();
});