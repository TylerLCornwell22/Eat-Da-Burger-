// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
    // // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("DELETE BURGER WITH ID: ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newdevoured = $(this).data("newdevoured");

    var newdevouredstate = {
      devoured: newdevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevouredstate
    }).then(
      function() {
        console.log("changed devoured to", newdevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      burger_name: $("#burger").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
