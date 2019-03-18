$(document).ready(function(){
    // Once you've found the current user's most compatible friend, display the result as a modal pop-up.
    $('#submitButton').on('click', function(event) {
        event.preventDefault();

        var form = $('#form');
        
        var formData = form.serialize();
        
        // Submit the form using AJAX
        $.ajax({
            type: 'POST',
            url: `/api/friends?${formData}`
        }).done(function(response) {
            // Server should respond with the best match
            console.log(response);
            
            // TODO:The modal should display both the name and picture of the closest match.
            
            $('#bestMatch').addClass('is-active');
            
            // TODO: Clear the form
            $('input[name=answer1]').attr('checked',false);
            $('input[name=answer2]').attr('checked',false);
            $('input[name=answer3]').attr('checked',false);
            $('input[name=answer4]').attr('checked',false);
            $('input[name=answer5]').attr('checked',false);
            $('input[name=answer6]').attr('checked',false);
            $('input[name=answer7]').attr('checked',false);
            $('input[name=answer8]').attr('checked',false);
            $('input[name=answer9]').attr('checked',false);
            $('input[name=answer10]').attr('checked',false);
        });
    });
    
    // Close the modal
    $('.closeModal').on('click', function(event) {
        $('#bestMatch').removeClass('is-active');
    });
});