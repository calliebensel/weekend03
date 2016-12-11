console.log( "js ready" );


$( document ).ready( function() {
  console.log( "jq ready" );

$( '#total' ).on( 'click', equalsClicked );

function equalsClicked() {
  var infoObject = {
    x: $( '#numberX' ).val(),
    y: $( '#numberY' ).val(),
    type: $( '.operator' ).val()
  }; // end infoObject
  console.log( "infoObject", infoObject );

  $.ajax({
    type: 'POST',
    url: '/sendData',
    data: infoObject,
    success: function( response ) {
      console.log( 'ajax success', response );
    },
    error: function() {
      console.log( 'ajax error' );
    }
  }); // end ajax call
} // end equalsClicked

}); // end doc ready
