$( document ).ready(function(){
  var count = 0;
  $( '#generateButton' ).on('click', function(){
    console.log('in generateButton');
    count ++
    $( 'body' ).append( "<div class='addedDiv'> <p>" + count + " <button id=swapButton>Swap</button> <button id=deleteButton>Delete</button> </p> </div>" );

  }) // end generateButton

$( 'body' ).on('click', '#swapButton', function(){
    console.log('in swapButton');
    $( this ).parent().toggleClass( 'swap' );

})

$( 'body' ).on('click', '#deleteButton', function(){
    console.log('in deleteButton');
    $( this ).parent().remove();
})


}) // end doc ready
