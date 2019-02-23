$(function() {
    $(".createOne-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
        // Create the new burger object that will be 
      var newBurger = {
        burger_name: $("#new_burger").val().trim(),
        devoured: 0
      };
   
      // Send the POST request for newburger

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      });
    });

  $(".eatburger").on("click", function(event) {
    var id = $(this).data("id");

    // set the new devoured state
    var newDevouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      location.reload();
    });
  });

  
});
