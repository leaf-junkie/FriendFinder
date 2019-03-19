$(document).ready(function(){
    // Once you've found the current user's most compatible friend, display the result as a modal pop-up.
    $('#submitButton').on('click', function(event) {
        event.preventDefault();

        const form = $('#form');
        
        const formData = form.serialize();
        
        // Submit the form using AJAX
        $.ajax({
            type: 'POST',
            url: `/api/friends?${formData}`
        }).done(function(response) {
            // Server should respond with the best match
            console.log(response);
            
            // Modal: Display the picture, name, and bio of the closest match
            $('.bmPic').append(`<img src=${response.photo}>`);
            $('.bmName').append(response.name);
            $('.bmBio').append(response.bio);
            $('#bestMatch').addClass('is-active');
        });
    });
    
    $('.closeModal').on('click', function(event) {
        // Clear the form
        $('input[type="radio"]').prop('checked', false);
        // Close the modal
        $('#bestMatch').removeClass('is-active');
    });

});