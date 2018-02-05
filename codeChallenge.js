$( document ).ready(function(){
  var count = 0;

$( '#generateButton' ).on('click', function(){
    count ++
    $( 'body' ).append( "<div> <p>" + count + "</br> </br> <button id=swapButton>Swap</button> <button id=deleteButton>Delete</button> </p> </div>" );
  }) // end generateButton

$( 'body' ).on('click', '#swapButton', function(){
    $( this ).parent().toggleClass( 'swap' );
}) // end swapButton

$( 'body' ).on('click', '#deleteButton', function(){
    $( this ).parent().remove();
}) // end deleteButton

}) // end doc ready
