$(document).ready(function(){

    // Purpose: Check for click events on the modal submit button
    $(".submitNameBtn").on("click", function(event) {
        event.preventDefault();        
        getName();
    });

    // Purpose: Check for click events on the navbar burger icon
    $(".navbar-burger").on("click", function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    // Purpose: Grabs the name that the user entered into the welcome modal
    //          and stores it in local storage. This is sort of a proxy for
    //          authentication and allows the profile page to be customized. 
    function getName() {
        if ($("#welcomeModal .nameField input").val()) {
            $("#welcomeModal").removeClass("is-active");
        }
        else {
            alert("Please enter your name to continue");
        }
    }

    // Purpose: Once you've found the current user's most compatible friend, 
    //          display the result as a modal pop-up.
    document.getElementsByClassName("radio").required = true;

    $("#submitButton").on("click", function(event) {
        event.preventDefault();

        const form = $("#form");
        const formData = form.serialize();
        
        // Submit form
        $.ajax({
            type: "POST",
            url: `/api/friends?${formData}`
        }).done(function(response) {            
            // Display picture, name, and bio of closest match
            $(".bmPic").append(`<img src=${response.photo}>`);
            $(".bmName").append(response.name);
            $(".bmBio").append(response.bio);
            $("#bestMatch").addClass("is-active");
        });
    });
    

    // Purpose: Clear form and previous match, close modal
    $(".closeModal").on("click", function(event) {
        $("input[type='radio']").prop("checked", false);
        $(".bmPic").empty();
        $(".bmName").empty();
        $(".bmBio").empty();
        $("#bestMatch").removeClass("is-active");
    });

});