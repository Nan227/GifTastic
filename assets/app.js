var cartoons = ["Mickey mouse ", "Donald Duck ", "Ariel ", "The Lion King "];
    function renderButtons() {
      $("#cartoons-view").empty();

      for (var i = 0; i < cartoons.length; i++) {
        var a = $("<button>");
          // Adding a class
          a.addClass("cartoon");
          // Adding a data-attribute with a value of the cartoon at index i
          a.attr("data-name", cartoons[i]);
          // Providing the button's text 
          a.text(cartoons[i]);
          // Adding the button to the HTML
          $("#cartoons-view").append(a);
        }
      }

      $("#add-cartoon").on("click", function(event) {
        event.preventDefault();

var cartoon = $("#cartoon-input").val().trim();

cartoons.push(cartoon);
$("#cartoon-input").empty();

renderButtons();
});
renderButtons();
   