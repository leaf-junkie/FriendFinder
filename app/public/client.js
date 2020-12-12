$(document).ready(function(){

    // Purpose: Grabs the name that the user entered into the welcome modal
    //          and stores it in local storage. This is sort of a proxy for
    //          authentication and allows the profile page to be customized. 
    function getName() {
        // if there is a name continue, else display error msg to user
        if ($("#welcomeModal .nameField input").val()) {

            // Close the modal
            $("#welcomeModal").removeClass("is-active");
        }
        else {
            alert("Please enter your name to continue");
        }
    }

    // Purpose: Event listener for the submit button on the welcome modal.
    $(".submitNameBtn").on("click", function(event) {
        event.preventDefault();        
        getName();
    });


    // ----------------------------------------------------------------------------
    // Once you've found the current user's most compatible friend, 
    // display the result as a modal pop-up.
    document.getElementsByClassName("radio").required = true;

    $("#submitButton").on("click", function(event) {
        event.preventDefault();

        const form = $("#form");
        const formData = form.serialize();
        
        // Submit the form using AJAX
        $.ajax({
            type: "POST",
            url: `/api/friends?${formData}`
        }).done(function(response) {            
            // Modal: Display the picture, name, and bio of the closest match
            $(".bmPic").append(`<img src=${response.photo}>`);
            $(".bmName").append(response.name);
            $(".bmBio").append(response.bio);
            $("#bestMatch").addClass("is-active");
        });
    });
    
    $(".closeModal").on("click", function(event) {
        
        // Clear the form
        $("input[type='radio']").prop("checked", false);
        
        // Clear the previous match
        $(".bmPic").empty();
        $(".bmName").empty();
        $(".bmBio").empty();
        
        // Close the modal
        $("#bestMatch").removeClass("is-active");
    });

});