var books = [
  { "name": "The Road", "myRating": "9", "deleteRow": "delete"},
  { "name": "A Million Little Pieces", "myRating": "10", "deleteRow": "delete"},
  { "name": "East of Eden", "myRating": "10", "deleteRow": "delete"},
  { "name": "Wild", "myRating": "9", "deleteRow": "delete"},
];

function displayBooks() {
    var tbody = $('#books tbody');
    var props = ["name", "myRating", "deleteRow"];
    $.each(books, function(i, book) {
        var tr = $('<tr>');
        $.each(props, function(i, prop) {
            $('<td>').html(book[prop]).appendTo(tr);  
        });
        tbody.append(tr);
    });  
}

$(document).ready(function(){
    displayBooks();
    $( "#myForm" ).submit(function( event ) {
        var values = {};
        $.each($('#myForm').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });
        books.push(values);
        console.log(books);
        var tbody = $('#books tbody');
        tbody.empty();
        displayBooks();
        event.preventDefault();
    });
});



$(document).ready(function(){
    $("#form").hide();
    $("#hidenseek").click(function(){
        $("#table").hide();
    });
    $("#hidenseek").click(function(){
        $("#form").show();
    });
});

$(document).ready(function(){
    $("#submit").click(function(){
        $("#form").hide();
    });
    $("#submit").click(function(){
        $("#table").show();
    });
});