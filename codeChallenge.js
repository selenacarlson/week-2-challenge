$( document ).ready(function(){
  $( '#generateButton' ).on('click', function(){
    console.log('in generateButton');
    $( 'body' ).append( '<div></div>' );
  })


})
