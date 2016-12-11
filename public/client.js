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
  getData();
} // end equalsClicked

var getData = function() {
  console.log( 'GET' );
  $.ajax({
    type: 'GET',
    url: '/returnData',
    success: function(response) {
      console.log('post call', response);

      // display calculation on the DOM
      $( '#outputDiv' ).html('Answer: ' + (response[response.length - 1]).toLocaleString());
    }
  }); // end getData ajax call
}; // end getData function

$('#clearForm').on('click', function(){
  console.log('clear click');
  $( '#numberX' ).val('');
  $( '#numberY' ).val('');
  $( '#outputDiv' ).html('Answer:' + ' ');
}); // end clearForm button click

}); // end doc ready
